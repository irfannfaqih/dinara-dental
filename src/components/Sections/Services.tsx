"use client";

import { motion } from "framer-motion";
import { 
  Sparkles, 
  Smile, 
  Stethoscope, 
  Activity, 
  Zap, 
  Heart,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

const SERVICES = [
  {
    title: "Scaling & Polishing",
    description: "Pembersihan karang gigi profesional untuk mencegah radang gusi dan bau mulut.",
    icon: Sparkles,
  },
  {
    title: "Orthodontics (Kawat Gigi)",
    description: "Solusi perapian gigi dengan berbagai pilihan bracket (Metal, Ceramic, atau Clear Aligners).",
    icon: Smile,
  },
  {
    title: "Konservasi Gigi",
    description: "Penambalan gigi estetik dan perawatan saluran akar untuk menyelamatkan gigi asli Anda.",
    icon: Stethoscope,
  },
  {
    title: "Bedah Mulut",
    description: "Prosedur pencabutan gigi bungsu dan bedah minor dengan teknik minim rasa sakit.",
    icon: Activity,
  },
  {
    title: "Estetik (Whitening)",
    description: "Dapatkan senyum cerah seketika dengan prosedur bleaching menggunakan teknologi terbaru.",
    icon: Zap,
  },
  {
    title: "Gigi Tiruan",
    description: "Pembuatan gigi tiruan lepasan maupun permanen untuk mengembalikan fungsi kunyah Anda.",
    icon: Heart,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-3 gap-10 items-start">
          <div className="lg:col-span-1 space-y-5 lg:sticky lg:top-28">
            <div className="inline-block px-3 py-1 rounded-full bg-dinara-primary/10 text-dinara-primary text-[11px] font-medium tracking-wide uppercase">
              Layanan Kami
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-dinara-dark leading-tight">
              Solusi Lengkap untuk <span className="text-dinara-primary">Kesehatan Gigi</span> Anda
            </h2>
            <p className="text-dinara-warm text-sm md:text-base leading-relaxed">
              Kami menawarkan berbagai macam perawatan gigi yang disesuaikan dengan kebutuhan spesifik setiap pasien, mulai dari perawatan rutin hingga prosedur kosmetik.
            </p>
            <div className="pt-3">
              <Link 
                href="https://wa.me/6285828399611?text=Halo%20Dinara%20Dental%20Care,%20saya%20ingin%20konsultasi%20gratis"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-dinara-primary px-7 py-3.5 text-sm font-medium text-white shadow-lg hover:bg-dinara-dark transition-all duration-300"
              >
                Konsultasi Gratis
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {SERVICES.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="h-full"
              >
                <Card className="h-full border border-dinara-accent/10 bg-dinara-cream/30 hover:bg-white hover:border-dinara-primary/20 hover:shadow-xl transition-all duration-500">
                  <CardContent className="p-5 md:p-6 flex flex-col h-full">
                    <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-dinara-primary shadow-sm ring-1 ring-dinara-accent/15">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-bold mb-2.5 text-dinara-dark text-balance">{service.title}</h3>
                    <p className="text-dinara-warm text-[13px] leading-relaxed text-balance">
                      {service.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
