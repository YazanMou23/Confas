import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock, ArrowRight } from "lucide-react";

export default function Footer() {
  const quickLinks = [
    { name: "Startseite", href: "#home" },
    { name: "Leistungen", href: "#leistungen" },
    { name: "Branchen", href: "#branchen" },
    { name: "Über Uns", href: "#uber-uns" },
    { name: "Galerie", href: "#galerie" },
    { name: "FAQ", href: "#faq" },
    { name: "Kontakt", href: "#kontakt" },
  ];

  const services = [
    { name: "Containerentladung", href: "#leistungen" },
    { name: "Containerbeladung", href: "#leistungen" },
    { name: "LKW Be- & Entladung", href: "#leistungen" },
    { name: "Lagerlogistik", href: "#leistungen" },
    { name: "Warenhandling", href: "#leistungen" },
    { name: "Repacking & Palettenwicklung", href: "#leistungen" },
  ];

  return (
    <footer className="bg-dark-gray text-white border-t-4 border-primary-orange">
      {/* Top Footer Section */}
      <div className="max-w-[1200px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Column 1: Company Profile */}
        <div className="flex flex-col gap-6">
          <Link href="#home" className="flex items-center">
            <Image
              src="/images/logo.png"
              alt="CONWAS Logo"
              width={140}
              height={50}
              className="h-11 w-auto object-contain brightness-0 invert"
            />
          </Link>
          <p className="text-gray-400 text-[14px] leading-relaxed">
            Ihr verlässlicher Partner in Duisburg für hocheffiziente Containerentladung, professionelle Lagerlogistik und flexibles Warenhandling zum Festpreis.
          </p>
          <div className="flex flex-col gap-3 text-[14px] text-gray-400 mt-2">
            <div className="flex items-center gap-2">
              <Clock size={16} className="text-primary-orange" />
              <span>Mo. - Fr.: 09:00 - 18:00 Uhr</span>
            </div>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white mb-6 uppercase border-l-2 border-primary-orange pl-3">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3">
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px] flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="text-primary-orange transform group-hover:translate-x-1 transition-transform" />
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white mb-6 uppercase border-l-2 border-primary-orange pl-3">
            Leistungen
          </h3>
          <ul className="flex flex-col gap-3">
            {services.map((service) => (
              <li key={service.name}>
                <Link
                  href={service.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200 text-[14px] flex items-center gap-1.5 group"
                >
                  <ArrowRight size={12} className="text-primary-orange transform group-hover:translate-x-1 transition-transform" />
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact Info */}
        <div>
          <h3 className="text-lg font-bold tracking-tight text-white mb-6 uppercase border-l-2 border-primary-orange pl-3">
            Kontakt
          </h3>
          <ul className="flex flex-col gap-4 text-[14px] text-gray-400">
            <li className="flex items-start gap-3">
              <MapPin size={20} className="text-primary-orange shrink-0 mt-0.5" />
              <span>
                Georgstrasse 8<br />
                47226 Duisburg<br />
                Deutschland
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-primary-orange shrink-0" />
              <div className="flex flex-col">
                <a href="tel:00492032988333" className="hover:text-white transition-colors">
                  0203 298 83 33
                </a>
                <a href="tel:004915115655421" className="hover:text-white transition-colors">
                  0151 156 55 421
                </a>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-primary-orange shrink-0" />
              <div className="flex flex-col">
                <a href="mailto:info@conwas.eu" className="hover:text-white transition-colors">
                  info@conwas.eu
                </a>
                <a href="mailto:yasarulakci@conwas.eu" className="hover:text-white transition-colors">
                  yasarulakci@conwas.eu
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-[1200px] mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} CONWAS. Alle Rechte vorbehalten.</p>
          <div className="flex items-center gap-6">
            <Link href="#impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="#datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
