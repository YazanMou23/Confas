"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Startseite", href: "#home" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Branchen", href: "#branchen" },
    { name: "Über Uns", href: "#uber-uns" },
    { name: "Galerie", href: "#galerie" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="#home" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="CONWAS Logo"
            width={140}
            height={50}
            className={`h-11 w-auto object-contain transition-all duration-300 ${
              isScrolled ? "" : "brightness-0 invert"
            }`}
            priority
          />
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-[15px] font-bold transition-colors duration-200 ${
                isScrolled
                  ? "text-dark-gray hover:text-primary-blue"
                  : "text-white hover:text-primary-orange"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="tel:00492032988333"
            className={`flex items-center gap-2 text-[14px] font-extrabold transition-colors ${
              isScrolled
                ? "text-primary-blue hover:text-primary-orange"
                : "text-white hover:text-primary-orange"
            }`}
          >
            <Phone size={16} />
            <span>0203 298 83 33</span>
          </a>
          <Link
            href="#kontakt"
            className="bg-primary-orange text-white hover:bg-orange-600 px-6 py-2.5 rounded-lg text-[15px] font-bold shadow-lg shadow-primary-orange/20 transition-all duration-200 transform hover:-translate-y-0.5"
          >
            Angebot anfragen
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden p-2 focus:outline-none ${
            isScrolled || isOpen ? "text-dark-gray" : "text-white"
          }`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-6 px-6 flex flex-col gap-5 animate-in fade-in slide-in-from-top-5 duration-200">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-base font-semibold text-dark-gray hover:text-primary-blue transition-colors py-1.5 border-b border-gray-50"
              >
                {link.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-4 mt-2">
            <a
              href="tel:00492032988333"
              className="flex items-center justify-center gap-2 py-3 rounded-lg border border-gray-200 text-primary-blue font-bold text-center"
            >
              <Phone size={18} />
              <span>0203 298 83 33</span>
            </a>
            <Link
              href="#kontakt"
              onClick={() => setIsOpen(false)}
              className="bg-primary-orange text-white hover:bg-orange-600 py-3 rounded-lg font-bold text-center shadow-lg shadow-primary-orange/15"
            >
              Angebot anfragen
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
