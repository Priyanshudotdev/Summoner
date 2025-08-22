"use client"

import { useEffect, useRef } from "react"

export function ParallaxSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return

      const scrolled = window.scrollY
      const heroHeight = window.innerHeight
      const progress = Math.min(scrolled / (heroHeight * 0.7), 1) // Triggers even earlier for smoother transition

      sectionRef.current.style.transform = `translateY(${(1 - progress) * 100}vh)`
      sectionRef.current.style.opacity = `${progress}`

      if (progress >= 0.98) {
        sectionRef.current.style.display = "none"
        sectionRef.current.style.pointerEvents = "none"
      } else {
        sectionRef.current.style.display = "flex"
        sectionRef.current.style.pointerEvents = "auto"
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section
      ref={sectionRef}
      className="fixed top-0 left-0 w-full h-screen bg-black text-white z-5 flex items-center justify-center parallax-section"
      style={{ transform: "translateY(100vh)", opacity: 0 }}
    >
      <div className="container mx-auto px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
            <span className="block animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              WE ARE A
            </span>
            <span
              className="block font-serif italic text-7xl md:text-9xl lg:text-[12rem] animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              Co-Creative
            </span>
            <span className="block animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              MARKETING
            </span>
            <span className="block animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              STUDIO
            </span>
            <span
              className="block text-4xl md:text-6xl lg:text-7xl mt-8 animate-fade-in-up"
              style={{ animationDelay: "0.5s" }}
            >
              FOUNDED BY
            </span>
            <span className="block animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
              GAME INDUSTRY
            </span>
            <span className="block animate-fade-in-up" style={{ animationDelay: "0.7s" }}>
              VETERANS.
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}
