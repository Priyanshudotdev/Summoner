"use client"

import { useEffect, useRef, useState } from "react"
import { ThreeScene } from "./three-scene"

const projects = [
  {
    id: 1,
    title: "Quantum Interface",
    category: "3D Animation",
    description: "Interactive quantum visualization with real-time particle effects",
    color: "#0891b2",
  },
  {
    id: 2,
    title: "Neural Networks",
    category: "Data Visualization",
    description: "Dynamic 3D representation of machine learning algorithms",
    color: "#f59e0b",
  },
  {
    id: 3,
    title: "Cosmic Journey",
    category: "Interactive Experience",
    description: "Immersive space exploration with WebGL technology",
    color: "#dc2626",
  },
]

export function WorkSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="work" className="min-h-screen py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}
        >
          <h2 className="font-playfair font-bold text-5xl md:text-6xl mb-6 text-foreground">Featured Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of cutting-edge 3D projects and interactive experiences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Project List */}
          <div
            className={`space-y-6 transition-all duration-1000 delay-300 ${isVisible ? "animate-slideInFromLeft" : "opacity-0"}`}
          >
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                  selectedProject === index
                    ? "bg-primary/10 border-2 border-primary shadow-lg"
                    : "bg-card hover:bg-card/80 border border-border"
                }`}
                onClick={() => setSelectedProject(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-playfair font-bold text-2xl text-foreground">{project.title}</h3>
                  <span className="text-sm text-accent font-semibold bg-accent/10 px-3 py-1 rounded-full">
                    {project.category}
                  </span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{project.description}</p>
              </div>
            ))}
          </div>

          {/* 3D Preview */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? "animate-fadeInUp" : "opacity-0"}`}>
            <div className="bg-card rounded-xl p-8 shadow-lg">
              <ThreeScene className="w-full h-96 mb-6" animation="rotate" color={projects[selectedProject].color} />
              <div className="text-center">
                <h4 className="font-playfair font-bold text-xl mb-2 text-foreground">
                  {projects[selectedProject].title}
                </h4>
                <p className="text-muted-foreground mb-4">{projects[selectedProject].description}</p>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
