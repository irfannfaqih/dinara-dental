"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full pt-4 md:pt-8 lg:pt-10 pb-10 md:pb-20 lg:pb-24 bg-dinara-cream overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col space-y-6"
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-dinara-primary/10 text-dinara-primary text-xs font-semibold"
              >
                <CheckCircle size={14} />
                <span>Konsultasi Gratis untuk Semua Pasien</span>
              </motion.div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-dinara-dark leading-[1.1] tracking-tight">
                Tidak perlu merasa tegang sebelum ke dokter gigi.
              </h1>
              <p className="text-base md:text-lg text-dinara-warm max-w-lg leading-relaxed">
                Kami percaya rasa nyaman dimulai dari komunikasi yang baik. Anda dapat menyampaikan keluhan dan berkonsultasi terlebih dahulu secara gratis sebelum menentukan perawatan yang sesuai, tanpa tekanan dan tanpa terburu-buru.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 items-center">
              <a
                href="https://wa.me/6285828399611?text=Halo%20Dinara%20Dental%20Care,%20saya%20ingin%20konsultasi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full bg-dinara-primary text-white shadow-xl shadow-dinara-primary/20 text-sm md:text-base font-semibold hover:bg-dinara-dark transition-all duration-300 hover:-translate-y-0.5"
              >
                Konsultasi Sekarang
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center h-12 px-7 rounded-full border border-dinara-accent/40 text-dinara-dark hover:bg-dinara-light text-sm md:text-base font-semibold transition-all duration-300"
              >
                Lihat Layanan
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <div className="h-4 w-px bg-dinara-accent/30" />
              <p className="text-dinara-warm text-xs font-medium">Dipercaya oleh 500+ Pasien</p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative h-[350px] md:h-[480px] rounded-3xl overflow-hidden shadow-2xl group cursor-zoom-in"
          >
            <Image
              src="/hero-team.jpg"
              alt="Dinara Dental Team"
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
            {/* Warm Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dinara-dark/40 to-transparent group-hover:opacity-0 transition-opacity duration-500" />

            {/* Floating Badge */}
            <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur shadow-lg rounded-2xl p-4 flex items-center gap-4">
              <div className="w-10 h-10 bg-dinara-primary/15 rounded-full flex items-center justify-center text-dinara-primary">
                <Star size={20} fill="currentColor" />
              </div>
              <div>
                <p className="text-dinara-dark font-bold leading-none text-sm">Rating 5.0</p>
                <p className="text-dinara-warm/60 text-[10px] mt-1">Google Maps Review</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
