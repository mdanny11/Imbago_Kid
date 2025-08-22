"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Globe } from "lucide-react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

function Counter({ end, duration = 2000, suffix = "" }: CounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)

      setCount(Math.floor(progress * end))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(animationFrame)
  }, [end, duration])

  return (
    <span className="text-4xl font-bold text-primary font-[family-name:var(--font-space-grotesk)]">
      {count.toLocaleString()}
      {suffix}
    </span>
  )
}

export function ImpactSection() {
  const stats = [
    {
      icon: Users,
      value: 15000,
      suffix: "+",
      label: "Lives Impacted",
      description: "Children and families who have received care and support through our programs",
    },
    {
      icon: Target,
      value: 45,
      suffix: "",
      label: "Projects Completed",
      description: "Successful research initiatives and community health programs",
    },
    {
      icon: Globe,
      value: 12,
      suffix: "",
      label: "Global Partners",
      description: "International organizations collaborating to improve children's healthcare",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground mb-4 font-[family-name:var(--font-space-grotesk)]">
            Our Impact
          </h2>
          <p className="text-lg text-muted-foreground font-[family-name:var(--font-dm-sans)] max-w-2xl mx-auto">
            Through dedication and collaboration, we've made a meaningful difference in children's lives across the
            globe.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <Card key={index} className="text-center border-border hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <IconComponent className="h-8 w-8 text-primary" />
                    </div>
                  </div>
                  <Counter end={stat.value} suffix={stat.suffix} />
                  <h3 className="text-xl font-semibold text-card-foreground mt-2 mb-3 font-[family-name:var(--font-space-grotesk)]">
                    {stat.label}
                  </h3>
                  <p className="text-muted-foreground font-[family-name:var(--font-dm-sans)]">{stat.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
