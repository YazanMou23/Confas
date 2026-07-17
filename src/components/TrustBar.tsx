"use client";

import { DollarSign, ShieldAlert, Award, Calendar, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function TrustBar() {
  const items = [
    { icon: <DollarSign className="text-primary-orange" size={24} />, text: "Festpreise" },
    { icon: <Award className="text-primary-orange" size={24} />, text: "Zuverlässig & Geprüft" },
    { icon: <Calendar className="text-primary-orange" size={24} />, text: "Flexible Einsätze" },
    { icon: <ShieldAlert className="text-primary-orange" size={24} />, text: "Professionelles Team" },
    { icon: <MapPin className="text-primary-orange" size={24} />, text: "Standort Duisburg" },
  ];

  return (
    <section className="bg-white border-b border-gray-100 py-8 shadow-sm">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-4 items-center justify-center">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="flex items-center gap-3.5 px-4 py-2 border-r border-gray-100 last:border-0 md:justify-center"
            >
              <div className="bg-primary-orange/10 p-2 rounded-lg shrink-0">
                {item.icon}
              </div>
              <span className="text-[15px] font-bold text-dark-gray tracking-wide">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
