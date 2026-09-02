import { createClient } from "@supabase/supabase-js";

// Wird erst gebraucht, sobald du von den lokalen JSON-Daten auf eine echte
// Datenbank umsteigst. Trage dazu die beiden Werte aus deinem Supabase-
// Projekt (Settings -> API) in .env.local ein (siehe .env.local.example).
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  global: {
    // Next.js patcht fetch() und würde GET-Anfragen sonst dauerhaft cachen
    // (auch über Server-Neustarts hinweg) — für Wörterbuch-Daten unerwünscht.
    fetch: (input, init) => fetch(input, { ...init, cache: "no-store" }),
  },
});
