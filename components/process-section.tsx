"use client"

import { useEffect, useState } from "react"

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const section = document.getElementById("process")
    if (section) observer.observe(section)

    return () => observer.disconnect()
  }, [])

  const processSteps = [
    {
      number: "01",
      title: "DISCOVERY",
      description: "We dive deep into your brand, audience, and objectives to understand what makes you unique.",
    },
    {
      number: "02",
      title: "STRATEGY",
      description: "We craft a comprehensive marketing strategy tailored to your specific goals and market position.",
    },
    {
      number: "03",
      title: "CREATION",
      description: "Our team brings your vision to life with compelling creative that resonates with your audience.",
    },
    {
      number: "04",
      title: "EXECUTION",
      description: "We launch and manage your campaigns with precision, monitoring performance every step of the way.",
    },
  ]

  return (
    <section id="process" className="py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-8 font-serif">OUR PROCESS</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A proven methodology that transforms brands into market leaders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {processSteps.map((step, index) => (
            <div
              key={step.number}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="border border-white/20 p-8 h-full hover:border-white/40 transition-colors duration-300">
                <div className="text-6xl font-mono font-bold mb-6 text-white/60">{step.number}</div>
                <h3 className="text-2xl font-bold mb-4 tracking-wider">{step.title}</h3>
                <p className="text-gray-300 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
