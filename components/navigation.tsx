"use client"

import { useState, useEffect } from "react"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Contact", href: "#contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.href.slice(1))
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })

      if (currentSection) {
        setActiveSection(currentSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className="fixed top-12 left-0 right-0 z-40 px-8 py-6">
      <div className="flex items-center justify-center">
        <div className="bg-white text-black px-6 py-2 text-sm font-medium tracking-wide hover:bg-gray-100 transition-all duration-300 hover:scale-105 cursor-pointer">
          <button>Menu</button>
        </div>
      </div>
    </nav>
  )
}
