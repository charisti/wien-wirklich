import Link from "next/link";
import { getKategorienMitAnzahl } from "@/lib/data";
import { ALLE_KATEGORIEN } from "@/lib/kategorien";
import Bildplatzhalter from "../Bildplatzhalter";

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
          <li key={kategorie}>
            <Link
              href={`/woerterbuch?kategorie=${encodeURIComponent(kategorie)}`}
              className="group flex items-center gap-4 py-3 -mx-2 px-2 hover:bg-card/60 transition-colors"
            >
              <div className="w-12 h-12 shrink-0 rounded-lg overflow-hidden">
                <Bildplatzhalter aspect="aspect-square" label="" />
              </div>
              <span className="flex-1 text-ink group-hover:text-brick transition-colors">
                <span className="font-mono text-xs text-ink/40 mr-3">
                  {i + 1}
                </span>
                {kategorie}
              </span>
              <span className="font-mono text-xs text-ink/40 shrink-0">
                {zaehler.get(kategorie) ?? 0} Wörter
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
