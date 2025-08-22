import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export function ImpactStoriesSection() {
  const stories = [
    {
      quote:
        "Volunteering with Imbago Care Kid has been one of the most rewarding experiences of my career. Seeing the direct impact we make on children's lives motivates me every day.",
      author: "Dr. Jennifer Martinez",
      role: "Volunteer Pediatrician",
      location: "Guatemala Program",
      image: "/volunteer-doctor-testimonial.png",
    },
    {
      quote:
        "Our partnership with Imbago Care Kid has allowed us to reach more families and provide better healthcare services in our community. Together, we're making a real difference.",
      author: "Samuel Okonkwo",
      role: "Community Health Director",
      location: "Nigeria Partnership",
      image: "/community-partner-testimonial.png",
    },
    {
      quote:
        "Supporting Imbago Care Kid through donations has given me a way to contribute to something meaningful. The regular updates show exactly how my contribution is helping children.",
      author: "Maria Rodriguez",
      role: "Monthly Donor",
      location: "United States",
      image: "/donor-testimonial.png",
    },
  ]

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Stories of Impact
          </h2>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)] max-w-2xl mx-auto">
            Hear from volunteers, partners, and donors who are making a difference with Imbago Care Kid.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stories.map((story, index) => (
            <Card key={index} className="border-border bg-background">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <Quote className="h-8 w-8 text-primary" />
                </div>
                <blockquote className="text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed mb-6 italic">
                  "{story.quote}"
                </blockquote>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-muted flex-shrink-0">
                    <img
                      src={story.image || "/placeholder.svg"}
                      alt={`${story.author} - ${story.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                      {story.author}
                    </div>
                    <div className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                      {story.role}
                    </div>
                    <div className="text-sm text-primary font-[family-name:var(--font-dm-sans)]">{story.location}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
