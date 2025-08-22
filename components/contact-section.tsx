"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function ContactSection() {
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
    <>
      <section className="relative min-h-screen bg-black text-white flex items-center justify-center py-20">
        <div className="container mx-auto px-8">
          <div className="relative w-full max-w-7xl mx-auto">
            <Image
              src="/we-are-section.png"
              alt="We Are A Co-Creative Marketing Studio Founded By Game Industry Veterans"
              width={1920}
              height={1080}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>
      </section>

      <section
        ref={sectionRef}
        id="contact"
        className="min-h-screen flex items-center justify-center bg-black text-white py-20"
      >
        <div className="max-w-4xl mx-auto px-8 text-center">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl md:text-6xl font-medium mb-8 tracking-tight">
              Let's Work
              <br />
              Together
            </h2>

            <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed">
              Ready to create something extraordinary? Get in touch and let's bring your vision to life.
            </p>

            <div className="space-y-6 mb-12">
              <div className="text-lg">
                <span className="text-gray-400">Email:</span>
                <br />
                <a href="mailto:hello@summoner.studio" className="hover:text-gray-300 transition-colors">
                  hello@summoner.studio
                </a>
              </div>

              <div className="text-lg">
                <span className="text-gray-400">Phone:</span>
                <br />
                <a href="tel:+15551234567" className="hover:text-gray-300 transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
            </div>

            <button className="border border-white text-white px-8 py-3 text-sm font-medium tracking-wide hover:bg-white hover:text-black transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </section>
    </>
  )
}
