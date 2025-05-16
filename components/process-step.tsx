import { cn } from "@/lib/utils"

interface ProcessStepProps {
  number: string
  title: string
  description: string
  className?: string
}

export function ProcessStep({ number, title, description, className }: ProcessStepProps) {
  return (
    <div className={cn("relative", className)}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-[#00d2ff] to-purple-500 flex items-center justify-center text-black font-bold text-lg">
          {number}
        </div>
        <div>
          <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">{title}</h3>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  )
}
