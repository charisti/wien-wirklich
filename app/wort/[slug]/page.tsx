import Link from "next/link";
import { notFound } from "next/navigation";
import { getWortBySlug, getAlleWoerter, getAlleSlugs } from "@/lib/data";
import { slugify } from "@/lib/slugify";

export async function generateStaticParams() {
  const alle = await getAlleWoerter();
  return alle.map((w) => ({ slug: w.slug }));
}

// Bedeutungstexte enthalten Querverweise als [[Wort]] (z.B. "siehe auch
// [[tachinieren]]") — wird zu einem Link, wenn's das Wort bei uns gibt,
// sonst bleibt's einfacher Text.
function MitVerweisen({
  text,
  bekannteSlugs,
  eigenerSlug,
}: {
  text: string;
  bekannteSlugs: Set<string>;
  eigenerSlug: string;
}) {
  const teile = text.split(/(\[\[[^\]]+\]\])/g);
  return (
    <>
      {teile.map((teil, i) => {
        const match = teil.match(/^\[\[([^\]]+)\]\]$/);
        if (!match) return <span key={i}>{teil}</span>;
        const verweisWort = match[1];
        const verweisSlug = slugify(verweisWort);
        if (verweisSlug !== eigenerSlug && bekannteSlugs.has(verweisSlug)) {
          return (
            <Link
              key={i}
              href={`/wort/${verweisSlug}`}
              className="text-brick hover:underline whitespace-nowrap"
            >
              → {verweisWort}
            </Link>
          );
        }
        return <span key={i}>{verweisWort}</span>;
      })}
    </>
  );
}

export default async function WortSeite({
  params,
}: {
  params: { slug: string };
}) {
  const [wort, bekannteSlugs] = await Promise.all([
    getWortBySlug(params.slug),
    getAlleSlugs(),
  ]);

  if (!wort) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <Link
        href="/woerterbuch"
        className="text-sm text-ink/50 hover:text-brick transition-colors"
      >
        ← Zurück zum Register
      </Link>

      <div className="mt-6 border-t border-brick pt-6">
        <div className="flex items-baseline gap-3 flex-wrap">
          <h1 className="font-serif text-5xl text-ink">
            {wort!.artikel ? (
              <span className="text-ink/50 text-3xl mr-2">
                {wort!.artikel}
              </span>
            ) : null}
            {wort!.wort}
          </h1>
        </div>

        {(wort!.ipa || wort!.wortart) && (
          <div className="mt-3 flex items-center gap-3 font-mono text-sm text-ink/50">
            {wort!.ipa && <span>/{wort!.ipa}/</span>}
            {wort!.ipa && wort!.wortart && (
              <span className="w-1 h-1 rounded-full bg-ink/30" />
            )}
            {wort!.wortart && (
              <span className="italic font-sans">{wort!.wortart}</span>
            )}
          </div>
        )}

        {wort!.kategorie && (
          <span className="inline-block mt-4 text-xs uppercase tracking-wide text-brick border border-brick/30 bg-brick/5 px-2.5 py-1">
            {wort!.kategorie}
          </span>
        )}

        {wort!.bedeutungen && wort!.bedeutungen.length > 0 ? (
          <ol className="mt-8 flex flex-col gap-4">
            {wort!.bedeutungen.map((b, i) => (
              <li key={i} className="flex gap-3">
                <span className="font-mono text-sm text-ink/40 pt-0.5">
                  {i + 1}
                </span>
                <p className="text-lg leading-relaxed text-ink">
                  {b.kategorie && (
                    <span className="italic text-ink/50 text-base mr-1.5">
                      ({b.kategorie})
                    </span>
                  )}
                  <MitVerweisen
                    text={b.text}
                    bekannteSlugs={bekannteSlugs}
                    eigenerSlug={wort!.slug}
                  />
                </p>
              </li>
            ))}
          </ol>
        ) : (
          <p className="mt-8 text-lg leading-relaxed text-ink">
            {wort!.definition}
          </p>
        )}

        {wort!.beispiel && (
          <div className="mt-8 border-l-2 border-rule pl-4">
            <p className="text-ink/70 italic">„{wort!.beispiel}“</p>
          </div>
        )}

        <div className="mt-8">
          <p className="font-mono text-xs uppercase tracking-wide text-ink/40 mb-2">
            Aussprache
          </p>
          {wort!.audio_url ? (
            <audio
              controls
              preload="none"
              src={wort!.audio_url}
              className="w-full"
            >
              Dein Browser unterstützt keine Audio-Wiedergabe.
            </audio>
          ) : (
            <div className="flex items-center gap-3 border border-rule bg-card px-4 py-3">
              <span className="text-ink/30 text-lg" aria-hidden>
                ▶
              </span>
              <span className="text-sm text-ink/50">
                Aussprache-Aufnahme folgt
              </span>
            </div>
          )}
        </div>

        {wort!.synonyme && wort!.synonyme.length > 0 && (
          <div className="mt-8 text-sm">
            <span className="text-ink/50">Sinnverwandt: </span>
            {wort!.synonyme.join(", ")}
          </div>
        )}
      </div>

      <div className="mt-12 pt-6 border-t border-rule">
        <Link
          href="/quiz"
          className="inline-block bg-brick text-card px-5 py-2.5 text-sm hover:bg-ink transition-colors"
        >
          Im Quiz üben
        </Link>
      </div>
    </div>
  );
}
