import { MessageCircle } from "lucide-react";

export default function FloatingWA() {
  // WhatsApp number given in PRD: 0858-2839-9611
  const waNumber = "6285828399611";
  const message = encodeURIComponent("Halo Dinara Dental Care, saya ingin reservasi/konsultasi.");
  const waLink = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-dinara-primary text-white shadow-2xl shadow-dinara-primary/40 hover:bg-dinara-dark hover:scale-110 transition-all duration-500 md:bottom-8 md:right-8 group"
      aria-label="Chat WhatsApp"
    >
      <MessageCircle size={26} className="group-hover:rotate-12 transition-transform duration-300" />
      {/* Tooltip */}
      <span className="absolute right-full mr-4 bg-dinara-dark text-white text-xs py-2 px-4 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap pointer-events-none hidden md:block border border-dinara-accent/20">
        Butuh Bantuan? Chat Kami
      </span>
    </a>
  );
}
