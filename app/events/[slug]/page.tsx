// app/events/[slug]/page.tsx
import { Navbar } from "@/components/navbar";
import { ServiceFooter } from "@/components/service-footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

// Sample event data (replace with API/CMS fetch in a real app)
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
    type: "in-person",
    slug: "web3-savannah-hackathon-2025",
    details: `
      <p class="mb-6 text-gray-300">The Web3 Savannah Hackathon is a premier event bringing together developers, designers, and entrepreneurs to create innovative blockchain solutions. Over three days, participants will collaborate on projects addressing challenges in finance, supply chain, and social impact.</p>
      <h2 class="text-2xl font-semibold mb-4 text-white">Event Highlights</h2>
      <ul class="list-disc list-inside mb-6 text-gray-300">
        <li>Workshops on Solidity, DeFi, and NFT development</li>
        <li>Mentorship from industry leaders</li>
        <li>$50,000+ in prizes for top projects</li>
        <li>Networking with Web3 investors and startups</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-4 text-white">Agenda</h2>
      <p class="mb-6 text-gray-300">Day 1: Kickoff and workshops<br>Day 2: Hacking and mentorship<br>Day 3: Presentations and awards</p>
    `,
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
    type: "virtual",
    slug: "ai-finance-workshop-2025",
    details: `
      <p class="mb-6 text-gray-300">This virtual workshop explores the intersection of AI and blockchain in finance. Learn from experts about predictive analytics, smart contract automation, and decentralized lending platforms.</p>
      <h2 class="text-2xl font-semibold mb-4 text-white">What You'll Learn</h2>
      <ul class="list-disc list-inside mb-6 text-gray-300">
        <li>AI-driven financial modeling</li>
        <li>Blockchain for secure transactions</li>
        <li>Case studies of AI in DeFi</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-4 text-white">Agenda</h2>
      <p class="mb-6 text-gray-300">2:00 PM: Introduction to AI in Finance<br>2:30 PM: Blockchain Integration<br>3:00 PM: Case Studies<br>3:30 PM: Q&A</p>
    `,
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
    type: "in-person",
    slug: "blockchain-developer-bootcamp-2025",
    details: `
      <p class="mb-6 text-gray-300">This intensive bootcamp is designed for developers eager to master blockchain technology. Gain hands-on experience with Solidity and smart contract development.</p>
      <h2 class="text-2xl font-semibold mb-4 text-white">Key Topics</h2>
      <ul class="list-disc list-inside mb-6 text-gray-300">
        <li>Solidity programming</li>
        <li>Smart contract security</li>
        <li>Decentralized application (DApp) development</li>
        <li>Testing and deployment</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-4 text-white">Agenda</h2>
      <p class="mb-6 text-gray-300">Day 1: Solidity Basics and DApp Intro<br>Day 2: Advanced Smart Contracts and Deployment</p>
    `,
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
    type: "in-person",
    slug: "defi-summit-africa-2025",
    details: `
      <p class="mb-6 text-gray-300">The DeFi Summit Africa is the premier event for exploring decentralized finance. Join industry leaders to discuss trends, challenges, and opportunities in DeFi.</p>
      <h2 class="text-2xl font-semibold mb-4 text-white">Highlights</h2>
      <ul class="list-disc list-inside mb-6 text-gray-300">
        <li>Keynote speeches from DeFi pioneers</li>
        <li>Panel discussions on African DeFi adoption</li>
        <li>Networking with investors and startups</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-4 text-white">Agenda</h2>
      <p class="mb-6 text-gray-300">Day 1: Keynotes and Panels<br>Day 2: Workshops and Networking</p>
    `,
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
    type: "hybrid",
    slug: "web3-social-impact-2025",
    details: `
      <p class="mb-6 text-gray-300">This hybrid event showcases how Web3 can address social challenges like financial inclusion and transparency in Africa.</p>
      <h2 class="text-2xl font-semibold mb-4 text-white">Key Topics</h2>
      <ul class="list-disc list-inside mb-6 text-gray-300">
        <li>Blockchain for transparent aid distribution</li>
        <li>NFTs for social good</li>
        <li>Decentralized governance models</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-4 text-white">Agenda</h2>
      <p class="mb-6 text-gray-300">11:00 AM: Case Studies<br>12:00 PM: Panel Discussion<br>1:00 PM: Networking</p>
    `,
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
    imageUrl: "/Image_fx.png",
    type: "in-person",
    slug: "nft-art-exhibition-2025",
    details: `
      <p class="mb-6 text-gray-300">Celebrate African creativity through NFTs. This exhibition features digital art, live minting, and talks from artists and blockchain experts.</p>
      <h2 class="text-2xl font-semibold mb-4 text-white">Highlights</h2>
      <ul class="list-disc list-inside mb-6 text-gray-300">
        <li>Live NFT minting sessions</li>
        <li>Artist talks and Q&A</li>
        <li>Virtual gallery for online attendees</li>
      </ul>
      <h2 class="text-2xl font-semibold mb-4 text-white">Agenda</h2>
      <p class="mb-6 text-gray-300">Day 1: Exhibition Opening<br>Day 2: Artist Talks<br>Day 3: NFT Marketplace Demo</p>
    `,
  },
];

