"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Gift, ArrowRight } from "lucide-react";

const WA_NUMBER = "6285828399611";
const waLink = (promoName: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `Halo Dinara Dental Care, saya tertarik dengan promo Grand Opening: ${promoName}. Apakah masih tersedia?`
  )}`;

interface PromoItem {
  name: string;
  original: string;
  promo: string;
  note?: string;
}

interface PromoCategory {
  title: string;
  items: PromoItem[];
}

const PROMO_CATEGORIES: PromoCategory[] = [
  {
    title: "Behel Special Price",
    items: [
      { name: "Metal Basic", original: "4.500.000", promo: "2.499.000" },
      { name: "Metal Premium", original: "6.000.000", promo: "3.499.000" },
      { name: "Self Ligating", original: "9.000.000", promo: "6.499.000" },
      { name: "Sapphire", original: "8.000.000", promo: "4.999.000" },
    ],
  },
  {
    title: "Paket Bundling Hemat",
    items: [
      { name: "Dental Spa + Tambal/Cabut", original: "1.000.000", promo: "599.000" },
    ],
  },
  {
    title: "Perawatan Gigi",
    items: [
      { name: "Dental Spa", original: "650.000", promo: "349.000" },
      { name: "Scaling Basic", original: "400.000", promo: "199.000" },
      { name: "Bleaching", original: "1.500.000", promo: "799.000" },
    ],
  },
  {
    title: "Perawatan Lainnya",
    items: [
      { name: "Cabut Gigi", original: "350.000", promo: "200.000", note: "mulai dari" },
      { name: "Cabut Gigi Anak", original: "250.000", promo: "150.000", note: "mulai dari" },
      { name: "Tambal Gigi", original: "350.000", promo: "200.000", note: "mulai dari" },
    ],
  },
];

export default function PromoSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-05-27T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(interval);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const timeUnits = [
    { label: "Hari", value: timeLeft.days },
    { label: "Jam", value: timeLeft.hours },
    { label: "Menit", value: timeLeft.minutes },
    { label: "Detik", value: timeLeft.seconds },
  ];

  return (
    <section id="promo" className="py-16 relative overflow-hidden bg-dinara-dark">
      {/* Premium Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 86c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm66-3c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm-40-39c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zm29 38c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-dinara-accent/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-dinara-primary/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-dinara-accent text-[9px] font-black uppercase tracking-[0.3em] mb-6"
          >
            Special Event
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-white leading-[1.1] tracking-tighter mb-4"
          >
            Grand Opening <span className="text-dinara-accent">Offer</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/50 text-base md:text-lg max-w-lg mx-auto font-medium"
          >
            Dapatkan penawaran eksklusif terbatas untuk berbagai perawatan gigi premium kami.
          </motion.p>

          {/* Countdown */}
          <div className="flex justify-center gap-3 md:gap-5 mt-10">
            {timeUnits.map((unit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="w-14 h-18 md:w-20 md:h-24 bg-white/[0.03] backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center mb-2 shadow-2xl">
                  <span className="text-2xl md:text-4xl font-black text-dinara-accent tracking-tighter">
                    {unit.value.toString().padStart(2, "0")}
                  </span>
                </div>
                <span className="text-white/30 text-[8px] font-bold uppercase tracking-[0.2em]">
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Promo Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {PROMO_CATEGORIES.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-[2rem] p-7 md:p-8 hover:bg-white/[0.05] transition-all duration-500 group"
            >
              <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-6 h-[1.5px] bg-dinara-accent/30" />
                {category.title}
              </h3>

              <div className="space-y-5">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="group/item">
                    <div className="flex items-center justify-between gap-4 mb-1">
                      <p className="text-white/90 font-bold text-sm md:text-base transition-colors group-hover/item:text-dinara-accent">
                        {item.name}
                        {item.note && (
                          <span className="text-white/30 text-[9px] ml-2 font-medium tracking-wide">({item.note})</span>
                        )}
                      </p>
                      <p className="text-dinara-accent font-black text-base md:text-lg">Rp {item.promo}</p>
                    </div>
                    <div className="flex items-center gap-3">
                      <p className="text-white/20 text-[10px] md:text-xs line-through font-medium italic">Rp {item.original}</p>
                      <div className="h-[1px] flex-1 bg-white/[0.05]" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bonus Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl text-center">
            <p className="text-dinara-accent text-xs font-bold tracking-wide">Gratis Konsultasi</p>
            <p className="text-white/30 text-[9px] mt-1 font-medium">Konsultasi dokter tanpa biaya</p>
          </div>
          <div className="bg-dinara-accent/10 border border-dinara-accent/20 p-5 rounded-2xl text-center">
            <p className="text-dinara-accent text-xs font-bold tracking-wide">Special Gift</p>
            <p className="text-dinara-accent/40 text-[9px] mt-1 font-medium">Tersedia untuk pasien baru</p>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-5 rounded-2xl text-center">
            <p className="text-white/60 text-xs font-bold tracking-wide">Slot Terbatas</p>
            <p className="text-white/30 text-[9px] mt-1 font-medium">Berlaku selama Grand Opening</p>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href={waLink("Grand Opening")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-dinara-accent px-10 py-4 text-sm md:text-base font-black text-dinara-dark shadow-2xl shadow-dinara-accent/20 hover:bg-white hover:scale-[1.03] transition-all duration-500"
          >
            <CalendarDays className="mr-3 h-5 w-5" />
            Ambil Promo Sekarang
          </a>
          <p className="text-white/20 text-[9px] mt-5 font-bold uppercase tracking-[0.2em]">
            Slot sangat terbatas setiap harinya
          </p>
        </div>
      </div>
    </section>
  );
}
