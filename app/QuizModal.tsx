"use client";

import { useEffect, useRef, useState } from "react";
import type { Wort } from "@/lib/types";

type Status = "laedt" | "bereit" | "fehler";

const SPRUECHE = [
  "Nau, bist a Blitzgneissa oda ned?",
  "Na geh, des waaß sogoa da Foxl vom Nochban!",
  "Brodl ned so laung umanaund, sunst reiß I no a Bankl!",
  "Druck jetzt endlich, oda I druck fia di – 5-4-3-2-1 – z'spät!!",
];

const AUFDECK_SEKUNDEN = 30;
const SPRUCH_ABSTAND_MS = 7000;
const AUTO_WEITER_PAUSE_MS = 3000;

// Bedeutungstexte enthalten Querverweise als [[Wort]] (siehe app/wort/[slug]).
function ohneVerweisKlammern(text: string): string {
  return text.replace(/\[\[([^\]]+)\]\]/g, "$1");
}

export default function QuizModal({ onClose }: { onClose: () => void }) {
  const [status, setStatus] = useState<Status>("laedt");
  const [wort, setWort] = useState<Wort | null>(null);
  const [uebersetzungSichtbar, setUebersetzungSichtbar] = useState(false);
  const [automatischAufgedeckt, setAutomatischAufgedeckt] = useState(false);
  const [spruchIndex, setSpruchIndex] = useState(0);

  const timeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  function timerAufraeumen() {
    timeoutsRef.current.forEach(clearTimeout);
    timeoutsRef.current = [];
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  async function naechsterBegriff() {
    timerAufraeumen();
    setStatus("laedt");
    setUebersetzungSichtbar(false);
    setAutomatischAufgedeckt(false);
    setSpruchIndex(0);
    try {
      const res = await fetch("/api/vokabeltrainer/zufall", {
        cache: "no-store",
      });
      if (!res.ok) throw new Error("Anfrage fehlgeschlagen");
      const daten: Wort = await res.json();
      setWort(daten);
      setStatus("bereit");
    } catch {
      setStatus("fehler");
    }
  }

  function uebersetzungAnzeigen(automatisch: boolean) {
    timerAufraeumen();
    setUebersetzungSichtbar(true);
    setAutomatischAufgedeckt(automatisch);
    if (automatisch) {
      const t = setTimeout(naechsterBegriff, AUTO_WEITER_PAUSE_MS);
      timeoutsRef.current.push(t);
    }
  }

  useEffect(() => {
    naechsterBegriff();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Sprüche rotieren + 30s-Timer, solange die Übersetzung noch verborgen ist.
  useEffect(() => {
    if (status !== "bereit" || uebersetzungSichtbar) return;

    intervalRef.current = setInterval(() => {
      setSpruchIndex((i) => Math.min(i + 1, SPRUECHE.length - 1));
    }, SPRUCH_ABSTAND_MS);

    const aufdeckTimeout = setTimeout(
      () => uebersetzungAnzeigen(true),
      AUFDECK_SEKUNDEN * 1000
    );
    timeoutsRef.current.push(aufdeckTimeout);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status, uebersetzungSichtbar, wort]);

  useEffect(() => {
    const vorherigerOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function beiEscape(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", beiEscape);
    return () => {
      document.body.style.overflow = vorherigerOverflow;
      window.removeEventListener("keydown", beiEscape);
      timerAufraeumen();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onClose]);

  return (
    <div
      className="animate-modal-hintergrund fixed inset-0 z-50 flex items-center justify-center p-4 bg-ink/60"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="animate-modal-karte relative bg-card bg-gradient-to-br from-[#C7DAB4]/50 to-[#F0C349]/50 rounded-3xl shadow-lg max-w-lg w-full max-h-[90vh] overflow-y-auto p-8">
        <button
          onClick={onClose}
          aria-label="Schließen"
          className="absolute top-4 right-4 w-9 h-9 flex items-center justify-center rounded-full bg-card/70 text-ink/60 hover:text-ink hover:bg-card shadow-sm transition-colors"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.75">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        </button>

        {status === "fehler" ? (
          <div className="flex flex-col items-start gap-4 pr-8">
            <p className="text-sm text-ink/60">
              Da ist leider was schiefgegangen. Probier's nochmal.
            </p>
            <button
              onClick={naechsterBegriff}
              className="bg-brick knopf-gradient text-card rounded-full px-6 py-3 text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
            >
              Nochmal versuchen
            </button>
          </div>
        ) : status === "laedt" || !wort ? (
          <p className="text-ink/50 text-sm pr-8">Lädt…</p>
        ) : (
          <>
            <div className="-mx-8 -mt-8 mb-6 px-8 py-5 bg-brick rounded-t-3xl text-center">
              <h3 className="font-serif text-2xl text-card leading-none">
                Wortquizzen
              </h3>
            </div>

            <p className="text-ink/50 text-sm mb-3">
              Was bedeutet dieses Wort?
            </p>
            <div className="flex items-baseline gap-3 flex-wrap mb-4">
              <h2 className="font-serif text-4xl text-ink">
                {wort.artikel ? (
                  <span className="text-ink/50 text-2xl mr-2">
                    {wort.artikel}
                  </span>
                ) : null}
                {wort.wort}
              </h2>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <span
                className="flex items-center justify-center w-9 h-9 rounded-full border border-rule text-ink/40"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M4 9v6h4l5 5V4L8 9H4Z" />
                </svg>
              </span>
              <span className="text-xs text-ink/40">
                Aussprache-Aufnahme folgt
              </span>
            </div>

            {!uebersetzungSichtbar && (
              <p className="min-h-[2.5rem] text-brick italic text-sm mb-6 transition-opacity">
                „{SPRUECHE[spruchIndex]}"
              </p>
            )}

            {uebersetzungSichtbar ? (
              <>
                {wort.bedeutungen && wort.bedeutungen.length > 0 ? (
                  <ol className="flex flex-col gap-3 mb-6">
                    {wort.bedeutungen.map((b, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="font-mono text-xs text-ink/40 pt-0.5">
                          {i + 1}
                        </span>
                        <p className="text-ink leading-relaxed">
                          {b.kategorie && (
                            <span className="italic text-ink/50 text-sm mr-1.5">
                              ({b.kategorie})
                            </span>
                          )}
                          {ohneVerweisKlammern(b.text)}
                        </p>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <p className="text-ink leading-relaxed mb-6">
                    {ohneVerweisKlammern(wort.definition)}
                  </p>
                )}

                {automatischAufgedeckt ? (
                  <p className="text-xs text-ink/40 italic">
                    Nächster Begriff kommt gleich …
                  </p>
                ) : (
                  <div className="pt-2 flex justify-center">
                    <button
                      onClick={naechsterBegriff}
                      className="bg-ink knopf-gradient text-card rounded-full px-8 py-3 text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                    >
                      Nächster Begriff
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="pt-2 flex justify-center">
                <button
                  onClick={() => uebersetzungAnzeigen(false)}
                  className="bg-brick knopf-gradient text-card rounded-full px-8 py-3 text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
                >
                  Übersetzung anzeigen
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
