import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { ServiceFooter } from "@/components/service-footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";

// Sample blog post data (in a real app, this would be fetched dynamically based on slug)
const blogPost = {
  title: "The Future of DeFi: Trends to Watch in 2025",
  date: "May 10, 2025",
  readTime: "5 min read",
  imageUrl: "/Image_fx (3) (1).jpg",
  category: "DeFi",
  slug: "future-of-defi-trends-2025",
  content: `
    <p class="mb-6 text-gray-300">Decentralized Finance (DeFi) is reshaping the financial landscape, particularly in regions like Africa where traditional banking infrastructure is limited. As we move into 2025, several trends are poised to drive the next wave of DeFi innovation.</p>
    <h2 class="text-2xl font-semibold mb-4 text-white">1. Rise of Localized DeFi Platforms</h2>
    <p class="mb-6 text-gray-300">In Africa, DeFi platforms are increasingly tailored to local needs, supporting mobile money integrations and low-cost transactions to serve unbanked populations.</p>
    <h2 class="text-2xl font-semibold mb-4 text-white">2. Integration with Traditional Finance</h2>
    <p class="mb-6 text-gray-300">DeFi is no longer operating in isolation. Partnerships between DeFi protocols and traditional financial institutions are creating hybrid models that blend the best of both worlds.</p>
    <p class="mb-6 text-gray-300">These trends highlight the transformative potential of DeFi, not only in Africa but globally. Stay tuned for more insights as the ecosystem evolves.</p>
  `,
};

export default function BlogPostPage({ params }) {
  // In a real app, fetch the blog post data using params.slug
  // For this example, we're using the static blogPost object
  const { title, date, readTime, imageUrl, category, content } = blogPost;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Blog Post Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 hover:border-[#00d2ff] transition-colors"
            >
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Blog Post Header */}
          <div className="max-w-4xl mx-auto">
            <div className="relative mb-8 rounded-xl overflow-hidden">
              <Image
                src={imageUrl || "/placeholder.svg"}
                alt={title}
                width={1200}
                height={600}
                className="w-full h-[400px] object-cover transition-transform duration-500"
              />
              <div className="absolute top-4 left-4 bg-[#00d2ff] text-black text-xs px-3 py-1 rounded">
                {category}
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-gray-400 mb-4">
              <span>{date}</span>
              <span>•</span>
              <span>{readTime}</span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>

            {/* Blog Post Content */}
            <div
              className="prose prose-invert prose-lg max-w-none text-gray-300"
              dangerouslySetInnerHTML={{ __html: content }}
            />

            {/* Call to Action */}
            <div className="mt-12 border-t border-gray-800 pt-8">
              <h3 className="text-xl font-semibold mb-4">Enjoyed this article?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                  Share this Article
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 hover:border-[#00d2ff] transition-colors"
                >
                  <Link href="/blog">Read More Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-[#0c0c0c] border-t border-gray-800">
        <div className="container mx-auto px-4">
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
  );
}
