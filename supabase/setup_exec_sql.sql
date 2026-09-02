-- Einmalig ausfuehren: erlaubt es dem Import-Skript (mit dem service_role
-- Key), die 53 Wörterbuch-Import-Dateien automatisiert auszufuehren, ohne
-- dass du sie einzeln in den SQL-Editor kopieren musst.
--
-- Sicherheit: nur die service_role (server-seitig, nie im Browser) darf
-- diese Funktion aufrufen.

create or replace function exec_sql(sql text)
returns void
language plpgsql
security definer
as $$
begin
  execute sql;
end;
$$;

revoke execute on function exec_sql(text) from public, anon, authenticated;
grant execute on function exec_sql(text) to service_role;
