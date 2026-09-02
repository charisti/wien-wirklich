import Bildplatzhalter from "../Bildplatzhalter";

export default function VokabeltrainerSeite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Vokabeltrainer „Wienerisch Deutsch / Deutsch Wienerisch"
      </p>
      <h1 className="font-serif text-3xl text-ink mb-8">
        Lernen mit Schmäh und Charme
      </h1>

      <Bildplatzhalter label="Bild: Papa Kapazunda" className="mb-8" />

      <p className="text-ink/80 leading-relaxed">
        Du willst dein Wienerisch aufpolieren? Den legendären Schmäh
        perfektionieren und nebenbei mehr über Wien und seine Sprache lernen,
        als du jemals für möglich gehalten hast? Dann schnapp dir den
        Vokabeltrainer von Papa Kapazundas Wörterbuch „Wienerisch Deutsch" –
        dein interaktives Sprachwerkzeug, das dir Wissen mit einer
        Extraportion Witz und Wiener Flair vermittelt.
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          So funktioniert's – ganz einfach, ganz wienerisch
        </h2>
        <ol className="flex flex-col gap-6">
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">01</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Button drücken, los geht's!
              </p>
              <p className="text-ink/70 leading-relaxed">
                Einfach auf den „Vokabeltrainer starten"-Button klicken, und
                schon wird dir der erste Wörterbucheintrag angezeigt. Du
                siehst das wienerische Wort, dazu die präzisen Übersetzungen
                ins Hochdeutsche, und oben drauf gibt's die eingesprochene
                Audioaufnahme – direkt von Papa Kapazunda für dich
                eingesprochen.
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">02</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Anhören, üben, wiederholen
              </p>
              <p className="text-ink/70 leading-relaxed">
                Ein Lautsprechersymbol begleitet dich durch den Trainer. Klick
                drauf, und du kannst die Aussprache so oft hören, wie du
                willst – bis du selbst sprichst wie ein Fiaker auf dem
                Stephansplatz. Und keine Sorge, der Trainer hat Geduld:
                Wienerisch lernt man nicht über Nacht!
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">03</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Nächster Eintrag – im Wiener Tempo
              </p>
              <p className="text-ink/70 leading-relaxed">
                Drück auf „Weiter", und schwupps, kommt der nächste Begriff –
                samt Übersetzungen, Audioaufnahme und der Möglichkeit, das
                Wienerische in vollen Zügen zu genießen. So trainierst du
                ganz entspannt Eintrag für Eintrag, ohne jemals den Überblick
                zu verlieren.
              </p>
            </div>
          </li>
        </ol>
      </section>

      <Bildplatzhalter
        label="Bild: Trainer-Ansicht (Screenshot)"
        className="my-12"
      />

      <section>
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          Was macht diesen Trainer so besonders?
        </h2>
        <ul className="flex flex-col gap-4">
          <li className="flex gap-3">
            <span className="text-brick shrink-0">•</span>
            <p className="text-ink/80 leading-relaxed">
              <span className="text-ink font-medium">
                Authentisches Wienerisch:
              </span>{" "}
              Die Audioaufnahmen sind nicht irgendein Hochdeutsch mit
              Dialekteinschlag – das ist echtes Wienerisch, ungeschönt und
              charmant.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="text-brick shrink-0">•</span>
            <p className="text-ink/80 leading-relaxed">
              <span className="text-ink font-medium">
                Feinste Wortauswahl:
              </span>{" "}
              Ob Alltagsworte, historische Begriffe oder charmante
              Schimpfwörter – hier lernst du die ganze Bandbreite des
              Dialekts.
            </p>
          </li>
          <li className="flex gap-3">
            <span className="text-brick shrink-0">•</span>
            <p className="text-ink/80 leading-relaxed">
              <span className="text-ink font-medium">
                Keine Langeweile, dafür Schmäh:
              </span>{" "}
              Der Trainer ist nicht nur praktisch, sondern unterhaltsam.
              Jeder Eintrag hat das Potenzial, dich zum Schmunzeln oder
              Staunen zu bringen.
            </p>
          </li>
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          Tipps & Tricks – wie du noch mehr rausholst
        </h2>
        <ol className="flex flex-col gap-5">
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">01</span>
            <p className="text-ink/80 leading-relaxed">
              <span className="text-ink font-medium">
                Mach's laut und lebendig:
              </span>{" "}
              Üb nicht nur leise für dich, sondern sprich die Begriffe laut
              nach. Wienerisch lebt vom Klang und der Intonation – hier gilt:
              Je mehr Schmäh, desto besser!
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">02</span>
            <p className="text-ink/80 leading-relaxed">
              <span className="text-ink font-medium">
                Teste dein Umfeld:
              </span>{" "}
              Lass Freunde oder Familie raten, was die Begriffe bedeuten
              könnten. Glaub uns, ihre Ideen könnten genauso lustig sein wie
              die wienerischen Worte selbst!
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">03</span>
            <p className="text-ink/80 leading-relaxed">
              <span className="text-ink font-medium">
                Kleine Häppchen, großer Spaß:
              </span>{" "}
              Setz dir kleine Ziele – zum Beispiel zehn Begriffe am Tag. Das
              reicht schon, um in kürzester Zeit mit einem beeindruckenden
              Wiener Vokabular zu glänzen.
            </p>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">04</span>
            <p className="text-ink/80 leading-relaxed">
              <span className="text-ink font-medium">
                Wettbewerb gefällig?
              </span>{" "}
              Schnapp dir jemanden, der genauso motiviert ist wie du, und
              macht daraus ein Quiz: Wer errät mehr Begriffe korrekt?
            </p>
          </li>
        </ol>
      </section>

      <section className="mt-12 border-t border-rule pt-8">
        <h2 className="font-serif text-xl text-ink mb-3">
          Der Schmäh wird zur Kunst
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Mit Papa Kapazundas Vokabeltrainer ist Wienerisch lernen nicht nur
          einfach, sondern auch ein Erlebnis. Du tauchst ein in eine
          Sprachwelt voller Humor, Geschichte und Emotionen – und machst ganz
          nebenbei deinen Wiener Schmäh genauso perfekt wie ein Wiener Ober
          (Kaffeehauskellner). Also, drück auf „Start" und leg los – wer
          weiß, vielleicht bist du schon bald ein „Blitzgneißer", der selbst
          den charmantesten Wiener ins Staunen bringt. Viel Spaß – oder wie
          man in Wien sagt: Oiso, gemmas ån!
        </p>
      </section>

      <div id="start" className="mt-12 flex items-center gap-4">
        <button
          disabled
          className="bg-brick/40 text-card px-6 py-3 text-sm cursor-not-allowed"
        >
          Vokabeltrainer starten
        </button>
        <span className="font-mono text-xs uppercase tracking-wide text-ink/40">
          Bald verfügbar
        </span>
      </div>
    </div>
  );
}
