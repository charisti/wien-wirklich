import Bildplatzhalter from "./Bildplatzhalter";
import ScrollReveal from "./ScrollReveal";

export default function StartseiteSektion({
  eyebrow,
  titel,
  children,
  bildLinks = false,
  bildLabel = "Bild folgt",
  hintergrund = false,
}: {
  eyebrow: string;
  titel: string;
  children: React.ReactNode;
  /** Bild links statt rechts anzeigen (für abwechselnde Sektionen). */
  bildLinks?: boolean;
  bildLabel?: string;
  /** Leicht abgesetzter Hintergrund, um lange Seiten optisch zu rhythmisieren. */
  hintergrund?: boolean;
}) {
  return (
    <section
      className={`relative border-t border-rule ${hintergrund ? "bg-card/40" : ""}`}
    >
      <div className="max-w-6xl mx-auto px-6 py-16 sm:py-20">
        <ScrollReveal className="grid gap-10 md:gap-14 md:grid-cols-2 items-center">
          <div className={bildLinks ? "md:order-2" : ""}>
            <p className="font-mono text-xs uppercase tracking-widest text-brick mb-3">
              {eyebrow}
            </p>
            <h2 className="font-serif text-2xl sm:text-3xl text-ink leading-snug mb-5">
              {titel}
            </h2>
            <div className="text-ink/70 leading-relaxed flex flex-col gap-4">
              {children}
            </div>
          </div>
          <div
            className={`rounded-3xl overflow-hidden shadow-sm transition-transform duration-500 hover:scale-[1.02] ${bildLinks ? "md:order-1" : ""}`}
          >
            <Bildplatzhalter aspect="aspect-[4/3]" label={bildLabel} />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
