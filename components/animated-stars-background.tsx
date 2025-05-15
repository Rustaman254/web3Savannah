"use client"

import { useEffect, useRef } from "react"

interface Star {
  x: number
  y: number
  radius: number
  vx: number
  vy: number
  alpha: number
}

interface AnimatedStarsBackgroundProps {
  className?: string
}

export function AnimatedStarsBackground({ className = "" }: AnimatedStarsBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const starsRef = useRef<Star[]>([])
  const animationFrameRef = useRef<number>(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initStars()
    }

    const initStars = () => {
      const stars: Star[] = []
      // Increase the number of stars for better visibility
      const starCount = Math.floor((canvas.width * canvas.height) / 1500)

      for (let i = 0; i < starCount; i++) {
        // Increase the size range of stars for better visibility
        const radius = Math.random() * 2 + 0.5
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius,
          vx: Math.random() * 0.1 - 0.05,
          vy: Math.random() * 0.1 - 0.05,
          alpha: Math.random() * 0.5 + 0.5,
        })
      }

      starsRef.current = stars
    }

    const drawStars = () => {
      if (!ctx || !canvas) return

      // Clear with a very subtle background color instead of fully transparent
      ctx.fillStyle = "rgba(10, 10, 10, 0.2)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        // Increase the brightness of stars
        ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`
        ctx.fill()

        // Update position
        star.x += star.vx
        star.y += star.vy

        // Twinkle effect
        star.alpha += Math.random() * 0.05 - 0.025

        // Keep alpha in bounds
        if (star.alpha < 0.3) star.alpha = 0.3
        if (star.alpha > 0.9) star.alpha = 0.9

        // Wrap around edges
        if (star.x < 0) star.x = canvas.width
        if (star.x > canvas.width) star.x = 0
        if (star.y < 0) star.y = canvas.height
        if (star.y > canvas.height) star.y = 0
      })

      animationFrameRef.current = requestAnimationFrame(drawStars)
    }

    window.addEventListener("resize", resizeCanvas)
    resizeCanvas()
    drawStars()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameRef.current)
    }
  }, [])

  return <canvas ref={canvasRef} className={`absolute inset-0 -z-10 ${className}`} />
}
