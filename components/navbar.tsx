"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const { language, toggleLanguage, t } = useLanguage()

  const bookingHref = pathname === "/" ? "#booking" : "/contact#booking"

  const navItems = [
    { name: t.nav.home, href: "/" },
    { name: t.nav.about, href: "/about" },
    { name: t.nav.contact, href: "/contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-10 w-10 overflow-hidden rounded-lg">
            <Image src="/CSPP logo.jpeg" alt={siteConfig.name} fill className="object-contain" priority />
          </div>
          <span className="text-xl font-bold text-primary">{siteConfig.shortName}</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}

          <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-2 bg-transparent">
            <Globe className="h-4 w-4" />
            {language === "en" ? "বাংলা" : "English"}
          </Button>

          <Button asChild>
            <Link href={bookingHref}>{t.ui.bookAppointment}</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <Button variant="outline" size="sm" onClick={toggleLanguage} className="gap-1 bg-transparent px-2">
            <Globe className="h-4 w-4" />
            <span className="text-xs">{language === "en" ? "বাং" : "EN"}</span>
          </Button>

          <button
            className="flex items-center justify-center"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-x-0 top-16 z-50 h-[calc(100vh-4rem)] transform bg-background transition-transform duration-300 ease-in-out md:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="flex flex-col gap-4 p-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "text-lg font-medium transition-colors hover:text-primary",
                pathname === item.href ? "text-primary" : "text-muted-foreground",
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="mt-4 w-full">
            <Link href={bookingHref} onClick={() => setIsOpen(false)}>
              {t.ui.bookAppointment}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
