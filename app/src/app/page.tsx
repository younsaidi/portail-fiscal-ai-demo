import Link from "next/link";
import { demarches } from "@/lib/demarches";

const situations = [
  { title: "Je déménage", href: "/situation#changement-adresse" },
  { title: "Ma situation familiale change", href: "/situation#situation-familiale" },
  { title: "Je pars à l'étranger", href: "/situation#depart-etranger" },
  { title: "Je débute mon activité", href: "/situation#activite" },
];

export default function Home() {
  return (
    <main>
      <section className="bg-blue-950 text-white">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
          <p className="mb-4 font-semibold text-blue-200">
            Votre espace de services fictif
          </p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            Bienvenue sur le Portail Fiscal IA
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-blue-100">
            Explorez un parcours de démonstration et découvrez des exemples de
            démarches numériques. Toutes les informations présentées sont
            fictives.
          </p>
          <Link
            href="/demarches"
            className="mt-8 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-blue-950 transition hover:bg-blue-50 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Découvrir les démarches
          </Link>
        </div>
      </section>

      <section id="demarches" className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
        <p className="font-semibold text-blue-700">Accès rapide</p>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-slate-950">
              Vos démarches principales
            </h2>
            <p className="mt-3 text-slate-600">
              Choisissez un parcours de démonstration pour en savoir plus.
            </p>
          </div>
          <Link
            href="/demarches"
            className="font-semibold text-blue-800 underline-offset-4 hover:underline"
          >
            Toutes les démarches <span aria-hidden="true">→</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {demarches.map((demarche) => (
            <Link
              key={demarche.slug}
              href={`/demarches/${demarche.slug}`}
              className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
            >
              <span className="text-3xl" aria-hidden="true">{demarche.icon}</span>
              <h3 className="mt-5 text-lg font-bold text-blue-950 group-hover:text-blue-700">
                {demarche.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {demarche.description}
              </p>
              <span className="mt-5 block font-semibold text-blue-700">
                Consulter le parcours <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section id="situations" className="bg-blue-50">
        <div className="mx-auto max-w-7xl px-6 py-14 sm:py-16">
          <h2 className="text-3xl font-bold text-blue-950">
            Votre situation a changé ?
          </h2>
          <p className="mt-3 text-slate-600">
            Consultez les exemples de démarches proposés dans cette maquette.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {situations.map((situation) => (
              <Link
                key={situation.title}
                href={situation.href}
                className="rounded-xl border border-blue-100 bg-white p-5 font-semibold text-blue-950 shadow-sm transition hover:border-blue-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
              >
                {situation.title}
                <span className="mt-4 block text-blue-600">
                  Découvrir <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="aide" className="mx-auto grid max-w-7xl gap-12 px-6 py-14 sm:py-16 lg:grid-cols-2">
        <div>
          <p className="font-semibold text-blue-700">Information fictive</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Informations et échéances
          </h2>
          <div className="mt-7 rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <span className="rounded bg-slate-100 px-3 py-1 text-xs font-bold uppercase text-slate-700">
              Exemple de démonstration
            </span>
            <h3 className="mt-4 text-lg font-bold text-blue-950">
              Un calendrier entièrement fictif
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Cette maquette ne présente aucune échéance ou information fiscale
              réelle.
            </p>
          </div>
        </div>

        <div>
          <p className="font-semibold text-blue-700">Besoin d&apos;aide ?</p>
          <h2 className="mt-2 text-3xl font-bold text-slate-950">
            Questions fréquentes
          </h2>
          <div className="mt-7 divide-y divide-slate-200 rounded-xl border border-slate-200 bg-white">
            {[
              "Comment modifier une adresse dans la démonstration ?",
              "Où consulter les documents fictifs ?",
              "Comment suivre un exemple de demande ?",
            ].map((question) => (
              <details key={question} className="p-5">
                <summary className="cursor-pointer font-semibold text-blue-950 focus-visible:outline-2 focus-visible:outline-blue-800">
                  {question}
                </summary>
                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Ce parcours est un exemple fictif; aucune démarche réelle
                  n&apos;est transmise.
                </p>
              </details>
            ))}
          </div>
          <Link
            href="/aide"
            className="mt-5 inline-block font-semibold text-blue-800 underline-offset-4 hover:underline"
          >
            Accéder à l&apos;aide <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
