"use client"

import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { BookingForm } from "@/components/booking-form"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"

export default function ContactPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* Contact Info Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.contact.title} subtitle={t.contact.subtitle} />
          <div className="grid gap-8 lg:grid-cols-2">
            <Card className="border-border/50 bg-card">
              <CardContent className="space-y-6 p-8">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{siteConfig.name}</h3>
                  <p className="mt-2 text-muted-foreground">{t.contact.personalizedCare}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.contact.address}</p>
                      <p className="text-sm text-muted-foreground">{siteConfig.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.contact.serviceHours}</p>
                      <p className="text-sm text-muted-foreground">{siteConfig.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.contact.phoneWhatsApp}</p>
                      <a
                        href={siteConfig.contact.phoneLink}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{t.contact.email}</p>
                      <a
                        href={siteConfig.contact.emailLink}
                        className="text-sm text-muted-foreground transition-colors hover:text-primary"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <Button asChild className="w-full gap-2">
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    {t.ui.chatOnWhatsApp}
                  </a>
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">{t.contact.locationLabel}</h3>
              <div className="overflow-hidden rounded-xl">
                <iframe
                  src={siteConfig.address.mapEmbed}
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="CSPP Location"
                  className="rounded-xl"
                />
              </div>
              <p className="text-sm text-muted-foreground">{t.contact.locationDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <BookingForm />
    </>
  )
}
