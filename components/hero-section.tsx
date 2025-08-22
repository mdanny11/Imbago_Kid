import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-card to-background py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-[family-name:var(--font-space-grotesk)] leading-tight">
              Compassionate Care for <span className="text-primary">Every Child</span>
            </h1>
            <p className="text-xl text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
              Advancing innovative research, improving quality of life in underserved populations, and fostering global
              collaboration to ensure every child receives the care they deserve.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/get-involved" className="flex items-center gap-2">
                  Get Involved
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
              <img
                src="/bright-childrens-clinic.png"
                alt="Children receiving compassionate care"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating stats card */}
            <div className="absolute -bottom-6 -left-6 bg-background border border-border rounded-xl p-6 shadow-lg">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
                  10,000+
                </div>
                <div className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                  Lives Impacted
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
