import Bildplatzhalter from "../Bildplatzhalter";

export default function QuizSeite() {
  return (
    <div>
      <div className="max-w-4xl mx-auto px-6 py-12">
        <p className="font-mono text-xs uppercase tracking-wide text-brick mb-3">
          Wortquizzen mit Schmäh
        </p>
        <h1 className="font-serif text-3xl text-ink mb-8">
          Teste dein Wienerisch
        </h1>

        <Bildplatzhalter label="Bild: Papa Kapazunda" className="mb-8" />

        <p className="text-ink/80 leading-relaxed">
          Wie gut ist dein Wienerisch wirklich? Finde es heraus – mit der
          Funktion „Wortquizzen" in Papa Kapazundas Wörterbuch „Wienerisch
          Deutsch". Hier wird's spannend, unterhaltsam und richtig
          wienerisch! Ob du ein echter „Blitzgneißer" bist oder doch noch
          etwas Schmäh-Nachhilfe brauchst, zeigt sich spätestens nach ein
          paar Runden.
        </p>

        <section className="mt-12">
          <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
            So funktioniert das Quiz – schlagfertig und unkompliziert
          </h2>
          <ol className="flex flex-col gap-6">
            <li className="flex gap-4">
              <span className="font-mono text-sm text-brick shrink-0">
                01
              </span>
              <div>
                <p className="text-ink font-medium mb-1">Start mit Stil</p>
                <p className="text-ink/70 leading-relaxed">
                  Klick auf den Button „Wortquizzen", und schon geht's los.
                  Auf deinem Bildschirm erscheint ein wienerisches Wort – nur
                  das Wort, ohne jegliche Übersetzung. Damit du nicht im
                  Dunkeln tappst, hörst du gleichzeitig die Audioaufnahme,
                  eingesprochen mit authentischem Wiener Zungenschlag.
                </p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-brick shrink-0">
                02
              </span>
              <div>
                <p className="text-ink font-medium mb-1">
                  Raten oder warten?
                </p>
                <p className="text-ink/70 leading-relaxed mb-4">
                  Jetzt bist du dran: Was könnte das bedeuten? Grüble, rate,
                  sinniere – oder lass dich von den akustischen Kommentaren
                  inspirieren. Denn während du nachdenkst, ertönen freche,
                  typisch wienerische Sprüche, die dich antreiben – oder zum
                  Schmunzeln bringen. Das Quiz nimmt sich nicht zu ernst,
                  aber dein Wienerisch schon.
                </p>
                <ul className="flex flex-col gap-2 border-l-2 border-rule pl-4">
                  <li className="text-ink/60 italic text-sm">
                    „Nau, bist a Blitzgneißer oda ned?"
                  </li>
                  <li className="text-ink/60 italic text-sm">
                    „Na geh, des waaß sogoa da Foxl vom Nochban!"
                  </li>
                  <li className="text-ink/60 italic text-sm">
                    „Brodl ned so laung umanaund, sunst reiß I no a Bankl!"
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-brick shrink-0">
                03
              </span>
              <div>
                <p className="text-ink font-medium mb-1">
                  Drück den Knopf oder wart's aus
                </p>
                <p className="text-ink/70 leading-relaxed">
                  Wenn du die Übersetzung wissen willst, klick auf
                  „Übersetzung anzeigen". Wartest du länger als 30 Sekunden,
                  wird sie automatisch eingeblendet – mit einer kurzen,
                  witzigen Pause, bevor der nächste Begriff auftaucht.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <Bildplatzhalter
          label="Bild: Quiz-Ansicht (Screenshot)"
          className="my-12"
        />

        <section>
          <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
            Warum das Wortquizzen so viel Spaß macht
          </h2>
          <ul className="flex flex-col gap-4">
            <li className="flex gap-3">
              <span className="text-brick shrink-0">•</span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Unterhaltsam bis zum letzten Spruch:
                </span>{" "}
                Die frechen Kommentare machen das Raten zur Gaudi – selbst
                wenn du keine Ahnung hast, lernst du mit einem Lächeln.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-brick shrink-0">•</span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Überraschungseffekt:
                </span>{" "}
                Viele Begriffe wirst du vielleicht noch nie gehört haben. Und
                genau das macht den Reiz aus – jede Runde birgt neue
                Aha-Momente!
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-brick shrink-0">•</span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Tempo und Abwechslung:
                </span>{" "}
                Der flüssige Übergang zwischen den Einträgen hält die
                Spannung hoch, ohne hektisch zu werden.
              </p>
            </li>
            <li className="flex gap-3">
              <span className="text-brick shrink-0">•</span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Echter Wiener Schmäh:
                </span>{" "}
                Hier lernst du nicht nur die Wörter, sondern auch, wie sie
                klingen – und wie sie dich zum Lachen bringen können.
              </p>
            </li>
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-serif text-xl text-ink mb-5 pb-2 border-b border-rule">
            Tipps & Tricks – so wirst du zum Quizmeister
          </h2>
          <ol className="flex flex-col gap-5">
            <li className="flex gap-4">
              <span className="font-mono text-sm text-brick shrink-0">
                01
              </span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Mitraten statt googeln:
                </span>{" "}
                Versuch, die Bedeutung zu erraten, statt sofort aufzugeben –
                genau das macht den Reiz aus.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-brick shrink-0">
                02
              </span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Spiele gegen Freunde:
                </span>{" "}
                Setzt euch zusammen und schaut, wer mehr Begriffe richtig
                errät. Der Verlierer muss den nächsten Kaffee im Wiener Stil
                spendieren!
              </p>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-brick shrink-0">
                03
              </span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Notizen machen:
                </span>{" "}
                Schreib dir die Wörter auf, die dir besonders gefallen. So
                baust du ganz nebenbei deinen persönlichen Wiener Wortschatz
                auf.
              </p>
            </li>
            <li className="flex gap-4">
              <span className="font-mono text-sm text-brick shrink-0">
                04
              </span>
              <p className="text-ink/80 leading-relaxed">
                <span className="text-ink font-medium">
                  Genieß die Sprüche:
                </span>{" "}
                Auch wenn du nicht weiterkommst – lass dich von den witzigen
                Kommentaren unterhalten. Sie sind fast so charmant wie ein
                echtes Wiener Gespräch.
              </p>
            </li>
          </ol>
        </section>

        <section className="mt-12 border-t border-rule pt-8">
          <h2 className="font-serif text-xl text-ink mb-3">
            Wortquizzen – der Wiener doppelte Boden
          </h2>
          <p className="text-ink/80 leading-relaxed">
            Mit der Funktion „Wortquizzen" wird Lernen zum Abenteuer. Hier
            geht es nicht nur um Übersetzungen, sondern um das Gefühl,
            Wienerisch zu erleben – frech, herzlich und voller
            Überraschungen. Jeder Begriff wird zu einem kleinen Rätsel, das
            dich lachen lässt, während du etwas lernst.
          </p>
          <p className="text-ink/80 leading-relaxed mt-4">
            Also, bist du bereit? Klick auf „Wortquizzen" und zeig, dass du a
            richtiger Blitzgneißer bist! Oda ned? Na geh, trau di!
          </p>
        </section>

        <div className="mt-12 flex items-center gap-4">
          <a
            href="/quiz/spielen"
            className="inline-block bg-brick text-card px-6 py-3 text-sm hover:bg-ink transition-colors"
          >
            Wortquizzen starten
          </a>
        </div>
      </div>
    </div>
  );
}
