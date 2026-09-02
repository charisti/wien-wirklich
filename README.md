# Lexikon

Ein kleines Wörterbuch-Projekt mit Suche, Wort-Detailseiten und einem
Multiple-Choice-Quiz zum Üben. Gebaut mit Next.js, TypeScript und Tailwind CSS.

## Schnellstart

Voraussetzung: [Node.js](https://nodejs.org) (Version 18 oder neuer).

```bash
npm install
npm run dev
```

Danach ist die Seite unter `http://localhost:3000` erreichbar. Es ist **kein
Datenbank-Setup nötig** — die Wörter kommen standardmäßig aus
`data/woerter.json`.

## Projektstruktur

```
app/
  page.tsx              → Startseite: Suche + Alphabet-Register
  wort/[slug]/page.tsx  → Detailseite für ein einzelnes Wort
  quiz/page.tsx         → Multiple-Choice-Quiz
data/
  woerter.json          → Der Wortschatz (hier neue Wörter ergänzen)
lib/
  data.ts               → Zugriff auf die Wörter (aktuell: JSON-Datei)
  supabase.ts           → Vorbereiteter Supabase-Client (optional)
supabase/
  schema.sql            → Datenbank-Schema für den Umstieg auf Supabase
```

## Eigene Wörter hinzufügen

Trag einfach einen neuen Eintrag in `data/woerter.json` ein:

```json
{
  "slug": "eindeutiger-url-name",
  "wort": "Beispielwort",
  "artikel": "das",
  "ipa": "lautschrift-hier",
  "wortart": "Substantiv",
  "definition": "Was das Wort bedeutet.",
  "beispiel": "Ein Beispielsatz mit dem Wort."
}
```

Die Such-, Register- und Quiz-Funktion greifen automatisch neue Einträge auf.

## Von JSON auf eine echte Datenbank umsteigen (optional)

Sobald mehr als eine Handvoll Leute Wörter pflegen sollen oder du Nutzerkonten
mit Quiz-Fortschritt willst, lohnt sich Supabase (kostenlose Postgres-Datenbank
mit fertigem Web-Interface):

1. Kostenloses Projekt auf [supabase.com](https://supabase.com) anlegen.
2. Das SQL aus `supabase/schema.sql` im Supabase SQL-Editor ausführen.
3. `.env.local.example` zu `.env.local` kopieren und die beiden Werte aus
   Supabase (Settings → API) eintragen.
4. In `lib/data.ts` die Funktionen so anpassen, dass sie `supabase` aus
   `lib/supabase.ts` statt der JSON-Datei verwenden. Die Seiten selbst
   (`app/page.tsx`, `app/wort/[slug]/page.tsx`, `app/quiz/page.tsx`) müssen
   dafür nicht verändert werden.

## Deployment

Am einfachsten mit [Vercel](https://vercel.com): Repository verbinden, fertig
— kein weiteres Setup nötig, solange du bei den lokalen JSON-Daten bleibst.
Bei Supabase-Anbindung zusätzlich die beiden Umgebungsvariablen aus
`.env.local` in den Vercel-Projekteinstellungen hinterlegen.

## Design

Die Optik orientiert sich an gedruckten Wörterbüchern: Papierton-Hintergrund,
eine Serifenschrift für die Stichwörter, ein Alphabet-Register am Rand wie bei
echten Nachschlagewerken, und "Guide Words" oben in der Wortliste — genau wie
am Kopf einer Wörterbuchseite.
