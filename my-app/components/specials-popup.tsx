"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const SHOW_SPECIALS = true // Set to false when you don't have specials

export function SpecialsPopup() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!SHOW_SPECIALS) return

    const ageVerified = sessionStorage.getItem("ageVerified")
    const specialsShown = sessionStorage.getItem("specialsShown")

    if (ageVerified === "true" && specialsShown !== "true") {
      // Small delay to let age verification close first
      const timer = setTimeout(() => {
        setShowModal(true)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    sessionStorage.setItem("specialsShown", "true")
    setShowModal(false)
  }

  if (!showModal) {
    return null
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specials-title"
    >
      <div className="mx-4 max-w-md w-full rounded-lg border-2 border-primary bg-background p-6 shadow-2xl">
        <div className="flex items-start justify-between mb-6">
          <h2 id="specials-title" className="font-heading text-2xl font-bold uppercase text-primary">
            Today's Specials
          </h2>
          <Button
            onClick={handleClose}
            variant="ghost"
            size="icon"
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close specials popup"
          >
            <X className="h-6 w-6" />
          </Button>
        </div>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <h3 className="font-heading text-lg font-bold uppercase text-primary mb-2">20% OFF All Glass</h3>
              <p className="text-sm text-muted-foreground">
                Get 20% off all glass pieces, bongs, and pipes. Limited time offer!
              </p>
            </div>

            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <h3 className="font-heading text-lg font-bold uppercase text-primary mb-2">
                Buy 2 Get 1 Free Vape Cartridges
              </h3>
              <p className="text-sm text-muted-foreground">
                Purchase any 2 vape cartridges and get your 3rd one free. Mix and match flavors!
              </p>
            </div>

            <div className="rounded-lg border border-primary/30 bg-primary/5 p-4">
              <h3 className="font-heading text-lg font-bold uppercase text-primary mb-2">New Customer Special</h3>
              <p className="text-sm text-muted-foreground">
                First-time customers receive 15% off their entire purchase. Show ID at checkout.
              </p>
            </div>
          </div>

          <Button
            onClick={handleClose}
            size="lg"
            className="w-full bg-primary text-base font-bold uppercase hover:bg-primary/90"
          >
            Continue to Site
          </Button>
        </div>
      </div>
    </div>
  )
}
