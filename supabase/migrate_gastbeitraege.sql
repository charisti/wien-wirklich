-- Migration: Tabelle fuer eingereichte Gastbeitraege
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

-- Jeder darf einreichen (Insert), aber niemand kann fremde Beitraege ueber
-- den anon key auslesen (kein Select-Policy) -> Sichtung im Dashboard.
create policy "Jeder darf einen Gastbeitrag einreichen"
  on gastbeitraege for insert
  with check (true);
