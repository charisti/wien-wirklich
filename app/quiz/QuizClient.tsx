"use client";

import { useEffect, useState } from "react";
import type { Wort } from "@/lib/types";

const FRAGEN_PRO_RUNDE = 8;

function mischen<T>(liste: T[]): T[] {
  const kopie = [...liste];
  for (let i = kopie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [kopie[i], kopie[j]] = [kopie[j], kopie[i]];
  }
  return kopie;
}

function neueRunde(alle: Wort[]) {
  const runde = mischen(alle).slice(0, Math.min(FRAGEN_PRO_RUNDE, alle.length));
  return runde.map((richtig) => {
    const andere = mischen(alle.filter((w) => w.slug !== richtig.slug)).slice(
      0,
      3
    );
    const optionen = mischen([richtig, ...andere]);
    return { richtig, optionen };
  });
}

type Runde = ReturnType<typeof neueRunde>;

export default function QuizClient({ alle }: { alle: Wort[] }) {
  // Die Runde wird zufällig gemischt (Math.random) — das darf erst nach dem
  // Mounten im Browser passieren, sonst weicht der Server-Render vom
  // Client-Render ab (Hydration-Fehler).
  const [runde, setRunde] = useState<Runde | null>(null);
  const [index, setIndex] = useState(0);
  const [ausgewaehlt, setAusgewaehlt] = useState<string | null>(null);
  const [richtigeAntworten, setRichtigeAntworten] = useState(0);
  const [fertig, setFertig] = useState(false);

  useEffect(() => {
    setRunde(neueRunde(alle));
  }, [alle]);

  if (!runde) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-12 text-center text-ink/40 text-sm">
        Quiz wird geladen …
      </div>
    );
  }

  const frage = runde[index];
  const fortschritt = `${index + 1} / ${runde.length}`;

  function antworten(slug: string) {
    if (ausgewaehlt) return;
    setAusgewaehlt(slug);
    if (slug === frage.richtig.slug) {
      setRichtigeAntworten((n) => n + 1);
    }
  }

  const rundenLaenge = runde.length;

  function weiter() {
    if (index + 1 < rundenLaenge) {
      setIndex((i) => i + 1);
      setAusgewaehlt(null);
    } else {
      setFertig(true);
    }
  }

  function nochmal() {
    setRunde(neueRunde(alle));
    setIndex(0);
    setAusgewaehlt(null);
    setRichtigeAntworten(0);
    setFertig(false);
  }

  if (fertig) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-16 text-center">
        <p className="font-mono text-xs uppercase tracking-wide text-ink/40">
          Ergebnis
        </p>
        <p className="font-serif text-6xl text-ink mt-3">
          {richtigeAntworten} / {runde.length}
        </p>
        <p className="mt-4 text-ink/60">
          {richtigeAntworten === runde.length
            ? "Alle richtig — sauber gelernt."
            : richtigeAntworten >= runde.length / 2
            ? "Solide Runde. Ein paar Wörter setzen sich noch fest."
            : "Diese Wörter lohnen ein zweites Nachschlagen."}
        </p>
        <button
          onClick={nochmal}
          className="mt-8 bg-brick text-card px-6 py-2.5 text-sm hover:bg-ink transition-colors"
        >
          Neue Runde
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <div className="flex items-baseline justify-between mb-8">
        <h1 className="font-serif text-2xl text-ink">Quiz</h1>
        <span className="font-mono text-xs text-ink/40">{fortschritt}</span>
      </div>

      <p className="text-ink/50 text-sm mb-2">Welches Wort passt zu dieser Bedeutung?</p>
      <p className="text-lg leading-relaxed text-ink mb-8 border-l-2 border-rule pl-4">
        {frage.richtig.definition}
      </p>

      <div className="flex flex-col gap-3">
        {frage.optionen.map((opt) => {
          const istRichtig = opt.slug === frage.richtig.slug;
          const istAusgewaehlt = opt.slug === ausgewaehlt;
          let stil =
            "border-rule bg-card hover:border-brick text-ink";
          if (ausgewaehlt) {
            if (istRichtig) {
              stil = "border-moss bg-moss/10 text-ink";
            } else if (istAusgewaehlt) {
              stil = "border-brick bg-brick/10 text-ink";
            } else {
              stil = "border-rule bg-card text-ink/40";
            }
          }
          return (
            <button
              key={opt.slug}
              onClick={() => antworten(opt.slug)}
              className={`text-left font-serif text-lg border px-4 py-3 transition-colors ${stil}`}
            >
              {opt.artikel ? `${opt.artikel} ` : ""}
              {opt.wort}
            </button>
          );
        })}
      </div>

      {ausgewaehlt && (
        <button
          onClick={weiter}
          className="mt-8 bg-ink text-card px-6 py-2.5 text-sm hover:bg-brick transition-colors"
        >
          {index + 1 < runde.length ? "Weiter" : "Ergebnis anzeigen"}
        </button>
      )}
    </div>
  );
}
