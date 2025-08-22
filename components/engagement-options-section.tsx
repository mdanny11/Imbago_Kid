import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Users, Handshake, Heart, ArrowRight, Mail } from "lucide-react"
import Link from "next/link"

export function EngagementOptionsSection() {
  const engagementOptions = [
    {
      icon: Users,
      title: "Volunteer",
      description:
        "Join our team of dedicated volunteers and contribute your skills to help children in need. From healthcare professionals to administrative support, we welcome volunteers from all backgrounds.",
      benefits: [
        "Make a direct impact on children's lives",
        "Gain valuable experience in global health",
        "Connect with like-minded individuals",
        "Flexible volunteer opportunities",
      ],
      action: {
        type: "email",
        label: "Apply to Volunteer",
        href: "mailto:volunteer@imbagocarekid.org?subject=Volunteer Application&body=Hello, I'm interested in volunteering with Imbago Care Kid. Please send me more information about volunteer opportunities.",
      },
      bgColor: "bg-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Handshake,
      title: "Partner",
      description:
        "Collaborate with us to expand our reach and impact. We work with healthcare organizations, educational institutions, NGOs, and government agencies to create sustainable solutions.",
      benefits: [
        "Expand your organization's global impact",
        "Access to research and best practices",
        "Joint funding opportunities",
        "Shared resources and expertise",
      ],
      action: {
        type: "email",
        label: "Explore Partnership",
        href: "mailto:partnerships@imbagocarekid.org?subject=Partnership Inquiry&body=Hello, I'm interested in exploring a partnership with Imbago Care Kid. Please send me more information about collaboration opportunities.",
      },
      bgColor: "bg-accent/5",
      iconColor: "text-accent",
    },
    {
      icon: Heart,
      title: "Donate",
      description:
        "Your financial support helps us fund critical research, provide healthcare services, and build sustainable programs that create lasting change in underserved communities.",
      benefits: [
        "Fund life-saving healthcare programs",
        "Support innovative research initiatives",
        "Help build sustainable community solutions",
        "Receive regular impact updates",
      ],
      action: {
        type: "button",
        label: "Make a Donation",
        href: "#donate",
      },
      bgColor: "bg-primary/5",
      iconColor: "text-primary",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Ways to Make a Difference
          </h2>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)] max-w-2xl mx-auto">
            Choose how you'd like to contribute to our mission and help us create positive change in children's lives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {engagementOptions.map((option, index) => {
            const IconComponent = option.icon
            return (
              <Card key={index} className="border-border hover:shadow-lg transition-shadow h-full">
                <CardContent className="p-8 h-full flex flex-col">
                  <div className={`p-4 ${option.bgColor} rounded-full w-fit mb-6`}>
                    <IconComponent className={`h-8 w-8 ${option.iconColor}`} />
                  </div>

                  <h3 className="text-2xl font-bold text-card-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
                    {option.title}
                  </h3>

                  <p className="text-muted-foreground mb-6 font-[family-name:var(--font-dm-sans)] leading-relaxed">
                    {option.description}
                  </p>

                  <div className="mb-8 flex-1">
                    <h4 className="font-semibold text-card-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
                      Benefits:
                    </h4>
                    <ul className="space-y-2">
                      {option.benefits.map((benefit, benefitIndex) => (
                        <li
                          key={benefitIndex}
                          className="flex items-start gap-2 text-muted-foreground font-[family-name:var(--font-dm-sans)]"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {option.action.type === "email" ? (
                    <Button asChild className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={option.action.href} className="flex items-center justify-center gap-2">
                        <Mail className="h-4 w-4" />
                        {option.action.label}
                      </Link>
                    </Button>
                  ) : (
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      <span className="flex items-center justify-center gap-2">
                        {option.action.label}
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </Button>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Donation Placeholder Section */}
        <div id="donate" className="mt-20 bg-muted rounded-2xl p-8 text-center">
          <Heart className="h-16 w-16 text-primary mx-auto mb-6" />
          <h3 className="text-2xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Donation System Coming Soon
          </h3>
          <p className="text-muted-foreground mb-6 font-[family-name:var(--font-dm-sans)] max-w-2xl mx-auto">
            We're currently setting up our secure donation platform. In the meantime, you can contact us directly to
            learn about donation opportunities and how your contribution can make a difference.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
          >
            <Link
              href="mailto:donations@imbagocarekid.org?subject=Donation Inquiry"
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Contact About Donations
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
