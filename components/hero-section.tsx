"use client"

import type React from "react"
import { useEffect, useState, useRef } from "react"
import Image from "next/image"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const image = imageRef.current
    if (!canvas || !image) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const drawImage = () => {
      const size = 500
      canvas.width = size
      canvas.height = size

      ctx.clearRect(0, 0, size, size)

      if (image.complete && image.naturalWidth > 0) {
        // Draw the normal image first
        ctx.drawImage(image, 0, 0, size, size)

        // If hovering, add pixelated effect only around cursor
        if (isHovering) {
          const pixelRadius = 60
          const pixelSize = 15

          // Create a circular pixelated area around cursor
          const centerX = (mousePos.x / 500) * size
          const centerY = (mousePos.y / 500) * size

          // Save the current state
          ctx.save()

          // Create circular clipping path with soft edge
          ctx.beginPath()
          ctx.arc(centerX, centerY, pixelRadius, 0, Math.PI * 2)
          ctx.clip()

          // Draw pixelated version in the clipped area
          ctx.imageSmoothingEnabled = false
          const tempCanvas = document.createElement("canvas")
          const tempCtx = tempCanvas.getContext("2d")
          if (tempCtx) {
            tempCanvas.width = size / pixelSize
            tempCanvas.height = size / pixelSize
            tempCtx.drawImage(image, 0, 0, tempCanvas.width, tempCanvas.height)
            ctx.drawImage(tempCanvas, 0, 0, size, size)
          }

          // Restore the state
          ctx.restore()

          ctx.save()
          ctx.globalCompositeOperation = "source-over"
          ctx.beginPath()
          ctx.arc(centerX, centerY, pixelRadius + 3, 0, Math.PI * 2)
          ctx.strokeStyle = "rgba(255, 255, 255, 0.15)"
          ctx.lineWidth = 1
          ctx.stroke()
          ctx.restore()
        }
      }
    }

    const handleImageLoad = () => {
      drawImage()
    }

    if (image.complete && image.naturalWidth > 0) {
      drawImage()
    } else {
      image.addEventListener("load", handleImageLoad)
      return () => image.removeEventListener("load", handleImageLoad)
    }
  }, [mousePos, isHovering])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center bg-black text-white overflow-hidden hero-section"
    >
      <div className="absolute inset-0 noise-overlay opacity-20"></div>
      <div className="floating-graphics">
        <div className="floating-line line-1"></div>
        <div className="floating-line line-2"></div>
        <div className="floating-line line-3"></div>
        <div className="floating-circle circle-1"></div>
        <div className="floating-circle circle-2"></div>
      </div>

      <div className="absolute top-6 left-6 md:top-8 md:left-8 font-mono text-xs md:text-sm tracking-wider font-bold z-30">
        SUMMONER
        <br />
        STUDIO
      </div>

      <div className="absolute top-6 right-6 md:top-8 md:right-8 font-mono text-xs md:text-sm tracking-wider font-bold z-30">
        CO-CREATIVE
        <br />
        MARKETING
      </div>

      <div className="flex flex-col items-center justify-center z-20">
        <div
          ref={containerRef}
          className="relative w-80 h-80 md:w-[500px] md:h-[500px] mb-8 z-10"
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <Image
            ref={imageRef}
            src="/hero-logo-transparent.png"
            alt="Summoner Studio Logo - Wolf and Hand"
            width={400}
            height={400}
            className="absolute w-full h-full inset-0 opacity-0 object-contain pointer-events-none"
            priority
            crossOrigin="anonymous"
          />

          <canvas ref={canvasRef} className="w-full h-full object-contain transition-all duration-300" />
        </div>

        <div
          className={`text-center transition-all duration-1000 z-20 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-wider font-serif text-white drop-shadow-lg">
            SUMMONER
          </h1>
          <p className="text-sm md:text-lg font-mono tracking-widest mt-2 opacity-90 text-white">MARKETING STUDIO</p>
        </div>
      </div>

      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 font-mono text-xs md:text-sm tracking-wider z-30">
        LOS ANGELES
        <br />
        CA
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 font-mono text-xs md:text-sm tracking-wider z-30">
        20—
        <br />
        25
      </div>
    </section>
  )
}
