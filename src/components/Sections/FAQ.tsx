"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Apakah Dinara Dental Care menerima pasien BPJS?",
    answer: "Saat ini, kami belum melayani pasien BPJS Kesehatan. Namun, kami berupaya memberikan harga yang kompetitif dan transparan untuk layanan premium kami."
  },
  {
    question: "Kapan jam operasional klinik?",
    answer: "Kami melayani Anda mulai hari Senin hingga Sabtu, pukul 10:00 - 21:00 WITA. Kami tutup pada hari Minggu dan hari libur nasional."
  },
  {
    question: "Di mana lokasi Dinara Dental Care?",
    answer: "Klinik kami berlokasi strategis di Jl. Bumi Mas Raya, Pemurus Baru, Kec. Banjarmasin Sel., Kota Banjarmasin, Kalimantan Selatan."
  },
  {
    question: "Apakah saya harus reservasi terlebih dahulu?",
    answer: "Sangat disarankan untuk melakukan reservasi melalui WhatsApp agar Anda mendapatkan jadwal yang pasti dan meminimalisir waktu tunggu di klinik."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-16 bg-dinara-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col items-center text-center space-y-3 mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-dinara-primary/10 text-dinara-primary text-[11px] font-medium tracking-wide uppercase">
              Pertanyaan Umum
            </div>
            <h2 className="text-2xl md:text-4xl font-bold tracking-tighter text-dinara-dark leading-tight">
              Butuh <span className="text-dinara-primary">Bantuan?</span>
            </h2>
            <p className="text-dinara-warm text-sm md:text-base">
              Temukan jawaban untuk pertanyaan yang paling sering diajukan pasien kami.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion className="w-full space-y-3">
              {FAQS.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="bg-white border border-dinara-accent/15 rounded-2xl px-6 shadow-sm transition-all duration-300 data-[state=open]:shadow-md data-[state=open]:border-dinara-primary/20"
                >
                  <AccordionTrigger className="text-left text-base md:text-lg font-bold text-dinara-dark hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-dinara-warm text-[13px] md:text-sm leading-relaxed pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
          
          <div className="mt-12 p-6 md:p-8 bg-dinara-primary rounded-[1.5rem] text-center text-white">
            <h3 className="text-lg md:text-xl font-bold mb-1.5">Punya pertanyaan lain?</h3>
            <p className="text-white/80 text-sm mb-5">Hubungi tim kami langsung melalui WhatsApp untuk respon cepat.</p>
            <a 
              href="https://wa.me/6285828399611" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-7 py-3 text-sm font-bold text-dinara-primary hover:bg-dinara-cream transition-all duration-300"
            >
              Tanya Via WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
