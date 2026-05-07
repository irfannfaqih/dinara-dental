"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WA_NUMBER = "6285828399611";

interface PriceCategory {
  title: string;
  startFrom: string;
  highlights: string[];
}

const PRICE_CATEGORIES: PriceCategory[] = [
  {
    title: "Perawatan Gigi & Mulut",
    startFrom: "50.000",
    highlights: ["Scaling", "Bleaching", "Kuretase Gusi", "Frenektomi"],
  },
  {
    title: "Penambalan Gigi",
    startFrom: "250.000",
    highlights: ["Komposit Anterior/Posterior", "GIC", "Veneer Komposit & Porcelain"],
  },
  {
    title: "Cabut Gigi",
    startFrom: "250.000",
    highlights: ["Cabut Biasa", "Odontektomi", "Alveolektomi", "Gingivektomi"],
  },
  {
    title: "Perawatan Saluran Akar",
    startFrom: "100.000",
    highlights: ["Open Access", "Preparasi", "Obturasi", "Devitalisasi"],
  },
  {
    title: "Orthodonsia (Kawat Gigi)",
    startFrom: "4.000.000",
    highlights: ["Metal", "Ceramic", "Self Ligating", "Self Ligating Ceramic"],
  },
  {
    title: "Prostodonsia (Gigi Tiruan)",
    startFrom: "1.800.000",
    highlights: ["Gigi Tiruan Lepasan", "Porcelain Fused to Metal", "Full Zircone"],
  },
  {
    title: "Pedodonsia (Anak)",
    startFrom: "150.000",
    highlights: ["Cabut Gigi Anak", "Fissure Sealant", "Vitamin Gigi"],
  },
  {
    title: "Harga Paketan",
    startFrom: "1.200.000",
    highlights: ["PSA + Pasak + Mahkota", "Gigi Tiruan Cekat + PSA"],
  },
];

export default function Pricelist() {
  const waMessage = encodeURIComponent("Halo Dinara Dental Care, saya ingin menanyakan detail harga perawatan. Terima kasih.");
  const waHref = `https://wa.me/${WA_NUMBER}?text=${waMessage}`;

  return (
    <section id="pricelist" className="py-16 bg-dinara-light/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-3 mb-12"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-dinara-accent/10 text-dinara-primary text-[9px] font-bold tracking-[0.2em] uppercase border border-dinara-accent/20">
            Professional & Affordable
          </div>
          <h2 className="text-2xl md:text-4xl font-bold tracking-tight text-dinara-dark">
            Investasi Untuk <span className="text-dinara-accent">Senyuman Anda</span>
          </h2>
          <p className="max-w-[500px] text-dinara-warm/80 text-sm md:text-base">
            Kualitas pelayanan premium dengan harga yang tetap bersahabat dan transparan.
          </p>
        </motion.div>
 
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">
          {PRICE_CATEGORIES.map((cat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="relative group bg-white p-6 rounded-[1.5rem] border border-dinara-accent/10 hover:border-dinara-accent/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(196,168,130,0.12)] flex flex-col"
            >
              <div className="mb-5 flex-1">
                <h3 className="text-base md:text-lg font-bold text-dinara-dark mb-4 leading-tight group-hover:text-dinara-primary transition-colors">
                  {cat.title}
                </h3>
                <div className="space-y-2.5">
                  {cat.highlights.slice(0, 3).map((item, i) => (
                    <p key={i} className="text-[13px] text-dinara-warm/70 flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-dinara-accent/40" />
                      {item}
                    </p>
                  ))}
                  {cat.highlights.length > 3 && (
                    <p className="text-[9px] text-dinara-warm/40 font-medium uppercase tracking-wider pl-3">
                      + Layanan Lainnya
                    </p>
                  )}
                </div>
              </div>
              
              <div className="pt-5 border-t border-dinara-light/50 mt-auto">
                <p className="text-[9px] text-dinara-warm/60 font-bold uppercase tracking-widest mb-1">Mulai Dari</p>
                <div className="flex items-baseline gap-1">
                  <span className="text-[13px] font-bold text-dinara-primary">Rp</span>
                  <span className="text-2xl font-black text-dinara-primary tracking-tighter">
                    {cat.startFrom}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
 
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center"
        >
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 bg-dinara-primary text-white px-7 py-3.5 rounded-2xl font-bold shadow-xl shadow-dinara-primary/20 hover:bg-dinara-dark transition-all duration-300 hover:scale-[1.02]"
          >
            Konsultasi Harga Gratis
            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-5 text-dinara-warm/40 text-[10px] font-medium tracking-wide max-w-md text-center leading-relaxed">
            *Estimasi biaya akhir akan diberikan setelah pemeriksaan klinis oleh dokter gigi kami agar sesuai dengan kondisi gigi Anda.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
