"use client";

import { useEffect, useMemo, useState, type ReactNode } from "react";
import Link from "next/link";
import type { Wort } from "@/lib/types";
import { useFilterAendern } from "@/lib/useFilterAendern";

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

type Vorschlag = Pick<Wort, "slug" | "wort" | "artikel" | "definition">;

export default function WortlisteClient({
  items,
  gesamt,
  seite,
  proSeite,
  vorhandeneBuchstaben,
  anfangsQuery,
  aktiveKategorie,
  aktiverBuchstabe,
  unterSuche,
}: {
  items: Wort[];
  gesamt: number;
  seite: number;
  proSeite: number;
  vorhandeneBuchstaben: string[];
  anfangsQuery: string;
  aktiveKategorie: string | null;
  aktiverBuchstabe: string | null;
  /** Optionaler Inhalt direkt unter dem Suchfeld (z.B. CTA-Buttons). */
  unterSuche?: ReactNode;
}) {
  const filterAendern = useFilterAendern();
  const [query, setQuery] = useState(anfangsQuery);
  const [vorschlaege, setVorschlaege] = useState<Vorschlag[]>([]);
  const [vorschlaegeOffen, setVorschlaegeOffen] = useState(false);

  // Sofortige Vorschläge (Dropdown) über eine schlanke API-Route, ohne die
  // Seite neu zu laden — fühlt sich beim Tippen an wie Autocomplete.
  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setVorschlaege([]);
      return;
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      fetch(`/api/suche?q=${encodeURIComponent(q)}`, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((daten: Vorschlag[]) => setVorschlaege(daten))
        .catch(() => {});
    }, 120);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  // Sucheingabe entprellt an die URL weiterreichen, damit die volle
  // Ergebnisliste unten mitzieht (die Serversuche soll nicht bei jedem
  // Tastendruck neu laden).
  useEffect(() => {
    if (query === anfangsQuery) return;
    const timeout = setTimeout(() => {
      filterAendern({ q: query || null, seite: null });
    }, 350);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  const vorhandeneBuchstabenSet = useMemo(
    () => new Set(vorhandeneBuchstaben),
    [vorhandeneBuchstaben]
  );

  const gesamtSeiten = Math.max(1, Math.ceil(gesamt / proSeite));
  const guideWords =
    items.length > 0
      ? `${items[0].wort} – ${items[items.length - 1].wort}`
      : null;

  return (
    <div>
      <div className="mb-6 relative max-w-[720px]">
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setVorschlaegeOffen(true);
          }}
          onFocus={() => setVorschlaegeOffen(true)}
          onBlur={() => {
            // Kurze Verzögerung, damit ein Klick auf einen Vorschlag noch
            // registriert wird, bevor das Dropdown verschwindet.
            setTimeout(() => setVorschlaegeOffen(false), 150);
          }}
          placeholder="Wort oder Bedeutung suchen…"
          className="w-full bg-card border border-rule px-4 py-3 font-serif text-lg text-ink placeholder:text-ink/40 focus:border-brick transition-colors"
        />
        {vorschlaegeOffen && query.trim() && vorschlaege.length > 0 && (
          <ul className="absolute z-10 top-full left-0 right-0 mt-1 bg-card border border-rule shadow-lg max-h-96 overflow-y-auto">
            {vorschlaege.map((v) => (
              <li key={v.slug}>
                <Link
                  href={`/wort/${v.slug}`}
                  className="flex items-baseline gap-3 px-4 py-2.5 hover:bg-paper transition-colors"
                >
                  <span className="font-serif text-ink">
                    {v.artikel ? `${v.artikel} ` : ""}
                    {v.wort}
                  </span>
                  <span className="text-sm text-ink/60 truncate">
                    {v.definition}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      {unterSuche}

      {aktiveKategorie && (
        <div className="mb-6 mt-6">
          <button
            onClick={() => filterAendern({ kategorie: null, seite: null })}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-wide text-brick border border-brick/30 bg-brick/5 px-2.5 py-1 hover:bg-brick/10 transition-colors"
          >
            {aktiveKategorie}
            <span aria-hidden>✕</span>
          </button>
        </div>
      )}

      <div className="flex gap-8">
        <aside className="hidden sm:flex flex-col gap-1 pt-1 shrink-0">
          {ALPHABET.map((buchstabe) => {
            const vorhanden = vorhandeneBuchstabenSet.has(buchstabe);
            const aktiv = aktiverBuchstabe === buchstabe;
            return (
              <button
                key={buchstabe}
                disabled={!vorhanden}
                onClick={() =>
                  filterAendern({
                    buchstabe: aktiv ? null : buchstabe,
                    seite: null,
                  })
                }
                className={`text-xs w-6 text-left transition-colors ${
                  aktiv
                    ? "text-brick font-semibold"
                    : vorhanden
                    ? "text-ink/60 hover:text-brick"
                    : "text-ink/20 cursor-default"
                }`}
              >
                {buchstabe}
              </button>
            );
          })}
        </aside>

        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-4 border-b border-rule pb-2 mb-4">
            {guideWords ? (
              <span className="text-xs uppercase tracking-wide text-ink/40">
                {guideWords}
              </span>
            ) : (
              <span />
            )}
            <span className="text-xs text-ink/40 shrink-0">
              {gesamt.toLocaleString("de-AT")} Treffer
            </span>
          </div>

          {items.length === 0 && (
            <p className="text-ink/50 italic">
              Kein Wort gefunden. Versuch es mit einem anderen Suchbegriff.
            </p>
          )}

          <ul className="divide-y divide-rule">
            {items.map((w) => (
              <li key={w.slug}>
                <Link
                  href={`/wort/${w.slug}`}
                  className="group flex items-baseline gap-3 py-4 hover:bg-card/60 transition-colors -mx-2 px-2"
                >
                  <span className="font-serif text-xl text-ink group-hover:text-brick transition-colors">
                    {w.artikel ? `${w.artikel} ` : ""}
                    {w.wort}
                  </span>
                  <span className="font-mono text-xs text-ink/40">
                    {w.wortart}
                  </span>
                  <span className="text-sm text-ink/60 truncate">
                    {w.definition}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          {gesamtSeiten > 1 && (
            <div className="flex items-center justify-between gap-4 mt-8 pt-4 border-t border-rule">
              <button
                disabled={seite <= 1}
                onClick={() => filterAendern({ seite: String(seite - 1) })}
                className="text-sm text-ink/60 hover:text-brick disabled:text-ink/20 disabled:cursor-default transition-colors"
              >
                ← Zurück
              </button>
              <span className="text-xs font-mono text-ink/40">
                Seite {seite} von {gesamtSeiten}
              </span>
              <button
                disabled={seite >= gesamtSeiten}
                onClick={() => filterAendern({ seite: String(seite + 1) })}
                className="text-sm text-ink/60 hover:text-brick disabled:text-ink/20 disabled:cursor-default transition-colors"
              >
                Weiter →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
