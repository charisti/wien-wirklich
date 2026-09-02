import Link from "next/link";
import Bildplatzhalter from "../../Bildplatzhalter";

const BEITRAEGE = [
  {
    titel: "Vom Schmäh und der Stille im Kaffeehaus",
    autor: "Franziska Gruber",
    text: `Das Wiener Kaffeehaus ist weit mehr als nur ein Ort, an dem Kaffee serviert wird. Es ist eine Bühne für feine Ironie, charmante Bosheiten und tiefgründige Gespräche – oder eben das Gegenteil davon: beredtes Schweigen. Als ich das erste Mal allein im „Café Sperl" saß, lernte ich schnell, dass hier nicht viel gesagt werden muss, um verstanden zu werden. Der Ober schenkte mir ein flüchtiges „Na, moch ma an Verlängerten?" – und schon war klar: Hier zählt der Subtext mehr als jedes ausgeschmückte Gespräch. Das ist Wienerisch in Reinform: Sprache, die zwischen den Zeilen lebt, wie der leise Löffelklang in der Kaffeetasse.`,
  },
  {
    titel: `Die Kunst des „Gschaftlhuberns"`,
    autor: "Max Steiner",
    text: `Wien wäre nicht Wien ohne seine Gschaftlhuber. Dieser herrliche Ausdruck beschreibt eine Spezies, die sich in jeder Lebenslage als unersetzlich wichtig präsentiert. Egal, ob sie im Grätzl „a bissl herumschauen" oder im Park die Enten „organisieren" – sie tun es mit einer Ernsthaftigkeit, die fast rührend ist. Mein Nachbar, der Herr Novak, ist so einer. Jeden Morgen steht er in der Einfahrt und kommandiert den Wind – oder zumindest tut er so. Wenn man ihn fragt, was er macht, kommt garantiert: „I regl des!" Und so hat der Gschaftlhuber seinen festen Platz im Wiener Alltag: als Synonym für Eifer, der ins Leere führt – aber bitte mit Stil.`,
  },
  {
    titel: `A G'schicht über den „Grant"`,
    autor: "Helga Leitner",
    text: `„Grant" ist keine Laune – es ist eine Lebenseinstellung. Der Wiener Grant ist kein flüchtiger Ärger, sondern eine tiefe, fast philosophische Abneigung gegen alles, was nicht genau so läuft, wie es sollte. Und trotzdem lieben wir ihn. Einmal im Straßenverkehr, als der Fahrer hinter mir hupte, weil ich die grüne Ampel um 0,5 Sekunden verpasst hatte, öffnete ich das Fenster und rief: „Na, du Dillo, magst des Auto übernehma?" Seine Antwort? „Sicher net, i hob eh scho kaE-Mailerv!" Und so schimpften wir uns durch die Kreuzung – mit einer gegenseitigen Anerkennung, die fast an Freundschaft grenzte. So funktioniert Grant: bissig, aber nie wirklich böse.`,
  },
  {
    titel: "Der Fiaker und der Schmäh",
    autor: "Tobias Stadler",
    text: `Die Fiaker gehören zu Wien wie der Stephansdom – und genauso auch ihr Schmäh. Auf einer Fahrt durch die Innenstadt lernte ich, dass der Fiaker nicht nur Kutscher ist, sondern auch Geschichtenerzähler, Entertainer und manchmal Philosoph. Mein Kutscher, der Herr Leopold, ließ mich an einem heißen Sommertag wissen: „Des Wetter is nix, sunst san de Leut imma fesch – oba heut samma olle durchgnudelt." Es war eine dieser Bemerkungen, die Wien so unverwechselbar machen: Direkt, ehrlich und mit einem Augenzwinkern, das zeigt, dass der Ernst des Lebens hier oft Pause hat.`,
  },
  {
    titel: `Was die „Häferln" über die Wiener verraten`,
    autor: "Katharina Müller",
    text: `„Häferl" – das Wort klingt so unscheinbar, und doch erzählt es so viel über Wien. Ob's das Häferl für den Kaffee, den Tee oder das Bier ist – es ist immer mehr als nur ein Gefäß. Meine Großmutter hatte für jedes Getränk ihr spezielles Häferl, und wehe, man brachte das falsche! „Des is ka Häferl fian Kaffee, des is fias Ribislwossa! Host ka Ahnung?" So klein der Unterschied sein mag, er wird mit Stolz verteidigt. In Wien wird selbst ein Häferl zum Sinnbild für den liebevollen Perfektionismus, der hier in jedem Detail steckt.`,
  },
  {
    titel: `Des ewige „Papierl"`,
    autor: "Sebastian Mayer",
    text: `„Papierl" – dieses kleine Wort beschreibt so viel mehr als nur einen Klebezettel oder ein Papierchen. In Wien ist das „Papierl" eine universelle Ausrede für alles, was verloren, vergessen oder nicht vorhanden ist. Einmal stand ich im Gasthaus und wollte meinen Gutschein einlösen. Der Wirt schaut mich an, zieht eine Augenbraue hoch und sagt: „Host des Papierl net mit? Ohne des geht nix!" Dabei war klar: Mit oder ohne Papierl, es hätte eh keinen Unterschied gemacht. Das Papierl ist der Wiener Symbolbegriff für Bürokratie, Improvisation und die Kunst, nichts zu viel zu erwarten.`,
  },
  {
    titel: `Wenn der „Schas" zum Hit wird`,
    autor: "Martina Berger",
    text: `Kaum ein Wiener Wort hat so viel Komik wie der „Schas". Ob als Bezeichnung für etwas völlig Überflüssiges oder als liebevoll verpackte Beleidigung – der Schas hat immer Charme. Mein Lieblingsmoment: Im Sommer rief mein Cousin beim Grillen: „Der Wind treibt in Rauch wiaran Schas in olle Richtungen!" Alle lachten, aber am Ende war klar: Der Schas, der Rauch oder beides – wir bleiben trotzdem beim Grillen. Der Schas ist das Wiener Symbol für Gelassenheit: Etwas mag nerven, aber wichtig ist es sicher nicht.`,
  },
  {
    titel: `Die „Oaschpartie" meines Lebens`,
    autor: "Paul Hofer",
    text: `Jeder Wiener kennt sie: die Oaschpartie. Ob es die Wartezeit bei der Versicherung ist oder der Regen, der exakt dann kommt, wenn du die Wäsche draußen hast – eine Oaschpartie ist unausweichlich. Meine denkwürdigste Oaschpartie passierte mir im Prater, als ich stundenlang bei der Achterbahn anstand – nur um dann zu sehen, dass sie wegen eines „technischen Gebrechens" geschlossen wurde. Statt zu schimpfen, schüttelte der Mann vor mir den Kopf und meinte: „Oaschpartie, oba sunst basst's." Genau das macht die Wiener Gelassenheit aus: sich selbst bei einer Oaschpartie nicht aus der Ruhe bringen zu lassen.`,
  },
  {
    titel: `Die hohe Kunst des „Suderns"`,
    autor: "Elisabeth Kern",
    text: `In Wien wird nicht gemeckert, gemotzt oder genörgelt – hier wird „gsudert". Sudern ist nicht bloß ein Ausdruck von Unzufriedenheit, sondern eine wahre Kunstform, die oft in wahren Sprachkaskaden gipfelt. Einmal wartete ich am Würstelstand auf eine Käsekrainer, und der Herr neben mir suderte in einem fort: „Wos kost des scho wieder? Und die Semmel is heit a anzige Frechheit!" Der Würstelmann grinste nur und legte extra Senf drauf. Sudern gehört in Wien zum guten Ton – es ist das Ventil, das den Alltag erträglich macht.`,
  },
  {
    titel: `De „Zwidawuazn" im Grätzl`,
    autor: "Anna Huber",
    text: `Jedes Wiener Grätzl hat eine: die legendäre Zwidawuazn. Jenen grantigen Nachbarn, der immer alles besser weiß, nichts gut findet und trotzdem die heimliche Seele des Hauses ist. Bei uns ist das der Herr Moser. Er sudert jeden Tag über die „Lausa" im Hof, bringt ihnen aber heimlich Schokolade, wenn sie brav sind. Einmal sah ich ihn mit der Gießkanne den kleinen Ahorn im Innenhof bewässern, den er eigentlich hasst. „Des schneid ma nächst Joar um!" meinte er. Zwidawuazn sind eben vielschichtig – typisch wienerisch halt.`,
  },
  {
    titel: `Die ewige „Heisl-Kultur"`,
    autor: "Markus Strasser",
    text: `Wien ohne seine Heisln? Unvorstellbar! Egal, ob am Naschmarkt, im Prater oder auf einem alten Friedhof – das Heisl ist mehr als nur eine öffentliche Toilette, es ist ein kultureller Treffpunkt. Als ich letztens am Naschmarkt dringend eines suchte, brummte der Standler: „Geh aufs Eck, des Heisl is a Kulturgut!" Und er hatte recht: Über dem Eingang prangte ein Schild mit Sprüchen wie „Wer sudert, verliert" und drinnen lief leise Wiener Musik. In Wien sind sogar die Heisln charmant – ein kleines Stück Lebensgefühl.`,
  },
  {
    titel: `Der „Hawara" fürs Leben`,
    autor: "Sophie Leitner",
    text: `Ein „Hawara" ist weit mehr als ein Kumpel. Er ist der Typ Mensch, der immer da ist, egal ob's brennt oder nur der Spritzwein leer ist. Mein Hawara ist der Michi, und seine Definition von Freundschaft ist typisch wienerisch: pragmatisch, aber herzlich. Als ich umzog, stand er vor der Tür mit einem Sack Semmeln und einem Klappstuhl. „Was i packen soll, sogst ma später – jetzt geb ma uns amoi a Jausn!" Hawara sein heißt, den Moment ernst zu nehmen, ohne das Leben zu schwer zu machen.`,
  },
  {
    titel: `Der „Schmähführer" auf Tour`,
    autor: "Katharina Fischer",
    text: `Wien erleben ohne einen echten Schmähführer? Geht nicht! Auf einer Stadttour lernte ich Karl kennen, der den Begriff „Schmähführen" auf ein neues Level hob. Als wir am Stephansdom standen, erklärte er: „Des ham die Leut mit so vü Schmäh baut, dass net amoi da Teufel wos ausrichtn hod kenna." Ob's stimmt? Natürlich nicht. Aber so erzählt man Geschichte auf Wienerisch: mit Humor, Fantasie und einem Funkeln in den Augen, das dich glauben lässt, alles wäre möglich – selbst der Schmäh vom Teufel.`,
  },
];

export default function AktuelleGastbeitraegeSeite() {
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

      <ol className="flex flex-col gap-10">
        {BEITRAEGE.map((beitrag, i) => (
          <li key={beitrag.titel} className="border-t border-rule pt-8">
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
                <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mt-1 mb-4">
                  von {beitrag.autor}
                </p>
                <p className="text-ink/80 leading-relaxed">{beitrag.text}</p>
              </div>
            </div>
          </li>
        ))}
      </ol>

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
