"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useTheme } from "@/components/theme-provider"

interface ServiceHeroProps {
  title: string
  description: string
  image: string
  ctaText?: string
  ctaLink?: string
}

export function ServiceHero({ title, description, image, ctaText = "Get Started", ctaLink = "#" }: ServiceHeroProps) {
  const { theme } = useTheme()

  return (
    <section className="py-20 relative overflow-hidden">
      <div
        className={`absolute inset-0 ${theme === "dark" ? "bg-gradient-to-r from-[#0a0a0a] to-transparent" : "bg-gradient-to-r from-gray-50 to-transparent"} z-10`}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      <div className="container mx-auto relative z-20">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{title}</h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8">{description}</p>
          <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
            {ctaText}
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
