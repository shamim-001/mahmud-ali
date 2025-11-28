"use client"

import Link from "next/link"
import { MapPin, Phone, Clock, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"

export function LocationSection() {
  const { t } = useLanguage()

  return (
    <section className="py-20 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.location.title} subtitle={t.location.subtitle} />
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl">
            <iframe
              src={siteConfig.address.mapEmbed}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="CSPP Location"
              className="rounded-xl"
            />
          </div>
          <Card className="border-border/50 bg-card">
            <CardContent className="space-y-6 p-8">
              <h3 className="text-xl font-semibold text-foreground">{siteConfig.name}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">{siteConfig.address.full}</p>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <p className="text-muted-foreground">
                    <span className="font-medium text-foreground">{t.location.serviceHours} </span>
                    {siteConfig.hours}
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                  <a
                    href={siteConfig.contact.phoneLink}
                    className="text-muted-foreground transition-colors hover:text-primary"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </div>
              </div>
              <div className="flex flex-col gap-3 pt-4 sm:flex-row">
                <Button asChild className="gap-2">
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    {t.ui.chatOnWhatsApp}
                  </a>
                </Button>
                <Button asChild variant="outline" className="gap-2 bg-transparent">
                  <Link href="/contact">
                    {t.ui.goToContactPage}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
