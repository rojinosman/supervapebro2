"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

/**
 * Loads AdSense only on screens that have publisher content, to comply with
 * "Google-served ads on screens without publisher-content" policy.
 * - On /about: load immediately (full content).
 * - On /: load only after age verification (avoids ads on modal or access-denied screen).
 */
export function AdSenseLoader() {
  const pathname = usePathname()
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (!pathname) return

    const isHome = pathname === "/" || pathname === ""
    if (!isHome) {
      setShouldLoad(true)
      return
    }

    if (typeof window === "undefined") return
    if (sessionStorage.getItem("ageVerified") === "true") {
      setShouldLoad(true)
      return
    }

    const onVerified = () => setShouldLoad(true)
    window.addEventListener("ageVerified", onVerified)
    return () => window.removeEventListener("ageVerified", onVerified)
  }, [pathname])

  if (!shouldLoad) return null

  return (
    <Script
      src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3452144462263723"
      strategy="afterInteractive"
      crossOrigin="anonymous"
    />
  )
}
