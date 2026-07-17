import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CONWAS | Containerentladung & Lagerlogistik Duisburg",
  description: "Professionelle B2B Containerentladung, LKW Be- und Entladung sowie Warenhandling in Duisburg. Zuverlässiger Service ✓ Festpreise ✓ Flexible Einsätze.",
  icons: {
    icon: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-white text-dark-gray">
        {children}
      </body>
    </html>
  );
}
