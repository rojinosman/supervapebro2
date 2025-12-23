"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { getImagePath } from "@/lib/image-utils"
import { Menu, X } from "lucide-react"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null)
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null)

  const closeMenu = () => {
    setIsOpen(false)
    // Return focus to the toggle button for keyboard users
    requestAnimationFrame(() => toggleButtonRef.current?.focus())
  }

  useEffect(() => {
    if (!isOpen) return

    // Move focus into the opened menu
    requestAnimationFrame(() => firstMobileLinkRef.current?.focus())

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault()
        closeMenu()
      }
    }

    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [isOpen])

  return (
    <nav
      aria-label="Primary"
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
        <div className="flex justify-between items-center h-16">
          <a
            href="#about"
            className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
            aria-label="Skip to main content"
          >
            <Image
              src={getImagePath("/Logo.png")}
              alt="Super Vape Bros logo"
              width={200}
              height={200}
              className="object-contain"
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#products"
              className="text-sm font-medium hover:text-foreground/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-1 py-1"
            >
              Products
            </a>
            <a
              href="#contact"
              className="text-sm font-medium hover:text-foreground/80 focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-1 py-1"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              ref={toggleButtonRef}
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              aria-controls="primary-navigation"
            >
              {isOpen ? (
                <X aria-hidden="true" className="h-5 w-5" />
              ) : (
                <Menu aria-hidden="true" className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div id="primary-navigation" className="md:hidden" role="navigation" aria-label="Mobile">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              <a
                ref={firstMobileLinkRef}
                href="#products"
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={closeMenu}
              >
                Products
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-sm font-medium hover:bg-muted rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                onClick={closeMenu}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
