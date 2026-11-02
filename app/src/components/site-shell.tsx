import Link from "next/link";
import type { ReactNode } from "react";
import { SiteAssistant } from "@/components/site-assistant";

const navigation = [
  { label: "Accueil", href: "/" },
  { label: "Mes démarches", href: "/demarches" },
  { label: "Ma situation", href: "/situation" },
  { label: "Aide", href: "/aide" },
  { label: "Mon espace", href: "/espace" },
];

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <>
      <div
        role="note"
        className="border-b border-amber-300 bg-amber-100 px-4 py-3 text-center text-sm font-semibold text-amber-950"
      >
        Démonstration fictive — aucun service fiscal réel — ne saisissez aucune
        donnée personnelle réelle.
      </div>

      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="shrink-0 rounded-sm text-blue-950 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
          >
            <span className="block text-2xl font-bold">Portail Fiscal IA</span>
            <span className="block text-xs text-slate-500">
              Site fictif de démonstration
            </span>
          </Link>

          <nav aria-label="Navigation principale">
            <ul className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="rounded-sm text-blue-950 underline-offset-4 hover:text-blue-700 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-800"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div className="flex-1">{children}</div>

      <footer className="bg-slate-900 text-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-9 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <Link
              href="/"
              className="text-xl font-bold underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            >
              Portail Fiscal IA
            </Link>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
              Application fictive créée exclusivement à des fins de
              démonstration. Elle n&apos;est associée à aucune administration et ne
              traite aucune démarche réelle.
            </p>
          </div>
          <Link
            href="/"
            className="shrink-0 font-semibold text-white underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </footer>

      <SiteAssistant />
    </>
  );
}
