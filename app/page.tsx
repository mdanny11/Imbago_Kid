import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/hero-section"
import { MissionSection } from "@/components/mission-section"
import { ImpactSection } from "@/components/impact-section"
import { CallToActionSection } from "@/components/call-to-action-section"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <MissionSection />
        <ImpactSection />
        <CallToActionSection />
      </main>
      <Footer />
    </div>
  )
}
