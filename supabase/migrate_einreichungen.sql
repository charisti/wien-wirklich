-- Migration: Tabelle fuer nutzer-eingereichte Wortvorschlaege ("Neue Wortperlen")
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
