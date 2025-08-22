import { Card, CardContent } from "@/components/ui/card"
import { Target, Eye, Heart } from "lucide-react"

export function MissionVisionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mission */}
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-primary/10 rounded-full">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                  Our Mission
                </h2>
              </div>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
                To advance innovative research and improve the quality of life for children in underserved populations
                through evidence-based healthcare solutions, community partnerships, and sustainable programs that
                address the root causes of health disparities.
              </p>
            </CardContent>
          </Card>

          {/* Vision */}
          <Card className="border-border">
            <CardContent className="p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-accent/10 rounded-full">
                  <Eye className="h-8 w-8 text-accent" />
                </div>
                <h2 className="text-2xl font-bold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                  Our Vision
                </h2>
              </div>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed">
                A world where every child, regardless of their geographic location or socioeconomic status, has access
                to quality healthcare and the opportunity to thrive. We envision global communities working together to
                eliminate health inequities and create lasting positive change.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 font-[family-name:var(--font-space-grotesk)]">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Heart className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                Compassion
              </h3>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                We approach every child and family with empathy, understanding, and genuine care for their wellbeing.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-accent/10 rounded-full">
                  <Target className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                Innovation
              </h3>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                We continuously seek new and better ways to deliver healthcare solutions through research and
                technology.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-primary/10 rounded-full">
                  <Eye className="h-10 w-10 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                Collaboration
              </h3>
              <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                We believe in the power of partnerships and work together with communities, organizations, and
                governments.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
