"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { getImagePath } from "@/lib/image-utils"

const SHOW_SPECIALS = false // Disabled: remove St. Patrick's promo popup

export function SpecialsPopup() {
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (!SHOW_SPECIALS) return

    const maybeShow = () => {
      const ageVerified = sessionStorage.getItem("ageVerified")
      const specialsShown = sessionStorage.getItem("specialsShown")
      if (ageVerified === "true" && specialsShown !== "true") {
        setShowModal(true)
      }
    }

    // 1) Check immediately on mount (covers page reloads)
    maybeShow()

    // 2) Also react when the user clicks YES on the age gate
    const onVerified = () => {
      maybeShow()
    }

    window.addEventListener("ageVerified", onVerified)
    return () => window.removeEventListener("ageVerified", onVerified)
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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md pt-20"
      role="dialog"
      aria-modal="true"
      aria-labelledby="specials-title"
    >
      {/* Flying clouds + falling shamrocks effect */}
      <div className="luck-overlay absolute inset-0 overflow-hidden">
        <div className="luck-cloud" />
        <div className="luck-cloud" />
        <div className="luck-cloud" />
        <div className="luck-shamrock" />
        <div className="luck-shamrock" />
        <div className="luck-shamrock" />
        <div className="luck-shamrock" />
      </div>

      <div className="mx-4 max-w-sm w-full rounded-lg border-2 border-primary bg-background p-4 shadow-2xl">
        <div className="flex items-start justify-between mb-3">
          <h2 id="specials-title" className="font-heading text-xl font-bold uppercase text-primary">
            Limited-Time Special
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

        <div className="space-y-4">
          <div className="relative w-full overflow-hidden rounded-md">
            <Image
              src={getImagePath("/StPatricksDayAd.gif")}
              alt="Puffin' on Pure Luck 10% off promotion"
              width={600}
              height={750}
              className="h-auto w-full max-h-[60vh] object-contain"
              priority
            />
          </div>

          <p className="text-xs text-muted-foreground text-center">
            Offer valid March 16–18, 2026, on select items only. Eligible items subject to change without notice. See
            store for details.
          </p>

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
