"use client";

import { Phone, MessageSquare, FileText } from "lucide-react";

export default function FloatingContact() {
  return (
    <>
      {/* Desktop Floating Corner Buttons */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
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

      {/* Mobile Downbar (Left: Calling Circle, Right: WhatsApp Circle) */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-6 py-3 justify-between items-center shadow-[0_-8px_30px_rgba(0,0,0,0.06)] pb-[calc(12px+env(safe-area-inset-bottom))]">
        {/* Left: Call Circle */}
        <a
          href="tel:00492032988333"
          className="flex items-center justify-center bg-primary-blue active:bg-blue-800 text-white w-11 h-11 rounded-full shadow-md active:scale-95 transition-all"
          aria-label="Telefon Anruf"
        >
          <Phone size={18} className="fill-white/10" />
        </a>

        {/* Right: Chat Circle */}
        <a
          href="https://wa.me/4915115655421"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center bg-[#25D366] active:bg-[#20ba5a] text-white w-11 h-11 rounded-full shadow-md active:scale-95 transition-all"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare size={18} className="fill-white/10" />
        </a>
      </div>
    </>
  );
}
