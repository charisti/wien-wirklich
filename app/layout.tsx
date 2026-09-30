import { Fragment } from "react";
import type { Metadata } from "next";
import { Source_Serif_4, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import VokabeltrainerButton from "./VokabeltrainerButton";
import { VokabeltrainerIcon, WortquizzenIcon } from "./CtaIcons";
import Footer from "./Footer";
import QuizButton from "./QuizButton";
import { HAUPTNAVIGATION } from "@/lib/navigation";

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
                <VokabeltrainerButton className="group inline-flex items-center gap-1.5 rounded-full bg-turkis text-card px-3 py-1.5 text-sm whitespace-nowrap shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
                  <VokabeltrainerIcon className="w-4 h-4" />
                  Vokabeltrainer
                </VokabeltrainerButton>
                <QuizButton className="group inline-flex items-center gap-1.5 rounded-full bg-brick text-card px-3 py-1.5 text-sm whitespace-nowrap shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
                  <WortquizzenIcon className="w-4 h-4" />
                  Wortquizzen
                </QuizButton>
              </div>
            </div>
            <nav className="max-w-7xl mx-auto px-6 pb-3 flex flex-wrap justify-center gap-x-3 gap-y-1">
              {HAUPTNAVIGATION.map((item, i) => (
                <Fragment key={item.href}>
                  {i === 6 && <span aria-hidden className="basis-full h-0" />}
                  <span className="flex items-center gap-3">
                    {i > 0 && i !== 6 && (
                      <span className="text-rule text-xs">·</span>
                    )}
                    <a
                      href={item.href}
                      className="text-xs text-ink/60 hover:text-brick transition-colors whitespace-nowrap"
                    >
                      {item.label}
                    </a>
                  </span>
                </Fragment>
              ))}
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
