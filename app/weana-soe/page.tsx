import Bildplatzhalter from "../Bildplatzhalter";

const KOSTPROBEN = [
  "Mit dir mecht I den Mond von obn sehn!",
  "Da Fetz Domino von Wien",
  "Scheiß di nix, sunst reißt a nix!",
  "I bin fett!",
  "Wien is so a scheene Stodt!",
  "Tanz den Twist mit mia!",
  "Wer lang sudert, wird ned pudert!",
  "Da Zaubaknopf",
  "Solange sich das Riesenrad noch dreht",
  "Loss de Hosn owe!",
  "Bessa a woglada Stammtisch ois a trockana Arbeitsplatz!",
];

export default function WeanaSoeSeite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Weana Söö · Doppel-CD von Papa Kapazunda
      </p>
      <h1 className="font-serif text-3xl text-ink mb-8">
        Ein musikalisches Meisterwerk aus der Seele Wiens
      </h1>

      <div className="max-w-xs mx-auto mb-4">
        <Bildplatzhalter
          aspect="aspect-square"
          label={`Bild: CD-Cover „Weana Söö"`}
        />
      </div>
      <p className="text-center font-mono text-[10px] uppercase tracking-wide text-ink/40 mb-10">
        Titel zum Herunterladen · bald verfügbar
      </p>

      <div className="flex flex-col gap-4 text-ink/80 leading-relaxed">
        <p>
          „Weana Söö" verkörpert die Seele Wiens in ihrer reinsten Form. Mit
          dieser Doppel-CD tauchst du ein in den echten, unverfälschten
          Wiener Soul – erdig, groovig und zutiefst berührend. Diese
          Sammlung einzigartiger Musikstücke bringt die Wiener Seele, den
          unverwechselbaren Schmäh und die vielschichtigen Emotionen der
          Stadt direkt zu dir nach Hause. Es ist mehr als nur eine CD – es
          ist eine Einladung, Wien zu hören, zu fühlen und zu verstehen.
        </p>
        <p>
          Als Sänger dieser außergewöhnlichen Doppel-CD gelingt es Papa
          Kapazunda, die Essenz Wiens einzufangen wie kein anderer. Mit
          seiner kraftvollen, zugleich warmen und gefühlvollen
          Interpretation haucht er jedem Lied Leben ein. Seine Stimme
          verkörpert den Wiener Soul in all seinen Facetten – mal charmant
          und witzig, mal melancholisch und nachdenklich, mal wild und
          ausgelassen – aber immer voller Authentizität. Dabei trifft Papa
          Kapazundas einzigartiger Stil den Ton, der so typisch für Wien
          ist: direkt, ehrlich und mit einer gehörigen Portion Wiener
          Schmäh.
        </p>
        <p>
          „Weana Söö" beeindruckt durch eine musikalische Vielfalt, die die
          Stadt in ihrer ganzen Bandbreite abbildet. Es entfaltet sich ein
          Klangteppich aus erdigen Basslinien, groovigen Rhythmen und
          unverwechselbaren Melodien, die mal Tradition, mal Moderne
          verkörpern. Papa Kapazundas Stimme, die sowohl rau als auch
          berührend zart sein kann, ist das perfekte Instrument, um die
          Geschichten und Emotionen der Stadt lebensecht zum Ausdruck zu
          bringen.
        </p>
        <p>
          Die Texte und Melodien erzählen von Wien, wie es wirklich ist –
          von den stillen Momenten bis zu den lauten, lebendigen Gassen der
          Stadt. Papa Kapazunda nimmt uns mit auf eine Reise durch die
          Seele Wiens, durch seine Geschichte und Kultur. Ob in Songs, die
          den nostalgischen Zauber vergangener Zeiten einfangen, oder in
          modernen Interpretationen, die den Rhythmus des heutigen Wiens
          aufgreifen: Er macht jede Note zu einem Erlebnis, das tief unter
          die Haut geht.
        </p>
      </div>

      <div className="my-12 border-t border-b border-rule py-8">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mb-4">
          Kostproben aus den Songtexten
        </p>
        <ul className="flex flex-col gap-2">
          {KOSTPROBEN.map((zeile) => (
            <li key={zeile} className="text-ink/70 italic">
              „{zeile}"
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4 text-ink/80 leading-relaxed">
        <p>
          Jeder Song ist wie ein kleines Kunstwerk, das die unverwechselbare
          Sprache Wiens und den Schmäh der Wiener lebendig und greifbar
          macht. Herausragend ist, wie Papa Kapazunda seine Persönlichkeit
          in die Lieder von „Weana Söö" miteinfließen lässt. Dabei gelingt
          es ihm, sowohl die Sehnsucht nach vergangenen Tagen als auch die
          Moderne der heutigen Stadt miteinander zu verbinden. Papa
          Kapazundas Stimme verleiht den Stücken einen unverwechselbaren
          Charakter, der die Hörer in die Tiefen der Wiener Seele
          entführt. Er ist nicht nur Sänger, sondern auch
          Geschichtenerzähler – jemand, der die Tradition und den Geist der
          Stadt lebendig hält und auf eine Weise präsentiert, die
          gleichermaßen modern und zeitlos ist.
        </p>
        <p>
          Diese Doppel-CD besticht vor allem auch durch ihre berührende
          Ehrlichkeit. Die Songs auf „Weana Söö" sind nicht glattgebügelt
          oder überpoliert, sondern bewusst authentisch gehalten. Sie
          greifen Emotionen auf, die tief unter die Haut gehen – sei es die
          Sehnsucht nach Freiheit, die Lebensfreude in einem Wiener
          Tschocherl oder der bittersüße Humor, der in keinem Wiener
          Gespräch fehlen darf. Dabei bewahren die Songs all die rauen
          Kanten, die den wahren Charakter der Stadt ausmachen.
        </p>
      </div>

      <Bildplatzhalter
        label="Bild: Papa Kapazunda im Aufnahmestudio"
        className="my-12"
      />

      <div className="flex flex-col gap-4 text-ink/80 leading-relaxed">
        <p>
          Die Musik ist geprägt von einer erdigen Bodenständigkeit, die
          ebenso charmant wie direkt ist. Gleichzeitig groovt sie in einer
          Leichtigkeit, die den typischen Wiener Schmäh mit einem modernen
          Sound vereint. Es ist eine einzigartige Mischung aus Tradition
          und zeitgenössischem Stil, die das Wesen Wiens wie nie zuvor
          hörbar macht und Wiener Schmäh mit musikalischer Virtuosität auf
          höchstem Niveau vereint.
        </p>
        <p>
          Erdige Basslinien, groovige Rhythmen und unverwechselbare
          Melodien treffen auf Texte, die den Alltag und die Geschichte
          Wiens poetisch und gleichzeitig hautnah erzählen. Mit „Weana Söö"
          wird klar, dass Wiener Musik weit mehr ist als die typischen
          Klänge, die man erwarten könnte. Hier wird der unverfälschte
          Wiener Soul auf eine Weise präsentiert, die gleichermaßen
          erfrischend wie berührend ist. Und so wird jede Note zum Ausdruck
          einer unerschütterlichen Liebe zu Wien.
        </p>
        <p>
          Mit „Weana Söö" hat Papa Kapazunda ein Werk geschaffen, das nicht
          nur musikalisch beeindruckt, sondern auch emotional berührt. Es
          ist eine Liebeserklärung an Wien – roh, echt und voller Gefühl.
          Diese Doppel-CD ist nicht nur ein Muss für alle Wiener und
          Wien-Liebhaber, sondern ein unvergessliches Hörerlebnis für
          jeden, der die Stadt und ihre Menschen verstehen will.
        </p>
        <p>
          Alle 18 Lieder sind ein Hörgenuss für all jene, die die Magie
          dieser Stadt neu entdecken wollen – echt, hautnah und
          unverfälscht. Die Doppel-CD ist ein unverzichtbarer Schatz für
          jeden, der Wien heiß liebt oder ganz intensiv kennenlernen
          möchte – für die eingefleischten Wiener, die hier ihre eigene
          Identität wiederfinden, ebenso wie für die zahlreichen Wien-Fans,
          die die Stadt auch einmal von ihrer emotionalen Seite erleben
          wollen. Mit „Weana Söö" wird jede Hörminute zu einer Reise durch
          die Geschichte, die Kultur und die Seele Wiens.
        </p>
        <p>
          Wer die wahre Seele Wiens hören und spüren möchte, kommt an
          „Weana Söö" nicht vorbei. Es ist eine Einladung, die Stadt auf
          einer persönlichen, gefühlsechten und höchst lebendigen
          musikalischen Reise zu erleben, die tief unter die Haut geht.
          Lass dich von den Klängen verzaubern, groov' mit im Rhythmus
          Wiens und spür den ganz speziellen Wiener Soul, der diese Stadt
          so mitreißend widerspiegelt. Diese Doppel-CD ist ein Stück Wiener
          Herz und Seele, das in deiner Musiksammlung nicht fehlen darf,
          denn:
        </p>
      </div>

      <p className="mt-10 font-serif text-2xl text-ink text-center leading-snug border-t-2 border-brick pt-8">
        Papa Kapazunda singt die Seele Wiens, wie sie wirklich ist: erdig,
        groovig und authentisch!
      </p>
    </div>
  );
}
