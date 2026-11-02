import Link from "next/link";

const questions = [
  {
    question: "Ce portail est-il un site officiel ?",
    answer:
      "Non. C'est uniquement une maquette fictive de démonstration, sans lien avec une administration.",
  },
  {
    question: "Puis-je réaliser une démarche ici ?",
    answer:
      "Non. Les parcours sont des exemples et aucune opération réelle n'est possible.",
  },
  {
    question: "Quelles données dois-je saisir ?",
    answer:
      "Aucune. N'entrez jamais de donnée personnelle réelle dans cette démonstration.",
  },
  {
    question: "L'assistant IA peut-il répondre à mes questions ?",
    answer:
      "Pas encore. Le bouton affiche uniquement un message indiquant que l'assistant sera bientôt disponible.",
  },
];

export default function AidePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="font-semibold text-blue-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        <span aria-hidden="true">←</span> Retour à l&apos;accueil
      </Link>
      <p className="mt-8 font-semibold text-blue-700">Centre d&apos;aide fictif</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
        Aide et questions fréquentes
      </h1>
      <p className="mt-4 leading-7 text-slate-600">
        Les réponses ci-dessous concernent cette maquette de démonstration,
        uniquement.
      </p>
      <div className="mt-8 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
        {questions.map(({ question, answer }) => (
          <details key={question} className="p-5">
            <summary className="cursor-pointer font-semibold text-blue-950 focus-visible:outline-2 focus-visible:outline-blue-800">
              {question}
            </summary>
            <p className="mt-4 leading-6 text-slate-600">{answer}</p>
          </details>
        ))}
      </div>
      <Link
        href="/demarches"
        className="mt-8 inline-flex rounded-lg bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
      >
        Parcourir les démarches fictives
      </Link>
    </main>
  );
}
