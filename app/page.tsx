import { Suspense } from "react";
import {
  getWoerterSeite,
  getKategorienMitAnzahl,
  getVorhandeneBuchstaben,
} from "@/lib/data";
import Bildplatzhalter from "./Bildplatzhalter";
import KategorieKachelnClient from "./KategorieKachelnClient";
import WortlisteClient from "./WortlisteClient";

const PRO_SEITE = 50;

export default async function Home({
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

  const [{ items, gesamt }, kategorien, vorhandeneBuchstaben] =
    await Promise.all([
      getWoerterSeite({
        query: searchParams.q,
        kategorie: searchParams.kategorie,
        buchstabe: searchParams.buchstabe,
        seite,
        proSeite: PRO_SEITE,
      }),
      getKategorienMitAnzahl(),
      getVorhandeneBuchstaben(),
    ]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <Bildplatzhalter aspect="aspect-[21/6]" className="mb-10" />

      <div className="mb-10">
        <h1 className="font-serif text-2xl text-ink mb-3">
          Willkommen bei der größten Wienerisch-Deutsch-Schatztruhe aller
          Zeiten!
        </h1>
        <p className="text-ink/70">
          Tauchen Sie ein in die faszinierende Welt des Wienerischen – einer
          Sprache voller Charme, Witz und Tiefgang, die weit mehr ist als nur
          ein Dialekt. Mit dem umfassendsten Wienerisch-Deutsch/Deutsch-
          Wienerisch Online-Wörterbuch erwartet Sie ein sprachliches
          Abenteuer, das die Essenz Wiens einfängt und erlebbar macht.
        </p>
      </div>

      <Suspense fallback={null}>
        <KategorieKachelnClient
          kategorien={kategorien}
          aktiveKategorie={searchParams.kategorie ?? null}
        />

        <WortlisteClient
          items={items}
          gesamt={gesamt}
          seite={seite}
          proSeite={PRO_SEITE}
          vorhandeneBuchstaben={vorhandeneBuchstaben}
          anfangsQuery={searchParams.q ?? ""}
          aktiveKategorie={searchParams.kategorie ?? null}
          aktiverBuchstabe={searchParams.buchstabe ?? null}
        />
      </Suspense>
    </div>
  );
}
