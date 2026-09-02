import { getKategorienMitAnzahl } from "@/lib/data";
import { ALLE_KATEGORIEN } from "@/lib/kategorien";

export default async function KategorienSeite() {
  const kategorien = await getKategorienMitAnzahl();
  const zaehler = new Map(kategorien.map((k) => [k.name, k.anzahl]));

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="font-serif text-3xl text-ink mb-3">45 Kategorien</h1>
      <p className="text-ink/70 mb-8">
        Der gesamte Wortschatz gliedert sich in 45 Themenbereiche, von
        Grundwortschatz bis zu Wiener Sehenswürdigkeiten und Geschichte.
        Aktuell sind erst wenige Wörter je Kategorie eingepflegt.
      </p>
      <ol className="divide-y divide-rule sm:columns-2 sm:gap-x-10">
        {ALLE_KATEGORIEN.map((kategorie, i) => (
          <li
            key={kategorie}
            className="flex items-baseline justify-between gap-4 py-3"
          >
            <span className="text-ink">
              <span className="font-mono text-xs text-ink/40 mr-3">
                {i + 1}
              </span>
              {kategorie}
            </span>
            <span className="font-mono text-xs text-ink/40 shrink-0">
              {zaehler.get(kategorie) ?? 0} Wörter
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
