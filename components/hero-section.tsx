import type React from "react"
import Image from "next/image"
import { AnimatedStarsBackground } from "@/components/animated-stars-background"

interface HeroSectionProps {
  title: string
  description: string
  logoUrl: string
  children?: React.ReactNode
}

export function HeroSection({ title, description, logoUrl, children }: HeroSectionProps) {
  return (
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-[#0a0a0a] to-[#121212]">
      <AnimatedStarsBackground />
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="max-w-2xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-300 mb-8">{description}</p>
            {children}
          </div>
          <div className="w-48 h-48 md:w-64 md:h-64 relative flex-shrink-0">
            <Image
              src={logoUrl || "/placeholder.svg"}
              alt="Web3 Savannah Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0a0a] to-transparent"></div>
    </section>
  )
}
