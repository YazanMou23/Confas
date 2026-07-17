"use client";

import { Phone, MessageSquare, FileText } from "lucide-react";

export default function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {/* WhatsApp CTA */}
      <a
        href="https://wa.me/4915115655421"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group relative"
        aria-label="WhatsApp Kontakt"
      >
        <MessageSquare size={24} className="fill-white" />
        <span className="absolute right-16 bg-dark-gray text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          WhatsApp Chat
        </span>
      </a>

      {/* Phone CTA */}
      <a
        href="tel:00492032988333"
        className="flex items-center justify-center bg-primary-blue hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group relative"
        aria-label="Telefon Kontakt"
      >
        <Phone size={24} className="fill-white" />
        <span className="absolute right-16 bg-dark-gray text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Anrufen (24/7)
        </span>
      </a>

      {/* Quote CTA */}
      <a
        href="#kontakt"
        className="flex items-center justify-center bg-primary-orange hover:bg-orange-600 text-white w-14 h-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group relative"
        aria-label="Angebot anfordern"
      >
        <FileText size={24} />
        <span className="absolute right-16 bg-dark-gray text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Angebot anfragen
        </span>
      </a>
    </div>
  );
}
