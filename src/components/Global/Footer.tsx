import { MapPin, Phone, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const TikTokIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width={props.width || "24"}
    height={props.height || "24"}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-dinara-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Image
              src="/logo.png"
              alt="Dinara Dental Care"
              width={200}
              height={70}
              className="h-12 sm:h-16 w-auto object-contain brightness-0 invert opacity-90"
            />
            <p className="text-white/50 leading-relaxed text-sm">
              Klinik gigi modern di Banjarmasin yang mengutamakan kenyamanan pasien dan hasil perawatan terbaik dengan teknologi terkini.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/dinaradental/"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-dinara-accent transition-all duration-300"
              >
                <InstagramIcon width={20} height={20} />
              </a>
              <a
                href="https://www.tiktok.com/@dinaradental"
                target="_blank"
                rel="noopener noreferrer"
                className="h-10 w-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-dinara-accent transition-all duration-300"
              >
                <TikTokIcon width={20} height={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Layanan Kami</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="#services" className="hover:text-dinara-accent transition-colors">Scaling & Polishing</Link></li>
              <li><Link href="#services" className="hover:text-dinara-accent transition-colors">Behel Gigi (Orthodontic)</Link></li>
              <li><Link href="#services" className="hover:text-dinara-accent transition-colors">Bleaching (Whitening)</Link></li>
              <li><Link href="#services" className="hover:text-dinara-accent transition-colors">Bedah Mulut</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Tautan</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li><Link href="#why-us" className="hover:text-dinara-accent transition-colors">Tentang Kami</Link></li>
              <li><Link href="#promo" className="hover:text-dinara-accent transition-colors">Promo Terbaru</Link></li>
              <li><Link href="#pricelist" className="hover:text-dinara-accent transition-colors">Daftar Harga</Link></li>
              <li><Link href="#faq" className="hover:text-dinara-accent transition-colors">Pertanyaan Umum</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Hubungi Kami</h4>
            <ul className="space-y-4 text-sm text-white/50">
              <li className="flex gap-3">
                <MapPin size={18} className="text-dinara-accent shrink-0" />
                <span>Jl. Bumi Mas Raya, Pemurus Baru, Banjarmasin Selatan.</span>
              </li>
              <li className="flex gap-3 text-white font-bold">
                <Phone size={18} className="text-dinara-accent shrink-0" />
                <span>0858-2839-9611</span>
              </li>
              <li className="flex gap-3">
                <Clock size={18} className="text-dinara-accent shrink-0" />
                <span>Senin - Sabtu (10:00 - 21:00)</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-xs text-center md:text-left">
            &copy; {new Date().getFullYear()} Dinara Dental Care. All rights reserved.
          </p>
          <div className="flex gap-8 text-white/30 text-xs">
            <Link href="#" className="hover:text-white transition-colors">Kebijakan Privasi</Link>
            <Link href="#" className="hover:text-white transition-colors">Syarat & Ketentuan</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
