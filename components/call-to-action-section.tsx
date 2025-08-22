import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Heart, ArrowRight } from "lucide-react"

export function CallToActionSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-primary-foreground/10 rounded-full">
            <Heart className="h-12 w-12 text-primary-foreground" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-primary-foreground mb-6 font-[family-name:var(--font-space-grotesk)]">
          Join Us in Making a Difference
        </h2>

        <p className="text-xl text-primary-foreground/90 mb-8 font-[family-name:var(--font-dm-sans)] leading-relaxed">
          Every child deserves a chance at a healthy, happy life. Your support can help us reach more children, fund
          critical research, and build stronger communities worldwide.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            variant="secondary"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            <Link href="/get-involved" className="flex items-center gap-2">
              Get Involved Today
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
