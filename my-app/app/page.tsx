"use client"

import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ContactAndLocate } from "@/components/contact-locate"
import { ProductsSection } from "@/components/products"
import { Footer } from "@/components/footer"
import { AgeVerification } from "@/components/ageVerification"
import { SpecialsPopup } from "@/components/specials-popup"

export default function HomePage() {
  return (
    <>
      {/* Skip link for keyboard + screen reader users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] rounded-md bg-background px-4 py-2 text-sm font-medium text-foreground shadow focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
      >
        Skip to main content
      </a>
      <AgeVerification />
      <SpecialsPopup /> 
      <Navigation />

      <main id="main-content" tabIndex={-1} className="outline-none">
        <HeroSection />
        <ContactAndLocate />
        <ProductsSection />
      </main>

      <Footer />
    </>
  )
}
