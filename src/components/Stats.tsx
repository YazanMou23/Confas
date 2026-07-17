"use client";

import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    { value: "1.000+", label: "Container entladen" },
    { value: "50.000+", label: "Paletten bewegt" },
    { value: "250+", label: "Geschäftskunden" },
    { value: "24/7", label: "Flexible Einsätze" },
  ];

  return (
    <section className="bg-primary-blue text-white py-16">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex flex-col gap-2"
            >
              <span className="text-4xl sm:text-5xl font-black tracking-tight text-primary-orange">
                {stat.value}
              </span>
              <span className="text-sm sm:text-base font-bold text-blue-100 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
