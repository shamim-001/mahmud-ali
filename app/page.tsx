import { HeroSection } from "@/components/home/hero-section"
import { HighlightsSection } from "@/components/home/highlights-section"
import { ServicesSection } from "@/components/home/services-section"
import { DoctorSection } from "@/components/home/doctor-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { GallerySection } from "@/components/home/gallery-section"
import { LocationSection } from "@/components/home/location-section"
import { BookingForm } from "@/components/booking-form"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HighlightsSection />
      <ServicesSection />
      <DoctorSection />
      <TestimonialsSection />
      <GallerySection />
      <LocationSection />
      <BookingForm />
    </>
  )
}
