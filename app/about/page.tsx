import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MissionVisionSection } from "@/components/mission-vision-section"
import { OrganizationStorySection } from "@/components/organization-story-section"
import { TeamSection } from "@/components/team-section"

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              About Imbago Care Kid
            </h1>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)]">
              Learn about our mission, vision, and the dedicated team working to improve children's healthcare
              worldwide.
            </p>
          </div>
        </section>

        <MissionVisionSection />
        <OrganizationStorySection />
        <TeamSection />
      </main>
      <Footer />
    </div>
  )
}
