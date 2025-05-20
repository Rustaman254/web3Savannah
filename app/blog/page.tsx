import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { ServiceFooter } from "@/components/service-footer"
import { HeroSection } from "@/components/hero-section"
import { BlogCard } from "@/components/blog-card"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"

const featuredPosts = [
  {
    title: "The Future of DeFi: Trends to Watch in 2025",
    excerpt:
      "Explore the evolving trends in decentralized finance that are transforming the financial landscape in Africa and beyond.",
    date: "May 10, 2025",
    readTime: "5 min read",
    imageUrl: "/Image_fx (3) (1).jpg",
    category: "DeFi",
    slug: "future-of-defi-trends-2025",
    featured: true,
  },
  {
    title: "Building Scalable Smart Contracts: Best Practices",
    excerpt:
      "Learn the practical lessons and patterns for creating efficient, secure, and scalable smart contracts for enterprise applications.",
    date: "April 28, 2025",
    readTime: "8 min read",
    imageUrl: "/Image_fx (2) (2).jpg",
    category: "Development",
    slug: "scalable-smart-contracts-best-practices",
    featured: true,
  },
]

const recentPosts = [
  {
    title: "Web3 in Africa: Opportunities and Challenges",
    excerpt:
      "An in-depth look at how Web3 technologies are being adopted across Africa and the unique challenges and opportunities they present.",
    date: "April 15, 2025",
    readTime: "6 min read",
    imageUrl: "/Image_fx (2) (1).jpg",
    category: "Industry",
    slug: "web3-africa-opportunities-challenges",
  },
  {
    title: "Zero-Knowledge Proofs Explained",
    excerpt:
      "A comprehensive guide to understanding zero-knowledge proofs and their applications in blockchain technology.",
    date: "April 5, 2025",
    readTime: "10 min read",
    imageUrl: "/1_52j_-YffoPNBR_-ji_8rlQ (1).jpg",
    category: "Technology",
    slug: "zero-knowledge-proofs-explained",
  },
  {
    title: "NFTs Beyond Art: Real-World Applications",
    excerpt:
      "Discover how NFTs are being used beyond digital art to solve real-world problems in supply chain, identity, and more.",
    date: "March 22, 2025",
    readTime: "7 min read",
    imageUrl: "/nft-market-resurgence.jpg",
    category: "NFTs",
    slug: "nfts-beyond-art-applications",
  },
  {
    title: "The Rise of African DAOs",
    excerpt:
      "How decentralized autonomous organizations are empowering communities across Africa to collaborate and govern collectively.",
    date: "March 15, 2025",
    readTime: "6 min read",
    imageUrl: "/1701175661download.png",
    category: "Governance",
    slug: "rise-of-african-daos",
  },
  {
    title: "Blockchain for Financial Inclusion",
    excerpt:
      "How blockchain technology is helping to bank the unbanked and provide financial services to underserved communities in Africa.",
    date: "March 8, 2025",
    readTime: "9 min read",
    imageUrl: "/Image_fx (4).jpg",
    category: "Impact",
    slug: "blockchain-financial-inclusion",
  },
  {
    title: "Interoperability: Connecting Blockchain Ecosystems",
    excerpt:
      "An exploration of cross-chain technologies and protocols that are building bridges between different blockchain networks.",
    date: "February 28, 2025",
    readTime: "8 min read",
    imageUrl: "/images.jpeg",
    category: "Technology",
    slug: "interoperability-connecting-blockchains",
  },
]

const categories = ["All", "DeFi", "NFTs", "Development", "Technology", "Governance", "Industry", "Impact"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <HeroSection
        title="Web3 Savannah Blog"
        description="Insights, tutorials, and thought leadership on blockchain, Web3, and emerging technologies in Africa and beyond."
        logoUrl="/logo-large.png"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">Latest Articles</Button>
          <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
            Subscribe
          </Button>
        </div>
      </HeroSection>

      {/* Search and Categories */}
      <section className="py-8 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-1/2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-gray-800 border border-gray-700 rounded-md pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
              />
            </div>
            <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0 hide-scrollbar">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  className={
                    index === 0
                      ? "bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md whitespace-nowrap"
                      : "border-gray-700 text-white hover:bg-gray-800 whitespace-nowrap"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Featured Articles</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredPosts.map((post, index) => (
              <div key={index} className="bg-[#111111] rounded-xl border border-gray-800 overflow-hidden group">
                <div className="grid md:grid-cols-5 h-full">
                  <div className="md:col-span-2 h-48 md:h-full relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#111111] z-10 md:hidden"></div>
                    <img
                      src={post.imageUrl || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-purple-600 text-xs px-2 py-1 rounded z-20">
                      {post.category}
                    </div>
                    <div className="absolute top-3 left-3 bg-[#00d2ff] text-black text-xs px-2 py-1 rounded z-20">
                      Featured
                    </div>
                  </div>
                  <div className="md:col-span-3 p-6 flex flex-col justify-center">
                    <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-4 group-hover:text-[#00d2ff] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-6">{post.excerpt}</p>
                    <Button
                      asChild
                      className="mt-auto bg-transparent hover:bg-gray-800 text-white border border-gray-700 hover:border-[#00d2ff] transition-colors"
                    >
                      <Link href={`/blog/${post.slug}`}>Read Article</Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs text-gray-400 uppercase">Recent Articles</span>
            </div>
            <Button variant="link" className="text-[#00d2ff]">
              View All
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recentPosts.map((post, index) => (
              <BlogCard key={index} {...post} />
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter to receive the latest insights, tutorials, and updates on blockchain and Web3
              technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
              />
              <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2 whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>

      <ServiceFooter />
    </div>
  )
}
