"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    "/images/hero.png",
    "/images/slide_2.png",
    "/images/slide_3.png",
    "/images/slide_4.png",
    "/images/slide_5.png",
    "/images/slide_6.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const trustBadges = [
    "Festpreise",
    "Flexible Einsätze",
    "Erfahrenes Team",
    "Standort Duisburg",
  ];

  return (
    <section
      id="home"
      className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-16 overflow-hidden bg-dark-gray"
    >
      {/* Background Slideshow with AnimatePresence */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.35 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={slides[currentSlide]}
              alt="CONWAS Warenhandling & Containerentladung"
              fill
              priority
              sizes="100vw"
              className="object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Sleek Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark-gray via-dark-gray/80 to-transparent z-1" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-gray via-transparent to-transparent z-1" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-4 z-10 relative">
        <div className="max-w-[720px] text-white">
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary-blue/20 border border-primary-blue/30 backdrop-blur-md text-[13px] font-bold tracking-wider text-blue-300 uppercase mb-6"
          >
            <span className="w-2 h-2 bg-primary-orange rounded-full animate-pulse" />
            Ihr Premium B2B Partner in Deutschland
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]"
          >
            Container entladen.
            <span className="block text-primary-orange">Lager effizient betreiben.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg sm:text-xl text-gray-300 font-medium mb-10 leading-relaxed max-w-[620px]"
          >
            Professionelle Containerentladung, Lagerlogistik und Warenhandling in Duisburg – zuverlässig, flexibel und zum Festpreis.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <Link
              href="#kontakt"
              className="inline-flex items-center justify-center bg-primary-orange text-white hover:bg-orange-600 px-8 py-4 rounded-xl text-[16px] font-bold shadow-xl shadow-primary-orange/20 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Jetzt Angebot anfragen
            </Link>
            <Link
              href="#leistungen"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/15 border border-white/20 text-white backdrop-blur-md px-8 py-4 rounded-xl text-[16px] font-bold transition-all duration-300 group"
            >
              Unsere Leistungen
              <ChevronRight size={18} className="ml-1 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 sm:flex sm:items-center gap-4 sm:gap-6 border-t border-white/10 pt-8"
          >
            {trustBadges.map((badge, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-primary-orange shrink-0" />
                <span className="text-[14px] sm:text-[15px] font-bold text-gray-300 tracking-wide">
                  {badge}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
