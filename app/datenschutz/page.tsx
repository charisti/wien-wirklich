function Abschnitt({
  titel,
  children,
}: {
  titel: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-10">
      <h2 className="font-serif text-xl text-ink mb-3">{titel}</h2>
      <div className="text-ink/70 leading-relaxed text-sm flex flex-col gap-3">
        {children}
      </div>
    </section>
  );
}

export default function DatenschutzSeite() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-12">
      <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
        Datenschutz
      </p>
      <h1 className="font-serif text-3xl text-ink mb-6">
        Datenschutzerklärung
      </h1>

      <div className="border border-brick/30 bg-brick/5 px-4 py-3 text-sm text-ink/70">
        Platzhalter-Entwurf: beschreibt den aktuellen technischen Stand der
        Seite, ersetzt aber keine rechtliche Prüfung. Bitte vor Livegang von
        einer fachkundigen Person (z. B. Anwalt:in) gegenlesen lassen –
        insbesondere Verantwortliche:r, Rechtsgrundlagen und
        Aufbewahrungsfristen fehlen noch.
      </div>

      <Abschnitt titel="Verantwortlicher">
        <p>[Name / Firma, Anschrift, E-Mail – siehe Impressum]</p>
      </Abschnitt>

      <Abschnitt titel="Hosting & Server-Verarbeitung">
        <p>
          Die Wörterbuch-Einträge werden über Supabase (Datenbank- und
          Backend-Dienst) verwaltet und beim Aufruf der Seite geladen. Beim
          Zugriff auf diese Seite können technisch bedingt Server-Logdaten
          (z. B. IP-Adresse, Zeitpunkt, aufgerufene Seite) anfallen.
        </p>
      </Abschnitt>

      <Abschnitt titel="Formulare & freiwillige Einreichungen">
        <p>
          Wenn du uns über die Formulare auf dieser Seite (z. B. „Neue
          Wortperlen“, Gastbeiträge, Gastvideos, Kontakt) Inhalte schickst,
          verarbeiten wir die dabei freiwillig angegebenen Daten (etwa Name,
          eingereichter Text oder Link) ausschließlich zur Bearbeitung deiner
          Einreichung.
        </p>
      </Abschnitt>

      <Abschnitt titel="Cookies & Tracking">
        <p>
          Diese Seite setzt aktuell keine Analyse- oder Tracking-Cookies ein.
          Schriftarten werden serverseitig eingebunden, es finden dabei keine
          Anfragen an Google statt.
        </p>
      </Abschnitt>

      <Abschnitt titel="Deine Rechte">
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung und
          Einschränkung der Verarbeitung deiner Daten sowie auf
          Datenübertragbarkeit und Widerspruch. Wende dich dazu an die oben
          genannte verantwortliche Stelle.
        </p>
      </Abschnitt>
    </div>
  );
}
