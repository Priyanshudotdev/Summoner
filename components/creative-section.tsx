"use client"

import { useEffect, useRef, useState } from "react"

export function CreativeSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white flex items-center justify-center py-20">
      <div className="container mx-auto px-8 text-center">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-tight">
            <span
              className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.1s" }}
            >
              WE ARE A
            </span>
            <span
              className={`block font-serif italic text-7xl md:text-9xl lg:text-[12rem] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.2s" }}
            >
              Co-Creative
            </span>
            <span
              className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.3s" }}
            >
              MARKETING
            </span>
            <span
              className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.4s" }}
            >
              STUDIO
            </span>
            <span
              className={`block text-4xl md:text-6xl lg:text-7xl mt-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.5s" }}
            >
              FOUNDED BY
            </span>
            <span
              className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.6s" }}
            >
              GAME INDUSTRY
            </span>
            <span
              className={`block transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: "0.7s" }}
            >
              VETERANS.
            </span>
          </h2>
        </div>
      </div>
    </section>
  )
}
