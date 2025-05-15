import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, MapPin, Users } from "lucide-react"

interface EventCardProps {
  id: string
  title: string
  description: string
  date: string
  time: string
  location: string
  capacity: string
  imageUrl: string
  type: "in-person" | "virtual" | "hybrid"
  slug: string
}

export function EventCard({
  id,
  title,
  description,
  date,
  time,
  location,
  capacity,
  imageUrl,
  type,
  slug,
}: EventCardProps) {
  const typeColors = {
    "in-person": "bg-purple-600",
    virtual: "bg-[#00d2ff]",
    hybrid: "bg-gradient-to-r from-purple-600 to-[#00d2ff]",
  }

  return (
    <div className="bg-[#111111] rounded-xl border border-gray-800 overflow-hidden hover:border-gray-700 transition-all duration-300 group">
      <div className="relative">
        <div className="h-48 bg-gray-800 relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className={`absolute top-3 right-3 ${typeColors[type]} text-xs px-2 py-1 rounded`}>{type}</div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-4 group-hover:text-[#00d2ff] transition-colors">{title}</h3>
        <p className="text-gray-400 text-sm mb-6 line-clamp-3">{description}</p>
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Calendar className="h-4 w-4 text-[#00d2ff]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Clock className="h-4 w-4 text-[#00d2ff]" />
            <span>{time}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <MapPin className="h-4 w-4 text-[#00d2ff]" />
            <span>{location}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Users className="h-4 w-4 text-[#00d2ff]" />
            <span>{capacity}</span>
          </div>
        </div>
        <Link href={`/events/${slug}`}>
          <Button className="w-full bg-transparent hover:bg-gray-800 text-white border border-gray-700 hover:border-[#00d2ff] transition-colors">
            View Event
          </Button>
        </Link>
      </div>
    </div>
  )
}
