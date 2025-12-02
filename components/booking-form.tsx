"use client"

import type React from "react"
import { useState } from "react"
import { CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent } from "@/components/ui/card"
import { SectionHeading } from "@/components/section-heading"
import { useLanguage } from "@/contexts/language-context"

interface FormData {
  fullName: string
  phone: string
  email: string
  preferredDate: string
  preferredTime: string
  problemType: string
  additionalDetails: string
}

interface FormErrors {
  fullName?: string
  phone?: string
}

export function BookingForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    problemType: "",
    additionalDetails: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = () => {
    const newErrors: FormErrors = {}
    if (!formData.fullName.trim()) {
      newErrors.fullName = t.booking.fullNameRequired
    }
    if (!formData.phone.trim()) {
      newErrors.phone = t.booking.phoneRequired
    }
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setIsSubmitting(true)
    
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit booking")
      }

      setIsSubmitted(true)
    } catch (error) {
      console.error("Error submitting booking:", error)
      alert("Failed to submit booking. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  if (isSubmitted) {
    return (
      <section id="booking" className="py-20 bg-muted/30">
        <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
          <Card className="border-primary/20 bg-card">
            <CardContent className="flex flex-col items-center gap-4 p-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle2 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-semibold text-foreground">{t.booking.thankYou}</h3>
              <p className="text-muted-foreground">{t.booking.successMessage}</p>
              <Button
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    fullName: "",
                    phone: "",
                    email: "",
                    preferredDate: "",
                    preferredTime: "",
                    problemType: "",
                    additionalDetails: "",
                  })
                }}
                variant="outline"
                className="mt-4"
              >
                {t.ui.bookAnotherAppointment}
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="booking" className="py-20 bg-muted/30">
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">
        <SectionHeading title={t.booking.title} subtitle={t.booking.subtitle} />
        <Card className="border-border/50 bg-card">
          <CardContent className="p-6 sm:p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="fullName">
                    {t.booking.fullName} <span className="text-destructive">{t.ui.required}</span>
                  </Label>
                  <Input
                    id="fullName"
                    name="fullName"
                    placeholder={t.booking.fullNamePlaceholder}
                    value={formData.fullName}
                    onChange={handleChange}
                    className={errors.fullName ? "border-destructive" : ""}
                  />
                  {errors.fullName && <p className="text-xs text-destructive">{errors.fullName}</p>}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">
                    {t.booking.phone} <span className="text-destructive">{t.ui.required}</span>
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder={t.booking.phonePlaceholder}
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">{t.booking.emailOptional}</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder={t.booking.emailPlaceholder}
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="preferredDate">{t.booking.preferredDate}</Label>
                  <Input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    value={formData.preferredDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="preferredTime">{t.booking.preferredTime}</Label>
                  <Input
                    id="preferredTime"
                    name="preferredTime"
                    type="time"
                    value={formData.preferredTime}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="problemType">{t.booking.problemType}</Label>
                <Select
                  value={formData.problemType}
                  onValueChange={(value) => setFormData((prev) => ({ ...prev, problemType: value }))}
                >
                  <SelectTrigger id="problemType">
                    <SelectValue placeholder={t.booking.selectConcern} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="back-pain">{t.booking.problemTypes.backPain}</SelectItem>
                    <SelectItem value="neck-pain">{t.booking.problemTypes.neckPain}</SelectItem>
                    <SelectItem value="shoulder-pain">{t.booking.problemTypes.shoulderPain}</SelectItem>
                    <SelectItem value="knee-pain">{t.booking.problemTypes.kneePain}</SelectItem>
                    <SelectItem value="sports-injury">{t.booking.problemTypes.sportsInjury}</SelectItem>
                    <SelectItem value="post-surgery">{t.booking.problemTypes.postSurgery}</SelectItem>
                    <SelectItem value="neurological">{t.booking.problemTypes.neurological}</SelectItem>
                    <SelectItem value="posture">{t.booking.problemTypes.posture}</SelectItem>
                    <SelectItem value="other">{t.booking.problemTypes.other}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="additionalDetails">{t.booking.additionalDetails}</Label>
                <Textarea
                  id="additionalDetails"
                  name="additionalDetails"
                  placeholder={t.booking.additionalPlaceholder}
                  rows={4}
                  value={formData.additionalDetails}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? t.ui.submitting : t.ui.submitAppointmentRequest}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
