import Link from "next/link";

const situations = [
  {
    id: "changement-adresse",
    title: "Je déménage",
    description:
      "Exemple de parcours pour découvrir où une adresse pourrait être mise à jour dans un service réel.",
    href: "/demarches/signaler-un-changement",
  },
  {
    id: "situation-familiale",
    title: "Ma situation familiale change",
    description:
      "Exemple de rubrique d'information sur les changements de situation familiale.",
    href: "/demarches/signaler-un-changement",
  },
  {
    id: "depart-etranger",
    title: "Je pars à l'étranger",
    description:
      "Repères fictifs pour illustrer un parcours lié à un départ à l'étranger.",
    href: "/demarches/signaler-un-changement",
  },
  {
    id: "activite",
    title: "Je débute mon activité",
    description:
      "Exemple d'informations qui pourraient accompagner une nouvelle activité.",
    href: "/demarches/declarer-mes-revenus",
  },
];

export default function SituationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="font-semibold text-blue-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        <span aria-hidden="true">←</span> Retour à l&apos;accueil
      </Link>
      <p className="mt-8 font-semibold text-blue-700">Espace fictif</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
        Ma situation
      </h1>
      <p className="mt-4 max-w-3xl leading-7 text-slate-600">
        Choisissez un exemple pour voir les démarches associées. Ces informations
        sont fictives et ne remplacent aucun conseil officiel.
      </p>
      <div className="mt-9 grid gap-5 sm:grid-cols-2">
        {situations.map((situation) => (
          <section
            key={situation.id}
            id={situation.id}
            className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
          >
            <h2 className="text-xl font-bold text-blue-950">
              {situation.title}
            </h2>
            <p className="mt-3 leading-6 text-slate-600">
              {situation.description}
            </p>
            <Link
              href={situation.href}
              className="mt-5 inline-block font-semibold text-blue-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-800"
            >
              Voir le parcours fictif <span aria-hidden="true">→</span>
            </Link>
          </section>
        ))}
      </div>
    </main>
  );
}
