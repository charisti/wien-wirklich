-- Migration: Tabelle fuer eingereichte Gastvideos
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

-- Jeder darf einreichen (Insert), aber niemand kann fremde Videos ueber
-- den anon key auslesen (kein Select-Policy) -> Sichtung im Dashboard.
create policy "Jeder darf ein Gastvideo einreichen"
  on gastvideos for insert
  with check (true);
