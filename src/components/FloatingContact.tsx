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

      {/* Mobile Downbar (Left: Calling, Right: WhatsApp Chat) */}
      <div className="flex md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-t border-gray-100 px-4 py-2.5 gap-3 shadow-[0_-8px_30px_rgba(0,0,0,0.06)] pb-[calc(10px+env(safe-area-inset-bottom))]">
        {/* Left: Call */}
        <a
          href="tel:00492032988333"
          className="flex-1 flex items-center justify-center gap-1.5 bg-primary-blue hover:bg-blue-800 active:bg-blue-900 text-white py-2.5 px-3 rounded-lg font-bold shadow-sm shadow-primary-blue/5 active:scale-[0.98] transition-all text-center text-xs"
          aria-label="Telefon Anruf"
        >
          <Phone size={14} className="fill-white/10" />
          <span>Jetzt Anrufen</span>
        </a>

        {/* Right: Chat */}
        <a
          href="https://wa.me/4915115655421"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20ba5a] active:bg-[#1da850] text-white py-2.5 px-3 rounded-lg font-bold shadow-sm shadow-green-500/5 active:scale-[0.98] transition-all text-center text-xs"
          aria-label="WhatsApp Chat"
        >
          <MessageSquare size={14} className="fill-white/10" />
          <span>WhatsApp Chat</span>
        </a>
      </div>
    </>
  );
}
