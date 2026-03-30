"use client"

import { useEffect, useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

const DISCOUNTS = ["5% OFF", "7% OFF", "10% OFF"]
const TOTAL_CLICKS_TO_OPEN = 4
const PLAYED_KEY = "easterDiscountPlayed"
const TEST_ALWAYS_SHOW = false // production mode: one-time play

function getDiscount() {
  return DISCOUNTS[Math.floor(Math.random() * DISCOUNTS.length)]
}

function CrackLines({ stage }: { stage: number }) {
  return (
    <svg viewBox="0 0 300 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {stage >= 1 && (
        <path
          d="M150 72 L136 108 L154 132 L128 167"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
      )}
      {stage >= 2 && (
        <path
          d="M128 167 L151 196 L126 227 L147 258"
          fill="none"
          stroke="#fff"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
      )}
      {stage >= 3 && (
        <>
          <path
            d="M171 115 L190 145 L173 176"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
          <path
            d="M111 203 L93 228 L110 250"
            fill="none"
            stroke="#fff"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            opacity="0.9"
          />
        </>
      )}
    </svg>
  )
}

function EggPattern() {
  const dots = [
    { x: 86, y: 56, r: 11, c: "#c9b8ff" },
    { x: 148, y: 48, r: 11, c: "#a38ae8" },
    { x: 212, y: 58, r: 11, c: "#e8c2e8" },
    { x: 58, y: 100, r: 11, c: "#a38ae8" },
    { x: 26, y: 238, r: 11, c: "#c9b8ff" },
    { x: 118, y: 92, r: 11, c: "#e8c2e8" },
    { x: 180, y: 100, r: 11, c: "#c9b8ff" },
    { x: 240, y: 92, r: 11, c: "#a38ae8" },
    { x: 274, y: 238, r: 11, c: "#a38ae8" },
    { x: 84, y: 146, r: 11, c: "#c9b8ff" },
    { x: 148, y: 138, r: 11, c: "#a38ae8" },
    { x: 212, y: 146, r: 11, c: "#e8c2e8" },
    { x: 54, y: 192, r: 11, c: "#e8c2e8" },
    { x: 116, y: 184, r: 11, c: "#a38ae8" },
    { x: 180, y: 192, r: 11, c: "#c9b8ff" },
    { x: 244, y: 184, r: 11, c: "#e8c2e8" },
    { x: 82, y: 238, r: 11, c: "#a38ae8" },
    { x: 148, y: 230, r: 11, c: "#e8c2e8" },
    { x: 214, y: 238, r: 11, c: "#c9b8ff" },
    { x: 56, y: 284, r: 11, c: "#c9b8ff" },
    { x: 118, y: 276, r: 11, c: "#a38ae8" },
    { x: 182, y: 284, r: 11, c: "#e8c2e8" },
    { x: 242, y: 276, r: 11, c: "#a38ae8" },
    { x: 86, y: 328, r: 11, c: "#e8c2e8" },
    { x: 148, y: 320, r: 11, c: "#c9b8ff" },
    { x: 210, y: 328, r: 11, c: "#a38ae8" },
    { x: 118, y: 360, r: 10, c: "#a38ae8" },
    { x: 180, y: 360, r: 10, c: "#e8c2e8" },
  ]

  return (
    <svg viewBox="0 0 300 380" className="absolute inset-0 h-full w-full" aria-hidden="true">
      {dots.map((dot, i) => (
        <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill={dot.c} opacity="0.96" />
      ))}
    </svg>
  )
}

function ClosedEgg({ crackStage }: { crackStage: number }) {
  return (
    <motion.div
      className="relative h-[390px] w-[310px] cursor-pointer select-none"
      animate={{
        rotate: crackStage > 0 ? [0, -1.8, 1.8, -1, 0] : 0,
        scale: crackStage > 0 ? [1, 1.018, 1] : 1,
      }}
      transition={{ duration: 0.3 }}
    >
      <div
        className="absolute inset-0 overflow-hidden rounded-[48%_48%_46%_46%/58%_58%_38%_38%] border-4 border-white/60 shadow-[0_18px_40px_rgba(0,0,0,0.18)]"
        style={{
          background: "linear-gradient(180deg, #ff93d0 0%, #ff79c3 34%, #ff9dd8 64%, #ffc0e5 100%)",
        }}
      >
        <EggPattern />
      </div>
      <CrackLines stage={crackStage} />
    </motion.div>
  )
}