export default async function EventDetailsPage({ params }: { params: { slug: string } }) {
  // Find the event by slug
  const event = events.find((event) => event.slug === params.slug);

  // Handle case where event is not found
  if (!event) {
    notFound();
  }

  const { title, description, date, time, location, capacity, imageUrl, type, details } = event;

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Event Details */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {/* Back Button */}
          <div className="mb-8">
            <Button
              asChild
              variant="outline"
              className="border-gray-700 text-white hover:bg-gray-800 hover:border-[#00d2ff] transition-colors"
            >
              <Link href="/events" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Events
              </Link>
            </Button>
          </div>

          {/* Event Header */}
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
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4 text-[#00d2ff]" />
                <span>
                  {date} • {time}
                </span>
              </div>
              <div className="flex items-center gap-2">
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
                <span>{location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-[#00d2ff]" />
                <span>{capacity}</span>
              </div>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-6">{title}</h1>
            <p className="text-gray-300 mb-8">{description}</p>

            {/* Event Details Content */}
            <div
              className="prose prose-invert prose-lg max-w-none text-gray-300 mb-12"
              dangerouslySetInnerHTML={{ __html: details }}
            />

            {/* Registration Form */}
            <div className="bg-[#111111] rounded-lg border border-gray-800 p-8 mb-12">
              <h2 className="text-2xl font-semibold mb-6">Register for the Event</h2>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff]"
                  />
                </div>
                {type !== "virtual" && (
                  <div>
                    <label htmlFor="location" className="block text-sm text-gray-400 mb-2">
                      Preferred Attendance
                    </label>
                    <select
                      id="location"
                      className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff]"
                    >
                      <option value="">Select attendance type</option>
                      {type === "in-person" && <option value="in-person">In-Person</option>}
                      {type === "hybrid" && (
                        <>
                          <option value="in-person">In-Person</option>
                          <option value="virtual">Virtual</option>
                        </>
                      )}
                    </select>
                  </div>
                )}
                <Button
                  type="submit"
                  className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2"
                >
                  Register Now
                </Button>
              </form>
            </div>

            {/* Call to Action */}
            <div className="border-t border-gray-800 pt-8">
              <h3 className="text-xl font-semibold mb-4">Interested in this event?</h3>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                  Share Event
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="border-gray-700 text-white hover:bg-gray-800 hover:border-[#00d2ff] transition-colors"
                >
                  <Link href="/events">Explore More Events</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-[#0c0c0c] border-t border-gray-800">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Connect with other blockchain enthusiasts, developers, and industry leaders. Stay updated on upcoming events
            and opportunities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
              Join Discord
            </Button>
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
  );
}

export async function generateStaticParams() {
  return events.map((event) => ({
    slug: event.slug,
  }));
}
