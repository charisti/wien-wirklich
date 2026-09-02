"use client";

import { useState, type FormEvent } from "react";
import { gastbeitragSpeichern } from "@/lib/data";

export default function GastbeitragFormular() {
  const [titel, setTitel] = useState("");
  const [beitrag, setBeitrag] = useState("");
  const [name, setName] = useState("");
  const [themenvorschlag, setThemenvorschlag] = useState("");
  const [status, setStatus] = useState<"idee" | "sendet" | "fertig" | "fehler">(
    "idee"
  );

  async function absenden(e: FormEvent) {
    e.preventDefault();
    if (!titel.trim() || !beitrag.trim()) return;
    setStatus("sendet");
    try {
      await gastbeitragSpeichern({ titel, beitrag, name, themenvorschlag });
      setStatus("fertig");
      setTitel("");
      setBeitrag("");
      setName("");
      setThemenvorschlag("");
    } catch {
      setStatus("fehler");
    }
  }

  if (status === "fertig") {
    return (
      <div className="border border-moss/40 bg-moss/5 px-6 py-8 text-center">
        <p className="font-serif text-xl text-ink mb-2">
          Danke für deinen Beitrag!
        </p>
        <p className="text-ink/70 text-sm">
          Papa Kapazunda liest ihn sich durch — meldet sich, falls er
          veröffentlicht wird.
        </p>
        <button
          onClick={() => setStatus("idee")}
          className="mt-6 text-sm text-brick hover:text-ink transition-colors"
        >
          Noch einen Beitrag einreichen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={absenden} className="flex flex-col gap-5">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">Titel deines Beitrags</span>
        <input
          required
          value={titel}
          onChange={(e) => setTitel(e.target.value)}
          placeholder='z. B. "A Schmäh, der durchs Kaffeehaus zog"'
          className="bg-card border border-rule px-4 py-2.5 font-serif text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">Dein Beitrag</span>
        <textarea
          required
          value={beitrag}
          onChange={(e) => setBeitrag(e.target.value)}
          placeholder="Schreib deinen Text direkt hier rein — 300 bis 1.000 Wörter sind ein guter Richtwert."
          rows={10}
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
          placeholder="Name oder Künstlerpseudonym"
          className="bg-card border border-rule px-4 py-2.5 font-serif text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">
          Themenvorschlag <span className="text-ink/40">(optional)</span>
        </span>
        <input
          value={themenvorschlag}
          onChange={(e) => setThemenvorschlag(e.target.value)}
          placeholder="Falls du unsicher bist, was du schreiben sollst"
          className="bg-card border border-rule px-4 py-2.5 text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
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
        {status === "sendet" ? "Wird gesendet …" : "Beitrag einreichen"}
      </button>
    </form>
  );
}
