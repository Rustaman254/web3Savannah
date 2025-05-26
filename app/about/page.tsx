// app/about/page.js
import { Navbar } from "@/components/navbar";
import { ServiceHero } from "@/components/service-hero";
import { ServiceCTA } from "@/components/service-cta";
import { ServiceFooter } from "@/components/service-footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Users, Globe, Target } from "lucide-react";

// Sample team data (replace with actual team member data)
const teamMembers = [
  {
    name: "Jane Doe",
    role: "Founder & CEO",
    image: "/team/jane-doe.jpg",
    bio: "Blockchain visionary with 10+ years in tech, leading Web3 initiatives across Africa.",
  },
  {
    name: "John Smith",
    role: "Lead Developer",
    image: "/team/john-smith.jpg",
    bio: "Expert in Solidity and Rust, building secure and scalable smart contracts.",
  },
  {
    name: "Aisha Khan",
    role: "Product Manager",
    image: "/team/aisha-khan.jpg",
    bio: "Drives product innovation with a focus on user-centric blockchain solutions.",
  },
  {
    name: "Michael Okoro",
    role: "Community Lead",
    image: "/team/michael-okoro.jpg",
    bio: "Fosters Web3 adoption through community engagement and education.",
  },
];

// Sample values data
const values = [
  {
    title: "Innovation",
    description: "We push the boundaries of blockchain technology to create cutting-edge solutions.",
    icon: <Target size={40} className="text-[#00d2ff]" />,
  },
  {
    title: "Community",
    description: "We empower African communities through education and accessible technology.",
    icon: <Users size={40} className="text-purple-500" />,
  },
  {
    title: "Impact",
    description: "We focus on real-world solutions that drive financial inclusion and growth.",
    icon: <Globe size={40} className="text-[#00d2ff]" />,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <ServiceHero
        title="About Web3 Savannah"
        description="We are a passionate team dedicated to revolutionizing Africa’s tech landscape through blockchain innovation and community empowerment."
        image="/Image_fx (12).jpg"
      />

      {/* Our Mission */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Mission</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Building a Web3 Future for Africa</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Web3 Savannah is committed to harnessing blockchain technology to drive financial inclusion, empower communities, and foster innovation across Africa. We believe in creating scalable, secure, and accessible solutions that address real-world challenges.
          </p>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Team</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Meet the Visionaries</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Our diverse team of blockchain experts, developers, and community leaders is dedicated to driving Web3 adoption and innovation.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#111111] rounded-lg border border-gray-800 p-6 text-center"
              >
                <Image
                  src={member.image || "/team/placeholder.jpg"}
                  alt={member.name}
                  width={150}
                  height={150}
                  className="rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-medium mb-2">{member.name}</h3>
                <p className="text-[#00d2ff] mb-4">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Values</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">What Drives Us</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Our core values guide everything we do, from development to community engagement.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-[#111111] p-8 rounded-lg border border-gray-800"
              >
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-medium mb-4">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Impact</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Making a Difference</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            We’ve empowered communities and businesses across Africa with innovative blockchain solutions.
          </p>

          <div className="bg-[#111111] rounded-xl border border-gray-800 overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4">Empowering Financial Inclusion</h3>
                <p className="text-gray-400 mb-8">
                  Our solutions have enabled over 50,000 users to access decentralized financial services, bridging the gap for unbanked populations.
                </p>
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div>
                    <p className="text-[#00d2ff] font-bold text-xl mb-1">50,000+</p>
                    <p className="text-gray-400 text-sm">Users Empowered</p>
                  </div>
                  <div>
                    <p className="text-[#00d2ff] font-bold text-xl mb-1">10+</p>
                    <p className="text-gray-400 text-sm">Projects Delivered</p>
                  </div>
                  <div>
                    <p className="text-[#00d2ff] font-bold text-xl mb-1">5</p>
                    <p className="text-gray-400 text-sm">Countries Impacted</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Button
                    className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2"
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-700 text-white hover:bg-gray-800"
                  >
                    View Case Studies
                  </Button>
                </div>
              </div>
              <div className="relative h-64 md:h-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-[#1a1a1a] to-transparent z-10 md:hidden"></div>
                <Image
                  src="/impact-image.jpg"
                  alt="Financial Inclusion Impact"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Join Our Mission"
        description="Partner with us to drive Web3 innovation and impact in Africa."
        primaryCTA="Get Involved"
        primaryCTALink="/get-started"
        secondaryCTA="Learn More"
        secondaryCTALink="/about"
      />

      <ServiceFooter />
    </div>
  );
}
