-- Migration: Audio-Aussprache pro Wort
alter table woerter add column if not exists audio_url text default '';

-- Storage-Bucket fuer Aussprache-Aufnahmen (oeffentlich lesbar, Upload nur
-- durch dich selbst ueber das Supabase-Dashboard -> Storage, nicht ueber
-- die App).
insert into storage.buckets (id, name, public)
values ('aussprache', 'aussprache', true)
on conflict (id) do nothing;

create policy "Aussprache-Dateien sind oeffentlich lesbar"
  on storage.objects for select
  using (bucket_id = 'aussprache');
