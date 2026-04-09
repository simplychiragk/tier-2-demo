import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { DoctorsSection } from "@/components/doctors-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { MobileFab } from "@/components/mobile-fab";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <DoctorsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <MobileFab />
    </>
  );
}
