"use client";

import { useState } from "react";

export function SiteAssistant() {
  const [assistantOpen, setAssistantOpen] = useState(false);

  return (
    <>
      {assistantOpen && (
        <aside
          aria-label="Assistant IA"
          aria-live="polite"
          className="fixed bottom-24 right-4 z-10 w-[calc(100%-2rem)] max-w-sm rounded-xl border border-slate-200 bg-white p-5 shadow-2xl sm:right-6"
        >
          <div className="flex items-start justify-end gap-4">
            <button
              type="button"
              onClick={() => setAssistantOpen(false)}
              aria-label="Fermer l'assistant IA"
              className="rounded px-2 text-xl leading-none text-slate-600 hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-blue-800"
            >
              ×
            </button>
          </div>
          <p className="mt-4 rounded-lg bg-blue-50 p-4 text-sm leading-6 text-slate-700">
            Assistant IA bientôt disponible
          </p>
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
