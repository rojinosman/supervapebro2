"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function AgeVerification() {
  const [isVerified, setIsVerified] = useState<boolean | null>(null)
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    // Check if user has already been verified in this session
    const verified = sessionStorage.getItem("ageVerified")
    if (verified === "true") {
      setIsVerified(true)
    } else {
      setShowModal(true)
    }
  }, [])

  const handleYes = () => {
    sessionStorage.setItem("ageVerified", "true")
    setIsVerified(true)
    setShowModal(false)
  }

  const handleNo = () => {
    setIsVerified(false)
    setShowModal(false)
  }

  if (!showModal && isVerified === null) {
    return null
  }

  if (isVerified === false) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="max-w-md space-y-6 p-8 text-center">
          <h1 className="font-heading text-3xl font-bold uppercase text-primary">ACCESS DENIED</h1>
          <p className="text-base text-muted-foreground">You must be 21 years or older to access this website.</p>
          <p className="text-sm text-muted-foreground">We apologize for the inconvenience.</p>
        </div>
      </div>
    )
  }

  if (showModal) {
    return (
      <div
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-md"
        role="dialog"
        aria-modal="true"
        aria-labelledby="age-verification-title"
      >
        <div className="mx-4 max-w-md rounded-lg border-2 border-primary bg-background p-6 shadow-2xl space-y-6 text-center">
          <div className="space-y-3">
            <h1 id="age-verification-title" className="font-heading text-3xl font-bold uppercase text-primary">
              AGE VERIFICATION
            </h1>
            <p className="text-base text-foreground">You must be 21 years or older to enter this site.</p>
          </div>

          <div className="space-y-3">
            <p className="text-base font-medium text-foreground">Are you 21 or older?</p>
            <div className="flex gap-4">
              <Button
                onClick={handleYes}
                size="lg"
                className="flex-1 bg-primary text-base font-bold uppercase hover:bg-primary/90"
                aria-label="Yes, I am 21 or older"
              >
                YES
              </Button>
              <Button
                onClick={handleNo}
                size="lg"
                variant="outline"
                className="flex-1 text-base font-bold uppercase bg-transparent"
                aria-label="No, I am under 21"
              >
                NO
              </Button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            By entering this site you are agreeing to the Terms of Use and Privacy Policy.
          </p>
        </div>
      </div>
    )
  }

  return null
}
