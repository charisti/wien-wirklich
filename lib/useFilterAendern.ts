"use client";

import { useRouter, usePathname, useSearchParams } from "next/navigation";

/**
 * Gemeinsame Navigations-Hilfe für die Wortlisten-Filter (Suche, Kategorie,
 * Buchstabe, Seite) — schreibt sie als Query-Parameter in die URL, damit der
 * Zustand teilbar/bookmarkbar bleibt und die Serverkomponente neu laden kann.
 */
export function useFilterAendern() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  return function filterAendern(aenderungen: Record<string, string | null>) {
    const params = new URLSearchParams(searchParams.toString());
    for (const [key, wert] of Object.entries(aenderungen)) {
      if (wert === null || wert === "") params.delete(key);
      else params.set(key, wert);
    }
    // scroll: false, damit die Seite beim Tippen/Klicken nicht nach oben
    // springt.
    router.push(params.toString() ? `${pathname}?${params}` : pathname, {
      scroll: false,
    });
  };
}
