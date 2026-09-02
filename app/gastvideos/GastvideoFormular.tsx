"use client";

import { useState, type FormEvent } from "react";
import { gastvideoSpeichern } from "@/lib/data";

export default function GastvideoFormular() {
  const [wort, setWort] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [name, setName] = useState("");
  const [kommentar, setKommentar] = useState("");
  const [status, setStatus] = useState<"idee" | "sendet" | "fertig" | "fehler">(
    "idee"
  );

  async function absenden(e: FormEvent) {
    e.preventDefault();
    if (!wort.trim() || !videoUrl.trim()) return;
    setStatus("sendet");
    try {
      await gastvideoSpeichern({ wort, videoUrl, name, kommentar });
      setStatus("fertig");
      setWort("");
      setVideoUrl("");
      setName("");
      setKommentar("");
    } catch {
      setStatus("fehler");
    }
  }

  if (status === "fertig") {
    return (
      <div className="border border-moss/40 bg-moss/5 px-6 py-8 text-center">
        <p className="font-serif text-xl text-ink mb-2">
          Video eingereicht — leiwand!
        </p>
        <p className="text-ink/70 text-sm">
          Papa Kapazunda schaut sich dein Meisterwerk an.
        </p>
        <button
          onClick={() => setStatus("idee")}
          className="mt-6 text-sm text-brick hover:text-ink transition-colors"
        >
          Noch ein Video einreichen
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={absenden} className="flex flex-col gap-5">
      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">Dein Wort</span>
        <input
          required
          value={wort}
          onChange={(e) => setWort(e.target.value)}
          placeholder="z. B. Oasch, Wappler, ..."
          className="bg-card border border-rule px-4 py-2.5 font-serif text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">Link zu deinem Video</span>
        <input
          required
          type="url"
          value={videoUrl}
          onChange={(e) => setVideoUrl(e.target.value)}
          placeholder="YouTube, Instagram, TikTok, Google Drive ..."
          className="bg-card border border-rule px-4 py-2.5 text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
        />
        <span className="text-xs text-ink/40">
          Lade dein Video zuerst irgendwo hoch (z. B. YouTube als „nicht
          gelistet") und häng hier einfach den Link rein.
        </span>
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">
          Dein Name / Künstlername{" "}
          <span className="text-ink/40">(freiwillig)</span>
        </span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder='z. B. "Wapplerkönig von Hernals"'
          className="bg-card border border-rule px-4 py-2.5 font-serif text-ink placeholder:text-ink/30 focus:border-brick transition-colors"
        />
      </label>

      <label className="flex flex-col gap-1.5">
        <span className="text-sm text-ink">
          Kommentar <span className="text-ink/40">(optional)</span>
        </span>
        <textarea
          value={kommentar}
          onChange={(e) => setKommentar(e.target.value)}
          placeholder="Willst du uns noch was dazu sagen?"
          rows={2}
          className="bg-card border border-rule px-4 py-2.5 text-ink placeholder:text-ink/30 focus:border-brick transition-colors resize-y"
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
        {status === "sendet" ? "Wird gesendet …" : "Gastvideo einreichen"}
      </button>
    </form>
  );
}
