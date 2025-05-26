import Image from "next/image";
import { useState } from "react"; // Added for theme selection state
import { Navbar } from "@/components/navbar";
import { ServiceCTA } from "@/components/service-cta";
import { ServiceFooter } from "@/components/service-footer";
import { CreditCard } from "@/components/credit-card";
import { PricingCard } from "@/components/pricing-card";
import { ProcessStep } from "@/components/process-step";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCardIcon, Database, Lock, Shield, Smartphone, BarChart } from "lucide-react";

// Updated CardThemeSelector component
function CardThemeSelector({ onSelectTheme, selectedTheme }) {
  const themes = [
    {
      name: "Bronze",
      color: "#cd7f32",
      gradient: "from-[#cd7f32] to-[#a16207]",
    },
    {
      name: "Silver",
      color: "#c0c0c0",
      gradient: "from-[#c0c0c0] to-[#a3a3a3]",
    },
    {
      name: "Gold",
      color: "#ffd700",
      gradient: "from-[#ffd700] to-[#d4af37]",
    },
    {
      name: "Platinum",
      color: "#e5e4e2",
      gradient: "from-[#e5e4e2] to-[#b0b0b0]",
    },
    {
      name: "Obsidian",
      color: "#1c2526",
      gradient: "from-[#1c2526] to-[#3b444b]",
    },
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-white">Select a Premium Theme</h3>
      <div className="grid grid-cols-2 gap-3">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className={`p-3 rounded-md border ${
              selectedTheme.name === theme.name ? "border-[#00d2ff]" : "border-gray-800"
            } bg-[#111111] hover:border-[#00d2ff] transition-colors cursor-pointer`}
            onClick={() => onSelectTheme(theme)}
          >
            <div
              className={`h-12 rounded-sm mb-2 bg-gradient-to-r ${theme.gradient}`}
              style={{ boxShadow: `0 0 8px ${theme.color}40` }}
            ></div>
            <h4 className="text-sm font-semibold text-white">{theme.name}</h4>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <h4 className="text-lg font-medium text-white mb-2">Selected Theme: {selectedTheme.name}</h4>
        <CreditCard theme={selectedTheme} />
      </div>
    </div>
  );
}

export default function BaasCardSolutionsPage() {
  const [selectedTheme, setSelectedTheme] = useState({
    name: "Bronze",
    color: "#cd7f32",
    gradient: "from-[#cd7f32] to-[#a16207]",
  });

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
              <CreditCard theme={selectedTheme} />
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
            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6 text-[#00d2ff]">
                <CreditCardIcon size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Virtual & Physical Cards</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Issue white-labeled virtual and physical cards with your branding.
              </p>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6 text-purple-500">
                <Database size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Multi-Currency Accounts</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Support for local and international currencies with real-time FX.
              </p>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6 text-[#00d2ff]">
                <Shield size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Compliance & KYC</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Built-in compliance tools and KYC verification for all users.
              </p>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800">
              <div className="mb-6 text-purple-500">
                <Lock size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Instant Settlements</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Fast, secure settlement for all transactions on the platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Card Customization */}
      <section className="py-16">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Premium Card Themes</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Craft Luxurious Cards with Premium Metallic Themes</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Elevate your brand with our exclusive Bronze, Silver, Gold, Platinum, and Obsidian themes. Each design is
            crafted to exude luxury and sophistication, ensuring your cards resonate with your audience.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <CardThemeSelector onSelectTheme={setSelectedTheme} selectedTheme={selectedTheme} />

            <div className="space-y-8">
              <div className="bg-white dark:bg-[#111111] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Brand Integration</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Your brand is unique, and your cards should be too. Our customization options allow you to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Upload your logo and brand assets for seamless integration
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Choose from premium metallic themes or create a custom color palette
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Select card materials including metal, recycled plastic, or biodegradable options
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                    <div>
                      <p className="text-gray-700 dark:text-gray-300 text-sm">
                        Add custom messaging and personalization for each cardholder
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-[#111111] p-6 rounded-xl border border-gray-200 dark:border-gray-800">
                <h3 className="text-xl font-medium mb-3 text-gray-900 dark:text-white">Digital Wallet Integration</h3>
                <div className="flex items-center gap-6 mb-6">
                  <Smartphone className="h-10 w-10 text-[#00d2ff]" />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      All cards are compatible with major digital wallets including Apple Pay, Google Pay, and Samsung
                      Pay
                    </p>
                  </div>
                </div>
                <div className="relative h-48 w-full rounded-lg overflow-hidden">
                  <Image src="/mobile-wallet.png" alt="Mobile wallet with card" fill className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard & Analytics */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Management & Analytics</span>
          </div>
          <h2 className="text-3xl font-bold mb-6">Powerful Card Management Dashboard</h2>
          <p className="text-gray-400 mb-8 max-w-3xl">
            Our intuitive dashboard gives you complete control over your card program. Monitor transactions, manage user
            accounts, and analyze spending patterns in real-time.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative h-96 rounded-xl overflow-hidden border border-gray-800">
              <Image src="/card-dashboard.png" alt="Card management dashboard" fill className="object-cover" />
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-[#00d2ff]/10 p-3 rounded-lg">
                  <BarChart className="h-6 w-6 text-[#00d2ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Real-time Analytics</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Track spending patterns, monitor transaction volumes, and identify trends with our powerful
                    analytics tools.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-500/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-500" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Fraud Prevention</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Advanced AI-powered fraud detection systems protect your users and reduce financial risk.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-[#00d2ff]/10 p-3 rounded-lg">
                  <CreditCardIcon className="h-6 w-6 text-[#00d2ff]" />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">Card Controls</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enable users to freeze cards, set spending limits, and control where their cards can be used.
                  </p>
                </div>
              </div>

              <div className="relative h-24 rounded-lg overflow-hidden mt-8">
                <Image src="/card-usage.png" alt="Card usage analytics" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Workflow */}
      <section className="py-16">
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
      <section className="py-16 bg-[#0c0c0c]">
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
  );
}
