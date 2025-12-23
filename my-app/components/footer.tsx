"use client"

import { MapPin, Phone } from "lucide-react"

export function Footer() {
  const phoneDisplay = "(619) 678-1577"
  const phoneHref = "tel:+16196781577"
  const addressLines = ["530 3rd Ave", "San Diego, CA 92101"]
  const mapsHref =
    "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(addressLines.join(", "))

  return (
    <footer className="bg-primary text-primary-foreground py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-lg font-bold mb-4">Super Vape Bros INC</h2>
            <p className="text-sm text-primary-foreground/80">
              Visit us in downtown San Diego for a wide selection of products and a comfortable lounge.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact info</h3>
            <ul className="space-y-3 text-sm text-primary-foreground/90" role="list">
              <li className="flex items-center gap-2">
                <Phone aria-hidden="true" className="h-4 w-4" />
                <a
                  href={phoneHref}
                  className="underline underline-offset-4 hover:text-primary-foreground/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                >
                  {phoneDisplay}
                </a>
              </li>

              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="h-4 w-4 mt-0.5" />
                <a
                  href={mapsHref}
                  target="_blank"
                  rel="noreferrer"
                  className="underline underline-offset-4 hover:text-primary-foreground/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-sm"
                  aria-label="Open address in Google Maps"
                >
                  <span className="block">{addressLines[0]}</span>
                  <span className="block">{addressLines[1]}</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-sm text-primary-foreground/70">© 2025 A&amp;R Smoke INC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
