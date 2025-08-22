import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { EngagementOptionsSection } from "@/components/engagement-options-section"
import { ImpactStoriesSection } from "@/components/impact-stories-section"

export default function GetInvolvedPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-br from-card to-background py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
              Get Involved
            </h1>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
              Join us in our mission to improve children's healthcare worldwide. Whether you want to volunteer your
              time, partner with us, or make a donation, there are many ways to make a meaningful difference in the
              lives of children and families in underserved communities.
            </p>
          </div>
        </section>

        <EngagementOptionsSection />
        <ImpactStoriesSection />
      </main>
      <Footer />
    </div>
  )
}