function EggShell({ className = "" }: { className?: string }) {
  return (
    <div
      className={`overflow-hidden border-4 border-white/55 shadow-[0_18px_36px_rgba(0,0,0,0.16)] ${className}`}
      style={{ background: "linear-gradient(180deg, #ff93d0 0%, #ff79c3 38%, #ffb3df 100%)" }}
    >
      <EggPattern />
    </div>
  )
}

function OpenEgg({ discount }: { discount: string }) {
  return (
    <div className="relative h-[450px] w-[380px] select-none">
      <motion.div
        initial={{ rotate: 0, x: 0, y: 0 }}
        animate={{ rotate: -24, x: -86, y: -20 }}
        transition={{ type: "spring", stiffness: 110, damping: 14 }}
        className="absolute left-2 top-10 h-[220px] w-[225px] rounded-[52%_48%_42%_58%/64%_56%_44%_36%]"
      >
        <EggShell className="h-full w-full rounded-[52%_48%_42%_58%/64%_56%_44%_36%]" />
      </motion.div>

      <motion.div
        initial={{ rotate: 0, x: 0, y: 0 }}
        animate={{ rotate: 19, x: 96, y: 148 }}
        transition={{ type: "spring", stiffness: 110, damping: 14, delay: 0.05 }}
        className="absolute bottom-1 right-3 h-[194px] w-[224px] rounded-[46%_54%_56%_44%/36%_42%_58%_64%]"
      >
        <EggShell className="h-full w-full rounded-[46%_54%_56%_44%/36%_42%_58%_64%]" />
      </motion.div>

      <motion.div
        initial={{ scale: 0.5, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 140, damping: 12, delay: 0.12 }}
        className="absolute left-1/2 top-[44%] z-10 flex h-40 w-40 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-[6px] border-[#f6d76b] bg-gradient-to-b from-[#ffdf78] via-[#d7a93d] to-[#b88418] shadow-[0_12px_28px_rgba(0,0,0,0.22)]"
      >
        <div className="absolute inset-[10px] rounded-full border border-white/40" />
        <div className="text-center leading-none text-white drop-shadow-[0_3px_6px_rgba(0,0,0,0.28)]">
          <div className="text-[1.7rem] font-black tracking-tight">{discount}</div>
        </div>
      </motion.div>
    </div>
  )
}

function FloatingEgg({
  className = "",
  color = "#f7a8d8",
  accent = "#8b74d6",
  accentLight = "#ebc4e6",
}: {
  className?: string
  color?: string
  accent?: string
  accentLight?: string
}) {
  const smallDots = [
    { x: 28, y: 26, r: 7, c: accent },
    { x: 50, y: 20, r: 6, c: accentLight },
    { x: 70, y: 32, r: 8, c: accent },
    { x: 38, y: 56, r: 8, c: accentLight },
    { x: 64, y: 64, r: 7, c: accent },
    { x: 28, y: 92, r: 6, c: accent },
    { x: 52, y: 100, r: 8, c: accentLight },
    { x: 72, y: 88, r: 6, c: accent },
  ]

  return (
    <div
      className={`absolute overflow-hidden rounded-[48%_48%_46%_46%/58%_58%_38%_38%] shadow-[0_10px_18px_rgba(0,0,0,0.12)] ${className}`}
      style={{ background: color }}
    >
      <svg viewBox="0 0 100 130" className="absolute inset-0 h-full w-full" aria-hidden="true">
        {smallDots.map((dot, i) => (
          <circle key={i} cx={dot.x} cy={dot.y} r={dot.r} fill={dot.c} opacity="0.95" />
        ))}
      </svg>
    </div>
  )
}

