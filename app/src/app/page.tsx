"use client";

import { useState } from "react";

const services = [
  {
    icon: "📝",
    title: "Déclarer mes revenus",
    description: "Accéder à ma déclaration et consulter mes informations.",
  },
  {
    icon: "💳",
    title: "Payer",
    description: "Consulter mes paiements et mes prochaines échéances.",
  },
  {
    icon: "📄",
    title: "Mes documents",
    description: "Retrouver mes avis et mes documents.",
  },
  {
    icon: "🏠",
    title: "Signaler un changement",
    description: "Adresse, situation familiale ou autre changement.",
  },
  {
    icon: "🧮",
    title: "Faire une simulation",
    description: "Réaliser une estimation avec des données fictives.",
  },
  {
    icon: "🔎",
    title: "Suivre une demande",
    description: "Consulter l'avancement de mes démarches.",
  },
];

const situations = [
  "Je déménage",
  "Ma situation familiale change",
  "Je pars à l'étranger",
  "Je débute mon activité",
];

export default function Home() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">

      {/* Bandeau démonstration */}
      <div className="bg-amber-100 border-b border-amber-300 px-4 py-3 text-center text-sm font-semibold text-amber-950">
        ⚠️ Démonstration IA — Aucun service fiscal réel — Ne saisissez aucune
        donnée personnelle réelle
      </div>

      {/* Navigation */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div>
            <div className="text-2xl font-bold text-blue-950">
              Portail Fiscal IA
            </div>

            <div className="text-xs text-slate-500">
              Portail fictif de démonstration
            </div>
          </div>

          <nav className="hidden gap-7 text-sm font-medium md:flex">
            <a href="#" className="text-blue-900">
              Accueil
            </a>

            <a href="#demarches" className="hover:text-blue-700">
              Mes démarches
            </a>

            <a href="#situations" className="hover:text-blue-700">
              Ma situation
            </a>

            <a href="#aide" className="hover:text-blue-700">
              Aide
            </a>
          </nav>

          <button className="rounded-lg bg-blue-950 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-800">
            Mon espace
          </button>

        </div>
      </header>

      {/* Hero */}
      <section className="bg-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-20">

          <p className="mb-4 font-semibold text-blue-200">
            Votre espace de services
          </p>

          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Bienvenue sur votre portail fiscal intelligent
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Effectuez vos démarches, trouvez rapidement une information et
            obtenez de l'aide grâce à nos services numériques.
          </p>

          <div className="mt-10 flex max-w-2xl overflow-hidden rounded-xl bg-white shadow-xl">

            <input
              className="min-w-0 flex-1 px-5 py-4 text-slate-900 outline-none"
              placeholder="Quelle démarche souhaitez-vous effectuer ?"
            />

            <button className="bg-blue-700 px-6 font-semibold text-white hover:bg-blue-600">
              Rechercher
            </button>

          </div>

        </div>
      </section>

      {/* Démarches */}
      <section
        id="demarches"
        className="mx-auto max-w-7xl px-6 py-16"
      >

        <p className="font-semibold text-blue-700">
          Accès rapide
        </p>

        <h2 className="mt-2 text-3xl font-bold">
          Vos démarches principales
        </h2>

        <p className="mt-3 text-slate-600">
          Retrouvez rapidement les services dont vous avez besoin.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

          {services.map((service) => (
            <button
              key={service.title}
              className="rounded-xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
            >

              <div className="text-3xl">
                {service.icon}
              </div>

              <h3 className="mt-5 text-lg font-bold text-blue-950">
                {service.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-600">
                {service.description}
              </p>

              <div className="mt-5 font-semibold text-blue-700">
                Accéder →
              </div>

            </button>
          ))}

        </div>
      </section>

      {/* Situations */}
      <section id="situations" className="bg-blue-50">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <h2 className="text-3xl font-bold text-blue-950">
            Votre situation a changé ?
          </h2>

          <p className="mt-3 text-slate-600">
            Découvrez les démarches correspondant à votre situation.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">

            {situations.map((situation) => (
              <button
                key={situation}
                className="rounded-xl border border-blue-100 bg-white p-5 text-left font-semibold text-blue-950 shadow-sm hover:border-blue-400"
              >

                {situation}

                <span className="mt-4 block text-blue-600">
                  Découvrir →
                </span>

              </button>
            ))}

          </div>

        </div>
      </section>

      {/* Information + FAQ */}
      <section
        id="aide"
        className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-2"
      >

        <div>

          <p className="font-semibold text-blue-700">
            Actualités
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Informations et échéances
          </h2>

          <div className="mt-7 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

            <span className="rounded bg-slate-100 px-3 py-1 text-xs font-bold uppercase">
              Information fictive
            </span>

            <h3 className="mt-4 text-lg font-bold">
              Votre calendrier de démonstration
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              Cette zone présentera les prochaines échéances et informations
              utiles dans notre environnement de démonstration.
            </p>

          </div>

        </div>

        <div>

          <p className="font-semibold text-blue-700">
            Besoin d'aide ?
          </p>

          <h2 className="mt-2 text-3xl font-bold">
            Questions fréquentes
          </h2>

          <div className="mt-7 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">

            {[
              "Comment modifier mon adresse ?",
              "Comment retrouver un document ?",
              "Comment suivre une demande ?",
              "Comment obtenir de l'aide ?",
            ].map((question) => (

              <details key={question} className="p-5">

                <summary className="cursor-pointer font-semibold text-blue-950">
                  {question}
                </summary>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Il s'agit d'une réponse fictive utilisée uniquement pour
                  cette démonstration.
                </p>

              </details>

            ))}

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white">

        <div className="mx-auto max-w-7xl px-6 py-10">

          <div className="text-xl font-bold">
            Portail Fiscal IA
          </div>

          <p className="mt-3 max-w-2xl text-sm text-slate-300">
            Application fictive créée exclusivement à des fins de démonstration
            technologique. Ce portail n'est associé à aucune administration.
          </p>

        </div>

      </footer>

      {/* Assistant */}
      <button
        onClick={() => setAssistantOpen(true)}
        className="fixed bottom-6 right-6 rounded-full bg-blue-700 px-6 py-4 font-bold text-white shadow-xl hover:bg-blue-600"
      >
        ✨ Assistant IA
      </button>

      {assistantOpen && (

        <div className="fixed bottom-24 right-6 w-[calc(100%-3rem)] max-w-sm rounded-xl border border-slate-200 bg-white p-6 shadow-2xl">

          <div className="flex justify-between">

            <div>
              <p className="font-bold text-blue-950">
                Assistant IA
              </p>

              <p className="text-xs text-slate-500">
                Démonstration
              </p>
            </div>

            <button
              onClick={() => setAssistantOpen(false)}
              className="text-xl text-slate-500"
            >
              ×
            </button>

          </div>

          <div className="mt-5 rounded-lg bg-blue-50 p-4 text-sm leading-6 text-slate-700">
            👋 Bonjour !
            <br /><br />
            L'assistant IA sera prochainement connecté à OpenCloud AI Gateway.
          </div>

          <input
            disabled
            placeholder="Posez votre question..."
            className="mt-4 w-full rounded-lg border border-slate-200 bg-slate-100 px-4 py-3"
          />

        </div>

      )}

    </main>
  );
}