"use client"

import { getImagePath } from "@/lib/image-utils"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"

export function ContactAndLocate() {
  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8" aria-labelledby="contact-heading">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2
              id="contact-heading"
              className="mb-6 font-serif text-3xl font-bold leading-tight text-balance md:text-4xl lg:text-5xl"
            >
              We strive to create a quality experience and environment for our customers
            </h2>

            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              We offer a wide selection of quality products and entertainment. We believe in quality service and ensure
              that our customers always feel welcome and comfortable. Enjoy our lounges and free arcades.
            </p>

            <div className="mt-4">
              <p className="font-semibold text-foreground">Open Hours:</p>
              <p className="text-muted-foreground">10am-8pm Sunday-Thursday</p>
              <p className="text-muted-foreground">10am-10pm Friday-Saturday</p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Button asChild>
                <a href="sms:+16192772255" aria-label="Text Super Vape Bros at 619-277-2255">
                  Text us
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href="tel:+16196781577" aria-label="Call Super Vape Bros at 619-678-1577">
                  Call us
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square overflow-hidden rounded-lg bg-secondary">
              <img src={getImagePath("/hookahAngle.png")} alt="Products display" className="h-full w-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -left-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary md:-bottom-8 md:-left-8 md:h-24 md:w-24">
              <Sparkles aria-hidden="true" className="h-8 w-8 text-primary-foreground md:h-12 md:w-12" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
