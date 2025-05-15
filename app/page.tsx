import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, MapPin, Users } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { AnimatedStarsBackground } from "@/components/animated-stars-background"
import { ServiceFooter } from "@/components/service-footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <AnimatedStarsBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-10"></div>
        <div className="container mx-auto text-center relative z-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Launch Your Web3 & AI <br />
            Vision—<span className="text-[#00d2ff]">Faster</span>, <span className="text-purple-500">Smarter</span>,{" "}
            <br />
            Together
          </h1>
          <p className="max-w-3xl mx-auto text-gray-400 mb-8 text-lg">
            From NFTs to DeFi, Web3 Savannah provides tailored, enterprise-grade governance and world-class Web3, DApps,
            and AI solutions—right here in Africa, with a global reach.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button asChild className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="link" className="text-white flex items-center">
              Explore Our Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center z-20">
          <div className="animate-bounce p-2 bg-[#111111]/50 rounded-full border border-gray-700">
            <svg
              width="30"
              height="30"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#00d2ff]"
            >
              <path
                d="M7 10L12 15L17 10"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </section>

      {/* Trusted Partner Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">About Web3 Savannah</span>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Trusted Partner in Digital Transformation</h2>
              <p className="text-gray-400 mb-6">
                At Web3 Savannah, we don't just write code—we build communities. Whether you're a startup, large
                enterprise looking to innovate, or a government seeking Web3 solutions, we're your trusted partner in
                navigating the complex digital landscape.
              </p>
              <Button asChild className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                <Link href="/get-started">Get Started</Link>
              </Button>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-4">Built for Africa, Ready for the World</h3>
              <p className="text-gray-400 mb-6">
                We provide battle-tested insights with global best practices. Our experts understand the unique
                challenges of emerging markets and can help you navigate the complexities of implementing cutting-edge
                solutions.
              </p>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-sm">Lead Assessment Timeframe</span>
                  <span className="text-[#00d2ff]">24 Hours</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-sm">Development Capacity Available</span>
                  <div className="w-32 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <div className="w-3/4 h-full bg-purple-600"></div>
                  </div>
                  <span className="text-sm">75%</span>
                </div>
                <div className="flex justify-between items-center border-b border-gray-800 pb-2">
                  <span className="text-sm">Current Market Status</span>
                  <span className="text-green-500">Growing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Solutions Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Services & Solutions</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Comprehensive Web3 & AI Solutions for Every Need</h2>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Savannah Devs */}
            <Link href="/services/savannah-devs" className="group">
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 hover:border-[#00d2ff] transition-colors h-full">
                <div className="mb-4 text-cyan-500">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
                    <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#00d2ff] transition-colors">Savannah Devs</h3>
                <p className="text-gray-400 mb-4">
                  Expert blockchain development services with skilled and certified developers. We build secure,
                  scalable solutions tailored to your needs, from MVPs to enterprise-grade applications.
                </p>
                <div className="text-[#00d2ff] flex items-center gap-2 text-sm font-medium group-hover:underline">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Scroll Savannah */}
            <Link href="/services/scroll-savannah" className="group">
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 hover:border-[#00d2ff] transition-colors h-full">
                <div className="mb-4 text-purple-500">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
                    <path
                      d="M7 14L12 9L17 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#00d2ff] transition-colors">
                  Scroll Savannah
                </h3>
                <p className="text-gray-400 mb-4">
                  Building the future of Ethereum scalability in Africa through our strategic partnership with Scroll,
                  bringing Layer 2 solutions to emerging markets.
                </p>
                <div className="text-[#00d2ff] flex items-center gap-2 text-sm font-medium group-hover:underline">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* Advisory Services */}
            <Link href="/services/advisory" className="group">
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 hover:border-[#00d2ff] transition-colors h-full">
                <div className="mb-4 text-cyan-500">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
                    <path
                      d="M12 6V12L16 14"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#00d2ff] transition-colors">
                  Advisory Services
                </h3>
                <p className="text-gray-400 mb-4">
                  Strategic consulting on tokenomics, technical architecture, and market fit for blockchain ventures in
                  Africa and beyond. Expert guidance through the complex blockchain landscape.
                </p>
                <div className="text-[#00d2ff] flex items-center gap-2 text-sm font-medium group-hover:underline">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>

            {/* BAAS & Card Solutions */}
            <Link href="/services/baas-card-solutions" className="group">
              <div className="bg-[#111111] p-8 rounded-lg border border-gray-800 hover:border-[#00d2ff] transition-colors h-full">
                <div className="mb-4 text-purple-500">
                  <svg className="w-12 h-12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
                    <rect x="6" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
                    <path d="M6 11H18" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </div>
                <h3 className="text-xl font-medium mb-2 group-hover:text-[#00d2ff] transition-colors">
                  BAAS & Card Solutions
                </h3>
                <p className="text-gray-400 mb-4">
                  Empower your platform with embedded financial services. Issue branded cards, manage accounts, and
                  handle payments seamlessly with our comprehensive banking-as-a-service solutions.
                </p>
                <div className="text-[#00d2ff] flex items-center gap-2 text-sm font-medium group-hover:underline">
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Featured Case Study</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Nobelium Financial Literacy App</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-[#00d2ff] text-lg font-medium mb-2">Challenge</h3>
                <p className="text-gray-400 text-sm">
                  Create a simple, user-friendly mobile DApp for Gen-Z users to learn & invest in crypto.
                </p>
              </div>

              <div>
                <h3 className="text-[#00d2ff] text-lg font-medium mb-2">Solution</h3>
                <p className="text-gray-400 text-sm">
                  We built a custom React Native app + custom smart contracts for tokenized rewards, backed by a smooth
                  interface for engaging, gamified user features.
                </p>
              </div>

              <div>
                <h3 className="text-[#00d2ff] text-lg font-medium mb-2">Impact</h3>
                <p className="text-gray-400 text-sm">
                  Increased transparency, 87% user satisfaction score, and a 40% increase in user engagement.
                </p>
              </div>

              <Link href="#" className="text-[#00d2ff] text-sm flex items-center">
                Read the Full Story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            <div className="bg-white/5 rounded-lg border border-gray-800 flex items-center justify-center">
              <div className="text-gray-500">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs text-gray-400 uppercase">Upcoming Events</span>
            </div>
            <Link href="/events" className="text-sm text-[#00d2ff]">
              View all events →
            </Link>
          </div>
          <h2 className="text-3xl font-bold mb-12">Join Our Web3 & AI Events</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            <div className="bg-[#111111] rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded">In-Person</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Web3 Savannah Hackathon</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Join our 3-day hackathon focused on building decentralized solutions for real-world problems in
                  Africa.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-[#00d2ff]" />
                    <span>June 10, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4 text-[#00d2ff]" />
                    <span>9:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-[#00d2ff]" />
                    <span>Nairobi, Kenya</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4 text-[#00d2ff]" />
                    <span>Limited to 100 participants</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent hover:bg-gray-800 text-white border border-gray-700">
                  Register Now
                </Button>
              </div>
            </div>

            {/* Event Card 2 */}
            <div className="bg-[#111111] rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded">Virtual</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">AI in Finance Workshop</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Learn how AI is transforming the financial sector and how blockchain technology is enabling new
                  financial models.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-[#00d2ff]" />
                    <span>July 5, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4 text-[#00d2ff]" />
                    <span>2:00 PM - 4:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-[#00d2ff]" />
                    <span>Online (Zoom)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4 text-[#00d2ff]" />
                    <span>Unlimited participants</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent hover:bg-gray-800 text-white border border-gray-700">
                  Register Now
                </Button>
              </div>
            </div>

            {/* Event Card 3 */}
            <div className="bg-[#111111] rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded">In-Person</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-medium mb-4">Blockchain Developer Bootcamp</h3>
                <p className="text-gray-400 text-sm mb-6">
                  A comprehensive 2-day bootcamp for developers looking to transition into blockchain development.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar className="h-4 w-4 text-[#00d2ff]" />
                    <span>Aug 15-16, 2025</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Clock className="h-4 w-4 text-[#00d2ff]" />
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="h-4 w-4 text-[#00d2ff]" />
                    <span>Lagos, Nigeria</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Users className="h-4 w-4 text-[#00d2ff]" />
                    <span>Limited to 50 participants</span>
                  </div>
                </div>
                <Button className="w-full bg-transparent hover:bg-gray-800 text-white border border-gray-700">
                  Register Now
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Link href="/events">
                View All Events
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs text-gray-400 uppercase">Latest Insights</span>
            </div>
            <Link href="/blog" className="text-sm text-[#00d2ff]">
              View all articles →
            </Link>
          </div>
          <h2 className="text-3xl font-bold mb-12">Web3 Savannah Blog</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Blog Card 1 */}
            <div className="bg-[#111111] rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded">New</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <span>May 10, 2025</span>
                  <span>•</span>
                  <span>5 min read</span>
                </div>
                <h3 className="text-xl font-medium mb-4">The Future of DeFi: Trends to Watch in 2025</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Explore the evolving trends in decentralized finance that are transforming the financial landscape in
                  Africa and beyond.
                </p>
                <Link href="/blog" className="text-[#00d2ff] text-sm flex items-center">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Blog Card 2 */}
            <div className="bg-[#111111] rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded">Featured</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <span>April 28, 2025</span>
                  <span>•</span>
                  <span>8 min read</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Building Scalable Smart Contracts: Best Practices</h3>
                <p className="text-gray-400 text-sm mb-6">
                  Learn the practical lessons and patterns for creating efficient, secure, and scalable smart contracts
                  for enterprise applications.
                </p>
                <Link href="/blog" className="text-[#00d2ff] text-sm flex items-center">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Blog Card 3 */}
            <div className="bg-[#111111] rounded-lg border border-gray-800 overflow-hidden">
              <div className="relative">
                <div className="h-48 bg-gray-800 flex items-center justify-center">
                  <div className="text-gray-500">
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                </div>
                <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded">Popular</div>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                  <span>April 15, 2025</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                <h3 className="text-xl font-medium mb-4">Web3 in Africa: Opportunities and Challenges</h3>
                <p className="text-gray-400 text-sm mb-6">
                  An in-depth look at how Web3 technologies are being adopted across Africa and the unique challenges
                  and opportunities they present.
                </p>
                <Link href="/blog" className="text-[#00d2ff] text-sm flex items-center">
                  Read more
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Link href="/blog">
                View All Articles
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Let's Build Something Amazing</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Ready for a consultation? Let's start a conversation today.
          </p>
          <div className="flex items-center justify-center gap-6">
            <Button asChild className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
              <Link href="/get-started">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              <Link href="/get-started">Schedule Your Insights</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <ServiceFooter />
    </div>
  )
}
