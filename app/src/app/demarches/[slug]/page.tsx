import Link from "next/link";
import { notFound } from "next/navigation";
import { demarches } from "@/lib/demarches";

export function generateStaticParams() {
  return demarches.map((demarche) => ({ slug: demarche.slug }));
}

export default async function DemarcheDetailPage({
  params,
}: PageProps<"/demarches/[slug]">) {
  const { slug } = await params;
  const demarche = demarches.find((item) => item.slug === slug);

  if (!demarche) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <Link
        href="/demarches"
        className="font-semibold text-blue-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        <span aria-hidden="true">←</span> Retour aux démarches
      </Link>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-9">
        <span className="text-4xl" aria-hidden="true">{demarche.icon}</span>
        <p className="mt-5 font-semibold text-blue-700">
          Parcours fictif de démonstration
        </p>
        <h1 className="mt-2 text-3xl font-bold text-blue-950 sm:text-4xl">
          {demarche.title}
        </h1>
        <p className="mt-5 leading-7 text-slate-700">
          {demarche.introduction}
        </p>
        <h2 className="mt-8 text-xl font-bold text-slate-950">
          Étapes de l&apos;exemple
        </h2>
        <ol className="mt-4 space-y-3">
          {demarche.steps.map((step, index) => (
            <li
              key={step}
              className="flex gap-3 rounded-lg bg-slate-50 p-4 text-slate-700"
            >
              <span className="font-bold text-blue-800">{index + 1}.</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <p className="mt-6 rounded-lg border border-amber-300 bg-amber-50 p-4 text-sm leading-6 text-amber-950">
          Exemple fictif uniquement : ce site n&apos;est pas officiel et ne peut
          effectuer aucune opération fiscale.
        </p>
        <Link
          href="/demarches"
          className="mt-7 inline-flex rounded-lg bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Revenir à toutes les démarches
        </Link>
      </section>
    </main>
  );
}
