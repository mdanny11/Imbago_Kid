import Link from "next/link"
import { Heart, Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Mission */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Heart className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl text-card-foreground font-[family-name:var(--font-space-grotesk)]">
                Imbago Care Kid
              </span>
            </Link>
            <p className="text-muted-foreground mb-4 font-[family-name:var(--font-dm-sans)]">
              Dedicated to advancing innovative research, improving quality of life in underserved populations, and
              fostering global collaboration for children's healthcare.
            </p>
            <div className="flex gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Quick Links
            </h3>
            <ul className="space-y-2 font-[family-name:var(--font-dm-sans)]">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/get-involved" className="text-muted-foreground hover:text-primary transition-colors">
                  Get Involved
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-card-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
              Contact Info
            </h3>
            <ul className="space-y-2 font-[family-name:var(--font-dm-sans)]">
              <li className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>123 Care Street, Health City, HC 12345</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@imbagocarekid.org</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">
            © 2024 Imbago Care Kid. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
