"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Calendar } from "lucide-react";

export default function CTA() {
  return (
    <section id="kontakt" className="bg-gradient-to-br from-dark-gray to-zinc-900 text-white py-24 scroll-mt-16 relative overflow-hidden">
      {/* Decorative absolute background shape */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-primary-orange/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Value Prop Text */}
          <div>
            <span className="text-primary-orange font-bold tracking-widest text-[13px] uppercase block mb-3">
              Unverbindliche Erstberatung
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Benötigen Sie Unterstützung bei Ihrer Lagerlogistik?
            </h2>
            <p className="text-gray-300 text-[15px] sm:text-[16px] leading-relaxed mb-8">
              Lassen Sie uns darüber sprechen, wie wir Ihre Containerentladung beschleunigen und Ihr Team flexibel unterstützen können. Füllen Sie das Formular aus, oder rufen Sie uns direkt an. Wir senden Ihnen kurzfristig ein passgenaues Festpreis-Angebot.
            </p>

            <div className="flex flex-col gap-4 text-[15px] text-gray-300">
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-primary-orange" />
                <span>Direktruf: <strong>0203 298 83 33</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-primary-orange" />
                <span>E-Mail: <strong>info@conwas.eu</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-primary-orange" />
                <span>Mo. - Fr.: 09:00 - 18:00 Uhr erreichbar</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white text-dark-gray p-8 rounded-2xl border border-gray-800/10 shadow-2xl relative"
          >
            <h3 className="text-xl font-bold tracking-tight mb-6">
              Jetzt Festpreis-Angebot anfordern
            </h3>
            
            <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="company" className="text-xs font-bold text-gray-500 uppercase">
                    Firma *
                  </label>
                  <input
                    type="text"
                    id="company"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-sm transition-all"
                    placeholder="Muster GmbH"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-xs font-bold text-gray-500 uppercase">
                    Ansprechpartner *
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-sm transition-all"
                    placeholder="Max Mustermann"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-xs font-bold text-gray-500 uppercase">
                    E-Mail-Adresse *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-sm transition-all"
                    placeholder="name@firma.de"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="phone" className="text-xs font-bold text-gray-500 uppercase">
                    Telefonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-sm transition-all"
                    placeholder="+49 203 123456"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-xs font-bold text-gray-500 uppercase">
                  Details zu Ihrer Anfrage (z.B. Containeranzahl, Warengewicht) *
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:border-primary-blue focus:ring-1 focus:ring-primary-blue text-sm transition-all resize-none"
                  placeholder="Wie viele Container müssen entladen werden? Um welche Warenart handelt es sich?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary-orange text-white hover:bg-orange-600 py-3.5 rounded-lg text-[15px] font-bold shadow-lg shadow-primary-orange/20 transition-all mt-2"
              >
                Jetzt Angebot anfordern
              </button>

              <span className="text-[11px] text-gray-400 text-center block mt-2">
                * Pflichtfelder. Wir behandeln Ihre Daten streng vertraulich.
              </span>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
