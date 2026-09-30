import Link from "next/link";
import Bildplatzhalter from "../../Bildplatzhalter";
import { getVeroeffentlichteGastbeitraege } from "@/lib/data";

export default async function AktuelleGastbeitraegeSeite() {
  const beitraege = await getVeroeffentlichteGastbeitraege();

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Gastbeiträge
      </p>
      <h1 className="font-serif text-3xl text-ink mb-3">
        Die aktuellen Gastbeiträge
      </h1>
      <p className="text-ink/70 leading-relaxed mb-8">
        Geschichten, Anekdoten und Wortbetrachtungen von Wienerinnen und
        Wienern, die ihren Schmäh mit uns geteilt haben.
      </p>

      <Bildplatzhalter label="Bild: Wiener Kaffeehaus" className="mb-10" />

      {beitraege.length === 0 ? (
        <p className="text-ink/50 italic border-t border-rule pt-8">
          Noch keine Gastbeiträge veröffentlicht — sei die oder der Erste und
          schick uns deine Geschichte!
        </p>
      ) : (
        <ol className="flex flex-col gap-10">
          {beitraege.map((beitrag, i) => (
            <li key={beitrag.id} className="border-t border-rule pt-8">
              <div className="flex gap-4">
                <div className="w-12 shrink-0">
                  <Bildplatzhalter
                    aspect="aspect-square"
                    label={`${i + 1}`}
                    className="text-[10px]"
                  />
                </div>
                <div className="min-w-0">
                  <h2 className="font-serif text-xl text-ink leading-snug">
                    {beitrag.titel}
                  </h2>
                  {beitrag.name && (
                    <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mt-1 mb-4">
                      von {beitrag.name}
                    </p>
                  )}
                  <p className="text-ink/80 leading-relaxed whitespace-pre-line">
                    {beitrag.beitrag}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}

      <div className="mt-12 border-t-2 border-brick pt-8">
        <h2 className="font-serif text-xl text-ink mb-2">
          Einladung zum Mitmachen
        </h2>
        <p className="text-ink/80 leading-relaxed mb-6">
          Hast du auch Geschichten, Worte oder Momente, die den Wiener
          Dialekt und das Lebensgefühl einfangen? Schick uns deinen Beitrag!
          Egal, ob es um einen Schmäh, eine grantige Begegnung oder eine
          sprachliche Besonderheit geht – jede Anekdote ist willkommen. Mach
          mit und verewige deinen Wiener Schmäh!
        </p>
        <Link
          href="/gastbeitraege"
          className="inline-block bg-brick text-card px-6 py-3 text-sm hover:bg-ink transition-colors"
        >
          Eigenen Gastbeitrag einreichen
        </Link>
      </div>
    </div>
  );
}
