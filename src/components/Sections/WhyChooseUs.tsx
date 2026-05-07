"use client";

import { motion } from "framer-motion";
import { MessageCircle, Smartphone, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const FEATURES = [
  {
    title: "Konsultasi Gratis Dulu",
    description: "Belum yakin mau perawatan apa? Cerita dulu ke kami gratis, tanpa tekanan, tanpa langsung disuruh bayar.",
    icon: MessageCircle,
  },
  {
    title: "Mudah Dihubungi",
    description: "Tanya via WhatsApp, kami responsif dan senang menjawab pertanyaan seputar gigi sebelum kamu datang.",
    icon: Smartphone,
  },
  {
    title: "Waktu Fleksibel",
    description: "Buka Senin hingga Sabtu, pukul 10:00 - 21:00 WITA. Mudah mengatur jadwal sesuai kesibukan Anda.",
    icon: Clock,
  },
  {
    title: "Ramah Keluarga",
    description: "Suasana klinik yang santai dan tidak menakutkan nyaman untuk anak-anak maupun orang dewasa.",
    icon: Users,
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 bg-dinara-light">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-3 py-1 rounded-full bg-dinara-primary/10 text-dinara-primary text-[11px] font-medium tracking-wide uppercase"
          >
            Keunggulan Kami
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tighter text-dinara-dark"
          >
            Mudah Dihubungi. Jelas Soal Harga. <span className="text-dinara-primary">Nggak Ribet.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-[600px] text-dinara-warm text-sm md:text-base"
          >
            Itu yang selalu kami jaga — karena pengalaman ke dokter gigi yang baik dimulai dari hal-hal sesederhana itu.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {FEATURES.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
            >
              <Card className="relative overflow-hidden border border-dinara-accent/20 bg-white shadow-sm hover:shadow-lg hover:border-dinara-primary/25 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-dinara-primary/10 text-dinara-primary group-hover:bg-dinara-primary group-hover:text-white transition-colors duration-300">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-dinara-dark">{feature.title}</h3>
                  <p className="text-dinara-warm leading-relaxed text-[13px]">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}