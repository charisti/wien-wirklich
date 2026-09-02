import Link from "next/link";
import Bildplatzhalter from "../Bildplatzhalter";
import GastbeitragFormular from "./GastbeitragFormular";

export default function GastbeitraegeSeite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <div className="flex items-center justify-between gap-4 mb-3">
        <p className="font-mono text-xs uppercase tracking-wide text-brick">
          Gastbeiträge
        </p>
        <Link
          href="/gastbeitraege/aktuell"
          className="text-xs text-ink/60 hover:text-brick transition-colors whitespace-nowrap"
        >
          Aktuelle Gastbeiträge lesen →
        </Link>
      </div>
      <h1 className="font-serif text-3xl text-ink mb-8">
        Werde Gastautor – dein Wiener Schmäh im Rampenlicht
      </h1>

      <Bildplatzhalter label="Bild: Papa Kapazunda" className="mb-8" />

      <p className="text-ink/80 leading-relaxed">
        Hast du eine Geschichte, einen Gedanken oder eine schräge Anekdote,
        die den Wiener Dialekt, die Kultur oder das Lebensgefühl einfängt?
        Dann her damit! Papa Kapazundas Wörterbuch „Wienerisch Deutsch" ist
        nicht nur ein Nachschlagewerk, sondern auch ein Ort, an dem Wiener
        Künstler, Autoren, Historiker und Sprachliebhaber ihre Sicht auf die
        Stadt teilen können. Kurz gesagt: Deine Worte könnten bald Teil
        dieses einzigartigen Sprachprojekts werden.
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          Was ist ein Gastbeitrag?
        </h2>
        <p className="text-ink/80 leading-relaxed mb-4">
          Ein Gastbeitrag ist deine Bühne! Hier kannst du:
        </p>
        <ul className="flex flex-col gap-2 mb-4">
          {[
            "kuriose Redewendungen entlarven",
            "Wiener Sager in Szene setzen",
            "historische Hintergründe beleuchten",
            "oder einfach eine persönliche Geschichte erzählen, die deine Verbindung zum Wiener Schmäh zeigt",
          ].map((punkt) => (
            <li key={punkt} className="flex gap-3">
              <span className="text-brick shrink-0">•</span>
              <p className="text-ink/80 leading-relaxed">{punkt}</p>
            </li>
          ))}
        </ul>
        <p className="text-ink/70 leading-relaxed">
          Egal, ob du über den „gschupften Ferdl" schreibst, die
          Kaffeehauskultur feierst oder die Wiener Seele sezierst – dein
          Beitrag bereichert das Wörterbuch und inspiriert andere.
        </p>
      </section>

      <Bildplatzhalter label="Bild: Wiener Kaffeehaus" className="my-12" />

      <section>
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          So wird dein Schmäh veröffentlicht
        </h2>
        <ol className="flex flex-col gap-6">
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">01</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Schreib deinen Beitrag
              </p>
              <p className="text-ink/70 leading-relaxed">
                Keine Sorge, wir erwarten keine Dissertation. Dein Text kann
                witzig, poetisch oder analytisch sein – Hauptsache, er zeigt
                deine Leidenschaft für Wien und seine Sprache. Richtwert: 300
                bis 1.000 Wörter, aber wenn dir mehr einfällt, sagen wir
                sicher nicht „Na geh!".
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">02</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Schick ihn uns über das Formular
              </p>
              <p className="text-ink/70 leading-relaxed">
                Weiter unten auf dieser Seite findest du unser
                Einreichformular. Dort kannst du deinen Text direkt
                eintragen, und wir kümmern uns um den Rest: Dein Beitrag wird
                geprüft, liebevoll ins Layout eingebettet und – falls nötig –
                mit einem charmanten Kommentar von Papa Kapazunda versehen.
                Wenn dein Text passt, wird er veröffentlicht – mit deinem
                Namen, wenn du möchtest.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">03</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Dein Name auf der Gästeliste
              </p>
              <p className="text-ink/70 leading-relaxed">
                Natürlich kannst du dich als Autor verewigen lassen. Oder du
                bleibst anonym – ganz wie du willst. Hauptsache, dein Beitrag
                bringt die Leser zum Lachen, Staunen oder Nachdenken.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-3">Warum mitmachen?</h2>
        <p className="text-ink/80 leading-relaxed">
          Weil du etwas zu sagen hast, das es wert ist, gehört zu werden! Mit
          deinem Beitrag hilfst du, das Wienerische in all seinen Facetten
          zu feiern. Egal, ob du ein alter Sprachliebhaber bist, der gerne in
          der Vergangenheit schwelgt, oder ein kreativer Kopf, der neue Wege
          gehen will – dein Schmäh macht das Wörterbuch lebendiger.
        </p>
      </section>

      <section className="mt-8">
        <p className="text-ink/80 leading-relaxed">
          Schick uns nicht nur deinen Beitrag – erzähl deinen Freunden davon!
          Gemeinsam können wir das Wiener Wörterbuch mit Geschichten,
          Gedanken und Anekdoten füllen, die so einzigartig sind wie Wien
          selbst.
        </p>
      </section>

      <section className="mt-12 border-t-2 border-brick pt-8">
        <h2 className="font-serif text-2xl text-ink mb-1">
          Nix wie hin mit deinem Text!
        </h2>
        <p className="text-ink/70 leading-relaxed mb-8">
          Vielleicht bist du schon bald Teil von Papa Kapazundas großem
          Projekt – und das mit deinem ganz persönlichen Schmäh.
        </p>
        <GastbeitragFormular />
      </section>
    </div>
  );
}
