"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const faqs = [
    {
      q: "Wie funktioniert die Preisgestaltung bei CONWAS?",
      a: "Wir arbeiten bevorzugt mit transparenten Festpreisen pro Container (abhängig von Größe, Gewicht und Packweise) oder pro Palette. So haben Sie absolute Planungssicherheit und keine versteckten Kosten. Alternativ bieten wir auch Stundensätze für allgemeine Lagersupport-Tätigkeiten an.",
    },
    {
      q: "Wie schnell können Sie Personal für Einsätze bereitstellen?",
      a: "Dank unseres eingespielten Teams und flexibler Einsatzplanung können wir in der Regel innerhalb von 24 bis 48 Stunden einsatzbereit sein. Bei langfristigen Kooperationen stimmen wir feste Kapazitäten und Slot-Buchungen vorab ab.",
    },
    {
      q: "Welche Containergrößen und Frachttypen entladen Sie?",
      a: "Wir entladen alle gängigen Containergrößen (20 Fuß, 40 Fuß, High Cube, Open Top) sowie Lkw und Trailer. Unser Team ist sowohl auf lose Kartonware (Handentladung) als auch auf palettierte Ware, Sackware und Schwergut spezialisiert.",
    },
    {
      q: "Bieten Sie auch Qualitätskontrolle, Repacking und Etikettierung an?",
      a: "Ja. Nach der Entladung prüfen wir die Ware auf Beschädigungen, palettieren sie fachgerecht nach Ihren Vorgaben, sichern sie mit Stretchfolie (Palettenwicklung) und bringen bei Bedarf Barcode-Labels oder Versandaufkleber an.",
    },
    {
      q: "Wo bieten Sie Ihre logistischen Dienstleistungen an?",
      a: "Unser Hauptstandort ist Duisburg, wodurch wir direkt am größten Binnenhafen der Welt optimal angebunden sind. Wir bieten unsere Services in Duisburg sowie im gesamten Ruhrgebiet und angrenzenden Teilen von Nordrhein-Westfalen (NRW) an.",
    },
  ];

  return (
    <section id="faq" className="bg-brand-gray-light py-24 scroll-mt-16">
      <div className="max-w-[800px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary-blue font-bold tracking-widest text-[13px] uppercase block mb-3">
            Häufige Fragen
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark-gray mb-6">
            FAQ – Antworten auf Ihre Fragen
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Alles, was Sie über unsere logistischen Dienstleistungen, Abläufe und Konditionen wissen müssen.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 font-bold text-[16px] sm:text-[17px] text-dark-gray hover:text-primary-blue transition-colors focus:outline-none"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle size={20} className="text-primary-orange shrink-0" />
                    <span>{faq.q}</span>
                  </div>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transform transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-primary-blue" : ""
                    }`}
                  />
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-[14px] sm:text-[15px] leading-relaxed text-gray-500 border-t border-gray-50">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
