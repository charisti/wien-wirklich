import Bildplatzhalter from "../Bildplatzhalter";

const FOLGEN = [
  {
    titel: "Der Adler, der Stier und die sündige Stadt",
    text: `Willkommen im Wien des 17. Jahrhunderts – einer Stadt, in der barocke Pracht und Volksfrömmigkeit aufeinanderprallen. Im Zentrum dieser Folge steht kein Geringerer als der berühmte Prediger Abraham a Santa Clara. Bekannt für seinen scharfen Witz und seine unverblümte Sprache, lässt er in einer seiner berüchtigten Predigten in der Augustinerkirche eine ordentliche Schimpftirade los – und das auf seine eigenen Schäfchen! Doch was hat diesen Mann so berühmt gemacht? Und warum kehrten die Leute trotz seiner derben Beschimpfungen immer wieder zu seinen Predigten zurück? Dieser Podcast entführt euch in ein Wien, wo Moral und Humor auf unnachahmliche Weise verschmolzen sind.`,
  },
  {
    titel: "Die Hackenbraut vom Hungelgrund",
    text: `Ein Mord, ein skandalöses Geständnis und ein tragisches Ende: Diese Folge erzählt die Geschichte einer jungen Frau, die ihren Ehegatten ermordete – ein Verbrechen, das ihr den makabren Spitznamen „Hackenbraut" einbrachte. Ihr Schicksal führte sie vor Gericht und schließlich zur grausamen Hinrichtung an der Spinnerin am Kreuz. Doch wer war diese Frau, und was trieb sie zu dieser Tat? Dieser Podcast beleuchtet nicht nur die Hintergründe dieses Verbrechens, sondern auch die harte Realität des Wiener Lebens in einer Zeit, in der Recht und Gerechtigkeit oft zweierlei Dinge waren. Eine tragische Geschichte, die bis heute nachhallt.`,
  },
  {
    titel: "Tod und Sterben auf Wienerisch",
    text: `Wie spricht Wien über den Tod? Mit schwarzem Humor und morbider Gelassenheit. Dieser Podcast widmet sich den unzähligen Facetten von Tod und Sterben in Wien. Vom prächtigen Zentralfriedhof über die berüchtigten letzten Worte berühmter Wiener bis hin zu den liebenswert-makabren Eigenheiten des Wiener Bestattungswesens: Hier wird gezeigt, warum der Tod in dieser Stadt immer ein bisschen mehr ist als nur das Ende. Eine Folge voller Respekt – und einer gehörigen Portion Schmäh.`,
  },
  {
    titel: "Sex, Erotik und Bettgeflüster auf Wienerisch",
    text: `Skandalös, verführerisch und charmant: Diese Folge beleuchtet die lustvolle Seite Wiens und zeigt, wie Liebe, Erotik und Verführung die Stadt geprägt haben. Vom kaiserlichen Schlafzimmer bis hin zu den frivolen Geschichten der einfachen Leute – hier wird kein Tabu ausgelassen. Ein Podcast, der Sinnlichkeit und Wiener Schmäh auf eine charmante Weise verbindet und die Stadt von ihrer aufregendsten Seite zeigt.`,
  },
  {
    titel: "Die Porzellanfuhren des Josef Bratfisch",
    text: `Diese Folge widmet sich dem Fiaker Josef Bratfisch, der nicht nur als Kutscher, sondern auch als Musiker und enger Vertrauter von Kronprinz Rudolf Geschichte schrieb. Doch was hat es mit den sogenannten „Porzellanfuhren" auf sich? Was verbirgt sich hinter diesem charmant-verruchten Begriff? Der Podcast beleuchtet das Leben Bratfischs zwischen Skandal, Tragödie und Humor – und gibt Einblicke in eine faszinierende Wiener Tradition, die bis heute für Staunen sorgt.`,
  },
];

export default function PodcastsSeite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Podcasts
      </p>
      <h1 className="font-serif text-3xl text-ink mb-8">
        Wien zum Hören und Staunen
      </h1>

      <Bildplatzhalter label="Bild: Papa Kapazunda am Mikrofon" className="mb-8" />

      <div className="flex flex-col gap-4 text-ink/80 leading-relaxed">
        <p>
          Warum gibt es auf dieser Homepage auch Podcasts? Ganz einfach: Weil
          Wien mehr ist als eine Stadt – es ist ein Gefühl, eine Geschichte,
          eine Bühne voller Dramatik, Schmäh und skurriler Anekdoten.
        </p>
        <p>
          Die hier vorgestellten Podcasts sind wie ein akustischer
          Streifzug durch das alte und neue Wien. Mit Geschichten, die mal
          frech, mal düster, mal romantisch sind, aber immer eines gemeinsam
          haben: Sie entführen euch direkt ins Herz der Stadt und lassen
          euch eintauchen in das Leben und Treiben Wiens, so wie es einst
          war – und manchmal bis heute geblieben ist.
        </p>
        <p>
          Und was könnte besser die Seele dieser Stadt einfangen als der
          authentische Klang der wienerischen Sprache? Schließlich lebt
          Wien nicht nur von seinen Geschichten, sondern auch von seiner
          Sprache. Der Wiener Schmäh, der Charme und die Direktheit des
          Dialekts – all das bringt die Seele dieser Stadt zum Klingen.
          Unsere Podcasts nehmen euch nicht nur mit in vergangene Zeiten und
          faszinierende Anekdoten, sie tun es auch in originalgetreuem und
          authentischem Wienerisch!
        </p>
        <p>
          Von aufregenden Episoden aus der Stadtgeschichte über kuriose
          Persönlichkeiten bis hin zu den tiefgründigen Themen der Wiener
          Seele: Unsere Podcasts machen Lust darauf, die Stadt mit anderen
          Ohren zu erleben.
        </p>
      </div>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
          Wien hautnah erleben – Geschichten, die berühren
        </h2>
        <ol className="flex flex-col gap-8">
          {FOLGEN.map((folge, i) => (
            <li key={folge.titel}>
              {i === 2 && (
                <Bildplatzhalter
                  label="Bild: Wiener Zentralfriedhof"
                  className="mb-8"
                />
              )}
              <div className="flex gap-4">
                <span className="font-mono text-sm text-brick shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <p className="font-serif text-lg text-ink mb-2">
                    {folge.titel}
                  </p>
                  <p className="text-ink/70 leading-relaxed mb-4">
                    {folge.text}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 border border-rule bg-card px-4 py-3">
                    <span className="text-ink/30 text-lg" aria-hidden>
                      ▶
                    </span>
                    <span className="text-sm text-ink/50 flex-1">
                      Hörprobe folgt
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wide text-ink/40 border border-rule px-2 py-1 whitespace-nowrap">
                      Download (kostenpflichtig) · bald verfügbar
                    </span>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </div>
  );
}
