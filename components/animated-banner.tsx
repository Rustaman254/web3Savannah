"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"
import { useTheme } from "@/components/theme-provider"
import Image from "next/image"

interface AnimatedBannerProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

interface Star {
  x: number
  y: number
  radius: number
  opacity: number
  twinkleSpeed: number
  baseOpacity: number
  originalX: number
  originalY: number
}

export function AnimatedBanner({ title, subtitle, children }: AnimatedBannerProps) {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)
  const starsRef = useRef<Star[]>([])
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = Math.max(600, window.innerHeight * 0.7)
      initStars()
    }

    // Initialize stars
    const initStars = () => {
      const stars: Star[] = []
      const numStars = Math.floor((canvas.width * canvas.height) / 10000) // Dense star field

      for (let i = 0; i < numStars; i++) {
        const radius = Math.random() * 2 + 0.5 // Small stars
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        stars.push({
          x,
          y,
          radius,
          opacity: Math.random() * 0.5 + 0.3,
          twinkleSpeed: Math.random() * 0.02 + 0.01,
          baseOpacity: Math.random() * 0.5 + 0.3,
          originalX: x,
          originalY: y,
        })
      }

      starsRef.current = stars
    }

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      setMousePosition({ x, y })
    }

    // Handle mouse leave
    const handleMouseLeave = () => {
      setMousePosition(null)
    }

    // Animation function
    const animate = () => {
      if (!ctx || !canvas) return

      // Clear canvas with theme-appropriate background
      ctx.fillStyle = theme === "dark" ? "#0a0a0a" : "#ffffff"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw and update stars
      starsRef.current.forEach((star) => {
        // Twinkle effect
        star.opacity = star.baseOpacity + Math.sin(Date.now() * star.twinkleSpeed) * 0.2

        // React to mouse position
        if (mousePosition) {
          const dx = mousePosition.x - star.x
          const dy = mousePosition.y - star.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 200 // Influence radius

          if (distance < maxDistance) {
            // Brighten and slightly shift stars near mouse
            star.opacity = Math.min(star.opacity + (1 - distance / maxDistance) * 0.5, 1)
            star.x += dx * 0.01
            star.y += dy * 0.01
          } else {
            // Return to original position
            star.x += (star.originalX - star.x) * 0.05
            star.y += (star.originalY - star.y) * 0.05
          }
        } else {
          // Return to original position
          star.x += (star.originalX - star.x) * 0.05
          star.y += (star.originalY - star.y) * 0.05
        }

        // Keep stars within canvas
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0

        // Draw star
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`
        ctx.fill()
      })

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    // Initialize and start animation
    window.addEventListener("resize", resizeCanvas)
    canvas.addEventListener("mousemove", handleMouseMove)
    canvas.addEventListener("mouseleave", handleMouseLeave)
    resizeCanvas()
    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      canvas.removeEventListener("mousemove", handleMouseMove)
      canvas.removeEventListener("mouseleave", handleMouseLeave)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [theme, mousePosition])

  return (
    <section className="relative overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />

      <div className="relative z-10 container mx-auto py-20 md:py-32">
        <div className="flex flex-col items-center text-center">
          <div className="relative w-48 h-48 mb-8">
            <Image src="/landscapelogo.webp" alt="Web3 Savannah Logo" fill className="object-contain" />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">{title}</h1>

          <p className="max-w-3xl mx-auto text-xl text-gray-700 dark:text-gray-300 mb-10">{subtitle}</p>

          <div className="flex flex-wrap justify-center gap-4">{children}</div>
        </div>
      </div>
    </section>
  )
}
