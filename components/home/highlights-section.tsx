"use client"

import { User, BookOpen, Heart, Home } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/contexts/language-context"

const icons = [User, BookOpen, Heart, Home]

export function HighlightsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.highlights.title} subtitle={t.highlights.subtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.highlights.items.map((highlight, index) => {
            const Icon = icons[index % icons.length]
            return (
              <Card
                key={index}
                className="group border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
