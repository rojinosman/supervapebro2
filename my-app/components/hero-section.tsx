"use client"

import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/image-utils"

export function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('${getImagePath("/heroImage.png")}')`,
      }}
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-black/50" aria-hidden="true"></div>

      <div className="relative z-10 max-w-3xl text-center">
        <h1
          id="hero-heading"
          className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl"
        >
          Super Vape Bros
        </h1>
        <p className="mt-4 text-lg text-white/90">
          Quality vapes, great service, and a comfortable lounge experience—plus free arcades.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="Text">
            <a href="#products">Browse products</a>
          </Button>
          <Button variant="secondary" asChild>
            <a href="#contact">Contact us</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
