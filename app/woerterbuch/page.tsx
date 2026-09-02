import { Suspense } from "react";
import { getWoerterSeite, getVorhandeneBuchstaben } from "@/lib/data";
import WortlisteClient from "../WortlisteClient";

const PRO_SEITE = 50;

export default async function WoerterbuchSeite({
  searchParams,
}: {
  searchParams: {
    q?: string;
    kategorie?: string;
    buchstabe?: string;
    seite?: string;
  };
}) {
  const seite = Math.max(1, parseInt(searchParams.seite ?? "1", 10) || 1);

  const [{ items, gesamt }, vorhandeneBuchstaben] = await Promise.all([
    getWoerterSeite({
      query: searchParams.q,
      kategorie: searchParams.kategorie,
      buchstabe: searchParams.buchstabe,
      seite,
      proSeite: PRO_SEITE,
    }),
    getVorhandeneBuchstaben(),
  ]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Suspense fallback={null}>
        <WortlisteClient
          items={items}
          gesamt={gesamt}
          seite={seite}
          proSeite={PRO_SEITE}
          vorhandeneBuchstaben={vorhandeneBuchstaben}
          anfangsQuery={searchParams.q ?? ""}
          aktiveKategorie={searchParams.kategorie ?? null}
          aktiverBuchstabe={searchParams.buchstabe ?? null}
          unterSuche={
            <div className="flex justify-center gap-3 mb-10">
              <a
                href="/vokabeltrainer#start"
                className="bg-brick text-card px-5 py-2.5 text-sm hover:bg-ink transition-colors"
              >
                Vokabeltrainer
              </a>
              <a
                href="/quiz/spielen"
                className="bg-brick text-card px-5 py-2.5 text-sm hover:bg-ink transition-colors"
              >
                Wortquizzen
              </a>
            </div>
          }
        />
      </Suspense>
    </div>
  );
}
