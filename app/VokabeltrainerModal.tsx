"use client";

import { useEffect, useRef, useState } from "react";
import type { Wort } from "@/lib/types";

type Status = "laedt" | "bereit" | "fehler";

// Bedeutungstexte enthalten Querverweise als [[Wort]] (siehe app/wort/[slug]).
// Im Popup verlinken wir sie nicht (würde aus der Karteikarte rausführen),
// zeigen aber auch nicht die rohe Klammer-Syntax an.
function ohneVerweisKlammern(text: string): string {
  return text.replace(/\[\[([^\]]+)\]\]/g, "$1");
}

export default function VokabeltrainerModal({
  onClose,
}: {
  onClose: () => void;
}) {
  const [status, setStatus] = useState<Status>("laedt");
  const [wort, setWort] = useState<Wort | null>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  async function naechsterBegriff() {
    setStatus("laedt");
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

  useEffect(() => {
    naechsterBegriff();
  }, []);

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
    };
  }, [onClose]);

  function nochmalAbspielen() {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(() => {});
  }

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
              className="bg-brick text-card px-6 py-3 text-sm hover:bg-ink transition-colors"
            >
              Nochmal versuchen
            </button>
          </div>
        ) : status === "laedt" || !wort ? (
          <p className="text-ink/50 text-sm pr-8">Lädt…</p>
        ) : (
          <>
            <div className="-mx-8 -mt-8 mb-6 px-8 py-5 bg-turkis rounded-t-3xl text-center">
              <h3 className="font-serif text-2xl text-card">Vokabeltrainer</h3>
            </div>

            <div className="flex items-baseline gap-3 flex-wrap">
              <h2 className="font-serif text-3xl text-ink">
                {wort.artikel ? (
                  <span className="text-ink/50 text-xl mr-2">
                    {wort.artikel}
                  </span>
                ) : null}
                {wort.wort}
              </h2>
            </div>

            {(wort.ipa || wort.wortart) && (
              <div className="mt-2 flex items-center gap-3 font-mono text-xs text-ink/50">
                {wort.ipa && <span>/{wort.ipa}/</span>}
                {wort.ipa && wort.wortart && (
                  <span className="w-1 h-1 rounded-full bg-ink/30" />
                )}
                {wort.wortart && <span className="italic">{wort.wortart}</span>}
              </div>
            )}

            {wort.bedeutungen && wort.bedeutungen.length > 0 ? (
              <ol className="mt-5 flex flex-col gap-3">
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
              <p className="mt-5 text-ink leading-relaxed">
                {ohneVerweisKlammern(wort.definition)}
              </p>
            )}

            <div className="mt-6 flex items-center gap-3">
              {wort.audio_url ? (
                <>
                  <audio
                    ref={audioRef}
                    src={wort.audio_url}
                    autoPlay
                    preload="auto"
                  />
                  <button
                    onClick={nochmalAbspielen}
                    aria-label="Aussprache nochmal abspielen"
                    className="flex items-center justify-center w-11 h-11 rounded-full bg-moss text-card hover:bg-ink transition-colors"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="currentColor"
                    >
                      <path d="M4 9v6h4l5 5V4L8 9H4Z" />
                      <path
                        d="M16.5 8.5a5 5 0 0 1 0 7"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        fill="none"
                        strokeLinecap="round"
                      />
                      <path
                        d="M19 6a9 9 0 0 1 0 12"
                        stroke="currentColor"
                        strokeWidth="1.75"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  </button>
                  <span className="text-sm text-ink/50">
                    Aussprache anhören
                  </span>
                </>
              ) : (
                <div className="flex items-center gap-3 text-ink/40">
                  <span
                    className="flex items-center justify-center w-11 h-11 rounded-full border border-rule"
                    aria-hidden
                  >
                    <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                      <path d="M4 9v6h4l5 5V4L8 9H4Z" />
                    </svg>
                  </span>
                  <span className="text-sm">Aussprache-Aufnahme folgt</span>
                </div>
              )}
            </div>

            <div className="mt-8 pt-6 border-t border-rule flex justify-center">
              <button
                onClick={naechsterBegriff}
                className="bg-brick knopf-gradient text-card rounded-full px-8 py-3 text-sm shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all"
              >
                WEITER
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
