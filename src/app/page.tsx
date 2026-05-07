import Navbar from "@/components/Global/Navbar";
import AnnouncementBar from "@/components/Global/AnnouncementBar";
import FloatingWA from "@/components/Global/FloatingWA";
import StickyBottomBar from "@/components/Global/StickyBottomBar";
import Footer from "@/components/Global/Footer";

import Hero from "@/components/Sections/Hero";
import WhyChooseUs from "@/components/Sections/WhyChooseUs";
import Services from "@/components/Sections/Services";
import PromoSection from "@/components/Sections/PromoSection";
import Pricelist from "@/components/Sections/Pricelist";
import Doctors from "@/components/Sections/Doctors";
import Testimonials from "@/components/Sections/Testimonials";
import FAQ from "@/components/Sections/FAQ";
import Location from "@/components/Sections/Location";
import CTA from "@/components/Sections/CTA";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <AnnouncementBar />
      <Navbar />
      
      <main className="flex-1">
        <Hero />
        <WhyChooseUs />
        <Services />
        <PromoSection />
        <Pricelist />
        <Doctors />
        <Testimonials />
        <FAQ />
        <Location />
        <CTA />
      </main>

      <Footer />
      
      <FloatingWA />
      <StickyBottomBar />
    </div>
  );
}
