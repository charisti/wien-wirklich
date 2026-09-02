-- Schema (siehe supabase/schema.sql)
-- Optionales Datenbank-Schema für Supabase.
-- Führe dieses SQL im Supabase SQL-Editor aus, sobald du von den lokalen
-- JSON-Daten (data/woerter.json) auf eine echte Datenbank umsteigen willst.

create table if not exists woerter (
  slug text primary key,
  wort text not null,
  artikel text default '',
  ipa text default '',
  wortart text not null,
  definition text not null,
  beispiel text not null,
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


-- Testdaten: 40 Eintraege aus WOERTERBUCH WIENERISCH-DEUTSCH
insert into woerter (slug, wort, artikel, ipa, wortart, definition, beispiel) values
  ('owezaan', 'owezaan', '', '', '', 'nach unten zerren', 'Des zaad mi owe!'),
  ('beidlrotz', 'Beidlrotz', 'der', '', '', 'Sackratte', 'Dea Typ is a echta Beidlrotz - pickd auf dia wiara feichta Sockn im Hochsomma!'),
  ('kraecka', 'Kräcka', 'der', '', '', 'Kräcker', 'Kräcka kriang'),
  ('topfnbuchtl', 'Topfnbuchtl', 'die', '', '', 'Buchtel mit Topfenfülle', 'So flaumig aussn und so softig innan - a Topfnbuchtl, wias sei soi!'),
  ('blau', 'blau', '', '', '', 'blaufarben', 'Dea woa gestan so blau, dea hädad im Schdee schlofn kenna!'),
  ('draadiwaawal', 'Draadiwaawal', 'das', '', '', 'Dradiwaberl', 'Mei Leebm is wiara wüüds Draadiwaawal - ollawäu draad si ollas im Kraas und nix bleibd laung gleich!'),
  ('eadaepfaenuudln', 'Eadäpfänuudln', 'die', '', '', 'Erdäpfelnudeln', 'Obsd Eadäpfänuudln, Schupfnuudln oda Wuuzlnuudln zu eana sogsd - gmaand san in Wiin imma desööbn goidbraun ausbockanan Kartoffänuudln!'),
  ('fleckaln', 'Fleckaln', 'die', '', '', 'Nudelteigfleckchen', 'De Fleckaln wean im Soizwossa bissfest kochd!'),
  ('gaudich', 'gaudich', '', '', '', 'spaßig', 'Des Festl gestan woa echd gaudich!'),
  ('gucka', 'Gucka', '', '', '', 'Gerät zum Gucken', 'Mia brennan de Gucka vom Rauch!'),
  ('haatschn', 'haatschn', '', '', '', 'schleifenden Schrittes gehen', 'Wia san duachn kniahoochn Schnää ghaascht, dass de Waadln brennd haum!'),
  ('woeoechans', 'wööchans', '', '', '', 'welches', 'Wööchans von de Maadln geed fremd?'),
  ('lawuafut', 'Lawuafut', '', '', '', 'eine Votze so groß wie eine Waschschüssel', 'De hod a Lawuafut, do kaunnsd es Foaraadl drin parkn!'),
  ('johannistriablarin', 'Johannistriablarin', 'die', '', '', 'Johannistrieblerin', 'Schau da de zwaa Johannistriabla au - de glüün si geengseitig au wia zwa haasse Oofnrealn!'),
  ('gneissa', 'Gneissa', 'der', '', '', 'Gneißer', 'Nuara Gneissa wia du duachschaud so an Schmää!'),
  ('muffn', 'Muffn', 'die', '', '', 'Muffe', 'Waunns in da Muffn zischd, host wos foisch gmochd - gaunz aafoch!'),
  ('ochtl', 'Ochtl', 'das', '', '', 'Achtel', 'A Ochtl in Ean kaunn kaana vawean!'),
  ('boozad', 'boozad', '', '', '', 'patzig', 'De Kneedln san nix wuan - gaunz boozad innan, wia rooha Motschka!'),
  ('plutzaschaeaedl', 'Plutzaschäädl', 'der', '', '', 'Plutzerschädel', 'Den sei Plutzaschäädl passt in kan Hööm - hechstns in an Kochtopf!'),
  ('oag', 'oag', '', '', '', 'arg', 'Dass eam aafoch goosted haum, is echt oag!'),
  ('huebschlarin', 'Hübschlarin', 'die', '', '', 'Dame, die sich hübsch macht', 'Ea hod de Hübschlarin fiara Baroness ghoidn - ka Wunda, woas doch scheena auzoong ois sei eigane Frau Gemoolin!'),
  ('luluu', 'Luluu', 'das', '', '', 'Lulu', 'Mei Klaane mochd schoo Luluu ins Topfal!'),
  ('giggln', 'giggln', '', '', '', 'giggeln', 'De giggld imma wiara bülliche Braut, waunn da Schääf ins Zimma kummd!'),
  ('quaagltreeda', 'Quaagltreeda', 'der', '', '', 'Quargeltreter', 'Deck de Quaagltreeda zua, sunst kippt uns noo wea um!'),
  ('reischal', 'Reischal', 'das', '', '', 'Räuschchen', 'A Schbitzal, a Schwipsal, a Reischal, a Schwaumm is unsa tägliches Oaweitsprogramm!'),
  ('moongschaas', 'Moongschaas', 'der', '', '', 'Magenfurz', 'Mei Moongschaas brauchd kaan Vaschdäaka - dea dunnad duachs gaunze Lokal wiara a Kanoonanschuss!'),
  ('asfaltduttl', 'Asfaltduttl', 'die', '', '', 'Asphalttuttel', 'De Asfaltduttl hod mea Karakta ois a jeeds neiche Auto!'),
  ('schnoizn', 'schnoizn', '', '', '', 'schnalzen', 'I schnoiz da glei aane!'),
  ('auduusld', 'auduusld', '', '', '', 'angeduselt', 'A Weanaliad kaunnst nua singan, waunnst a bissl auduusld bist!'),
  ('ausuudan', 'ausuudan', '', '', '', 'anjammern', 'Suuda mi ned au!'),
  ('gschial', 'Gschial', '', '', '', 'Pflanzgeschirr', 'Schdeig ins Gschial und blia ois Holunda!'),
  ('deamoin', 'deamoin', '', '', '', 'dermals', 'Deamoin ois Schdudent in Wean hob I mea im Beisl gleand ois in da Uni!'),
  ('eifian', 'eifian', '', '', '', 'hineinschieben', 'Des kaunnst da eifian!'),
  ('gladioin', 'Gladioin', '', '', '', 'Gladiole', 'Waunnst deppat bist, kriagst ane aufd Gladioin!'),
  ('gschissn', 'gschissn', '', '', '', 'beschissen', 'Da Schääf lossd imma wiida so gschissane Bemeakungan foin!'),
  ('wossa', 'Wossa', '', '', '', 'Wasser', 'Du bist flüssiga ois Wossa - iwaflüssig!'),
  ('voiholla', 'Voiholla', '', '', '', 'totaler Quatsch', 'Dazöö kaan Voiholla - des glaubd da ää kaana!'),
  ('schnoofal', 'Schnoofal', '', '', '', 'Verziehen des Mundes', 'Ziag ned so a Schnoofal!'),
  ('aupassian', 'aupassian', '', '', '', 'anpassieren', 'Ned reesdn, du Hööd, nua aupassian! Waunn d''Zwiifän braun wean, hostas vageigd!'),
  ('neafnbinkal', 'Neafnbinkal', '', '', '', 'Nervenbündelchen', 'Waunn I aun mei Oide dahaam denk, weari zum Neafnbinkal!')
on conflict (slug) do nothing;