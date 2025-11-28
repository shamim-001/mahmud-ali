"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { siteConfig } from "@/config/site"
import { useLanguage } from "@/contexts/language-context"

export function GallerySection() {
  const { t } = useLanguage()
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-20 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.gallery.title} subtitle={t.gallery.subtitle} />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {siteConfig.gallery.map((image, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(image.src)}
              className="group relative aspect-[3/2] overflow-hidden rounded-xl bg-muted focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/10" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 p-2 rounded-full bg-muted text-foreground hover:bg-muted/80 transition-colors"
            aria-label="Close"
          >
            <X className="h-6 w-6" />
          </button>
          <img
            src={selectedImage || "/placeholder.svg"}
            alt="Gallery image"
            className="max-h-[85vh] max-w-full rounded-lg object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  )
}
