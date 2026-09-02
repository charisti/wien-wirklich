// Einmaliges Import-Skript: fuehrt alle supabase/<prefix>*.sql Dateien
// nacheinander per RPC (exec_sql) aus. Voraussetzung: supabase/setup_exec_sql.sql
// wurde vorher einmalig im SQL-Editor ausgefuehrt.
//
// Aufruf: node scripts/run-sql-files.cjs [dateiname-praefix]
// Standard-Praefix: import_woerter_

const fs = require("fs");
const path = require("path");
const { createClient } = require("@supabase/supabase-js");

function readEnvLocal() {
  const envPath = path.join(__dirname, "..", ".env.local");
  const content = fs.readFileSync(envPath, "utf-8");
  const env = {};
  for (const line of content.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    env[trimmed.slice(0, idx)] = trimmed.slice(idx + 1);
  }
  return env;
}

async function main() {
  const env = readEnvLocal();
  const url = env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    console.error("Fehlt: NEXT_PUBLIC_SUPABASE_URL oder SUPABASE_SERVICE_ROLE_KEY in .env.local");
    process.exit(1);
  }

  const supabase = createClient(url, serviceKey, {
    auth: { persistSession: false },
  });

  const prefix = process.argv[2] || "import_woerter_";
  const dir = path.join(__dirname, "..", "supabase");
  const pattern = new RegExp(`^${prefix}\\d+\\.sql$`);
  const files = fs
    .readdirSync(dir)
    .filter((f) => pattern.test(f))
    .sort();

  console.log(`Gefunden: ${files.length} Import-Dateien.`);

  let ok = 0;
  for (const file of files) {
    const sql = fs.readFileSync(path.join(dir, file), "utf-8");
    const { error } = await supabase.rpc("exec_sql", { sql });
    if (error) {
      console.error(`FEHLER bei ${file}:`, error.message);
      process.exit(1);
    }
    ok++;
    console.log(`OK  ${file}  (${ok}/${files.length})`);
  }

  console.log("Alle Dateien erfolgreich importiert.");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
