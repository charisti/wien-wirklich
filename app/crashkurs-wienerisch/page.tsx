import Bildplatzhalter from "../Bildplatzhalter";

const FOLGEN = [
  {
    wort: "Wappler",
    beschreibung: `Der Klassiker unter den Schimpfwörtern. Wer ein „Wappler" ist, sollte sich lieber nicht blicken lassen.`,
  },
  {
    wort: "Eitrige",
    beschreibung:
      "Die kulinarische Liebeserklärung an die Käsekrainer vom Würstelstand.",
  },
  {
    wort: "Oasch",
    beschreibung: "Wenn's richtig nervt, braucht's diesen Ausdruck.",
  },
  {
    wort: "Krowodn",
    beschreibung:
      "Ein liebevoll-spitzer Seitenhieb für die Zugroasten.",
  },
  {
    wort: "Fotzhobl",
    beschreibung: "Warum die Mundharmonika einen so schrägen Namen hat.",
  },
  {
    wort: "Schmähfoan",
    beschreibung: "Wie du laberst, ohne je ernst genommen zu werden.",
  },
  {
    wort: "Grantler",
    beschreibung: "Die Kunst des charmanten Raunzens.",
  },
  {
    wort: "Pickerl",
    beschreibung: "Ein Exkurs in die Wiener Behördenkultur.",
  },
  {
    wort: "Bim",
    beschreibung: "Warum die Straßenbahn ein eigenes Wiener Wort verdient.",
  },
  {
    wort: "Oida",
    beschreibung: "Das ultimative Universalwort für alle Lebenslagen.",
  },
];

