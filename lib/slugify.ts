const UMLAUTE: Record<string, string> = { ä: "ae", ö: "oe", ü: "ue", ß: "ss" };

const KOMBINIERENDE_DIAKRITIKA = new RegExp("[̀-ͯ]", "g");

export function slugify(wort: string): string {
  let s = wort.toLowerCase();
  for (const [k, v] of Object.entries(UMLAUTE)) {
    s = s.split(k).join(v);
  }
  s = s.normalize("NFKD").replace(KOMBINIERENDE_DIAKRITIKA, "");
  s = s.replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  return s;
}
