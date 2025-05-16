import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { ServiceHero } from "@/components/service-hero"
import { ServiceCTA } from "@/components/service-cta"
import { ServiceFooter } from "@/components/service-footer"
import { Button } from "@/components/ui/button"

export default function ScrollSavannahPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <ServiceHero
        title="Scroll Savannah"
        description="Building the future of Ethereum scalability in Africa through our strategic partnership with Scroll, bringing Layer 2 solutions to emerging markets."
        image="/1_52j_-YffoPNBR_-ji_8rlQ (1).jpg"
      />

      {/* Scroll Partnership */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Scroll Partnership</span>
          </div>
          <h2 className="text-3xl font-bold mb-8">Advancing zk-EVM Technology in Africa</h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <p className="text-gray-400 mb-6">
                Scroll Savannah is a strategic initiative bringing Ethereum's Layer 2 scaling solutions to African
                developers and businesses through our exclusive partnership with Scroll.
              </p>
              <p className="text-gray-400 mb-8">
                As Scroll's official partner in East Africa, we provide specialized development services, educational
                resources, and technical support for projects building on this revolutionary zk-EVM platform.
              </p>

              <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 mb-8">
                <h3 className="text-xl font-medium mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00d2ff] flex items-center justify-center text-black font-bold text-xs">
                      ✓
                    </div>
                    <span>Up to 98% lower transaction fees compared to Ethereum mainnet</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00d2ff] flex items-center justify-center text-black font-bold text-xs">
                      ✓
                    </div>
                    <span>100% compatible with existing Ethereum tooling and smart contracts</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00d2ff] flex items-center justify-center text-black font-bold text-xs">
                      ✓
                    </div>
                    <span>Enhanced security through zero-knowledge proofs</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#00d2ff] flex items-center justify-center text-black font-bold text-xs">
                      ✓
                    </div>
                    <span>Faster confirmation times and improved user experience</span>
                  </li>
                </ul>
              </div>

              <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                Learn More About Scroll
              </Button>
            </div>

            <div>
              <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 mb-8">
                <div className="relative h-64 mb-6">
                  <Image
                    src="/1_52j_-YffoPNBR_-ji_8rlQ (1).jpg"
                    alt="Zero Knowledge Proof visualization"
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-medium mb-4">How zk-Rollups Work</h3>
                <p className="text-gray-400">
                  Multiple transactions are batched together and verified using zero-knowledge proofs before being
                  submitted to Ethereum mainnet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Offerings */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Offerings</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Comprehensive Scroll Development Services</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            From starter kits to custom enterprise solutions, we provide everything you need to build and scale on
            Scroll.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">MVP Development Kit</h3>
              <p className="text-gray-400 mb-6">
                Jump-start your project with our ready-to-use templates and components specifically optimized for
                Scroll.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Pre-built smart contracts</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Frontend integration templates</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Developer documentation</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Testing framework</span>
                </li>
              </ul>
              <div className="text-[#00d2ff] text-sm font-medium hover:underline cursor-pointer">Learn More</div>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Bridge Solutions</h3>
              <p className="text-gray-400 mb-6">
                Seamlessly connect your application across Ethereum mainnet and Scroll with our custom bridge
                implementations.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>Token bridges</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>NFT bridges</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>Cross-chain messaging</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>Transaction batching</span>
                </li>
              </ul>
              <div className="text-purple-500 text-sm font-medium hover:underline cursor-pointer">Learn More</div>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Gas Optimization</h3>
              <p className="text-gray-400 mb-6">
                Maximize cost savings with our specialized gas optimization services for Scroll deployments.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Smart contract optimization</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Transaction fee reduction</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Batching strategies</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-[#00d2ff]"></div>
                  <span>Performance analysis</span>
                </li>
              </ul>
              <div className="text-[#00d2ff] text-sm font-medium hover:underline cursor-pointer">Learn More</div>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <h3 className="text-xl font-medium mb-4">Custom Solutions</h3>
              <p className="text-gray-400 mb-6">
                End-to-end development of bespoke applications leveraging Scroll's unique capabilities.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>Custom dApp development</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>Enterprise integrations</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>Compliance solutions</span>
                </li>
                <li className="flex items-center gap-2 text-gray-300">
                  <div className="flex-shrink-0 w-1 h-1 rounded-full bg-purple-500"></div>
                  <span>Performance optimization</span>
                </li>
              </ul>
              <div className="text-purple-500 text-sm font-medium hover:underline cursor-pointer">Learn More</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Event */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Featured Event</span>
          </div>
          <h2 className="text-3xl font-bold mb-8">Scroll Kenya Launch</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Highlights from our successful launch event introducing Scroll technology to the Kenyan developer community.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Bringing Layer 2 to East Africa</h3>
              <p className="text-gray-400 mb-8">
                In partnership with Scroll, we hosted East Africa's first dedicated Layer 2 hackathon and workshop
                series in Nairobi, bringing together over 200 developers, entrepreneurs, and blockchain enthusiasts.
              </p>

              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 text-center">
                  <p className="text-[#00d2ff] text-3xl font-bold mb-2">200+</p>
                  <p className="text-gray-400 text-sm">Attendees</p>
                </div>
                <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 text-center">
                  <p className="text-[#00d2ff] text-3xl font-bold mb-2">15</p>
                  <p className="text-gray-400 text-sm">Projects Launched</p>
                </div>
                <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 text-center">
                  <p className="text-[#00d2ff] text-3xl font-bold mb-2">3</p>
                  <p className="text-gray-400 text-sm">Days of Workshops</p>
                </div>
                <div className="bg-[#111111] p-6 rounded-lg border border-gray-800 text-center">
                  <p className="text-[#00d2ff] text-3xl font-bold mb-2">$25K</p>
                  <p className="text-gray-400 text-sm">in Prizes Awarded</p>
                </div>
              </div>

              <p className="text-gray-400 mb-8">
                The event featured technical workshops, panel discussions with industry leaders, and a 48-hour hackathon
                that resulted in 15 new projects being built on Scroll.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-48 md:h-64">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Scroll Kenya Launch Event"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48 md:h-64">
                <Image
                  src="/placeholder.svg?height=400&width=400"
                  alt="Workshop session"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48 md:h-64 col-span-2">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Hackathon participants"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to Build on Scroll?"
        description="Join the growing ecosystem of innovative projects leveraging Scroll's zk-rollup technology with our expert guidance and support."
        primaryCTA="Start Your Scroll Integration"
        secondaryCTA="Schedule a Consultation"
      />

      <ServiceFooter />
    </div>
  )
}