function Basket({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute z-10 ${className}`}>
      <div className="absolute left-1/2 top-0 h-14 w-20 -translate-x-1/2 rounded-t-full border-[6px] border-[#b57b35] border-b-0 opacity-90" />
      <div className="relative mt-8 h-16 w-28 overflow-visible rounded-b-[28px] rounded-t-[18px] border-4 border-[#b57b35] bg-[#e0a958] shadow-[0_8px_16px_rgba(0,0,0,0.12)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <div
            key={i}
            className="absolute bottom-0 top-0 w-[22%] border-r border-[#c98a41]/60"
            style={{ left: `${i * 20}%` }}
          />
        ))}
        <FloatingEgg className="left-1 top-[-14px] h-11 w-9" color="#ffd66e" accent="#f5e58b" accentLight="#f2a24b" />
        <FloatingEgg className="left-9 top-[-18px] h-12 w-10" color="#ff8ecd" accent="#8b74d6" accentLight="#bfe0ff" />
        <FloatingEgg className="right-1 top-[-14px] h-11 w-9" color="#9be1ff" accent="#7fd4a8" accentLight="#67c3f3" />
      </div>
    </div>
  )
}

function Bunny() {
  return (
    <motion.div
      initial={{ x: "-18vw" }}
      animate={{ x: "118vw" }}
      transition={{ duration: 11, repeat: Infinity, ease: "linear" }}
      className="absolute bottom-[18%] z-20 h-24 w-28"
      aria-hidden="true"
    >
      <motion.div
        animate={{ y: [0, -16, 0, -10, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
        className="relative h-full w-full"
      >
        <div className="absolute left-9 top-1 h-10 w-4 rotate-[-10deg] rounded-full bg-white" />
        <div className="absolute left-14 top-0 h-11 w-4 rotate-[8deg] rounded-full bg-white" />
        <div className="absolute left-10 top-3 h-6 w-2 rounded-full bg-pink-200 opacity-80" />
        <div className="absolute left-[60px] top-3 h-6 w-2 rounded-full bg-pink-200 opacity-80" />
        <div className="absolute left-8 top-8 h-12 w-14 rounded-full bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)]" />
        <div className="absolute left-0 top-12 h-11 w-16 rounded-full bg-white shadow-[0_8px_18px_rgba(0,0,0,0.12)]" />
        <div className="absolute left-1 top-[54px] h-3 w-5 rounded-full bg-white" />
        <div className="absolute left-10 top-[54px] h-3 w-5 rounded-full bg-white" />
        <div className="absolute left-[52px] top-[44px] h-5 w-5 rounded-full bg-white" />
        <div className="absolute left-[58px] top-[50px] h-1.5 w-1.5 rounded-full bg-slate-700" />
        <div className="absolute left-[60px] top-[56px] h-1.5 w-2 rounded-full bg-pink-300" />
        <div className="absolute left-[-4px] top-[50px] h-6 w-6 rounded-full bg-white" />
      </motion.div>
    </motion.div>
  )
}

export function EasterEggGamePopup() {
  const [showModal, setShowModal] = useState(false)
  const [clicks, setClicks] = useState(0)
  const [discount] = useState(getDiscount)

  const isOpen = clicks >= TOTAL_CLICKS_TO_OPEN
  const crackStage = Math.min(clicks, 3)
  const clicksRemaining = Math.max(TOTAL_CLICKS_TO_OPEN - clicks, 0)

  const helperText = useMemo(() => {
    if (isOpen) return "Screenshot your discount and bring it in store to redeem. One play per visitor."
    if (clicks === 0) return "Tap the egg to crack it open."
    return `${clicksRemaining} more ${clicksRemaining === 1 ? "click" : "clicks"} to reveal your discount.`
  }, [clicks, clicksRemaining, isOpen])

  useEffect(() => {
    const maybeShow = () => {
      const ageVerified = sessionStorage.getItem("ageVerified") === "true"
      const alreadyPlayed = localStorage.getItem(PLAYED_KEY) === "true"
      const canShow = TEST_ALWAYS_SHOW ? ageVerified : ageVerified && !alreadyPlayed
      if (canShow) {
        setShowModal(true)
      }
    }

    maybeShow()
    window.addEventListener("ageVerified", maybeShow)
    return () => window.removeEventListener("ageVerified", maybeShow)
  }, [])

  useEffect(() => {
    if (TEST_ALWAYS_SHOW) return
    if (!isOpen) return
    localStorage.setItem(PLAYED_KEY, "true")
  }, [isOpen])

  const handleClose = () => {
    // Closing the game also consumes the one-time chance.
    localStorage.setItem(PLAYED_KEY, "true")
    setShowModal(false)
  }

  const handleClickEgg = () => {
    if (!isOpen) {
      setClicks((prev) => prev + 1)
    }
  }

  if (!showModal) return null

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 backdrop-blur-md px-3 py-8">
      <div className="relative w-full max-w-3xl overflow-hidden rounded-[2rem] border-2 border-white/60 bg-[#87cfff] shadow-2xl">
        <Button
          onClick={handleClose}
          variant="ghost"
          size="icon"
          className="absolute right-3 top-3 z-20 text-slate-800 hover:bg-white/50"
          aria-label="Close game popup"
        >
          <X className="h-6 w-6" />
        </Button>

        <div className="absolute inset-0 bg-gradient-to-b from-[#87d0ff] via-[#abe2ff] to-[#dff5ff]" />
        <div className="absolute inset-x-0 top-0 h-28 bg-white/25 blur-2xl" />
        <div className="absolute left-[8%] top-[10%] h-16 w-32 rounded-full bg-white/75 blur-sm" />
        <div className="absolute left-[58%] top-[12%] h-14 w-28 rounded-full bg-white/70 blur-sm" />
        <div className="absolute left-[66%] top-[8%] h-10 w-20 rounded-full bg-white/70 blur-sm" />
        <div className="absolute left-[25%] top-[18%] h-12 w-24 rounded-full bg-white/65 blur-sm" />
        <div className="absolute bottom-0 left-0 right-0 h-[34%] bg-gradient-to-t from-[#51ab59] via-[#69bf61] to-[#8dd97e]" />
        <div className="absolute bottom-[22%] left-0 right-0 h-16 bg-[#78c96d]/70 blur-xl" />

        <Basket className="left-[5%] bottom-[17%] scale-90 opacity-95" />
        <Basket className="right-[7%] bottom-[18%] scale-100 opacity-95" />
        <FloatingEgg
          className="left-[14%] bottom-[10%] z-10 h-16 w-12 rotate-[-10deg]"
          color="#ffd66e"
          accent="#f5e58b"
          accentLight="#f2a24b"
        />
        <FloatingEgg
          className="right-[18%] bottom-[11%] z-10 h-14 w-11 rotate-[8deg]"
          color="#9ce4ff"
          accent="#7fd4a8"
          accentLight="#67c3f3"
        />
        <FloatingEgg
          className="left-[24%] bottom-[8%] z-10 h-12 w-9 rotate-[6deg]"
          color="#ffb6de"
          accent="#8b74d6"
          accentLight="#bfe0ff"
        />
        <FloatingEgg
          className="right-[28%] bottom-[8.5%] z-10 h-12 w-9 rotate-[-8deg]"
          color="#ffd66e"
          accent="#f5e58b"
          accentLight="#f2a24b"
        />

        <div className="absolute bottom-0 left-0 right-0 z-[1] overflow-hidden">
          {Array.from({ length: 26 }).map((_, i) => (
            <div
              key={i}
              className="absolute bottom-0 h-0 w-0 border-b-[42px] border-l-[10px] border-r-[10px] border-b-[#3f9a49] border-l-transparent border-r-transparent"
              style={{
                left: `${i * 4}%`,
                transform: `scale(${0.8 + (i % 5) * 0.14})`,
              }}
            />
          ))}
        </div>

        <Bunny />

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-2xl flex-col items-center justify-center px-4 py-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5"
          >
            <div className="inline-flex items-center rounded-full border border-white/50 bg-white/25 px-4 py-1 text-sm font-semibold text-white backdrop-blur-sm">
              Easter Egg Discount Game
            </div>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-white drop-shadow-[0_3px_8px_rgba(0,0,0,0.18)] sm:text-4xl">
              Crack the Egg, Reveal Your Deal
            </h2>
            <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-white/95 sm:text-base">
              Click the giant egg to crack it open and uncover your one-time surprise discount.
            </p>
            <p className="mx-auto mt-2 max-w-xl rounded-lg border border-amber-300/70 bg-amber-100/80 px-3 py-2 text-xs font-bold text-amber-900">
              Warning: this game is one-time only. If you close it, it cannot be reopened.
            </p>
          </motion.div>

          <motion.button
            onClick={handleClickEgg}
            whileHover={{ scale: isOpen ? 1 : 1.02 }}
            whileTap={{ scale: isOpen ? 1 : 0.98 }}
            className="relative flex items-center justify-center rounded-[2rem] p-3 outline-none focus-visible:ring-4 focus-visible:ring-white/60"
            aria-label={isOpen ? "Discount revealed" : "Crack the Easter egg"}
          >
            <div className="relative h-[400px] w-[340px]">
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="open"
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.25 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <OpenEgg discount={discount} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={`closed-${crackStage}`}
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <ClosedEgg crackStage={crackStage} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.button>

          <div className="mt-4 flex flex-col items-center gap-3">
            <div className="max-w-2xl rounded-2xl border border-white/45 bg-white/20 px-5 py-3 text-base font-semibold text-white shadow-lg backdrop-blur-sm">
              {helperText}
            </div>
            <div
              className={`rounded-2xl border px-5 py-3 text-sm font-bold shadow-[0_10px_24px_rgba(0,0,0,0.16)] ${
                isOpen
                  ? "border-[#f8e08c] bg-white/85 text-[#7a4c0e]"
                  : "invisible border-transparent bg-transparent text-transparent"
              }`}
            >
              Please screenshot this result and bring it in store to redeem your discount.
            </div>
            <Button onClick={handleClose} className="mt-2 bg-primary text-primary-foreground">
              Continue to Site
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
