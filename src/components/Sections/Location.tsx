"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";

const InstagramIcon = (props: any) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
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

export default function Location() {
  return (
    <section id="location" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-block px-3 py-1 rounded-full bg-dinara-primary/10 text-dinara-primary text-sm font-medium tracking-wide uppercase">
                Lokasi Kami
              </div>
              <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-dinara-dark leading-tight">
                Kunjungi Klinik <span className="text-dinara-primary">Dinara Dental</span>
              </h2>
              <p className="text-dinara-warm text-lg leading-relaxed max-w-lg">
                Berlokasi strategis di Banjarmasin Selatan, kami siap memberikan pelayanan kesehatan gigi terbaik untuk Anda.
              </p>
            </div>

            <div className="grid gap-8">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-dinara-light flex items-center justify-center text-dinara-primary shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dinara-dark mb-1">Alamat Lengkap</h4>
                  <p className="text-dinara-warm text-sm leading-relaxed">
                    Jl. Bumi Mas Raya, Pemurus Baru, Kec. Banjarmasin Sel.,<br />
                    Kota Banjarmasin, Kalimantan Selatan 70236
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-dinara-light flex items-center justify-center text-dinara-primary shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dinara-dark mb-1">Jam Operasional</h4>
                  <div className="text-dinara-warm text-sm flex flex-col gap-1">
                    <p className="flex items-center gap-2">
                      <span className="w-24">Senin - Sabtu</span>
                      <span className="font-bold text-dinara-dark">10:00 - 21:00 WITA</span>
                    </p>
                    <p className="flex items-center gap-2 text-red-400">
                      <span className="w-24">Minggu</span>
                      <span>Tutup</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-xl bg-dinara-light flex items-center justify-center text-dinara-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-dinara-dark mb-1">Kontak Kami</h4>
                  <div className="flex gap-4 items-center">
                    <a href="https://wa.me/6285828399611" target="_blank" rel="noopener noreferrer" className="text-dinara-primary text-sm font-bold hover:underline">0858-2839-9611</a>
                    <div className="h-4 w-px bg-dinara-accent/30"></div>
                    <a href="https://www.instagram.com/dinaradental/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-dinara-primary text-sm font-bold hover:underline">
                      <InstagramIcon size={16} />
                      @dinaradental
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square md:aspect-video lg:aspect-square w-full rounded-[2.5rem] overflow-hidden shadow-xl border-8 border-dinara-light"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.046213034608!2d114.6131245!3d-3.3387778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2de421455f88bbcb%3A0x1ccd3c3a39e3b298!2sDinara%20Dental%20Care!5e0!3m2!1sid!2sid!4v1777259160533!5m2!1sid!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Peta Lokasi Dinara Dental Care"
              className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
