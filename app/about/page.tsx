"use client"

import Link from "next/link"
import { Award, ArrowRight, Linkedin, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  return (
    <>
      {/* About Clinic Section */}
      <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.about.clinicTitle} subtitle={siteConfig.tagline} />
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.clinicParagraph1}</p>
            <p className="text-muted-foreground leading-relaxed">{t.about.clinicParagraph2}</p>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={`${t.about.doctorTitle} ${siteConfig.doctor.fullName}`}
            subtitle={t.about.doctorSubtitle}
          />
          <Card className="overflow-hidden border-border/50 bg-card">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-5">
                <div className="relative lg:col-span-2">
                  <div className="aspect-[4/5] lg:aspect-auto lg:h-full">
                    <img
                      src="/Dr. Syed Mahamud Ali (PT).jpeg"
                      alt={siteConfig.doctor.fullName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-6 p-8 lg:col-span-3">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground">{siteConfig.doctor.fullName}</h3>
                    <p className="mt-1 text-primary">
                      {t.doctor.bpaRegistration} {siteConfig.doctor.registrationNo}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.about.qualifications}
                    </h4>
                    {siteConfig.doctor.qualifications.map((qual, index) => (
                      <div key={index} className="flex items-start gap-3 text-muted-foreground">
                        <Award className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                        <span>{qual}</span>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                      {t.about.connectWithDoctor}
                    </h4>
                    <div className="flex gap-3">
                      <a
                        href={siteConfig.doctor.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0A66C2] text-white hover:bg-[#0A66C2]/90 transition-colors"
                      >
                        <Linkedin className="h-5 w-5" />
                        <span className="font-medium">{t.doctor.linkedIn}</span>
                      </a>
                      <a
                        href={siteConfig.doctor.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#1877F2] text-white hover:bg-[#1877F2]/90 transition-colors"
                      >
                        <Facebook className="h-5 w-5" />
                        <span className="font-medium">{t.doctor.facebook}</span>
                      </a>
                    </div>
                  </div>

                  <div className="space-y-4 pt-4">
                    {siteConfig.doctor.longBio.map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Treatment Approach Section */}
      <section className="py-20 bg-muted/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading title={t.about.treatmentApproachTitle} subtitle={t.about.treatmentApproachSubtitle} />
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {t.about.treatmentSteps.map((step, index) => (
              <Card
                key={index}
                className="border-border/50 bg-card transition-all duration-300 hover:border-primary/30 hover:shadow-lg"
              >
                <CardContent className="p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {index + 1}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl text-balance">{t.about.ctaTitle}</h2>
          <p className="mt-4 text-lg text-primary-foreground/80">{t.about.ctaSubtitle}</p>
          <Button asChild size="lg" variant="secondary" className="mt-8 gap-2">
            <Link href="/contact#booking">
              {t.ui.bookAppointment}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  )
}
