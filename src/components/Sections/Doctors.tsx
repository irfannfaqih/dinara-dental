"use client";

import { motion } from "framer-motion";

const DOCTORS = [
  {
    name: "drg. Dinda Rizkia",
    specialty: "Dokter Gigi Umum",
    initials: "DR",
  },
  {
    name: "drg. Noor Mutiari Amalia",
    specialty: "Dokter Gigi Umum",
    initials: "NM",
  },
  {
    name: "drg. Muhammad Syafrie Ilham",
    specialty: "Dokter Gigi Umum",
    initials: "MS",
  },
];

export default function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-dinara-cream relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-dinara-accent/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-24 w-80 h-80 bg-dinara-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center space-y-4 mb-16"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-dinara-primary/10 text-dinara-primary text-xs font-bold tracking-widest uppercase border border-dinara-primary/20">
            Tim Medis Kami
          </div>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-dinara-dark">
            Dokter yang <span className="text-dinara-primary">Siap Mendengarkan</span>
          </h2>
          <p className="max-w-[650px] text-dinara-warm/80 text-lg leading-relaxed">
            Tim dokter gigi kami siap menemani kamu mulai dari konsultasi awal sampai selesai perawatan. Tidak ada pertanyaan yang terlalu kecil.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {DOCTORS.map((doctor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="relative bg-white/60 backdrop-blur-sm rounded-[2.5rem] border border-white/50 p-3 h-full hover:shadow-[0_20px_50px_rgba(92,64,51,0.1)] transition-all duration-500 hover:-translate-y-2 overflow-hidden shadow-sm">
                {/* Skeleton Avatar Area */}
                <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden mb-6 bg-dinara-accent/15 flex flex-col items-center justify-center gap-4">
                  {/* Shimmer overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-dinara-accent/20 via-transparent to-dinara-primary/10 animate-pulse" />

                  {/* Avatar circle with initials */}
                  <div className="relative z-10 w-28 h-28 rounded-full bg-dinara-primary/20 border-4 border-white/60 shadow-lg flex items-center justify-center">
                    <span className="text-3xl font-extrabold text-dinara-primary/60 select-none">
                      {doctor.initials}
                    </span>
                  </div>

                  {/* Skeleton lines */}
                  <div className="relative z-10 flex flex-col items-center gap-2 px-8 w-full">
                    <div className="w-2/3 h-3 rounded-full bg-dinara-accent/30 animate-pulse" />
                    <div className="w-1/2 h-3 rounded-full bg-dinara-accent/20 animate-pulse" />
                  </div>

                  <p className="relative z-10 text-dinara-warm/30 text-[10px] tracking-wide mt-1">
                    Foto segera hadir
                  </p>
                </div>

                {/* Content Area */}
                <div className="px-4 pb-6 text-center">
                  <h3 className="text-xl font-bold text-dinara-dark mb-1 group-hover:text-dinara-primary transition-colors">
                    {doctor.name}
                  </h3>
                  <p className="text-dinara-primary font-semibold text-sm tracking-wide uppercase">
                    {doctor.specialty}
                  </p>
                  <div className="mt-4 flex justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-1 h-1 rounded-full bg-dinara-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-dinara-primary/30" />
                    <div className="w-1 h-1 rounded-full bg-dinara-primary/30" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-dinara-warm/50 text-sm">
            Seluruh dokter kami memiliki Surat Tanda Registrasi (STR) aktif dan resmi.
          </p>
        </div>
      </div>
    </section>
  );
}