"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function About() {
  const bulletPoints = [
    "Über 10 Jahre operative Erfahrung im Container-Handling",
    "Feste Ansprechpartner & direkte Kommunikationswege",
    "Flexible Einsatzplanung rund um die Uhr (24/7 Notdienst möglich)",
    "Höchste Qualitätsstandards & transportsichere Ladungssicherung",
  ];

  return (
    <section id="uber-uns" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Image with Industrial Accents */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[480px] sm:h-[600px] rounded-2xl overflow-hidden group shadow-2xl"
          >
            <Image
              src="/images/manager.png"
              alt="CONWAS Warehouse Logistics Duisburg"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Orange border-like accent */}
            <div className="absolute inset-0 border-2 border-primary-orange/20 rounded-2xl pointer-events-none z-10 m-4" />
            {/* Dark glassmorphic experience card */}
            <div className="absolute bottom-8 left-8 right-8 bg-dark-gray/90 backdrop-blur-md p-6 rounded-xl border border-white/10 z-20">
              <span className="text-primary-orange text-3xl font-extrabold block mb-1">
                250+
              </span>
              <span className="text-white text-sm font-bold uppercase tracking-wider">
                Geschäftskunden in Deutschland vertrauen CONWAS
              </span>
            </div>
          </motion.div>

          {/* Right Column: Company Story */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <span className="text-primary-blue font-bold tracking-widest text-[13px] uppercase block mb-3">
              Über Uns
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark-gray mb-8 leading-tight">
              Ihr strategischer Partner für Warehouse Services
            </h2>
            <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-6">
              CONWAS steht für exzellenten Service und operative Stärke im Bereich der Containerentladung und Lagerlogistik. Mit Sitz im Logistik-Hub Duisburg – dem größten Binnenhafen der Welt – sind wir optimal aufgestellt, um die Warenströme unserer Kunden effizient zu managen.
            </p>
            <p className="text-gray-600 text-[15px] sm:text-[16px] leading-relaxed mb-8">
              Unsere Unternehmensphilosophie vereint deutsche Gründlichkeit und Termintreue mit maximaler Flexibilität. Wir entlasten Ihre Stammbelegschaft bei Belastungsspitzen und senken durch transparente Festpreise nachhaltig Ihre Logistikkosten.
            </p>

            {/* Key Strengths Checklist */}
            <div className="flex flex-col gap-4 mb-8">
              {bulletPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-primary-orange/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-primary-orange font-bold" />
                  </div>
                  <span className="text-[14.5px] sm:text-[15px] text-dark-gray font-bold">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            {/* Direct CTA */}
            <div className="flex items-center gap-6">
              <a
                href="#kontakt"
                className="bg-primary-orange text-white hover:bg-orange-600 px-6 py-3 rounded-lg text-[15px] font-bold shadow-lg shadow-primary-orange/20 transition-all"
              >
                Mehr erfahren
              </a>
              <div className="flex flex-col">
                <span className="text-xs text-gray-500 font-bold uppercase tracking-wider">
                  Direkter Kontakt
                </span>
                <a
                  href="tel:00492032988333"
                  className="text-primary-blue font-extrabold text-[15px] hover:text-primary-orange transition-colors"
                >
                  0203 298 83 33
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
