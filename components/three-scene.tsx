"use client"

import { useEffect, useRef, useState } from "react"

interface ThreeSceneProps {
  className?: string
  animation?: "rotate" | "float" | "pulse"
  color?: string
}

export function ThreeScene({ className = "", animation = "rotate", color = "#0891b2" }: ThreeSceneProps) {
  const mountRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<any>(null)
  const rendererRef = useRef<any>(null)
  const frameRef = useRef<number>()
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    let THREE: any

    const initThree = async () => {
      // Dynamically import Three.js to avoid SSR issues
      THREE = await import("three")

      if (!mountRef.current) return

      // Scene setup
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
        powerPreference: "high-performance",
      })

      renderer.setSize(400, 400)
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
      renderer.setClearColor(0x000000, 0)

      mountRef.current.appendChild(renderer.domElement)

      // Create 3D object
      const geometry = new THREE.IcosahedronGeometry(1, 1)
      const material = new THREE.MeshPhongMaterial({
        color: color,
        shininess: 100,
        transparent: true,
        opacity: 0.9,
      })
      const mesh = new THREE.Mesh(geometry, material)
      scene.add(mesh)

      // Lighting
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.6)
      scene.add(ambientLight)

      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8)
      directionalLight.position.set(5, 5, 5)
      scene.add(directionalLight)

      camera.position.z = 3

      sceneRef.current = { scene, camera, mesh }
      rendererRef.current = renderer
      setIsLoaded(true)

      // Animation loop
      const animate = () => {
        frameRef.current = requestAnimationFrame(animate)

        if (animation === "rotate") {
          mesh.rotation.x += 0.01
          mesh.rotation.y += 0.01
        } else if (animation === "float") {
          mesh.position.y = Math.sin(Date.now() * 0.001) * 0.5
          mesh.rotation.y += 0.005
        } else if (animation === "pulse") {
          const scale = 1 + Math.sin(Date.now() * 0.003) * 0.2
          mesh.scale.setScalar(scale)
        }

        renderer.render(scene, camera)
      }

      animate()
    }

    initThree()

    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
      if (rendererRef.current && mountRef.current) {
        mountRef.current.removeChild(rendererRef.current.domElement)
        rendererRef.current.dispose()
      }
    }
  }, [animation, color])

  return (
    <div
      ref={mountRef}
      className={`flex items-center justify-center ${className}`}
      style={{ opacity: isLoaded ? 1 : 0, transition: "opacity 0.5s ease-in-out" }}
    />
  )
}
