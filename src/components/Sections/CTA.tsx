"use client";

import { MessageCircle, ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 bg-dinara-cream relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative rounded-[2.5rem] bg-dinara-dark p-6 md:p-12 lg:p-16 overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-dinara-accent/15 to-transparent"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-dinara-primary/10 rounded-full blur-[100px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight tracking-tighter">
                Mulai Perjalanan <br />
                <span className="text-dinara-accent">Senyum Sehatmu</span>
              </h2>
              <p className="text-white/50 text-base md:text-lg max-w-md leading-relaxed">
                Ribuan pasien telah mempercayakan kesehatan gigi mereka kepada kami. Jadilah bagian dari keluarga besar Dinara Dental.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 lg:justify-end">
              <a
                href="https://wa.me/6285828399611?text=Halo%20Dinara%20Dental%20Care,%20saya%20ingin%20membuat%20jadwal%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-dinara-accent px-6 py-4 text-base font-bold text-dinara-dark shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Hubungi Kami Sekarang
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-4 text-base font-bold text-white backdrop-blur-sm border border-white/10 hover:bg-white/20 transition-all duration-300"
              >
                Lihat Layanan
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
