"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"
import { type Language, getTranslation } from "@/config/translations"

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: ReturnType<typeof getTranslation>
  toggleLanguage: () => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en")

  useEffect(() => {
    // Load saved language preference from localStorage
    const savedLang = localStorage.getItem("cspp-language") as Language | null
    if (savedLang && (savedLang === "en" || savedLang === "bn")) {
      setLanguage(savedLang)
    }
  }, [])

  useEffect(() => {
    // Save language preference to localStorage
    localStorage.setItem("cspp-language", language)
    // Update html lang attribute
    document.documentElement.lang = language
  }, [language])

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "bn" : "en"))
  }

  const t = getTranslation(language)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, toggleLanguage }}>{children}</LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
