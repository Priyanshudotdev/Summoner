"use client"

import { useEffect, useRef } from "react"

export function ClientsSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".fade-in")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const clients = [
    "ACTIVISION",
    "BLIZZARD",
    "RIOT GAMES",
    "EPIC GAMES",
    "UBISOFT",
    "EA SPORTS",
    "VALVE",
    "NINTENDO",
    "SONY",
    "MICROSOFT",
    "ROCKSTAR",
    "BETHESDA",
  ]

  return (
    <section ref={sectionRef} className="min-h-screen bg-black text-white py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000">
          <h2 className="text-6xl md:text-8xl font-bold mb-4 font-serif">TRUSTED BY</h2>
          <p className="text-xl md:text-2xl text-gray-400 mb-16 max-w-2xl">
            Industry leaders who trust us to deliver exceptional creative marketing solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {clients.map((client, index) => (
            <div
              key={client}
              className="fade-in opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="border border-gray-800 p-6 md:p-8 hover:border-white transition-colors duration-300 group-hover:bg-white group-hover:text-black">
                <h3 className="text-lg md:text-xl font-bold tracking-wider">{client}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="fade-in opacity-0 translate-y-8 transition-all duration-1000 mt-20 text-center">
          <p className="text-gray-400 text-lg">And many more industry pioneers who choose to work with the pack.</p>
        </div>
      </div>

      <style jsx>{`
        .animate-in {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  )
}
