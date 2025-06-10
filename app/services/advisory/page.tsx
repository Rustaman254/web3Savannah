import { Navbar } from "@/components/navbar"
import { ServiceHero } from "@/components/service-hero"
import { ServiceCTA } from "@/components/service-cta"
import { ServiceFooter } from "@/components/service-footer"
import { ServiceOption } from "@/components/service-option"
import { TeamMember } from "@/components/team-member"
import { Button } from "@/components/ui/button"
import { BarChart, Brain, Lightbulb, TrendingUp } from "lucide-react"

export default function AdvisoryPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      <ServiceHero
        title="Advisory Services"
        description="Strategic consulting on tokenomics, technical architecture, and market fit for blockchain ventures in Africa and beyond."
        image="/placeholder.svg?height=1080&width=1920"
      />

      {/* Advisory Services */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceOption
              title="Strategy Workshops"
              description="Guided sessions to define your blockchain strategy, market approach, and technical roadmap."
              icon={<Brain size={40} />}
            >
              <ul className="space-y-2 mt-4">
                <li className="text-gray-400 text-sm">Market opportunity assessment</li>
                <li className="text-gray-400 text-sm">Competitive analysis</li>
                <li className="text-gray-400 text-sm">Technical feasibility study</li>
                <li className="text-gray-400 text-sm">Go-to-market strategy</li>
                <li className="text-gray-400 text-sm">2-day intensive workshop</li>
              </ul>
            </ServiceOption>

            <ServiceOption
              title="Tokenomics Design"
              description="Comprehensive token economic model design for sustainable blockchain ecosystems."
              icon={<TrendingUp size={40} />}
            >
              <ul className="space-y-2 mt-4">
                <li className="text-gray-400 text-sm">Token utility mapping</li>
                <li className="text-gray-400 text-sm">Economic incentive modeling</li>
                <li className="text-gray-400 text-sm">Supply & distribution strategy</li>
                <li className="text-gray-400 text-sm">Governance framework</li>
                <li className="text-gray-400 text-sm">Simulation & stress testing</li>
              </ul>
            </ServiceOption>

            <ServiceOption
              title="Technical Due Diligence"
              description="In-depth assessment of blockchain projects, protocols, and technical implementations."
              icon={<Lightbulb size={40} />}
            >
              <ul className="space-y-2 mt-4">
                <li className="text-gray-400 text-sm">Code quality review</li>
                <li className="text-gray-400 text-sm">Architecture assessment</li>
                <li className="text-gray-400 text-sm">Security vulnerabilities scan</li>
                <li className="text-gray-400 text-sm">Scalability analysis</li>
                <li className="text-gray-400 text-sm">Operational readiness check</li>
              </ul>
            </ServiceOption>

            <ServiceOption
              title="RFP Support"
              description="Expert guidance for creating and evaluating blockchain project proposals and vendor selection."
              icon={<BarChart size={40} />}
            >
              <ul className="space-y-2 mt-4">
                <li className="text-gray-400 text-sm">Requirements gathering</li>
                <li className="text-gray-400 text-sm">RFP document preparation</li>
                <li className="text-gray-400 text-sm">Vendor evaluation framework</li>
                <li className="text-gray-400 text-sm">Proposal scoring system</li>
                <li className="text-gray-400 text-sm">Selection process management</li>
              </ul>
            </ServiceOption>
          </div>
        </div>
      </section>

      {/* Meet Our Advisors */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Team</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Meet Our Advisors</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Our team of expert consultants brings decades of experience in blockchain, economics, and technology
            strategy.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Kimutai"
              role="Blockchain Economics Lead"
              bio="Visionary leader, strategist, and co-founder, Kimutai oversees all aspects of the company’s growth, partnerships, and direction"
              imageUrl="/team/Kimutai.jpg"
            />

            <TeamMember
              name="Uche"
              role="Technical Strategy Director"
              bio="Uche leads the engineering and technology teams, ensuring delivery and innovation in product development."
              imageUrl="/team/Uchenna Igwe.jpg"
            />

            <TeamMember
              name="Obed"
              role="Techn Lead"
              bio="Obed manages technical execution, system architecture, and drives the team to deliver high-quality solutions."
              imageUrl="/team/Obed.jpg"
            />
          </div>
        </div>
      </section>

      {/* Deliverables */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">What You Get</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Deliverables</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Tangible outputs from our advisory engagements that provide long-term value.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d2ff] to-purple-500 flex items-center justify-center text-black mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 7L17 7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 12L17 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M7 17L13 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Strategy Blueprint</h3>
              <p className="text-gray-400">
                Comprehensive document outlining your blockchain strategy, roadmap, and implementation plan.
              </p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-[#00d2ff] flex items-center justify-center text-black mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 2L2 7L12 12L22 7L12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 17L12 22L22 17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M2 12L12 17L22 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Tokenomics Model</h3>
              <p className="text-gray-400">
                Economic model, distribution schedule, and governance framework for your token ecosystem.
              </p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#00d2ff] to-purple-500 flex items-center justify-center text-black mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 16V12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 8H12.01"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Technical Assessment</h3>
              <p className="text-gray-400">
                Detailed audit report of your blockchain implementation with recommendations for improvement.
              </p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-[#00d2ff] flex items-center justify-center text-black mb-6">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14 2V8H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 13H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M16 17H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10 9H9H8"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium mb-4">Workshop Materials</h3>
              <p className="text-gray-400">
                All presentations, worksheets, and resources used in strategic planning sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Form */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Get Started</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Book a Strategy Session</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Schedule a free 30-minute consultation to discuss your project needs.
          </p>

          <div className="max-w-3xl mx-auto bg-[#111111] p-8 rounded-xl border border-gray-800">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    placeholder="Your company"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interest
                  </label>
                  <select
                    id="service"
                    className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="strategy">Strategy Workshops</option>
                    <option value="tokenomics">Tokenomics Design</option>
                    <option value="due-diligence">Technical Due Diligence</option>
                    <option value="rfp">RFP Support</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="description" className="block text-sm font-medium mb-2">
                  Project Description
                </label>
                <textarea
                  id="description"
                  rows={4}
                  placeholder="Tell us about your project and goals"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent"
                ></textarea>
              </div>

              <Button className="w-full bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                Book Strategy Session
              </Button>
            </form>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready for Expert Blockchain Guidance?"
        description="Let our advisory team help you navigate the complex world of blockchain technology and strategy."
        primaryCTA="Schedule a Consultation"
        secondaryCTA="Learn More About Our Services"
      />

      <ServiceFooter />
    </div>
  )
}
