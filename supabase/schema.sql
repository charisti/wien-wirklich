-- Optionales Datenbank-Schema für Supabase.
-- Führe dieses SQL im Supabase SQL-Editor aus, sobald du von den lokalen
-- JSON-Daten (data/woerter.json) auf eine echte Datenbank umsteigen willst.

create table if not exists woerter (
  slug text primary key,
  wort text not null,
  artikel text default '',
  ipa text default '',
  wortart text not null,
  kategorie text default '',
  definition text not null,
  bedeutungen jsonb default '[]',
  audio_url text default '',
  beispiel text default '',
  synonyme text[] default '{}',
  erstellt_am timestamptz default now()
);

-- Öffentliches Lesen erlauben (Wörterbuch ist frei zugänglich)
alter table woerter enable row level security;

create policy "Wörter sind öffentlich lesbar"
  on woerter for select
  using (true);

-- Optional: Quiz-Fortschritt pro Nutzer, falls du später Logins ergänzt
create table if not exists quiz_ergebnisse (
  id uuid primary key default gen_random_uuid(),
  nutzer_id uuid references auth.users(id),
  wort_slug text references woerter(slug),
  richtig boolean not null,
  beantwortet_am timestamptz default now()
);

alter table quiz_ergebnisse enable row level security;

create policy "Nutzer sehen nur eigene Ergebnisse"
  on quiz_ergebnisse for select
  using (auth.uid() = nutzer_id);

create policy "Nutzer speichern nur eigene Ergebnisse"
  on quiz_ergebnisse for insert
  with check (auth.uid() = nutzer_id);

-- Nutzer-eingereichte Wortvorschlaege ("Neue Wortperlen")
create table if not exists einreichungen (
  id uuid primary key default gen_random_uuid(),
  wort text not null,
  bedeutung text not null,
  kontext text default '',
  name text default '',
  status text not null default 'neu',
  erstellt_am timestamptz default now()
);

alter table einreichungen enable row level security;

-- Jeder darf Vorschlaege einreichen (Insert), aber niemand kann fremde
-- Einreichungen ueber den anon key auslesen (kein Select-Policy) -> die
-- Sichtung erfolgt ueber das Supabase-Dashboard.
create policy "Jeder darf Wortvorschlaege einreichen"
  on einreichungen for insert
  with check (true);

-- Nutzer-eingereichte Gastbeitraege
create table if not exists gastbeitraege (
  id uuid primary key default gen_random_uuid(),
  titel text not null,
  beitrag text not null,
  name text default '',
  themenvorschlag text default '',
  status text not null default 'neu',
  erstellt_am timestamptz default now()
);

alter table gastbeitraege enable row level security;

create policy "Jeder darf einen Gastbeitrag einreichen"
  on gastbeitraege for insert
  with check (true);

-- Nutzer-eingereichte Gastvideos (als Link, kein Datei-Upload)
create table if not exists gastvideos (
  id uuid primary key default gen_random_uuid(),
  wort text not null,
  video_url text not null,
  name text default '',
  kommentar text default '',
  status text not null default 'neu',
  erstellt_am timestamptz default now()
);

alter table gastvideos enable row level security;

create policy "Jeder darf ein Gastvideo einreichen"
  on gastvideos for insert
  with check (true);

-- Storage-Bucket fuer Aussprache-Aufnahmen zu den Woerterbuch-Eintraegen
-- (oeffentlich lesbar, Upload nur durch dich selbst ueber das
-- Supabase-Dashboard -> Storage, nicht ueber die App).
insert into storage.buckets (id, name, public)
values ('aussprache', 'aussprache', true)
on conflict (id) do nothing;

create policy "Aussprache-Dateien sind oeffentlich lesbar"
  on storage.objects for select
  using (bucket_id = 'aussprache');
