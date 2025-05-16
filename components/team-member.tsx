import Image from "next/image"

interface TeamMemberProps {
  name: string
  role: string
  bio: string
  imageUrl: string
}

export function TeamMember({ name, role, bio, imageUrl }: TeamMemberProps) {
  return (
    <div className="bg-white dark:bg-[#111111] rounded-xl border border-gray-200 dark:border-gray-800 overflow-hidden group hover:border-[#00d2ff] transition-colors duration-300">
      <div className="aspect-square relative">
        <Image
          src={imageUrl || "/placeholder.svg?height=400&width=400"}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-medium mb-1 text-gray-900 dark:text-white group-hover:text-[#00d2ff] transition-colors">
          {name}
        </h3>
        <p className="text-[#00d2ff] text-sm mb-4">{role}</p>
        <p className="text-gray-600 dark:text-gray-400 text-sm">{bio}</p>
      </div>
    </div>
  )
}
