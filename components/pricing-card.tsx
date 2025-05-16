import { CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface PricingFeature {
  name: string
}

interface PricingCardProps {
  title: string
  price: string
  period?: string
  description: string
  features: PricingFeature[]
  ctaText: string
  popular?: boolean
  className?: string
}

export function PricingCard({
  title,
  price,
  period = "/month",
  description,
  features,
  ctaText,
  popular = false,
  className,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-800 p-8 relative",
        popular && "border-[#00d2ff] shadow-lg shadow-[#00d2ff]/10",
        className,
      )}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#00d2ff] text-black text-xs font-bold px-3 py-1 rounded-full">
          Most Popular
        </div>
      )}

      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <div className="flex items-end gap-1 mb-4">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">{price}</span>
        {price !== "Custom" && <span className="text-gray-500 dark:text-gray-400 text-sm">{period}</span>}
      </div>
      <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{description}</p>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
            <CheckCircle className="h-5 w-5 text-[#00d2ff] flex-shrink-0 mt-0.5" />
            <span>{feature.name}</span>
          </li>
        ))}
      </ul>

      <Button
        className={cn(
          "w-full",
          popular
            ? "bg-[#00d2ff] hover:bg-[#00b8e0] text-black"
            : "bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700",
        )}
      >
        {ctaText}
      </Button>
    </div>
  )
}
