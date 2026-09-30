import { Suspense } from "react";
import { getWoerterSeite, getVorhandeneBuchstaben } from "@/lib/data";
import WortlisteClient from "../WortlisteClient";
import VokabeltrainerButton from "../VokabeltrainerButton";
import QuizButton from "../QuizButton";
import { VokabeltrainerIcon, WortquizzenIcon } from "../CtaIcons";

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
      nurEinzelbegriffe: true,
    }),
    getVorhandeneBuchstaben(true),
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
          hinweis="Hier siehst du vorerst nur Einzelbegriffe – Redewendungen und Sprüche folgen bald."
          unterSuche={
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mx-auto mb-10">
              <VokabeltrainerButton className="group flex-1 flex items-center justify-center gap-3 rounded-2xl bg-turkis knopf-gradient text-card px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
                <VokabeltrainerIcon />
                <span className="font-serif text-lg">Vokabeltrainer</span>
              </VokabeltrainerButton>
              <QuizButton className="group flex-1 flex items-center justify-center gap-3 rounded-2xl bg-brick knopf-gradient text-card px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
                <WortquizzenIcon />
                <span className="font-serif text-lg">Wortquizzen</span>
              </QuizButton>
            </div>
          }
        />
      </Suspense>
    </div>
  );
}
