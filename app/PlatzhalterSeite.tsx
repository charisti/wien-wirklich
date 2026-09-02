import Link from "next/link";

export default function PlatzhalterSeite({
  titel,
  beschreibung,
}: {
  titel: string;
  beschreibung?: string;
}) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mb-3">
        In Arbeit
      </p>
      <h1 className="font-serif text-3xl text-ink mb-4">{titel}</h1>
      <p className="text-ink/70">
        {beschreibung ?? "Diese Seite ist noch im Aufbau — schau bald wieder vorbei."}
      </p>
      <Link
        href="/"
        className="inline-block mt-8 text-sm text-brick hover:text-ink transition-colors"
      >
        ← Zurück zum Wörterbuch
      </Link>
    </div>
  );
}
