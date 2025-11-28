"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MessageCircle, MapPin, Clock, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const currentYear = new Date().getFullYear()
  const { t } = useLanguage()

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ]

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-lg">
                <Image src="/CSPP logo.jpeg" alt={siteConfig.name} fill className="object-contain" />
              </div>
              <span className="text-lg font-bold text-primary">{siteConfig.shortName}</span>
            </div>
            <p className="text-sm text-muted-foreground">{siteConfig.name}</p>
            <p className="text-xs italic text-muted-foreground">"{siteConfig.tagline}"</p>

            <p>
              <a href="https://www.facebook.com/profile.php?id=61577117213857" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#4481e3] text-white hover:bg-[#4481e3]/90 transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="font-medium">Facebook Page</span>
              </a>
              </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.footer.contact}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={siteConfig.contact.phoneLink} className="hover:text-primary transition-colors">
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a href={siteConfig.contact.emailLink} className="hover:text-primary transition-colors">
                  {siteConfig.contact.email}
                </a>
              </li>
              <li>
                <Button asChild variant="outline" size="sm" className="mt-2 gap-2 bg-transparent">
                  <a href={siteConfig.contact.whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="h-4 w-4" />
                    {t.ui.chatOnWhatsApp}
                  </a>
                </Button>
              </li>

          
            </ul>
          </div>

          {/* Address & Hours */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.footer.location}</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.address.full}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>{siteConfig.hours}</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">{t.footer.quickLinks}</h3>
            <ul className="space-y-2 text-sm">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-muted-foreground transition-colors hover:text-primary">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/contact#booking" className="text-muted-foreground transition-colors hover:text-primary">
                  {t.ui.bookAppointment}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8">
          <p className="text-center text-xs text-muted-foreground">
            © {currentYear} {siteConfig.name}. {t.footer.allRightsReserved}
          </p>

          <p className="text-center text-xs text-muted-foreground">
            Developed by <a className="text-primary hover:underline" href="https://www.linkedin.com/in/theshamimahsan" target="_blank" rel="noopener noreferrer">Shamim Ahsan</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
