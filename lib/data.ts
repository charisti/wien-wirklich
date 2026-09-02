import { supabase } from "./supabase";
import type { Wort } from "./types";

/**
 * Zentrale Datenzugriffs-Schicht. Liest die Wörter aus Supabase (Tabelle
 * "woerter", siehe supabase/schema.sql).
 */

const SEITENGROESSE = 1000;

export async function getAlleWoerter(): Promise<Wort[]> {
  const alle: Wort[] = [];
  for (let von = 0; ; von += SEITENGROESSE) {
    const { data, error } = await supabase
      .from("woerter")
      .select("*")
      .order("wort")
      .range(von, von + SEITENGROESSE - 1);
    if (error) throw error;
    alle.push(...(data as Wort[]));
    if (data.length < SEITENGROESSE) break;
  }
  return alle;
}

export async function getWortBySlug(slug: string): Promise<Wort | undefined> {
  const { data, error } = await supabase
    .from("woerter")
    .select("*")
    .eq("slug", slug)
    .maybeSingle();
  if (error) throw error;
  return (data as Wort | null) ?? undefined;
}

export async function sucheWoerter(query: string): Promise<Wort[]> {
  const q = query.trim();
  if (!q) return getAlleWoerter();
  const { data, error } = await supabase
    .from("woerter")
    .select("*")
    .or(`wort.ilike.%${q}%,definition.ilike.%${q}%`)
    .order("wort");
  if (error) throw error;
  return data as Wort[];
}

/** Schnelle Vorschlagsliste fuers Autocomplete-Dropdown der Suche. */
export async function getVorschlaege(
  query: string,
  limit = 8
): Promise<Pick<Wort, "slug" | "wort" | "artikel" | "definition">[]> {
  const q = query.trim();
  if (!q) return [];
  const { data, error } = await supabase
    .from("woerter")
    .select("slug, wort, artikel, definition")
    .or(`wort.ilike.%${q}%,definition.ilike.%${q}%`)
    .order("wort")
    .limit(limit);
  if (error) throw error;
  return data as Pick<Wort, "slug" | "wort" | "artikel" | "definition">[];
}

/**
 * Server-seitig paginierte + gefilterte Wortliste fuer die Startseite.
 * Laedt bewusst nur eine Seite (proSeite Eintraege) statt des gesamten
 * Woerterbuchs.
 */
export async function getWoerterSeite(params: {
  query?: string;
  kategorie?: string;
  buchstabe?: string;
  seite?: number; // 1-basiert
  proSeite?: number;
}): Promise<{ items: Wort[]; gesamt: number }> {
  const proSeite = params.proSeite ?? 50;
  const seite = Math.max(1, params.seite ?? 1);
  const von = (seite - 1) * proSeite;
  const bis = von + proSeite - 1;

  let abfrage = supabase
    .from("woerter")
    .select("*", { count: "exact" })
    .order("wort");

  if (params.kategorie) {
    abfrage = abfrage.eq("kategorie", params.kategorie);
  }
  if (params.buchstabe) {
    abfrage = abfrage.ilike("wort", `${params.buchstabe}%`);
  }
  const q = params.query?.trim();
  if (q) {
    abfrage = abfrage.or(`wort.ilike.%${q}%,definition.ilike.%${q}%`);
  }

  const { data, error, count } = await abfrage.range(von, bis);
  if (error) throw error;
  return { items: data as Wort[], gesamt: count ?? 0 };
}

/** Kategorienamen mit Wortanzahl, ohne die vollen Wort-Datensaetze zu laden. */
export async function getKategorienMitAnzahl(): Promise<
  { name: string; anzahl: number }[]
> {
  const zaehler = new Map<string, number>();
  for (let von = 0; ; von += SEITENGROESSE) {
    const { data, error } = await supabase
      .from("woerter")
      .select("kategorie")
      .range(von, von + SEITENGROESSE - 1);
    if (error) throw error;
    for (const row of data as { kategorie: string | null }[]) {
      if (!row.kategorie) continue;
      zaehler.set(row.kategorie, (zaehler.get(row.kategorie) ?? 0) + 1);
    }
    if (data.length < SEITENGROESSE) break;
  }
  return [...zaehler.entries()].map(([name, anzahl]) => ({ name, anzahl }));
}

/** Anfangsbuchstaben, fuer die es mindestens ein Wort gibt (A-Z-Leiste). */
export async function getVorhandeneBuchstaben(): Promise<string[]> {
  const buchstaben = new Set<string>();
  for (let von = 0; ; von += SEITENGROESSE) {
    const { data, error } = await supabase
      .from("woerter")
      .select("wort")
      .range(von, von + SEITENGROESSE - 1);
    if (error) throw error;
    for (const row of data as { wort: string }[]) {
      buchstaben.add(row.wort[0].toUpperCase());
    }
    if (data.length < SEITENGROESSE) break;
  }
  return [...buchstaben];
}

export async function getAlleSlugs(): Promise<Set<string>> {
  const slugs = new Set<string>();
  for (let von = 0; ; von += SEITENGROESSE) {
    const { data, error } = await supabase
      .from("woerter")
      .select("slug")
      .range(von, von + SEITENGROESSE - 1);
    if (error) throw error;
    for (const w of data as { slug: string }[]) slugs.add(w.slug);
    if (data.length < SEITENGROESSE) break;
  }
  return slugs;
}

export async function einreichungSpeichern(eintrag: {
  wort: string;
  bedeutung: string;
  kontext: string;
  name: string;
}): Promise<void> {
  const { error } = await supabase.from("einreichungen").insert({
    wort: eintrag.wort.trim(),
    bedeutung: eintrag.bedeutung.trim(),
    kontext: eintrag.kontext.trim(),
    name: eintrag.name.trim(),
  });
  if (error) throw error;
}

export async function gastbeitragSpeichern(eintrag: {
  titel: string;
  beitrag: string;
  name: string;
  themenvorschlag: string;
}): Promise<void> {
  const { error } = await supabase.from("gastbeitraege").insert({
    titel: eintrag.titel.trim(),
    beitrag: eintrag.beitrag.trim(),
    name: eintrag.name.trim(),
    themenvorschlag: eintrag.themenvorschlag.trim(),
  });
  if (error) throw error;
}

export async function gastvideoSpeichern(eintrag: {
  wort: string;
  videoUrl: string;
  name: string;
  kommentar: string;
}): Promise<void> {
  const { error } = await supabase.from("gastvideos").insert({
    wort: eintrag.wort.trim(),
    video_url: eintrag.videoUrl.trim(),
    name: eintrag.name.trim(),
    kommentar: eintrag.kommentar.trim(),
  });
  if (error) throw error;
}

export async function getZufallsWoerter(anzahl: number): Promise<Wort[]> {
  const alle = await getAlleWoerter();
  const kopie = [...alle];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie.slice(0, anzahl);
}
