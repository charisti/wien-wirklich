import Bildplatzhalter from "../Bildplatzhalter";

export default function KontaktSeite() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Kontakt
      </p>
      <h1 className="font-serif text-3xl text-ink mb-8">Schreib uns</h1>

      <p className="text-ink/80 leading-relaxed">
        Du hast ein Wort, das bei uns fehlt? Eine Frage, ein Lob oder Schmäh
        für Papa Kapazunda? Meld dich – wir freuen uns über jede Nachricht.
      </p>

      <Bildplatzhalter
        label="Kontaktformular folgt"
        aspect="aspect-[16/9]"
        className="mt-8"
      />

      <p className="mt-8 text-sm text-ink/50">
        Bis das Formular steht, erreichst du uns über die Kanäle im Footer.
      </p>
    </div>
  );
}
