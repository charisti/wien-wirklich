"use client";

import { useEffect, useMemo, useState } from "react";
import { useFilterAendern } from "@/lib/useFilterAendern";

// Feste, brandeigene Tönung für die Kategorie-Kacheln, rotierend nach Index —
// bewusst keine neuen Farben, nur bestehende Tokens in geringer Deckkraft.
const KACHEL_TOENE = ["bg-brick/10", "bg-moss/10", "bg-ink/10", "bg-rule/40"];

function mischen<T>(liste: T[]): T[] {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

type Kategorie = { name: string; anzahl: number };

export default function KategorieKachelnClient({
  kategorien,
  aktiveKategorie,
}: {
  kategorien: Kategorie[];
  aktiveKategorie: string | null;
}) {
  const filterAendern = useFilterAendern();

  const kategorienSortiert = useMemo(
    () => [...kategorien].sort((a, b) => a.name.localeCompare(b.name, "de")),
    [kategorien]
  );
  // Server und erster Client-Render müssen identisch sein (sonst Hydration-
  // Fehler), daher zunächst eine deterministische Reihenfolge zeigen und erst
  // nach dem Mounten im Browser zufällig mischen.
  const [kategorieKacheln, setKategorieKacheln] = useState(() =>
    kategorienSortiert.slice(0, 12)
  );
  useEffect(() => {
    setKategorieKacheln(mischen(kategorien).slice(0, 12));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [kategorien]);

  if (kategorieKacheln.length === 0) return null;

  return (
    <div className="mb-10">
      <h2 className="font-mono text-xs uppercase tracking-wide text-ink/40 mb-3">
        Nach Kategorie entdecken
      </h2>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
        {kategorieKacheln.map(({ name, anzahl }, i) => {
          const aktiv = aktiveKategorie === name;
          // 6 Kacheln immer sichtbar (Handy: 3x2), ab md 8 (4x2), ab lg alle
          // 12 (6x2, z.B. MacBook Air).
          const sichtbarkeit =
            i < 6 ? "" : i < 8 ? "hidden md:block" : "hidden lg:block";
          return (
            <button
              key={name}
              onClick={() =>
                filterAendern({
                  kategorie: aktiv ? null : name,
                  seite: null,
                })
              }
              className={`group text-left border transition-colors ${sichtbarkeit} ${
                aktiv ? "border-brick" : "border-rule hover:border-brick/60"
              }`}
            >
              <div
                className={`aspect-[4/3] flex items-center justify-center ${
                  KACHEL_TOENE[i % KACHEL_TOENE.length]
                }`}
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-ink/25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="1" />
                  <circle cx="8.5" cy="9" r="1.5" />
                  <path d="M3 16l5-5 4 4 3-3 6 6" />
                </svg>
              </div>
              <div className="px-2.5 py-2 bg-card">
                <p className="font-serif text-sm text-ink leading-snug line-clamp-2 min-h-[2.5rem]">
                  {name}
                </p>
                <p className="font-mono text-[10px] text-ink/40 mt-0.5">
                  {anzahl} {anzahl === 1 ? "Wort" : "Wörter"}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
