"use client";

import { motion } from "framer-motion";
import {
  PackageOpen,
  Package,
  Truck,
  Warehouse,
  Boxes,
  Layers,
  RotateCcw,
  ListTodo,
  ArrowRight,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <PackageOpen className="text-white" size={28} />,
      title: "Containerentladung",
      isHighlight: true,
      description:
        "Unser Kerngeschäft: Professionelle und schnelle Entladung von Seecontainern aller Größen (20ft, 40ft, HC). Fachgerechtes Sortieren, Palettieren und Erfassung Ihrer Waren.",
    },
    {
      icon: <Package className="text-white" size={28} />,
      title: "Containerbeladung",
      description:
        "Optimale Platzausnutzung und transportsicheres Stauen Ihrer B2B-Fracht für den weltweiten Export. Wir sorgen für fachgerechte Ladungssicherung.",
    },
    {
      icon: <Truck className="text-white" size={28} />,
      title: "LKW Be- & Entladung",
      description:
        "Schneller Umschlag von Lkw und Trailern an unseren Laderampen. Effizienter Wareneingang und Warenausgang zur Einhaltung Ihrer engen Zeitfenster.",
    },
    {
      icon: <Warehouse className="text-white" size={28} />,
      title: "Lagerlogistik",
      description:
        "Umfassende Services rund um Ihr B2B-Lager – von der systemischen Einlagerung über die Bestandsverwaltung bis zum vollständigen Outsourcing.",
    },
    {
      icon: <Boxes className="text-white" size={28} />,
      title: "Warenhandling",
      description:
        "Sorgfältiger Umgang mit Ihren Waren. Ob Qualitätskontrolle, Reinigung, Etikettierung oder Konfektionierung – wir veredeln Ihre Supply Chain.",
    },
    {
      icon: <RotateCcw className="text-white" size={28} />,
      title: "Goods Repacking",
      description:
        "Umpacken von Importwaren auf Euro-Paletten oder kundenspezifische Träger. Flexibel, schnell und transportsicher vorbereitet für den Weitertransport.",
    },
    {
      icon: <Layers className="text-white" size={28} />,
      title: "Palettenwicklung",
      description:
        "Professionelle Stretchwicklung zum optimalen Schutz Ihrer Palettenladungen gegen Verrutschen, Beschädigung und Witterungseinflüsse beim Transport.",
    },
    {
      icon: <ListTodo className="text-white" size={28} />,
      title: "Kommissionierung",
      description:
        "Präzises Zusammenstellen von B2B-Bestellungen per Pick-by-Paper oder Barcode-Scanning. Schnelle Bereitstellung für den termingerechten Versand.",
    },
  ];

  return (
    <section id="leistungen" className="bg-brand-gray-light py-24 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-primary-blue font-bold tracking-widest text-[13px] uppercase block mb-3">
            Unsere Kernkompetenzen
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark-gray mb-6">
            Logistiklösungen nach Maß
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Wir unterstützen führende Industrie-, Handels- und E-Commerce-Unternehmen mit zuverlässigen und flexiblen Dienstleistungen zum Festpreis.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className={`relative rounded-2xl p-6 bg-white border border-gray-100 hover:border-gray-200 shadow-sm transition-all duration-300 group flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 ${
                service.isHighlight
                  ? "md:col-span-2 bg-gradient-to-br from-primary-blue to-blue-900 border-none shadow-primary-blue/10"
                  : ""
              }`}
            >
              <div>
                {/* Icon Wrapper */}
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-md ${
                    service.isHighlight
                      ? "bg-primary-orange"
                      : "bg-primary-blue"
                  }`}
                >
                  {service.icon}
                </div>

                {/* Title */}
                <h3
                  className={`text-xl font-bold tracking-tight mb-4 ${
                    service.isHighlight ? "text-white text-2xl" : "text-dark-gray"
                  }`}
                >
                  {service.title}
                </h3>

                {/* Description */}
                <p
                  className={`text-[14px] leading-relaxed mb-6 ${
                    service.isHighlight ? "text-blue-100" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </div>

              {/* Action Button */}
              <a
                href="#kontakt"
                className={`inline-flex items-center gap-1.5 text-[14px] font-bold transition-all ${
                  service.isHighlight
                    ? "text-primary-orange hover:text-white"
                    : "text-primary-blue hover:text-primary-orange"
                }`}
              >
                <span>Anfrage senden</span>
                <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
