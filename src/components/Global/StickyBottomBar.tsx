import { CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function StickyBottomBar() {
  const waNumber = "6285828399611";
  const message = encodeURIComponent("Halo Dinara Dental Care, saya ingin reservasi/konsultasi.");
  const waLink = `https://wa.me/${waNumber}?text=${message}`;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-dinara-cream/95 backdrop-blur-md border-t border-dinara-accent/10 p-2 pb-safe md:hidden shadow-[0_-8px_30px_rgba(92,64,51,0.08)]">
      <a 
        href={waLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center w-full bg-dinara-primary hover:bg-dinara-dark text-white rounded-xl h-10 text-sm font-bold shadow-lg shadow-dinara-primary/20 transition-all duration-300"
      >
        <CalendarDays className="mr-2 h-4 w-4" />
        Reservasi Sekarang
      </a>
    </div>
  );
}
