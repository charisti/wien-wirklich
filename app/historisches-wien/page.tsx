import Bildplatzhalter from "../Bildplatzhalter";

export default function HistorischesWienSeite() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Historisches Wien · Rubrik „Hofburgmomente"
      </p>
      <h1 className="font-serif text-3xl text-ink mb-2">
        Historisches Wien
      </h1>
      <p className="font-serif text-lg text-ink/60 italic mb-8">
        Von Sisi bis Secession: Wiener Geschichte mit Herz und Humor
      </p>

      <Bildplatzhalter label="Bild: Papa Kapazunda im Kaffeehaus" className="mb-8" />

      <p className="text-ink/80 leading-relaxed">
        Stell dir vor: Der Geruch von frischem Kaffee liegt in der Luft, die
        leise Melodie eines Klaviers tänzelt durch den Raum, und an einem
        kleinen Tisch im typischen Wiener Kaffeehaus steht niemand
        Geringerer als Papa Kapazunda – ein wahrer Kapazunda in Sachen
        Geschichte, Kunst und Kultur. Doch heute trägt er kein weißes Hemd
        mit Klaviatur-Krawatte, sondern ein historisches Outfit, das
        irgendwo zwischen Erzherzog und Kaffeehausliterat angesiedelt ist.
        Vor ihm thront ein stilvolles Rednerpult, und hinter ihm prangt ein
        Wandgemälde mit den Konturen des Stephansdoms und der Hofburg.
        Willkommen in der Rubrik „Hofburgmomente", wo Geschichte in
        Kaisergrandezza vorgetragen und Kultur zum Erlebnis wird!
      </p>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-4 pb-2 border-b border-rule">
          Geschichte, die Spaß macht
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Mit dieser Rubrik entführt dich Papa Kapazunda in die schillernde
          Vergangenheit Wiens – aber natürlich nicht trocken oder
          langweilig! In jeder Folge greift er ein prägnantes Thema aus der
          Wiener Geschichte, Kunst oder Kultur auf und bringt es auf den
          Punkt: witzig, charmant und immer mit einer Prise Schmäh. Egal, ob
          es um die exzentrischen Habsburger, die Bedeutung der Wiener
          Kaffeehauskultur oder die wilde Welt der Wiener Secession geht –
          Papa Kapazunda schafft es, trockene Fakten in echte Unterhaltung
          zu verwandeln.
        </p>
        <p className="text-ink/80 leading-relaxed mt-4">
          Du willst wissen, warum der Stephansdom fast nicht fertiggebaut
          wurde? Oder was die Wiener mit einem „g'scheiten Skandal" bei der
          Ausstellung von Klimts „Der Kuss" zu tun hatten? Papa Kapazunda
          verrät's dir – in seiner unverwechselbaren Art. Jede Folge ist ein
          köstlicher Bissen Wiener Geschichte, kunstvoll serviert mit einem
          Hauch Selbstironie und einer ordentlichen Portion Wiener
          Lebensgefühl.
        </p>
      </section>

      <Bildplatzhalter
        label="Bild: Stephansdom / Hofburg"
        className="my-12"
      />

      <section>
        <h2 className="font-serif text-xl text-ink mb-4 pb-2 border-b border-rule">
          Witzige Einblicke in die Wiener Seele
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Neben den geschichtlichen Highlights der Stadt greift Papa
          Kapazunda auch die kleinen, feinen Eigenheiten der Wiener Kultur
          auf. Warum ist das Kaffeehaus so viel mehr als nur ein Ort, um
          Kaffee zu trinken? Was steckt hinter der morbiden Faszination der
          Wiener für Tod und Begräbnisse? Und warum ist ein Würstelstand
          genauso wichtig wie die Hofburg? Mit scharfem Humor und viel Herz
          erklärt Papa Kapazunda, was Wien und seine Bewohner so besonders
          macht.
        </p>
      </section>

      <section className="mt-12">
        <h2 className="font-serif text-xl text-ink mb-4 pb-2 border-b border-rule">
          Für jeden etwas dabei
        </h2>
        <p className="text-ink/80 leading-relaxed">
          Ob du ein eingefleischter Wiener bist, der gerne in der eigenen
          Geschichte schwelgt, oder ein neugieriger Zugroasta, der wissen
          will, was hinter dem Wiener Grant steckt – in dieser Rubrik
          findest du die perfekte Mischung aus Wissenswertem und Witz. Jede
          Folge dauert nur ein paar Minuten, liefert aber garantiert genug
          Anekdoten, um beim nächsten Kaffeehausbesuch deine Sitznachbarn zu
          beeindrucken.
        </p>
      </section>

      <section className="mt-12 border-t-2 border-brick pt-8">
        <h2 className="font-serif text-2xl text-ink mb-1">
          Jetzt eintauchen!
        </h2>
        <p className="text-ink/70 leading-relaxed">
          Die Rubrik „Wiener Geschichte, Kunst und Kultur" zeigt, dass
          Geschichte nicht langweilig sein muss, sondern mit Schmäh, Charme
          und einem Hauch Nostalgie richtig Spaß macht. Schau dir die ersten
          Folgen an – natürlich mit einer Tasse Kaffee in der Hand.
          Schließlich gehört zu einem „g'scheiten Kapitel Wiener Geschichte"
          immer auch ein bisschen Kaffeehauskultur!
        </p>
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mt-6">
          Die Folgen selbst sind noch in Arbeit
        </p>
      </section>
    </div>
  );
}
