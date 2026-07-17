"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  const images = [
    {
      src: "/images/hero.png",
      alt: "CONWAS Logistikzentrum Duisburg",
      title: "Logistikzentrum Duisburg",
      size: "md:col-span-2 md:row-span-2",
    },
    {
      src: "/images/unloading.png",
      alt: "Containerentladung & Sortierung",
      title: "Containerentladung",
      size: "md:col-span-1 md:row-span-1",
    },
    {
      src: "/images/forklift.png",
      alt: "Moderne Flurförderzeuge im Einsatz",
      title: "Warenumschlag",
      size: "md:col-span-1 md:row-span-2",
    },
    {
      src: "/images/manager.png",
      alt: "Professionelles Qualitätsmanagement",
      title: "Qualitätskontrolle",
      size: "md:col-span-1 md:row-span-1",
    },
  ];

  return (
    <section id="galerie" className="bg-white py-24 scroll-mt-16">
      <div className="max-w-[1200px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-[700px] mx-auto mb-16">
          <span className="text-primary-orange font-bold tracking-widest text-[13px] uppercase block mb-3">
            Impressionen
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-dark-gray mb-6">
            CONWAS in Aktion
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Ein Einblick in unsere tägliche Arbeit: Professionelle Ausrüstung, moderne Hallen und motivierte Fachkräfte.
          </p>
        </div>

        {/* Gallery Masonry-like Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[240px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-2xl group shadow-sm hover:shadow-xl transition-all duration-500 ${img.size}`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Overlay with details */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark-gray/80 via-dark-gray/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="text-primary-orange text-xs font-extrabold uppercase tracking-wider mb-1.5">
                  Operative Exzellenz
                </span>
                <h3 className="text-white text-lg font-bold tracking-tight">
                  {img.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
