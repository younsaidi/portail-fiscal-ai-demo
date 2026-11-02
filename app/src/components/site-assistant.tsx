"use client";

import { useRef, useState } from "react";
import type { FormEvent } from "react";

type Message = {
  id: number;
  role: "user" | "assistant";
  content: string;
};

const MAX_QUESTION_LENGTH = 2000;

export function SiteAssistant() {
  const [assistantOpen, setAssistantOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [question, setQuestion] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const requestInFlight = useRef(false);
  const nextMessageId = useRef(0);

  async function sendQuestion(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || trimmedQuestion.length > MAX_QUESTION_LENGTH) {
      setError(
        trimmedQuestion
          ? `Votre question ne peut pas dépasser ${MAX_QUESTION_LENGTH} caractères.`
          : "Saisissez une question avant de l'envoyer.",
      );
      return;
    }

    if (requestInFlight.current) {
      return;
    }

    requestInFlight.current = true;
    setIsLoading(true);
    setError("");
    setQuestion("");
    setMessages((current) => [
      ...current,
      {
        id: nextMessageId.current++,
        role: "user",
        content: trimmedQuestion,
      },
    ]);

    try {
      const response = await fetch("/api/assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmedQuestion }),
      });
      const result: unknown = await response.json();

      if (
        !response.ok ||
        typeof result !== "object" ||
        result === null ||
        !("answer" in result) ||
        typeof result.answer !== "string"
      ) {
        const message =
          typeof result === "object" &&
          result !== null &&
          "error" in result &&
          typeof result.error === "string"
            ? result.error
            : "Une erreur est survenue. Veuillez réessayer.";
        throw new Error(message);
      }

      setMessages((current) => [
        ...current,
        {
          id: nextMessageId.current++,
          role: "assistant",
          content: result.answer,
        },
      ]);
    } catch (requestError) {
      setError(
        requestError instanceof Error && requestError.message.length < 300
          ? requestError.message
          : "Impossible de contacter l'assistant. Veuillez réessayer.",
      );
    } finally {
      requestInFlight.current = false;
      setIsLoading(false);
    }
  }

  return (
    <>
      {assistantOpen && (
        <aside
          aria-label="Assistant IA"
          className="fixed bottom-20 right-4 z-10 flex max-h-[75vh] w-[calc(100%-2rem)] max-w-sm flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-2xl sm:bottom-24 sm:right-6"
        >
          <div className="flex items-center justify-between border-b border-slate-200 p-4">
            <h2 className="font-bold text-blue-950">Assistant IA</h2>
            <button
              type="button"
              onClick={() => setAssistantOpen(false)}
              aria-label="Fermer l'assistant IA"
              className="rounded px-2 text-xl leading-none text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-800"
            >
              ×
            </button>
          </div>
          <p className="bg-amber-50 px-4 py-3 text-xs leading-5 text-amber-950">
            Assistant de démonstration — Ne saisissez aucune donnée personnelle
            réelle.
          </p>
          <div
            aria-live="polite"
            aria-relevant="additions text"
            className="min-h-24 flex-1 space-y-3 overflow-y-auto p-4"
          >
            {messages.length === 0 && (
              <p className="text-sm leading-6 text-slate-600">
                Posez une question pour commencer.
              </p>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`max-w-[90%] whitespace-pre-wrap rounded-lg p-3 text-sm leading-6 ${
                  message.role === "user"
                    ? "ml-auto bg-blue-800 text-white"
                    : "mr-auto bg-slate-100 text-slate-800"
                }`}
              >
                <p className="mb-1 text-xs font-semibold opacity-75">
                  {message.role === "user" ? "Vous" : "Assistant"}
                </p>
                {message.content}
              </div>
            ))}
            {isLoading && (
              <p role="status" className="text-sm text-slate-600">
                L&apos;assistant prépare une réponse…
              </p>
            )}
          </div>
          <form
            onSubmit={sendQuestion}
            className="border-t border-slate-200 p-4"
          >
            {error && (
              <p role="alert" className="mb-3 text-sm text-red-700">
                {error}
              </p>
            )}
            <label
              htmlFor="assistant-question"
              className="sr-only"
            >
              Votre question
            </label>
            <textarea
              id="assistant-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              maxLength={MAX_QUESTION_LENGTH + 1}
              rows={2}
              disabled={isLoading}
              placeholder="Écrivez votre question…"
              className="w-full resize-y rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-900 placeholder:text-slate-500 focus-visible:outline-2 focus-visible:outline-blue-800 disabled:bg-slate-100"
            />
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="text-xs text-slate-500">
                {question.length}/{MAX_QUESTION_LENGTH}
              </span>
              <button
                type="submit"
                disabled={isLoading || !question.trim()}
                className="rounded-lg bg-blue-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? "Envoi…" : "Envoyer"}
              </button>
            </div>
          </form>
        </aside>
      )}
      <button
        type="button"
        aria-expanded={assistantOpen}
        onClick={() => setAssistantOpen((open) => !open)}
        className="fixed bottom-5 right-4 z-20 rounded-full bg-blue-800 px-5 py-3 font-bold text-white shadow-xl transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-950 sm:bottom-6 sm:right-6"
      >
        Assistant IA
      </button>
    </>
  );
}
