"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import type { Wort } from "@/lib/types";

type Vorschlag = Pick<Wort, "slug" | "wort" | "artikel" | "definition">;

export default function StartsucheClient() {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [vorschlaege, setVorschlaege] = useState<Vorschlag[]>([]);
  const [offen, setOffen] = useState(false);

  useEffect(() => {
    const q = query.trim();
    if (!q) {
      setVorschlaege([]);
      return;
    }
    const controller = new AbortController();
    const timeout = setTimeout(() => {
      fetch(`/api/suche?q=${encodeURIComponent(q)}`, {
        signal: controller.signal,
      })
        .then((res) => res.json())
        .then((daten: Vorschlag[]) => setVorschlaege(daten))
        .catch(() => {});
    }, 120);
    return () => {
      clearTimeout(timeout);
      controller.abort();
    };
  }, [query]);

  function absenden() {
    const q = query.trim();
    router.push(q ? `/woerterbuch?q=${encodeURIComponent(q)}` : "/woerterbuch");
  }

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <svg
          viewBox="0 0 24 24"
          className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-ink/30"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" strokeLinecap="round" />
        </svg>
        <input
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOffen(true);
          }}
          onFocus={() => setOffen(true)}
          onBlur={() => setTimeout(() => setOffen(false), 150)}
          onKeyDown={(e) => {
            if (e.key === "Enter") absenden();
          }}
          placeholder="Wort oder Bedeutung suchen…"
          className="w-full bg-card border-2 border-rule focus:border-brick rounded-full pl-12 pr-28 sm:pr-32 py-4 font-serif text-lg text-ink placeholder:text-ink/40 shadow-[0_8px_30px_rgba(34,48,60,0.08)] outline-none transition-colors"
        />
        <button
          onClick={absenden}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-brick text-card rounded-full px-4 sm:px-5 py-2.5 text-sm hover:bg-ink hover:scale-105 active:scale-95 transition-all"
        >
          Suchen
        </button>
      </div>

      {offen && query.trim() && vorschlaege.length > 0 && (
        <ul className="animate-auftauchen absolute z-10 top-full left-0 right-0 mt-2 bg-card border border-rule rounded-2xl shadow-lg overflow-hidden text-left">
          {vorschlaege.map((v) => (
            <li key={v.slug}>
              <Link
                href={`/wort/${v.slug}`}
                className="flex items-baseline gap-3 px-5 py-3 hover:bg-paper transition-colors"
              >
                <span className="font-serif text-ink">
                  {v.artikel ? `${v.artikel} ` : ""}
                  {v.wort}
                </span>
                <span className="text-sm text-ink/60 truncate">
                  {v.definition}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
