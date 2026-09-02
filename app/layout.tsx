import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";

const serif = Source_Serif_4({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "600", "700"],
});

const sans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  title: "WIEN WIRKLICH",
  description: "Ein Wörterbuch mit Übungs-Quiz zum Wortschatz lernen.",
};

const UNTERMENU = [
  { label: "Wörterbuch", href: "/woerterbuch" },
  { label: "45 Kategorien", href: "/kategorien" },
  { label: "Vokabeltrainer", href: "/vokabeltrainer" },
  { label: "Wortquizzen", href: "/quiz" },
  { label: "Neue Wortperlen", href: "/neue-wortperlen" },
  { label: "Gastbeiträge", href: "/gastbeitraege" },
  { label: "Gastvideos", href: "/gastvideos" },
  { label: "Historisches Wien", href: "/historisches-wien" },
  { label: "Crashkurs Wienerisch", href: "/crashkurs-wienerisch" },
  { label: "Wiener Podcasts", href: "/podcasts" },
  { label: "Weana Söö", href: "/weana-soe" },
  { label: "Papa Kapazunda", href: "/papa-kapazunda" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className={`${serif.variable} ${sans.variable} ${mono.variable} font-sans`}>
        <div className="min-h-screen flex flex-col">
          <header className="border-b border-rule">
            <div className="max-w-7xl mx-auto px-6 pt-5 pb-3 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
              <span aria-hidden />
              <a
                href="/"
                className="justify-self-center font-serif text-3xl tracking-tight text-ink uppercase"
              >
                Wien Wirklich
              </a>
              <div className="justify-self-end flex gap-2">
                <a
                  href="/vokabeltrainer#start"
                  className="bg-brick text-card px-2 py-[5px] text-sm whitespace-nowrap hover:bg-ink transition-colors"
                >
                  Vokabeltrainer
                </a>
                <a
                  href="/quiz/spielen"
                  className="bg-brick text-card px-2 py-[5px] text-sm whitespace-nowrap hover:bg-ink transition-colors"
                >
                  Wortquizzen
                </a>
              </div>
            </div>
            <nav className="max-w-7xl mx-auto px-6 pb-3 flex flex-wrap justify-center gap-x-3 gap-y-1">
              {UNTERMENU.map((item, i) => (
                <span key={item.href} className="flex items-center gap-3">
                  {i > 0 && <span className="text-rule text-xs">·</span>}
                  <a
                    href={item.href}
                    className="text-xs text-ink/60 hover:text-brick transition-colors whitespace-nowrap"
                  >
                    {item.label}
                  </a>
                </span>
              ))}
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-rule mt-16">
            <div className="max-w-7xl mx-auto px-6 py-6 text-xs text-ink/60">
              Lexikon — ein kleines Wörterbuch-Projekt.
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
