import Link from "next/link";

export default function EspacePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 sm:py-16">
      <Link
        href="/"
        className="font-semibold text-blue-800 underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-blue-800"
      >
        <span aria-hidden="true">←</span> Retour à l&apos;accueil
      </Link>
      <p className="mt-8 font-semibold text-blue-700">Aucun compte réel</p>
      <h1 className="mt-2 text-3xl font-bold text-slate-950 sm:text-4xl">
        Mon espace
      </h1>
      <section className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h2 className="text-xl font-bold text-blue-950">
          Espace personnel de démonstration
        </h2>
        <p className="mt-4 leading-7 text-slate-600">
          Cette maquette ne propose ni connexion ni authentification. Aucun
          compte ou dossier personnel n&apos;est créé. Vous pouvez explorer les
          exemples de démarches sans saisir d&apos;information.
        </p>
        <Link
          href="/demarches"
          className="mt-6 inline-flex rounded-lg bg-blue-950 px-5 py-3 font-semibold text-white transition hover:bg-blue-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-800"
        >
          Explorer les démarches fictives
        </Link>
      </section>
    </main>
  );
}
