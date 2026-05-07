"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Beranda", href: "#" },
  { label: "Keunggulan", href: "#why-us" },
  { label: "Layanan", href: "#services" },
  { label: "Promo", href: "#promo" },
  { label: "Harga", href: "#pricelist" },
  { label: "Tim Dokter", href: "#doctors" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled ? "bg-dinara-cream/95 backdrop-blur-md shadow-lg" : "bg-dinara-cream"
      }`}>
      <div className="container mx-auto px-4 lg:px-10">
        <div className="flex items-center justify-between h-[56px] sm:h-[64px]">

          {/* Logo Area */}
          <div className="w-[110px] sm:w-[200px] flex items-center justify-start">
            <a href="#" className="flex items-center group">
              <Image
                src="/logo.png"
                alt="Dinara Dental Care"
                width={120}
                height={40}
                className="h-8 sm:h-10 w-auto object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
              />
            </a>
          </div>

          {/* Desktop Nav - Perfectly Centered */}
          <div className="hidden md:flex flex-1 items-center justify-center">
            <div className="flex items-center space-x-1 lg:space-x-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-dinara-warm hover:text-dinara-primary px-2 lg:px-2.5 py-2 text-sm lg:text-[15px] font-bold transition-all duration-300 whitespace-nowrap"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Reservasi Button & Mobile Toggle */}
          <div className="w-[110px] sm:w-[200px] flex items-center justify-end space-x-4">
            <a
              href="https://wa.me/6285828399611?text=Halo%20Dinara%20Dental%20Care,%20saya%20ingin%20reservasi"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-dinara-primary hover:bg-dinara-dark text-white px-5 lg:px-6 py-2 text-sm font-bold shadow-lg shadow-dinara-primary/20 transition-all duration-300 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
            >
              Reservasi
            </a>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-dinara-warm hover:text-dinara-primary focus:outline-none transition-colors"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-dinara-cream border-b border-dinara-accent/15 shadow-2xl absolute w-full left-0 animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block px-3 py-3 text-base font-medium text-dinara-dark hover:bg-dinara-light hover:text-dinara-primary rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 px-3">
              <a
                href="https://wa.me/6285828399611?text=Halo%20Dinara%20Dental%20Care,%20saya%20ingin%20reservasi"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-dinara-primary hover:bg-dinara-dark text-white rounded-full py-3 text-base font-semibold transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Reservasi Sekarang
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}