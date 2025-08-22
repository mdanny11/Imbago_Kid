import { Card, CardContent } from "@/components/ui/card"
import { Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Dr. Maria Santos",
      role: "Founder & Executive Director",
      bio: "Pediatric researcher with 15+ years of experience in global health initiatives and community-based healthcare solutions.",
      image: "/hispanic-female-doctor-headshot.png",
      linkedin: "#",
      email: "maria.santos@imbagocarekid.org",
    },
    {
      name: "Dr. James Chen",
      role: "Director of Research",
      bio: "Leading epidemiologist specializing in child health outcomes and innovative research methodologies in underserved populations.",
      image: "/asian-male-researcher-headshot.png",
      linkedin: "#",
      email: "james.chen@imbagocarekid.org",
    },
    {
      name: "Sarah Williams",
      role: "Program Manager",
      bio: "Community health advocate with expertise in program development, implementation, and sustainable healthcare delivery systems.",
      image: "/african-american-female-program-manager-headshot.png",
      linkedin: "#",
      email: "sarah.williams@imbagocarekid.org",
    },
    {
      name: "Dr. Ahmed Hassan",
      role: "Global Partnerships Director",
      bio: "International development specialist focused on building strategic partnerships and fostering collaboration across continents.",
      image: "/placeholder-6z2in.png",
      linkedin: "#",
      email: "ahmed.hassan@imbagocarekid.org",
    },
    {
      name: "Lisa Rodriguez",
      role: "Community Outreach Coordinator",
      bio: "Bilingual community organizer with deep experience in grassroots health education and family engagement programs.",
      image: "/latina-community-coordinator-headshot.png",
      linkedin: "#",
      email: "lisa.rodriguez@imbagocarekid.org",
    },
    {
      name: "Dr. Michael Thompson",
      role: "Medical Advisor",
      bio: "Pediatric specialist and former WHO consultant providing clinical expertise and medical guidance for our programs.",
      image: "/caucasian-male-doctor-headshot.png",
      linkedin: "#",
      email: "michael.thompson@imbagocarekid.org",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Meet Our Team
          </h2>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)] max-w-2xl mx-auto">
            Our dedicated team of healthcare professionals, researchers, and community advocates work tirelessly to
            improve children's lives worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="text-center">
                  <div className="aspect-square w-32 mx-auto mb-4 rounded-full overflow-hidden bg-muted">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1 font-[family-name:var(--font-space-grotesk)]">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-3 font-[family-name:var(--font-dm-sans)]">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4 font-[family-name:var(--font-dm-sans)] leading-relaxed">
                    {member.bio}
                  </p>
                  <div className="flex justify-center gap-3">
                    <Link
                      href={member.linkedin}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href={`mailto:${member.email}`}
                      className="p-2 text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
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
