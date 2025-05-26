"use client"

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

export type CardTheme = "default" | "ocean" | "sunset" | "neon" | "midnight"

interface CreditCardProps {
  cardNumber?: string
  expiryDate?: string
  cardholderName?: string
  className?: string
  theme?: CardTheme
}

export function CreditCard({
  cardNumber = "5412 7500 8392 1422",
  expiryDate = "12/28",
  cardholderName = "WEB3 SAVANNAH",
  className,
  theme = "default",
}: CreditCardProps) {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  // Theme styles
  const themeStyles = {
    default: {
      background: "bg-gradient-to-br from-[#cd7f32] via-[#b87333] to-[#cd7f32]", // Bronze
      textColor: "text-white",
    },
    ocean: {
      background: "bg-gradient-to-br from-[#c0c0c0] via-[#a7a7a7] to-[#c0c0c0]", // Silver
      textColor: "text-black",
    },
    sunset: {
      background: "bg-gradient-to-br from-[#ffd700] via-[#e6b800] to-[#ffd700]", // Gold
      textColor: "text-black",
    },
    neon: {
      background: "bg-gradient-to-br from-[#e5e4e2] via-[#d8d8d6] to-[#e5e4e2]", // Platinum
      textColor: "text-black",
    },
    midnight: {
      background: "bg-gradient-to-br from-[#1c2526] via-[#2f3d44] to-[#1c2526]", // Obsidian
      textColor: "text-white",
    },
  }

  const currentTheme = themeStyles[theme]

  return (
    <div
      className={cn("relative w-full max-w-[400px] h-[250px] cursor-pointer perspective", className)}
      onClick={handleFlip}
    >
      <div
        className={cn(
          "absolute w-full h-full transition-transform duration-700 transform-style-3d",
          isFlipped ? "rotate-y-180" : "",
        )}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden shadow-xl">
          <div className={`absolute inset-0 ${currentTheme.background} opacity-90`}></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] mix-blend-overlay opacity-20"></div>

          <div className={`relative h-full w-full p-6 flex flex-col justify-between ${currentTheme.textColor}`}>
            <div className="flex justify-between items-start">
              <div className="w-16 h-16 relative">
                <Image src="/landscapelogo.webp" alt="Web3 Savannah Logo" fill className="object-contain" />
              </div>
              <div className="text-right">
                <p className="text-xs font-medium opacity-80">Banking-as-a-Service</p>
                <p className="text-sm font-bold">VIRTUAL CARD</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="h-8 w-12 bg-gradient-to-r from-gray-300 to-gray-400 rounded-md"></div>

              <div>
                <p className="font-mono text-lg font-bold tracking-wider">{cardNumber}</p>
              </div>

              <div className="flex justify-between items-end">
                <div>
                  <p className="text-xs opacity-80">VALID THRU</p>
                  <p className="font-mono font-medium">{expiryDate}</p>
                </div>
                <div>
                  <p className="font-medium uppercase">{cardholderName}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl overflow-hidden shadow-xl">
          <div className={`absolute inset-0 ${currentTheme.background} opacity-90`}></div>
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=400&width=600')] mix-blend-overlay opacity-20"></div>

          <div className={`relative h-full w-full flex flex-col ${currentTheme.textColor}`}>
            <div className="w-full h-12 bg-black mt-6"></div>

            <div className="p-6 flex-1 flex flex-col justify-between">
              <div className="bg-white/80 h-10 w-full flex items-center justify-end px-4">
                <p className="font-mono text-sm font-bold text-black">***</p>
              </div>

              <div className="space-y-2">
                <p className="text-xs opacity-80">This card is issued by Web3 Savannah under license.</p>
                <p className="text-xs opacity-80">For customer service, please visit web3savannah.com</p>
                <div className="flex justify-between items-center">
                  <div className="w-14 h-14 relative">
                    <Image src="/landscapelogo.webp" alt="Web3 Savannah Logo" fill className="object-contain" />
                  </div>
                  <p className="font-bold uppercase">Web3 Savannah</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
