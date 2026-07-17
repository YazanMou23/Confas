"use client";

import { motion } from "framer-motion";
import { Send, FileCheck, Calendar, Activity, CheckCircle } from "lucide-react";

export default function Process() {
  const steps = [
    {
      num: "01",
      icon: <Send size={22} />,
      title: "Anfrage senden",
      desc: "Kontaktieren Sie uns telefonisch, per E-Mail oder über das Online-Formular mit Ihren Container-Details.",
    },
    {
      num: "02",
      icon: <FileCheck size={22} />,
      title: "Angebot erhalten",
      desc: "Sie erhalten innerhalb kürzester Zeit ein transparentes Festpreis-Angebot für Ihre Logistikleistung.",
    },
    {
      num: "03",
      icon: <Calendar size={22} />,
      title: "Termin vereinbaren",
      desc: "Wir stimmen das Zeitfenster flexibel ab und planen unsere Kapazitäten passgenau für Ihren Wareneingang.",
    },
    {
      num: "04",
      icon: <Activity size={22} />,
      title: "Durchführung",
      desc: "Unser eingespieltes Team wickelt die Containerentladung oder Lagerleistung termingerecht und professionell ab.",
    },
    {
      num: "05",
      icon: <CheckCircle size={22} />,
      title: "Erfolgreich abgeschlossen",
      desc: "Die Ware ist sicher gelagert oder verladen. Sie erhalten eine saubere Dokumentation der Leistung.",
    },
  ];

  return (
    <section className="bg-brand-gray-light py-24 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-20">
          <span className="text-primary-blue font-bold tracking-widest text-[13px] uppercase block mb-3">
            Einfacher Ablauf
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark-gray mb-6">
            In 5 Schritten zum Erfolg
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Effiziente Prozesse und klare Absprachen sichern den reibungslosen Ablauf Ihrer Logistikprojekte.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative flex flex-col lg:flex-row gap-12 lg:gap-6 justify-between items-start">
          {/* Connecting Line for Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-12 right-12 h-1 bg-gray-200 z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="flex flex-row lg:flex-col gap-6 lg:gap-4 relative z-10 w-full lg:w-1/5"
            >
              {/* Step Circle & Connector */}
              <div className="flex flex-col items-center shrink-0">
                <div className="w-[88px] h-[88px] rounded-full bg-white border-2 border-primary-orange flex items-center justify-center shadow-lg relative group">
                  <div className="w-16 h-16 rounded-full bg-primary-blue/5 text-primary-blue group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300 flex items-center justify-center shadow-inner">
                    {step.icon}
                  </div>
                  <span className="absolute -top-1 -right-1 bg-primary-orange text-white text-xs font-extrabold px-2 py-0.5 rounded-full">
                    {step.num}
                  </span>
                </div>
              </div>

              {/* Step Copy */}
              <div className="flex flex-col justify-center lg:text-center mt-2">
                <h3 className="text-[17px] font-extrabold text-dark-gray tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
