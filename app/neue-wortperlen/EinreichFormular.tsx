"use client";

import { useState, type FormEvent } from "react";
import { einreichungSpeichern } from "@/lib/data";

export default function EinreichFormular() {
  const [wort, setWort] = useState("");
  const [bedeutung, setBedeutung] = useState("");
  const [kontext, setKontext] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<"idee" | "sendet" | "fertig" | "fehler">(
    "idee"
  );

  async function absenden(e: FormEvent) {
    e.preventDefault();
    if (!wort.trim() || !bedeutung.trim()) return;
    setStatus("sendet");
    try {
      await einreichungSpeichern({ wort, bedeutung, kontext, name });
      setStatus("fertig");
      setWort("");
      setBedeutung("");
      setKontext("");
      setName("");
    } catch {
      setStatus("fehler");
    }
  }

  if (status === "fertig") {
    return (
      <div className="border border-moss/40 bg-moss/5 px-6 py-8 text-center">
        <p className="font-serif text-xl text-ink mb-2">
          Danke für deine Wortperle!
        </p>
        <p className="text-ink/70 text-sm">
          Papa Kapazunda schaut sich deinen Vorschlag an — vielleicht taucht
          er bald im Wörterbuch auf.
        </p>
        <button
          onClick={() => setStatus("idee")}
          className="mt-6 text-sm text-brick hover:text-ink transition-colors"
        >
          Noch eine Wortperle einreichen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={absenden} className="flex flex-col gap-5">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">
          Wienerisches Wort / Redewendung
        </span>
        <input
          required
          value={wort}
          onChange={(e) => setWort(e.target.value)}
          placeholder="z. B. Schmähführen"
          className="bg-card border border-rule px-4 py-2.5 font-serif text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">Bedeutung auf Hochdeutsch</span>
        <textarea
          required
          value={bedeutung}
          onChange={(e) => setBedeutung(e.target.value)}
          placeholder="Was bedeutet das Wort?"
          rows={2}
          className="bg-card border border-rule px-4 py-2.5 text-ink placeholder:text-ink/30 focus:border-brick transition-colors resize-y"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">
          Kontext oder Beispielsatz{" "}
          <span className="text-ink/40">(optional)</span>
        </span>
        <textarea
          value={kontext}
          onChange={(e) => setKontext(e.target.value)}
          placeholder="Wann und wie wird das Wort verwendet?"
          rows={2}
          className="bg-card border border-rule px-4 py-2.5 text-ink placeholder:text-ink/30 focus:border-brick transition-colors resize-y"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">
          Dein Name <span className="text-ink/40">(freiwillig)</span>
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Falls du genannt werden möchtest"
          className="bg-card border border-rule px-4 py-2.5 font-serif text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
        />
      </label>

      {status === "fehler" && (
        <p className="text-sm text-brick">
          Da ist leider was schiefgelaufen. Magst du's nochmal versuchen?
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sendet"}
        className="self-start bg-brick text-card px-6 py-3 text-sm hover:bg-ink transition-colors disabled:opacity-50"
      >
        {status === "sendet" ? "Wird gesendet …" : "Wortperle einreichen"}
      </button>
    </form>
  );
}
