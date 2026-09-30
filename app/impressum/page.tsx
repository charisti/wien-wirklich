function Feld({ label, wert }: { label: string; wert: string }) {
  return (
    <div>
      <p className="font-mono text-xs uppercase tracking-wide text-ink/40">
        {label}
      </p>
      <p className="text-ink/80">{wert}</p>
    </div>
  );
}

export default function ImpressumSeite() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Impressum
      </p>
      <h1 className="font-serif text-3xl text-ink mb-6">
        Angaben gemäß § 5 ECG, § 25 Mediengesetz
      </h1>

      <div className="border border-brick/30 bg-brick/5 px-4 py-3 text-sm text-ink/70 mb-10">
        Platzhalter-Seite: Die Felder unten sind noch nicht ausgefüllt. Bitte
        vor Livegang durch die echten Angaben ersetzen (am besten mit einem
        Impressum-Generator, z. B. der WKO, gegenprüfen).
      </div>

      <div className="flex flex-col gap-6">
        <Feld label="Medieninhaber:in / Betreiber:in" wert="[Name / Firma]" />
        <Feld label="Anschrift" wert="[Straße, PLZ, Ort]" />
        <Feld label="Vertretungsberechtigte:r" wert="[Name]" />
        <Feld label="E-Mail" wert="[kontakt@…]" />
        <Feld label="Telefon" wert="[optional]" />
        <Feld label="Unternehmensgegenstand" wert="[z. B. Online-Wörterbuch]" />
        <Feld label="Firmenbuchnummer / -gericht" wert="[falls zutreffend]" />
        <Feld label="UID-Nummer" wert="[falls zutreffend]" />
        <Feld label="Zuständige Kammer / Aufsichtsbehörde" wert="[falls zutreffend]" />
      </div>

      <div className="mt-12 pt-8 border-t border-rule">
        <h2 className="font-serif text-xl text-ink mb-3">Haftungsausschluss</h2>
        <p className="text-ink/70 leading-relaxed text-sm">
          Die Inhalte dieser Seite wurden mit Sorgfalt zusammengestellt,
          Vollständigkeit und Richtigkeit können dennoch nicht garantiert
          werden. Für Links zu externen Websites übernehmen wir keine
          Verantwortung für deren Inhalte.
        </p>
      </div>
    </div>
  );
}
