"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  Store,
  Cog,
  Boxes,
  ArrowDownLeft,
  ArrowUpRight,
  ShoppingBag,
} from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: <Factory size={24} />,
      name: "Industrie",
      desc: "Umschlag und Bereitstellung von Industriegütern und Rohstoffen für die Weiterverarbeitung.",
    },
    {
      icon: <Truck size={24} />,
      name: "Logistik",
      desc: "Unterstützung für Speditionen und 3PL-Dienstleister bei Kapazitätsengpässen.",
    },
    {
      icon: <Store size={24} />,
      name: "Handel",
      desc: "Entladung und Einlagerung von Waren für den stationären Einzelhandel.",
    },
    {
      icon: <Cog size={24} />,
      name: "Produktion",
      desc: "Zulieferlogistik und taktgenaue Bereitstellung von Produktionsmaterialien.",
    },
    {
      icon: <Boxes size={24} />,
      name: "Großhandel",
      desc: "Umschlag von Großgebinden und Kommissionierung für B2B-Abnehmer.",
    },
    {
      icon: <ArrowDownLeft size={24} />,
      name: "Import",
      desc: "Professionelles Handling direkt nach Ankunft am Hafen oder Terminal.",
    },
    {
      icon: <ArrowUpRight size={24} />,
      name: "Export",
      desc: "Stauung und seegerechte Ladungssicherung für den internationalen Versand.",
    },
    {
      icon: <ShoppingBag size={24} />,
      name: "E-Commerce",
      desc: "Schnelles Unloading und Palettieren für Fulfillment-Center und Online-Shops.",
    },
  ];

  return (
    <section id="branchen" className="bg-brand-gray-light py-24 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-primary-blue font-bold tracking-widest text-[13px] uppercase block mb-3">
            Branchen & Zielgruppen
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark-gray mb-6">
            Für welche Branchen wir arbeiten
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Mit unserem flexiblen Dienstleistungsportfolio unterstützen wir Unternehmen aus verschiedensten Wirtschaftszweigen.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col gap-4 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-blue/5 text-primary-blue flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                {ind.icon}
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-dark-gray mb-2">
                  {ind.name}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-gray-500">
                  {ind.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
