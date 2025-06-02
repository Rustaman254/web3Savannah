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
        image="data:image/png;base64,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"
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
                  src="/images.png"
                  alt="Scroll Kenya Launch Event"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48 md:h-64">
                <Image
                  src="/0f0984e7b4aab9e5f231c97bfc70bd630ab81ef2.jpg"
                  alt="Workshop session"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="relative h-48 md:h-64 col-span-2">
                <Image
                  src="/5603fbb093b358c11a29bae8743a040f67754c8b.jpg"
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
