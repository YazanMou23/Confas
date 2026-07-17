"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  RefreshCw,
  Coins,
  Users2,
  Zap,
  Award,
  Clock,
  TrendingDown,
} from "lucide-react";

export default function WhyConwas() {
  const benefits = [
    {
      icon: <ShieldCheck className="text-primary-blue" size={24} />,
      title: "Zuverlässigkeit",
      description:
        "Als inhabergeführtes B2B-Unternehmen stehen wir für absolute Vertragstreue, Pünktlichkeit und sicheres Handling Ihrer Waren.",
    },
    {
      icon: <RefreshCw className="text-primary-blue" size={24} />,
      title: "Flexibilität",
      description:
        "Egal ob saisonale Spitzen, kurzfristige Lieferungen oder Sonderschichten – wir passen uns Ihren Kapazitätsanforderungen flexibel an.",
    },
    {
      icon: <Coins className="text-primary-blue" size={24} />,
      title: "Festpreise",
      description:
        "Transparente Kostenstruktur ohne versteckte Gebühren. Sie erhalten kalkulierbare Festpreise pro Container oder Palette.",
    },
    {
      icon: <Users2 className="text-primary-blue" size={24} />,
      title: "Erfahrenes Personal",
      description:
        "Unser Team besteht aus fest angestellten, eingespielten Mitarbeitern, die im händischen Container-Handling geschult sind.",
    },
    {
      icon: <Zap className="text-primary-blue" size={24} />,
      title: "Schnelle Prozesse",
      description:
        "Optimierte Arbeitsabläufe garantieren eine schnelle Abwicklung an den Rampen, um Demurrage- und Detentionsgebühren zu vermeiden.",
    },
    {
      icon: <Award className="text-primary-blue" size={24} />,
      title: "Hohe Qualität",
      description:
        "Wir arbeiten nach strengen Sicherheits- und Qualitätsstandards. Ihre Ware wird beim Be- und Entladen bestmöglich geschützt.",
    },
    {
      icon: <Clock className="text-primary-blue" size={24} />,
      title: "Termintreue",
      description:
        "Just-in-time-Bereitstellung. Wir halten zugesagte Fristen und Slot-Buchungen an Ihren Lägern verlässlich ein.",
    },
    {
      icon: <TrendingDown className="text-primary-blue" size={24} />,
      title: "Kosteneffizienz",
      description:
        "Durch das Outsourcing an CONWAS senken Sie Ihre fixen Personalkosten und zahlen nur für tatsächlich erbrachte Logistikleistungen.",
    },
  ];

  return (
    <section className="bg-white py-24 border-b border-gray-100">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-[700px] mb-16">
          <span className="text-primary-orange font-bold tracking-widest text-[13px] uppercase block mb-3">
            Ihre Vorteile mit uns
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark-gray mb-6">
            Warum Unternehmen CONWAS vertrauen
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Wir verstehen die Herausforderungen moderner Supply Chains. Mit CONWAS minimieren Sie Risiken und optimieren Ihre Performance.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="flex flex-col gap-4 p-5 rounded-2xl hover:bg-brand-gray-light transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-blue/5 flex items-center justify-center shrink-0 group-hover:bg-primary-blue group-hover:text-white transition-colors duration-300">
                <div className="group-hover:text-white transition-colors">
                  {benefit.icon}
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold tracking-tight text-dark-gray mb-2">
                  {benefit.title}
                </h3>
                <p className="text-[14px] leading-relaxed text-gray-500">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
