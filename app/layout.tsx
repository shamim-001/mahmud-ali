import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LanguageProvider } from "@/contexts/language-context"
import { siteConfig } from "@/config/site"

const inter = Inter({ subsets: ["latin", "latin-ext"] })

export const metadata: Metadata = {
  title: {
    default: "CSPP – Care Specialized Physiotherapy Point | Physiotherapy Clinic in Dhaka",
    template: "%s | CSPP",
  },
  description: siteConfig.description,
  generator: "v0.app",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: siteConfig.name,
    title: "CSPP – Care Specialized Physiotherapy Point",
    description: siteConfig.description,
    images: [{ url: "/CSPP logo.jpeg", width: 512, height: 512, alt: siteConfig.name }],
  },
  twitter: {
    card: "summary_large_image",
    title: "CSPP – Care Specialized Physiotherapy Point",
    description: siteConfig.description,
  },
  icons: {
    icon: "/CSPP logo.jpeg",
    apple: "/CSPP logo.jpeg",
  },
}

export const viewport: Viewport = {
  themeColor: "#1e6091",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} font-sans antialiased`}>
        <LanguageProvider>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
