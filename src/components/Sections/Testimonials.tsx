"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Siti Aisyah",
    text: "Pelayanannya sangat ramah dan tempatnya nyaman. Dokter menjelaskan dengan sangat detail sebelum tindakan. Rekomendasi banget!",
    initial: "SA",
    role: "Pasien Scaling",
  },
  {
    name: "Budi Santoso",
    text: "Scaling di Dinara Dental Care bersih banget dan gak ngilu. Harganya terjangkau dengan kualitas premium. Pasti bakal balik lagi.",
    initial: "BS",
    role: "Pasien Rutin",
  },
  {
    name: "Rina Amelia",
    text: "Pasang behel di sini sangat memuaskan. Progressnya terlihat jelas dan dokternya sabar banget dengerin keluhan kita.",
    initial: "RA",
    role: "Pasien Orthodonti",
  }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-block px-3 py-1 rounded-full bg-dinara-primary/10 text-dinara-primary text-[11px] font-medium tracking-wide uppercase">
            Testimoni
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-dinara-dark leading-tight">
            Apa Kata <span className="text-dinara-primary">Pasien Kami?</span>
          </h2>
          <p className="max-w-[600px] text-dinara-warm text-sm md:text-base">
            Kepuasan dan senyum Anda adalah kebanggaan terbesar bagi kami.
          </p>
        </div>

        <div className="relative mt-6 group">
          <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <motion.div
              className="flex gap-5 pr-6 py-4"
              animate={{
                x: [0, -1005], // Adjusted for smaller card width
              }}
              transition={{
                duration: 40,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              {[...TESTIMONIALS, ...TESTIMONIALS, ...TESTIMONIALS].map((t, index) => (
                <div key={index} className="w-[280px] md:w-[315px] shrink-0">
                  <Card className="h-full border border-dinara-accent/15 bg-dinara-cream/30 hover:bg-white hover:shadow-xl transition-all duration-500 rounded-[1.5rem] relative overflow-hidden group/card">
                    <CardContent className="p-6 md:p-7 flex flex-col h-full">
                      <div className="absolute -top-2 -right-2 text-dinara-primary/5 group-hover/card:text-dinara-primary/10 transition-colors">
                        <Quote size={60} />
                      </div>
                      <div className="flex gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                        ))}
                      </div>
                      <p className="text-dinara-warm/80 text-[13px] italic leading-relaxed mb-5 relative z-10">
                        &quot;{t.text}&quot;
                      </p>
                      <div className="mt-auto flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-dinara-primary/10 flex items-center justify-center text-dinara-primary font-bold text-[10px]">
                          {t.initial}
                        </div>
                        <div>
                          <h4 className="font-bold text-dinara-dark text-[11px]">{t.name}</h4>
                          <p className="text-dinara-warm/60 text-[9px]">{t.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