export default function CrashkursWienerischSeite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Papa Kapazundas Crashkurs Wienerisch
      </p>
      <h1 className="font-serif text-3xl text-ink mb-8">
        Die Kunst des Wiener Dialekts erleben
      </h1>

      <Bildplatzhalter label="Bild: Papa Kapazunda" className="mb-8" />

      <p className="text-ink/80 leading-relaxed">
        Willst du den Wiener Schmäh nicht nur hören, sondern so richtig
        draufhaben? Dann bist du bei Papa Kapazundas Crashkurs Wienerisch
        genau richtig! Hier bekommst du nicht nur die Basics des Dialekts
        beigebracht, sondern tauchst auch tief ein in die Wiener Seele –
        charmant, grantig und immer mit einem Augenzwinkern.
      </p>
      <p className="text-ink/80 leading-relaxed mt-4">
        Mit derzeit 10 unterhaltsamen Folgen bietet dieser Kurs einen
        unschlagbaren Mix aus Sprachwitz, historischer Etymologie und echten
        Wiener Alltagstipps. Ob du deine Nachbarn mit dem perfekten „Oida"
        beeindrucken oder den Unterschied zwischen einem „Wappler" und einem
        „Fotzhobl" verstehen willst – Papa Kapazunda bringt dir alles bei.
        Und das Beste? Jede Lektion ist ein Erlebnis für sich, denn hier
        wird Sprache nicht nur erklärt, sondern gelebt.
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          Die Highlights des Crashkurses
        </h2>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-ink font-medium mb-1">
              Humorvoll und lehrreich
            </p>
            <p className="text-ink/70 leading-relaxed">
              Papa Kapazunda führt dich mit unverwechselbarem Schmäh durch
              den Wiener Dialekt. Mit seiner Klaviatur-Krawatte, Lesebrille
              und charmanten Art wirkt er wie eine Mischung aus Grantler und
              Sprachakrobat – ein perfekter Botschafter des Wiener
              Lebensgefühls. Er erklärt dir die Bedeutung von Begriffen wie
              „Eitrige", „Bam Oasch" oder „Schmähfoan" so anschaulich, dass
              du am Ende nicht nur die Wörter, sondern auch den Wiener
              Humor verstehst.
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1">
              Klassiker und Geheimtipps
            </p>
            <p className="text-ink/70 leading-relaxed">
              Jede Folge widmet sich einem besonderen Begriff. Es gibt
              bekannte Klassiker wie „Wappler" (jemand, der nichts auf die
              Reihe kriegt) oder „Oida" (das universelle Allroundwort für
              alles und jeden). Aber auch Geheimtipps wie „Fotzhobl"
              (Mundharmonika) und Redewendungen wie „A Fotzn, de se
              gwoschn hot" (eine saftige Ohrfeige) finden ihren Platz. Papa
              Kapazunda lässt keine Nuance aus und gibt dir praktische
              Beispiele, wie du die Wörter im Alltag einsetzen kannst – ohne
              gleich „den Fotz verbrennan" (einen Fehler machen).
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1">Kultureller Tiefgang</p>
            <p className="text-ink/70 leading-relaxed">
              Dieser Crashkurs ist mehr als nur ein Sprachführer. Papa
              Kapazunda verknüpft die Begriffe mit Wiener Kultur, Geschichte
              und Lebensart. Du erfährst, warum der Wiener Schmäh immer ein
              bisschen grantig, aber nie wirklich böse ist, und wie die
              Stadt mit ihrer Mischung aus Melancholie und Humor eine
              Sprache geschaffen hat, die so einzigartig wie ihre Bewohner
              ist.
            </p>
          </div>
        </div>
      </section>

      <Bildplatzhalter label="Bild: Papa Kapazunda erklärt" className="my-12" />

      <section>
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          Warum ist dieser Crashkurs besonders?
        </h2>
        <div className="flex flex-col gap-5">
          <div>
            <p className="text-ink font-medium mb-1">
              Unterhaltung und Wissen in Perfektion
            </p>
            <p className="text-ink/70 leading-relaxed">
              Papa Kapazunda verbindet Humor mit fundiertem Wissen. Er
              erklärt nicht nur die Begriffe, sondern auch ihre Wurzeln.
              Warum sagt man in Wien „Bim" zur Straßenbahn? Was macht den
              Begriff „hinterfotzig" so treffend? Und warum ist der
              „Wappler" das perfekte Wort für Leute, die einen nerven? Jede
              Folge bietet überraschende Aha-Momente – und Lacher sind
              garantiert.
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1">Laufend neue Folgen</p>
            <p className="text-ink/70 leading-relaxed">
              Der Crashkurs bleibt nicht bei den ersten 10 Folgen stehen.
              Neue Episoden werden laufend ergänzt, sodass du immer wieder
              frische Begriffe und Redewendungen entdecken kannst. Egal, ob
              du ein Wiener Original bist, das seinen Schmäh perfektionieren
              will, oder ein Zugroaster, der sich in die Wiener Sprache
              verliebt hat – hier lernst du nie aus.
            </p>
          </div>
          <div>
            <p className="text-ink font-medium mb-1">
              Das Lebensgefühl Wiens erleben
            </p>
            <p className="text-ink/70 leading-relaxed">
              Wienerisch ist mehr als nur ein Dialekt – es ist eine
              Einstellung. Mit diesem Crashkurs bekommst du einen echten
              Einblick in die Wiener Seele: humorvoll, ein bisschen grantig
              und voller Charme. Papa Kapazunda zeigt dir, wie du mit der
              richtigen Wortwahl jedes Gespräch auflockerst, beim Heurigen
              brillierst oder einfach verstehst, was die Wiener wirklich
              meinen, wenn sie „Bam Oasch" sagen.
            </p>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <div className="flex items-baseline justify-between gap-4 mb-5 pb-2 border-b border-rule">
          <h2 className="font-serif text-xl text-ink">
            Die ersten 10 Folgen
          </h2>
          <span className="font-mono text-xs uppercase tracking-wide text-ink/40 whitespace-nowrap">
            Bald verfügbar
          </span>
        </div>
        <ol className="divide-y divide-rule">
          {FOLGEN.map((folge, i) => (
            <li key={folge.wort} className="flex gap-4 py-3">
              <span className="font-mono text-sm text-brick shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <span className="font-serif text-ink">„{folge.wort}"</span>
                <span className="text-ink/60"> – {folge.beschreibung}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-12 border-t-2 border-brick pt-8">
        <h2 className="font-serif text-2xl text-ink mb-1">
          Jetzt eintauchen!
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Starte deine Reise in die Welt des Wiener Schmähs. Die ersten
          Folgen warten schon darauf, dich zum Lachen, Lernen und Staunen zu
          bringen. Und vergiss nicht: In Wien gibt's für alles ein Wort –
          und Papa Kapazunda zeigt dir, wie du's meisterst.
        </p>
        <p className="text-ink/70 leading-relaxed mt-4">
          Sei dabei, und mach dich bereit für eine sprachliche Reise, die
          genauso charmant, grantig und unverwechselbar ist wie Wien selbst!
        </p>
      </section>
    </div>
  );
}
