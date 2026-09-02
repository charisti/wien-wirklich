-- Migration: Beispielsatz ist kein Pflichtfeld mehr (nicht jedes Wort hat
-- einen passenden Beispielsatz in der Quelldatei)
alter table woerter alter column beispiel drop not null;
alter table woerter alter column beispiel set default '';
