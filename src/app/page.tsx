import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import WhyConwas from "@/components/WhyConwas";
import Process from "@/components/Process";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Industries from "@/components/Industries";
import Gallery from "@/components/Gallery";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  // Schema.org structured data for local business SEO optimization
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": "https://conwas.eu/#organization",
        "name": "CONWAS",
        "url": "https://conwas.eu/",
        "telephone": "+492032988333",
        "email": "info@conwas.eu",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Georgstrasse 8",
          "addressLocality": "Duisburg",
          "postalCode": "47226",
          "addressCountry": "DE"
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "18:00"
        },
        "image": "https://conwas.eu/images/hero.png"
      },
      {
        "@type": "Service",
        "@id": "https://conwas.eu/#service-entladung",
        "serviceType": "Containerentladung",
        "provider": {
          "@type": "LocalBusiness",
          "name": "CONWAS"
        },
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": "Duisburg & NRW"
        },
        "description": "Professionelle und zuverlässige Containerentladung in Duisburg zum Festpreis."
      }
    ]
  };

  return (
    <>
      {/* Structured SEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="flex flex-col min-h-screen">
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          <Hero />
          <TrustBar />
          <Services />
          <WhyConwas />
          <Process />
          <About />
          <Stats />
          <Industries />
          <Gallery />
          <FAQ />
          <CTA />
        </main>

        {/* Footer */}
        <Footer />

        {/* Floating CTAs */}
        <FloatingContact />
      </div>
    </>
  );
}
