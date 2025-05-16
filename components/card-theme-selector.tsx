"use client"

import { useState } from "react"
import { CreditCard, type CardTheme } from "@/components/credit-card"
import { cn } from "@/lib/utils"

interface CardThemeOption {
  id: CardTheme
  name: string
  color: string
}

const themeOptions: CardThemeOption[] = [
  { id: "default", name: "Default", color: "bg-gradient-to-r from-[#00d2ff] via-purple-500 to-[#00d2ff]" },
  { id: "ocean", name: "Ocean", color: "bg-gradient-to-r from-blue-400 via-teal-500 to-blue-600" },
  { id: "sunset", name: "Sunset", color: "bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600" },
  { id: "neon", name: "Neon", color: "bg-gradient-to-r from-green-400 via-yellow-300 to-pink-500" },
  { id: "midnight", name: "Midnight", color: "bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900" },
]

export function CardThemeSelector() {
  const [selectedTheme, setSelectedTheme] = useState<CardTheme>("default")
  const [cardholderName, setCardholderName] = useState("WEB3 SAVANNAH")
  const [isCustomizing, setIsCustomizing] = useState(false)

  return (
    <div className="space-y-8">
      <div className="flex justify-center">
        <CreditCard theme={selectedTheme} cardholderName={cardholderName} />
      </div>

      <div className="bg-white dark:bg-[#111111] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
        <h3 className="text-lg font-medium mb-4 text-gray-900 dark:text-white">Customize Your Card</h3>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Card Theme</label>
            <div className="flex flex-wrap gap-3">
              {themeOptions.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setSelectedTheme(theme.id)}
                  className={cn(
                    "w-12 h-12 rounded-full transition-all",
                    theme.color,
                    selectedTheme === theme.id
                      ? "ring-2 ring-black dark:ring-white ring-offset-2 ring-offset-white dark:ring-offset-[#111111]"
                      : "",
                  )}
                  title={theme.name}
                />
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="cardholderName" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
              Cardholder Name
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                id="cardholderName"
                value={cardholderName}
                onChange={(e) => setCardholderName(e.target.value.toUpperCase())}
                maxLength={20}
                className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white"
              />
            </div>
          </div>

          <button
            onClick={() => setIsCustomizing(!isCustomizing)}
            className="text-[#00d2ff] text-sm font-medium hover:underline"
          >
            {isCustomizing ? "Hide advanced options" : "Show advanced options"}
          </button>

          {isCustomizing && (
            <div className="space-y-4 pt-2">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">Card Type</label>
                <div className="flex gap-3">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="cardType" defaultChecked className="text-[#00d2ff]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Virtual</span>
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="cardType" className="text-[#00d2ff]" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">Physical</span>
                  </label>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Spending Limits
                </label>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Daily Limit</label>
                    <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white">
                      <option>$1,000</option>
                      <option>$5,000</option>
                      <option>$10,000</option>
                      <option>Custom</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Monthly Limit</label>
                    <select className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-3 py-2 text-sm w-full focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white">
                      <option>$5,000</option>
                      <option>$10,000</option>
                      <option>$25,000</option>
                      <option>Custom</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
