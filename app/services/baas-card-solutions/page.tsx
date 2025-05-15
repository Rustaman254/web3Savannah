import { Navbar } from "@/components/navbar"
import { ServiceCTA } from "@/components/service-cta"
import { ServiceFooter } from "@/components/service-footer"
import { CreditCard } from "@/components/credit-card"
import { PricingCard } from "@/components/pricing-card"
import { ProcessStep } from "@/components/process-step"
import { Button } from "@/components/ui/button"
import { CheckCircle, CreditCardIcon, Database, Lock, Shield } from "lucide-react"

export default function BaasCardSolutionsPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section with Card */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: `url(/placeholder.svg?height=1080&width=1920)` }}
        ></div>
        <div className="container mx-auto relative z-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Banking-as-a-Service & Card Solutions</h1>
              <p className="text-xl text-gray-300 mb-8">
                Empower your platform with embedded financial services. Issue branded cards, manage accounts, and handle
                payments seamlessly.
              </p>
              <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                Learn More About Card Issuance
              </Button>
            </div>
            <div className="flex justify-center">
              <CreditCard />
            </div>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
              <span className="text-xs text-gray-400 uppercase">Core Features</span>
            </div>
            <h2 className="text-3xl font-bold">
              Everything you need to build a comprehensive financial experience for your users.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="mb-6 text-[#00d2ff]">
                <CreditCardIcon size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4">Virtual & Physical Cards</h3>
              <p className="text-gray-400 text-sm">
                Issue white-labeled virtual and physical cards with your branding.
              </p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="mb-6 text-purple-500">
                <Database size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4">Multi-Currency Accounts</h3>
              <p className="text-gray-400 text-sm">Support for local and international currencies with real-time FX.</p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="mb-6 text-[#00d2ff]">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4">Compliance & KYC</h3>
              <p className="text-gray-400 text-sm">Built-in compliance tools and KYC verification for all users.</p>
            </div>

            <div className="bg-[#111111] p-8 rounded-lg border border-gray-800">
              <div className="mb-6 text-purple-500">
                <Lock size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4">Instant Settlements</h3>
              <p className="text-gray-400 text-sm">Fast, secure settlement for all transactions on the platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Showcase */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Virtual & Physical Cards</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Custom-Branded Payment Cards</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Issue virtual and physical payment cards with your brand's design. Our cards support global payments, ATM
            withdrawals, and can be integrated with major mobile wallets.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Instant Issuance</h4>
                    <p className="text-gray-400 text-sm">
                      Create virtual cards instantly for immediate use by your customers
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Custom Designs</h4>
                    <p className="text-gray-400 text-sm">
                      Fully customizable card designs that reflect your brand identity
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Spending Controls</h4>
                    <p className="text-gray-400 text-sm">
                      Set transaction limits, merchant category restrictions, and geographic controls
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Real-time Notifications</h4>
                    <p className="text-gray-400 text-sm">
                      Keep users informed with instant transaction alerts and balance updates
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium">Wallet Integration</h4>
                    <p className="text-gray-400 text-sm">
                      Seamless integration with Apple Pay, Google Pay, and other digital wallets
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-[#111111] p-8 rounded-xl border border-gray-800">
              <h3 className="text-xl font-medium mb-6">Card Management Dashboard</h3>
              <p className="text-gray-400 mb-6">
                Our intuitive dashboard gives you complete control over your card program. Monitor transactions, manage
                user accounts, and analyze spending patterns in real-time.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-[#00d2ff] font-medium mb-2">User Management</h4>
                  <p className="text-gray-400 text-sm">Easily onboard and manage cardholders</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-[#00d2ff] font-medium mb-2">Transaction Monitoring</h4>
                  <p className="text-gray-400 text-sm">Track all card activity in real-time</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-[#00d2ff] font-medium mb-2">Fraud Prevention</h4>
                  <p className="text-gray-400 text-sm">Advanced security features to protect users</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg">
                  <h4 className="text-[#00d2ff] font-medium mb-2">Analytics</h4>
                  <p className="text-gray-400 text-sm">Detailed reports and spending insights</p>
                </div>
              </div>
              <Button className="w-full bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md">
                Request Dashboard Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Workflow */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Integration Workflow</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">
            A simple four-step process to launch your financial services offering.
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep
              number="01"
              title="Integration"
              description="Connect our API to your platform using our SDK or direct API calls."
            />
            <ProcessStep
              number="02"
              title="Compliance"
              description="Set up your compliance workflow for user verification and KYC/AML."
            />
            <ProcessStep
              number="03"
              title="Customization"
              description="Design your card experience, define spending rules, and set limits."
            />
            <ProcessStep
              number="04"
              title="Launch"
              description="Go live with your cards program and start issuing to customers."
            />
          </div>
        </div>
      </section>

      {/* Pricing & SLA */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-8">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Pricing & SLA</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">
            Transparent pricing with service level guarantees for businesses of all sizes.
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <PricingCard
              title="Starter"
              price="$499"
              description="Perfect for startups and small businesses"
              features={[
                { name: "Virtual cards" },
                { name: "Basic KYC integration" },
                { name: "Up to 1,000 users" },
                { name: "Email support" },
              ]}
              ctaText="Get Started"
            />

            <PricingCard
              title="Growth"
              price="$1,499"
              description="Ideal for growing companies"
              features={[
                { name: "Virtual & physical cards" },
                { name: "Advanced KYC/AML tools" },
                { name: "Up to 10,000 users" },
                { name: "Priority support" },
                { name: "Custom card designs" },
              ]}
              ctaText="Get Started"
              popular={true}
            />

            <PricingCard
              title="Enterprise"
              price="Custom"
              period=""
              description="For large organizations with complex needs"
              features={[
                { name: "Unlimited cards & users" },
                { name: "Full compliance suite" },
                { name: "Dedicated account manager" },
                { name: "Custom integration support" },
                { name: "SLA guarantees" },
                { name: "On-premise options" },
              ]}
              ctaText="Get Started"
            />
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-400 mb-4">Need a custom solution? Contact our sales team.</p>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to Revolutionize Your Financial Services?"
        description="Get started with a sandbox environment today. Our team will guide you through the integration process."
        primaryCTA="Request Sandbox Access"
        secondaryCTA="Schedule a Demo"
      />

      <ServiceFooter />
    </div>
  )
}
