import Link from "next/link";
import { getAlleWoerter } from "@/lib/data";
import QuizClient from "../QuizClient";

export default async function QuizSpielenSeite() {
  const alle = await getAlleWoerter();

  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <Link
          href="/quiz"
          className="text-sm text-ink/50 hover:text-brick transition-colors"
        >
          ← Zurück zu Wortquizzen
        </Link>
        <p className="text-sm text-ink/60 mt-4">
          Diese Runde läuft aktuell als Multiple-Choice-Quiz. Die
          Audio-Variante mit eingesprochenen Wörtern und frechen Sprüchen von
          Papa Kapazunda ist noch in Arbeit.
        </p>
      </div>
      <QuizClient alle={alle} />
    </div>
  );
}
