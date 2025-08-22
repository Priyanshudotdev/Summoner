"use client"

import type React from "react"

import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"

export function LenisProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6, // Much faster scroll duration
      easing: (t) => 1 - Math.pow(1 - t, 3), // Quicker easing function
      smoothWheel: true,
      smoothTouch: false,
      wheelMultiplier: 1.5, // Increased for more responsive wheel scrolling
      touchMultiplier: 2.5, // Increased for better touch sensitivity
      infinite: false,
    })

    function raf(time: number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
