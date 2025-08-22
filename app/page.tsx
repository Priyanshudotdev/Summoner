import { ScrollingBanner } from "@/components/scrolling-banner"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { CreativeSection } from "@/components/creative-section"
import { ThePackSection } from "@/components/the-pack-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { ProcessSection } from "@/components/process-section"
import { ClientsSection } from "@/components/clients-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="relative bg-black text-white">
      <ScrollingBanner />
      <Navigation />
      <HeroSection />
      <CreativeSection />
      <div className="relative z-20 bg-black">
        <div className="h-24 md:h-32" />
        <ThePackSection />
        <div className="h-24 md:h-32" />
        <AboutSection />
        <div className="h-24 md:h-32" />
        <WorkSection />
        <div className="h-24 md:h-32" />
        <ProcessSection />
        <div className="h-24 md:h-32" />
        <ServicesSection />
        <div className="h-24 md:h-32" />
        <ClientsSection />
        <ContactSection />
      </div>
    </main>
  )
}
