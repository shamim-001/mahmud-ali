"use client"

import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/contexts/language-context"

export function TestimonialsSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.testimonials.title} subtitle={t.testimonials.subtitle} />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {t.testimonials.items.map((testimonial, index) => (
            <Card key={index} className="border-border/50 bg-card transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <Quote className="mb-4 h-8 w-8 text-primary/20" />
                <p className="mb-6 text-muted-foreground italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <p className="font-medium text-foreground">{testimonial.name}</p>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
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
