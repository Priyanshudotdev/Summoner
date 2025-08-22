"use client"

import { useEffect, useRef, useState } from "react"
import { ThreeScene } from "./three-scene"

export function ReelSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
    <section ref={sectionRef} id="reel" className="min-h-screen flex items-center justify-center bg-card py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className={`transition-all duration-1000 ${isVisible ? "animate-slideInFromLeft" : "opacity-0"}`}>
            <h2 className="font-playfair font-bold text-5xl md:text-6xl mb-6 text-foreground">Our Reel</h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Experience our latest 3D animations and interactive showcases. Each project represents our commitment to
              pushing the boundaries of digital creativity.
            </p>

            {/* Video placeholder with 3D overlay */}
            <div className="relative bg-muted rounded-xl overflow-hidden aspect-video mb-8">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mb-4 mx-auto hover:scale-110 transition-transform cursor-pointer">
                    <svg className="w-8 h-8 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-muted-foreground">Click to play demo reel</p>
                </div>
              </div>
            </div>

            <div className="flex space-x-4">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                View Full Reel
              </button>
              <button className="border border-border hover:bg-muted text-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300">
                Behind the Scenes
              </button>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-300 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <ThreeScene className="w-full h-96" animation="pulse" color="#f59e0b" />
          </div>
        </div>
      </div>
    </section>
  )
}
