import Link from "next/link";
import { demarches } from "@/lib/demarches";

export default function DemarchesPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="font-semibold text-blue-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        <span aria-hidden="true">←</span> Retour à l&apos;accueil
      </Link>
      <p className="mt-8 font-semibold text-blue-700">Parcours de démonstration</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
        Mes démarches
      </h1>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        Sélectionnez une rubrique pour découvrir son parcours fictif. Aucune
        démarche réelle n&apos;est effectuée et aucune donnée personnelle ne doit
        être saisie.
      </p>
      <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {demarches.map((demarche) => (
          <Link
            key={demarche.slug}
            href={`/demarches/${demarche.slug}`}
            className="group rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
          >
            <span className="text-3xl" aria-hidden="true">{demarche.icon}</span>
            <h2 className="mt-5 text-lg font-bold text-blue-950 group-hover:text-blue-700">
              {demarche.title}
            </h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              {demarche.description}
            </p>
            <span className="mt-5 block font-semibold text-blue-700">
              Ouvrir le parcours <span aria-hidden="true">→</span>
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
