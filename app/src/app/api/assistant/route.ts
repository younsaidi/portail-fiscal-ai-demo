import { NextResponse } from "next/server";

const MAX_QUESTION_LENGTH = 2000;
const REQUEST_TIMEOUT_MS = 30_000;

const SYSTEM_PROMPT = `Tu es un assistant pour un portail fiscal entièrement fictif, créé uniquement comme démonstration technologique. Tu ne représentes aucune administration et ne prétends jamais effectuer de démarche réelle. Réponds en français par défaut, de façon claire, brève et pédagogique. Ne demande jamais de numéro fiscal, de mot de passe ni de coordonnées bancaires. N'invente aucune règle fiscale ou administrative; signale clairement les limites de tes informations et indique quand tu ne sais pas.`;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function errorResponse(message: string, status: number) {
  return NextResponse.json({ error: message }, { status });
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return errorResponse("La requête est invalide.", 400);
  }

  if (!isRecord(payload) || typeof payload.question !== "string") {
    return errorResponse("Saisissez une question valide.", 400);
  }

  const question = payload.question.trim();

  if (!question) {
    return errorResponse("Saisissez une question avant de l'envoyer.", 400);
  }

  if (question.length > MAX_QUESTION_LENGTH) {
    return errorResponse(
      `Votre question ne peut pas dépasser ${MAX_QUESTION_LENGTH} caractères.`,
      400,
    );
  }

  const baseUrl = process.env.OPENCLOUD_BASE_URL?.trim();
  const apiKey = process.env.OPENCLOUD_API_KEY?.trim();
  const model = process.env.OPENCLOUD_MODEL?.trim();

  if (!baseUrl || !apiKey || !model) {
    return errorResponse(
      "L'assistant est indisponible : sa configuration serveur est incomplète.",
      503,
    );
  }

  let endpoint: URL;

  try {
    const configuredBase = new URL(baseUrl);

    if (
      !["http:", "https:"].includes(configuredBase.protocol) ||
      configuredBase.username ||
      configuredBase.password ||
      configuredBase.search ||
      configuredBase.hash
    ) {
      return errorResponse(
        "L'assistant est indisponible : sa configuration serveur est invalide.",
        503,
      );
    }

    endpoint = new URL(
      `${configuredBase.toString().replace(/\/+$/, "")}/chat/completions`,
    );
  } catch {
    return errorResponse(
      "L'assistant est indisponible : sa configuration serveur est invalide.",
      503,
    );
  }

  try {
    const gatewayResponse = await fetch(endpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model,
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: question },
        ],
      }),
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
      cache: "no-store",
    });

    if (!gatewayResponse.ok) {
      console.error("OpenCloud assistant request failed", {
        status: gatewayResponse.status,
      });
      return errorResponse(
        "L'assistant ne peut pas répondre pour le moment. Veuillez réessayer.",
        502,
      );
    }

    const gatewayPayload: unknown = await gatewayResponse.json();
    const choices =
      isRecord(gatewayPayload) && Array.isArray(gatewayPayload.choices)
        ? gatewayPayload.choices
        : [];
    const firstChoice = choices[0];
    const message = isRecord(firstChoice) ? firstChoice.message : undefined;
    const answer =
      isRecord(message) && typeof message.content === "string"
        ? message.content.trim()
        : "";

    if (!answer) {
      console.error("OpenCloud assistant returned an invalid response");
      return errorResponse(
        "La réponse de l'assistant est indisponible. Veuillez réessayer.",
        502,
      );
    }

    return NextResponse.json({ answer });
  } catch {
    console.error("OpenCloud assistant request failed");
    return errorResponse(
      "Impossible de contacter l'assistant pour le moment. Veuillez réessayer.",
      502,
    );
  }
}
