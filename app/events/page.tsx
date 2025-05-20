import { Navbar } from "@/components/navbar"
import { ServiceFooter } from "@/components/service-footer"
import { HeroSection } from "@/components/hero-section"
import { EventCard } from "@/components/event-card"
import { Button } from "@/components/ui/button"
import { Search, Filter, Calendar } from "lucide-react"

const events = [
  {
    id: "1",
    title: "Web3 Savannah Hackathon",
    description:
      "Join our 3-day hackathon focused on building decentralized solutions for real-world problems in Africa. Network with industry experts, learn from workshops, and compete for prizes.",
    date: "June 10-12, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Nairobi, Kenya",
    capacity: "Limited to 100 participants",
    imageUrl: "/Image_fx (3).jpg",
    type: "in-person" as const,
    slug: "web3-savannah-hackathon-2025",
  },
  {
    id: "2",
    title: "AI in Finance Workshop",
    description:
      "Learn how AI is transforming the financial sector and how blockchain technology is enabling new financial models. This virtual workshop will cover the latest trends and practical applications.",
    date: "July 5, 2025",
    time: "2:00 PM - 4:00 PM",
    location: "Online (Zoom)",
    capacity: "Unlimited participants",
    imageUrl: "/Image_fx (7) (1).jpg",
    type: "virtual" as const,
    slug: "ai-finance-workshop-2025",
  },
  {
    id: "3",
    title: "Blockchain Developer Bootcamp",
    description:
      "A comprehensive 2-day bootcamp for developers looking to transition into blockchain development. Learn Solidity, smart contract development, and best practices from industry experts.",
    date: "Aug 15-16, 2025",
    time: "9:00 AM - 6:00 PM",
    location: "Lagos, Nigeria",
    capacity: "Limited to 50 participants",
    imageUrl: "/Image_fx (1).jpg",
    type: "in-person" as const,
    slug: "blockchain-developer-bootcamp-2025",
  },
  {
    id: "4",
    title: "DeFi Summit Africa",
    description:
      "The largest DeFi conference in Africa, bringing together builders, investors, and enthusiasts to discuss the future of decentralized finance on the continent.",
    date: "September 22-23, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Cape Town, South Africa",
    capacity: "Limited to 300 participants",
    imageUrl: "/ChatGPT Image May 20, 2025, 11_40_49 AM.png",
    type: "in-person" as const,
    slug: "defi-summit-africa-2025",
  },
  {
    id: "5",
    title: "Web3 for Social Impact",
    description:
      "Explore how blockchain and Web3 technologies can drive social impact across Africa. This hybrid event will feature case studies, panel discussions, and networking opportunities.",
    date: "October 10, 2025",
    time: "11:00 AM - 3:00 PM",
    location: "Accra, Ghana & Online",
    capacity: "200 in-person, unlimited online",
    imageUrl: "/Image_fx (7).jpg",
    type: "hybrid" as const,
    slug: "web3-social-impact-2025",
  },
  {
    id: "6",
    title: "NFT Art Exhibition",
    description:
      "A showcase of African digital artists leveraging NFT technology. Join us for this unique exhibition that bridges traditional art with blockchain technology.",
    date: "November 5-7, 2025",
    time: "12:00 PM - 8:00 PM",
    location: "Kigali, Rwanda",
    capacity: "Open to public",
    imageUrl: "/Image_fx (5).jpg",
    type: "in-person" as const,
    slug: "nft-art-exhibition-2025",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <HeroSection
        title="Web3 Savannah Events"
        description="Join our community at upcoming blockchain and Web3 events across Africa. Network with industry leaders, learn from experts, and stay at the forefront of innovation."
        logoUrl="/logo-large.png"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">Browse Events</Button>
          <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
            Host an Event
          </Button>
        </div>
      </HeroSection>

      {/* Search and Filter */}
      <section className="py-8 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search events..."
                className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                <Calendar className="mr-2 h-4 w-4" />
                Date
              </Button>
              <select className="bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent">
                <option value="all">All Types</option>
                <option value="in-person">In-Person</option>
                <option value="virtual">Virtual</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Featured Event</span>
          </div>

          <div className="bg-gradient-to-r from-[#111111] to-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <div className="inline-block px-3 py-1 rounded bg-purple-600 text-xs font-medium mb-4">
                  June 10-12, 2025
                </div>
                <h2 className="text-3xl font-bold mb-4">Web3 Savannah Hackathon</h2>
                <p className="text-gray-300 mb-6">
                  Join Africa's premier Web3 hackathon and build the future of decentralized applications. Network with
                  industry leaders, learn from workshops, and compete for over $50,000 in prizes.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-[#00d2ff]" />
                    <span>June 10-12, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <svg className="h-4 w-4 text-[#00d2ff]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <span>Nairobi, Kenya</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                    Register Now
                  </Button>
                  <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                    Learn More
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 md:hidden"></div>
                <img
                  src="/Image_fx.jpg"
                  alt="Web3 Savannah Hackathon"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs text-gray-400 uppercase">Upcoming Events</span>
            </div>
            <Button variant="link" className="text-[#00d2ff]">
              View Calendar
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <EventCard key={event.id} {...event} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Load More Events
            </Button>
          </div>
        </div>
      </section>

      {/* Community */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect with other blockchain enthusiasts, developers, and industry leaders. Stay updated on upcoming events
            and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">Join Discord</Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Follow on Twitter
            </Button>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Subscribe to Newsletter
            </Button>
          </div>
        </div>
      </section>

      <ServiceFooter />
    </div>
  )
}
