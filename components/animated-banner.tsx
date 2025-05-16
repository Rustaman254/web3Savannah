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

interface Circle {
  x: number
  y: number
  radius: number
  color: string
  vx: number
  vy: number
  opacity: number
  originalX: number
  originalY: number
}

export function AnimatedBanner({ title, subtitle, children }: AnimatedBannerProps) {
  const { theme } = useTheme()
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number>(0)
  const circlesRef = useRef<Circle[]>([])
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
      initCircles()
    }

    // Brand colors with variations
    const brandColors = [
      // Purple variations
      "rgba(138, 58, 185, 0.6)",
      "rgba(103, 65, 217, 0.6)",
      "rgba(156, 39, 176, 0.6)",
      "rgba(123, 31, 162, 0.6)",
      "rgba(170, 71, 188, 0.6)",
      // Cyan/Teal variations
      "rgba(0, 210, 255, 0.6)",
      "rgba(0, 184, 224, 0.6)",
      "rgba(0, 229, 255, 0.6)",
      "rgba(0, 188, 212, 0.6)",
      "rgba(3, 169, 244, 0.6)",
    ]

    // Initialize circles
    const initCircles = () => {
      const circles: Circle[] = []
      const numCircles = Math.floor((canvas.width * canvas.height) / 25000) // More circles

      for (let i = 0; i < numCircles; i++) {
        const radius = Math.random() * 80 + 30 // Varying sizes
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height

        circles.push({
          x,
          y,
          radius,
          color: brandColors[Math.floor(Math.random() * brandColors.length)],
          vx: (Math.random() - 0.5) * 0.5,
          vy: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          originalX: x,
          originalY: y,
        })
      }

      circlesRef.current = circles
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

      // Draw and update circles
      circlesRef.current.forEach((circle) => {
        // Update position based on velocity
        circle.x += circle.vx
        circle.y += circle.vy

        // React to mouse position if available
        if (mousePosition) {
          const dx = mousePosition.x - circle.x
          const dy = mousePosition.y - circle.y
          const distance = Math.sqrt(dx * dx + dy * dy)
          const maxDistance = 300 // Maximum influence distance

          if (distance < maxDistance) {
            // Calculate repulsion force (stronger when closer)
            const force = (1 - distance / maxDistance) * 2
            circle.x -= dx * force * 0.02
            circle.y -= dy * force * 0.02
          } else {
            // Gradually return to original path when not influenced
            circle.x += (circle.originalX - circle.x) * 0.01
            circle.y += (circle.originalY - circle.y) * 0.01
          }
        } else {
          // Gradually return to original path when mouse leaves
          circle.x += (circle.originalX - circle.x) * 0.01
          circle.y += (circle.originalY - circle.y) * 0.01
        }

        // Bounce off edges
        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius

        // Draw circle
        ctx.beginPath()
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2)
        ctx.fillStyle = circle.color
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
