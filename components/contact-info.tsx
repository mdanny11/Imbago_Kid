import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Address",
      content: "123 Care Street, Health City, HC 12345",
      subContent: "United States",
    },
    {
      icon: Phone,
      title: "Phone",
      content: "+1 (555) 123-4567",
      subContent: "Monday - Friday, 9:00 AM - 5:00 PM EST",
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@imbagocarekid.org",
      subContent: "We typically respond within 24 hours",
    },
    {
      icon: Clock,
      title: "Office Hours",
      content: "Monday - Friday: 9:00 AM - 5:00 PM EST",
      subContent: "Emergency contact available 24/7",
    },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
  ]

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
          Get in Touch
        </h2>
        <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)] leading-relaxed mb-8">
          We're here to answer your questions, discuss partnership opportunities, or help you get involved with our
          mission. Don't hesitate to reach out!
        </p>
      </div>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const IconComponent = detail.icon
          return (
            <Card key={index} className="border-border">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-full flex-shrink-0">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-card-foreground mb-1 font-[family-name:var(--font-space-grotesk)]">
                      {detail.title}
                    </h3>
                    <p className="text-foreground font-[family-name:var(--font-dm-sans)]">{detail.content}</p>
                    <p className="text-sm text-muted-foreground font-[family-name:var(--font-dm-sans)]">
                      {detail.subContent}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <Card className="border-border">
        <CardContent className="p-6">
          <h3 className="font-semibold text-card-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Follow Us
          </h3>
          <p className="text-muted-foreground mb-4 font-[family-name:var(--font-dm-sans)]">
            Stay updated with our latest news, programs, and impact stories.
          </p>
          <div className="flex gap-4">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon
              return (
                <Link
                  key={index}
                  href={social.href}
                  className="p-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-full transition-colors"
                  aria-label={social.label}
                >
                  <IconComponent className="h-5 w-5" />
                </Link>
              )
            })}
          </div>
        </CardContent>
      </Card>

      <Card className="border-border bg-muted">
        <CardContent className="p-6">
          <h3 className="font-semibold text-card-foreground mb-3 font-[family-name:var(--font-space-grotesk)]">
            Quick Response Times
          </h3>
          <div className="space-y-2 text-sm font-[family-name:var(--font-dm-sans)]">
            <div className="flex justify-between">
              <span className="text-muted-foreground">General Inquiries:</span>
              <span className="text-foreground">24-48 hours</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Partnership Requests:</span>
              <span className="text-foreground">2-3 business days</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Volunteer Applications:</span>
              <span className="text-foreground">1 week</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Media Inquiries:</span>
              <span className="text-foreground">Same day</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
