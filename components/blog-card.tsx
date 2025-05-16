import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface BlogCardProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  imageUrl: string
  category: string
  slug: string
  featured?: boolean
}

export function BlogCard({
  title,
  excerpt,
  date,
  readTime,
  imageUrl,
  category,
  slug,
  featured = false,
}: BlogCardProps) {
  return (
    <div className="bg-white dark:bg-[#111111] rounded-lg border border-gray-200 dark:border-gray-800 overflow-hidden hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 group">
      <div className="relative">
        <div className="h-48 bg-gray-100 dark:bg-gray-800 relative overflow-hidden">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded">{category}</div>
        {featured && (
          <div className="absolute top-3 left-3 bg-[#00d2ff] text-black text-xs px-2 py-1 rounded">Featured</div>
        )}
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400 mb-4">
          <span>{date}</span>
          <span>•</span>
          <span>{readTime}</span>
        </div>
        <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white group-hover:text-[#00d2ff] transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3">{excerpt}</p>
        <Link href={`/blog/${slug}`} className="text-[#00d2ff] text-sm flex items-center group-hover:underline">
          Read more
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  )
}
