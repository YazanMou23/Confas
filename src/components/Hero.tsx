"use client";

import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Shield, Clock, Users, MapPin, Star, DollarSign, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  const chips = [
    { text: "Festpreis-Garantie", icon: Shield },
    { text: "In 24-48h einsatzbereit", icon: Clock },
    { text: "Erfahrene Fachkräfte", icon: Users },
    { text: "Einsatz in ganz NRW", icon: MapPin },
  ];

  const trustBarItems = [
    { text: "Garantierte Festpreise", icon: DollarSign },
    { text: "100% Versichert", icon: Shield },
    { text: "Kurzfristig abrufbar", icon: Zap },
    { text: "Erfahrenes Stammpersonal", icon: Users },
    { text: "Standort Duisburg & NRW", icon: MapPin },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 overflow-hidden bg-[#111111]"
    >
      {/* Background Cinematic Image with Motion Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.35 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <Image
            src="/images/cinematic_hero.png"
            alt="CONWAS B2B Containerentladung und Lagerlogistik"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter blur-[1px]"
          />
        </motion.div>

        {/* Cinematic Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent z-10" />
        <div className="absolute inset-0 bg-[#111111]/45 z-10" />
      </div>

      <div className="max-w-[1200px] w-full mx-auto px-4 z-20 relative flex-grow flex flex-col justify-center">
        <div className="max-w-[850px] text-white">
          {/* Trust Badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[13px] font-semibold tracking-wide text-gray-200 mb-6 shadow-sm hover:bg-white/10 hover:border-white/20 transition-all cursor-default"
          >
            <span className="w-1.5 h-1.5 bg-primary-orange rounded-full animate-ping" />
            <span>✓ Zuverlässiger B2B Logistikpartner</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="text-4xl sm:text-[54px] md:text-[62px] font-extrabold tracking-tight text-white mb-6 leading-[1.1] max-w-[800px]"
          >
            Containerentladung & <br className="hidden sm:inline" />
            Lagerlogistik <span className="text-primary-orange">zum Festpreis.</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="text-[17px] sm:text-[21px] text-gray-300 font-normal mb-8 leading-relaxed max-w-[660px]"
          >
            Professionelle Containerentladung, Warenhandling und Lagerlogistik. Flexible Teams, transparente Festpreise und kurzfristig einsatzbereit.
          </motion.p>

          {/* Value Propositions Chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
            className="flex flex-wrap gap-2.5 mb-10 max-w-[700px]"
          >
            {chips.map((chip, idx) => {
              const Icon = chip.icon;
              return (
                <div
                  key={idx}
                  className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs sm:text-[13px] font-semibold text-gray-200 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 duration-200"
                >
                  <Icon size={14} className="text-primary-orange" />
                  <span>{chip.text}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10"
          >
            <Link
              href="#kontakt"
              className="h-[58px] px-8 rounded-xl bg-primary-orange hover:bg-orange-600 text-white font-extrabold text-base sm:text-[17px] shadow-lg shadow-primary-orange/20 active:scale-[0.98] transition-all flex items-center justify-center text-center duration-200"
            >
              Jetzt unverbindlich anfragen
            </Link>
            <Link
              href="#leistungen"
              className="h-[58px] px-8 rounded-xl border border-white/20 hover:border-white/40 text-white font-extrabold text-base sm:text-[17px] backdrop-blur-sm transition-all active:scale-[0.98] flex items-center justify-center gap-2 group duration-200"
            >
              <span>Leistungen ansehen</span>
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform duration-200 text-gray-400 group-hover:text-white" />
            </Link>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-y-3 gap-x-6 text-[14px] text-gray-400"
          >
            <div className="flex items-center gap-2">
              <span className="text-primary-orange font-extrabold text-base">500+</span>
              <span className="font-medium text-gray-300">erfolgreich entladene Container</span>
            </div>
            <div className="hidden sm:block h-4 w-px bg-white/15" />
            <div className="flex items-center gap-2">
              <div className="flex text-primary-orange gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-current" />
                ))}
              </div>
              <span className="font-semibold text-gray-300">4.9 / 5</span>
              <span className="text-xs text-gray-500">Google Bewertung</span>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
          className="border-t border-white/10 w-full pt-8 mt-16 grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8"
        >
          {trustBarItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 group"
              >
                <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-primary-orange group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-300">
                  <Icon size={16} />
                </div>
                <span className="text-[13px] sm:text-[14px] font-bold text-gray-300 tracking-wide">
                  {item.text}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
