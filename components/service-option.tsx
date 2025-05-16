import type React from "react"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ServiceOptionProps {
  title: string
  description: string
  icon?: React.ReactNode
  className?: string
}

export function ServiceOption({ title, description, icon, className }: ServiceOptionProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-800 p-8 group hover:border-[#00d2ff] transition-colors duration-300",
        className,
      )}
    >
      {icon && <div className="mb-6 text-[#00d2ff]">{icon}</div>}
      <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white group-hover:text-[#00d2ff] transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
      <div className="flex items-center text-[#00d2ff] text-sm font-medium group-hover:underline">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
      </div>
    </div>
  )
}
