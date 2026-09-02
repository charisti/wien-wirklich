import Bildplatzhalter from "../Bildplatzhalter";
import EinreichFormular from "./EinreichFormular";

export default function NeueWortperlenSeite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Neue Wortperlen
      </p>
      <h1 className="font-serif text-3xl text-ink mb-8">
        Bring deine wienerischen Wortperlen ins Rampenlicht!
      </h1>

      <Bildplatzhalter label="Bild: Papa Kapazunda" className="mb-8" />

      <div className="flex flex-col gap-4 text-ink/80 leading-relaxed">
        <p>
          Hast du schon mal eine dieser einzigartigen Wiener Redewendungen
          gehört, die sofort ein Lächeln aufs Gesicht zaubern? Oder ein Wort,
          das so typisch wienerisch ist, dass es die halbe Stadt beschreibt?
          Dann wird es Zeit, deine Entdeckungen zu teilen! Papa Kapazundas
          Wörterbuch „Wienerisch Deutsch" lebt davon, dass Wiener Schmäh und
          Wortschätze nie verloren gehen. Und hier kommst du ins Spiel: Werde
          Teil der Sammlung und reiche deine wienerischen Wortperlen ein!
        </p>
        <p>
          Ob ein charmantes Alltagswort, ein historischer Begriff oder ein
          Ausdruck, den nur deine Oma verwendet – wir wollen es wissen. Und
          mit ein paar Klicks und etwas Schmäh kannst du deinen Beitrag
          leisten, die Wiener Sprachwelt noch bunter zu machen.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-2 pb-2 border-b border-rule">
          Das Einreichformular – ganz einfach und voller Schmäh
        </h2>
        <p className="text-ink/70 leading-relaxed mt-3 mb-6">
          Das Einreichen ist kinderleicht. Einfach das Formular ausfüllen –
          und dein Wiener Schmäh wird vielleicht schon bald im Wörterbuch
          verewigt! Damit das Ganze so reibungslos läuft wie der 13A zur
          Stoßzeit, hier eine kleine Anleitung:
        </p>
        <ol className="flex flex-col gap-6">
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">01</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Wort oder Redewendung
              </p>
              <p className="text-ink/70 leading-relaxed">
                Gib das wienerische Wort ein, das du einreichen möchtest.
                Kurz und knackig, ohne Umwege.
              </p>
              <p className="text-ink/50 text-sm italic mt-1">
                Beispiel: „Schmähführen"
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">02</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Bedeutung auf Hochdeutsch
              </p>
              <p className="text-ink/70 leading-relaxed">
                Erkläre, was das Wort bedeutet – möglichst genau, aber ohne
                Schnickschnack.
              </p>
              <p className="text-ink/50 text-sm italic mt-1">
                Beispiel: „Jemanden mit Charme oder Witz um den Finger
                wickeln, oft humorvoll oder übertrieben dargestellt."
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">03</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Kontext oder Verwendung
              </p>
              <p className="text-ink/70 leading-relaxed">
                Wann und wie wird das Wort verwendet? Ein kleiner
                Beispielsatz hilft uns, das Wort besser zu verstehen.
              </p>
              <p className="text-ink/50 text-sm italic mt-1">
                Beispiel: „Er hat so viel Schmäh geführt, dass sie si vua
                Lochn fost ind Hosn brunzt hot."
              </p>
            </div>
          </li>
          <li className="flex gap-4">
            <span className="font-mono text-sm text-brick shrink-0">04</span>
            <div>
              <p className="text-ink font-medium mb-1">
                Dein Name (freiwillig)
              </p>
              <p className="text-ink/70 leading-relaxed">
                Falls du als Einreicher verewigt werden möchtest – wir sind
                schließlich stolz auf unsere Wortspender!
              </p>
            </div>
          </li>
        </ol>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          Ein Beispiel für eine Einreichung
        </h2>
        <div className="border border-rule bg-card px-5 py-4 flex flex-col gap-2">
          <p className="font-serif text-lg text-ink">„Bockerer"</p>
          <p className="text-ink/70 text-sm">
            <span className="text-ink/50">Bedeutung: </span>
            Ein sturer, eigenwilliger Mensch, der seinen Kopf durchsetzt,
            egal was passiert.
          </p>
          <p className="text-ink/70 text-sm italic">
            „Der Opa is a echter Bockerer – er fohrt no immer mit da Kutschn,
            wäu da Führerschein is laung weg!"
          </p>
        </div>
      </section>

      <Bildplatzhalter
        label="Bild: eingereichte Wortperlen"
        className="my-12"
      />

      <section>
        <h2 className="font-serif text-xl text-ink mb-3">
          Warum du mitmachen solltest
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Weil die Wiener Sprache so vielfältig ist wie die Stadt selbst! Mit
          deinem Beitrag hilfst du, den Dialekt lebendig zu halten und machst
          das Wörterbuch noch besser. Egal, ob du ein Wort kennst, das sonst
          niemand kennt, oder ob du einer typischen Wiener Redewendung neues
          Leben einhauchen willst – wir freuen uns über jede neue Wortperle
          für unser Wörterbuch!
        </p>
      </section>

      <section className="mt-12 border-t-2 border-brick pt-8">
        <h2 className="font-serif text-2xl text-ink mb-1">
          Und jetzt bist du dran!
        </h2>
        <p className="text-ink/70 leading-relaxed mb-8">
          Leg los und fülle das Formular aus! Papa Kapazunda freut sich über
          jede neue Wortperle. Na dann, gemma – schreib
          Wörterbuch-Geschichte!
        </p>
        <EinreichFormular />
      </section>
    </div>
  );
}
