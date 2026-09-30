import { getWortAnzahl } from "@/lib/data";
import { ALLE_KATEGORIEN } from "@/lib/kategorien";
import Bildplatzhalter from "./Bildplatzhalter";
import StartsucheClient from "./StartsucheClient";
import VokabeltrainerButton from "./VokabeltrainerButton";
import QuizButton from "./QuizButton";
import { VokabeltrainerIcon, WortquizzenIcon } from "./CtaIcons";
import StartseiteSektion from "./StartseiteSektion";
import ScrollReveal from "./ScrollReveal";

export default async function Home() {
  const anzahlWoerter = await getWortAnzahl();

  return (
    <div className="relative overflow-hidden">
      {/* Dekorative Farbflächen — rein optisch, kein Inhalt */}
      <div
        aria-hidden
        className="absolute -top-32 -left-32 w-[26rem] h-[26rem] rounded-full bg-brick/10 blur-3xl animate-schweben"
      />
      <div
        aria-hidden
        className="absolute top-1/3 -right-24 w-[30rem] h-[30rem] rounded-full bg-moss/10 blur-3xl animate-schweben [animation-delay:-3s] [animation-duration:12s]"
      />
      <div
        aria-hidden
        className="absolute bottom-0 left-1/4 w-72 h-72 rounded-full bg-brick/5 blur-3xl animate-schweben [animation-delay:-6s] [animation-duration:7s]"
      />

      <div className="relative max-w-5xl mx-auto px-6 pt-12">
        <div className="w-full rounded-3xl overflow-hidden shadow-sm">
          <Bildplatzhalter aspect="aspect-[21/9]" />
        </div>
      </div>

      <ScrollReveal className="relative max-w-3xl mx-auto px-6 pt-10 pb-20 sm:pb-28 flex flex-col items-center text-center gap-8">
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brick bg-brick/10 border border-brick/20 rounded-full px-4 py-1.5">
          {anzahlWoerter.toLocaleString("de-AT")} Wörter · {ALLE_KATEGORIEN.length} Kategorien
        </span>

        <h1 className="font-serif text-2xl sm:text-4xl text-ink leading-[1.15]">
          Willkommen bei der größten
          <br className="hidden sm:block" />
          <span className="text-brick">Wienerisch-Schatztruhe</span> aller
          Zeiten
        </h1>

        <p className="text-ink/70 text-lg max-w-xl">
          Tauchen Sie ein in die faszinierende Welt des Wienerischen – einer
          Sprache voller Charme, Witz und Tiefgang. Einfach ein Wort
          eingeben, und los geht's Abenteuer.
        </p>

        <StartsucheClient />

        <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-4">
          <VokabeltrainerButton className="group flex-1 flex items-center justify-center gap-3 rounded-2xl bg-turkis knopf-gradient text-card px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
            <VokabeltrainerIcon />
            <span className="font-serif text-lg">Vokabeltrainer</span>
          </VokabeltrainerButton>
          <QuizButton className="group flex-1 flex items-center justify-center gap-3 rounded-2xl bg-brick knopf-gradient text-card px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
            <WortquizzenIcon />
            <span className="font-serif text-lg">Wortquizzen</span>
          </QuizButton>
        </div>
      </ScrollReveal>

      <StartseiteSektion
        eyebrow="Über das Wörterbuch"
        titel="Sprache, Schmäh und eine Prise Weltgeschichte"
        bildLabel="Bild: Wiener Kaffeehausszene"
      >
        <p>
          Über 35.000 Einträge, jeder mit einer authentischen Audioaufnahme
          im originalen Wiener Klang – so ein Wörterbuch gab's noch nicht.
          Selbst eingefleischte Wiener entdecken hier Bedeutungen, die ihnen
          bisher verborgen blieben. Die pointierten, oft schlagfertigen
          hochdeutschen Übersetzungen stammen aus der Feder eines echten
          Wieners und professionellen Übersetzers.
        </p>
        <p>
          Von den Fachausdrücken der Fußballer, Ärzte, Kaffeehauskellner und
          Fleischhauer bis zum Slang der Gauner, Kartentippler und Teenies:
          In 45 Kategorien – von „Wiener Sprüche, die sitzen!" über
          „Religiöses und Göttliches auf Wienerisch" bis „Tod und Sterben auf
          Wienerisch" – wird die ganze Wiener Mentalität lebendig.
        </p>
        <p>
          Und zu jedem Wort gibt's die Herkunft dazu. Wienerisch ist eine
          Mischung aus Jahrhunderten und Kulturen – geprägt vom Jiddischen,
          Tschechischen, Ungarischen, Kroatischen und Türkischen. Selbst
          waschechte Wiener staunen oft, welche Weltgeschichte in einem ganz
          alltäglichen wienerischen Wort steckt.
        </p>
      </StartseiteSektion>

      <StartseiteSektion
        eyebrow="Mehr als Vokabeln"
        titel="Das Wörterbuch, das mehr kann"
        bildLabel="Bild: Wiener Wahrzeichen"
        bildLinks
        hintergrund
      >
        <p>
          WIEN WIRKLICH ist mehr als eine Vokabelsammlung – ein Stück
          Kulturgeschichte. Neben der Sprache erzählt das Wörterbuch auch,
          wie Wien zu dem wurde, was es heute ist: von der Römerzeit über
          die glanzvollen Epochen der Habsburger bis zur Moderne.
        </p>
        <p>
          Dazu kommen Hintergründe zu den bekanntesten Sehenswürdigkeiten –
          von Prachtpalais wie dem Belvedere über die Wiener Gassen und
          Plätze bis zu Kirchen wie dem Stephansdom, Denkmälern und dem
          Zentralfriedhof. Auch die Donau- und Wienfluss-Brücken, große
          Bühnen wie Burgtheater und Staatsoper sowie Meisterwerke der
          Wiener Architektur – vom Barock bis zum Jugendstil – haben hier
          ihren Platz, ebenso die legendären Gemeindebauten wie der
          Karl-Marx-Hof.
        </p>
        <p>
          Nebenbei lernst du auch die Fachsprache der Wiener Politik,
          Verwaltung und Justiz kennen, von historischen Adelstiteln bis zu
          Begriffen wie „Stadtsenat". Damit ist WIEN WIRKLICH gleichzeitig
          Geschichtsbuch, Kulturführer und Sprachschule – für alle, die Wien
          nicht nur sprechen, sondern wirklich verstehen wollen.
        </p>
      </StartseiteSektion>

      <StartseiteSektion
        eyebrow="Lernen mit Schmäh"
        titel="Sprich Wienerisch, fühl Wien!"
        bildLabel="Bild: Papa Kapazunda"
      >
        <p>
          WIEN WIRKLICH macht auch Spaß: Mit Vokabeltrainer und Quiz testest
          du dein Wienerisch spielerisch, die Audiospuren helfen dir beim
          typischen Tonfall – bis du klingst wie ein Einheimischer. Denn die
          Wiener Seele zeigt sich erst in der Sprache: charmant, ironisch,
          bissig, immer mit einem Augenzwinkern.
        </p>
        <p>
          Ob du wissen willst, was der grantige Herr in der
          Würstelstand-Schlange gerade gemurmelt hat, oder warum Wiener
          Schimpfwörter eigentlich halbe Gedichte sind – hier findest du's
          heraus. WIEN WIRKLICH ist das wohl umfassendste Online-Wörterbuch
          für Wienerisch und lehrt dich Wien nicht nur zu hören, sondern zu
          fühlen.
        </p>
        <blockquote className="border-l-2 border-brick pl-4 italic text-ink">
          „Ohne Wienerisch is Wien ned wirklich Wien!"
          <footer className="mt-1 not-italic text-sm text-ink/50">
            — Papa Kapazunda, Autor und Übersetzer von WIEN WIRKLICH
          </footer>
        </blockquote>
      </StartseiteSektion>

      <div className="relative border-t border-rule">
        <ScrollReveal className="max-w-2xl mx-auto px-6 py-16 sm:py-20 flex flex-col items-center text-center gap-6">
          <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-brick bg-brick/10 border border-brick/20 rounded-full px-4 py-1.5">
            WIEN WIRKLICH – die Seele Wiens auf einen Klick
          </span>

          <h2 className="font-serif text-2xl sm:text-3xl text-ink">
            Deine Reise beginnt jetzt
          </h2>

          <p className="text-ink/70 max-w-xl">
            Nicht lang nachdenken – tauch ein, entdecke die Sprache Wiens und
            begreife, warum sie der Schlüssel zu allem ist, was diese Stadt
            so besonders macht.
          </p>

          <ul className="flex flex-col gap-2.5 text-left">
            {[
              "Die größte Sammlung wienerischer Begriffe",
              "Interaktive Audiofeatures für echtes Sprachgefühl",
              "Der Vokabeltrainer, der Lernen und Spaß verbindet",
            ].map((punkt) => (
              <li key={punkt} className="flex gap-3">
                <span className="text-brick shrink-0">•</span>
                <span className="text-ink/80">{punkt}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md mt-2">
            <VokabeltrainerButton className="group flex-1 flex items-center justify-center gap-3 rounded-2xl bg-turkis knopf-gradient text-card px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
              <VokabeltrainerIcon />
              <span className="font-serif text-lg">Vokabeltrainer</span>
            </VokabeltrainerButton>
            <QuizButton className="group flex-1 flex items-center justify-center gap-3 rounded-2xl bg-brick knopf-gradient text-card px-6 py-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 hover:scale-[1.03] active:scale-95 transition-all">
              <WortquizzenIcon />
              <span className="font-serif text-lg">Wortquizzen</span>
            </QuizButton>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
