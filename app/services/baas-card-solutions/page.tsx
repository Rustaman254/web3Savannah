import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { ServiceCTA } from "@/components/service-cta";
import { ServiceFooter } from "@/components/service-footer";
import { PricingCard } from "@/components/pricing-card";
import { ProcessStep } from "@/components/process-step";
import { Button } from "@/components/ui/button";
import { CheckCircle, CreditCardIcon, Database, Lock, Shield, Smartphone, BarChart } from "lucide-react";
import { useState } from "react";

// Fallback CustomCard component for preview
function CustomCard({ name, gradient, color }: { name: string; gradient: string; color: string }) {
  return (
    <div
      className={`relative h-48 w-full max-w-sm mx-auto rounded-lg overflow-hidden border border-gray-800 bg-gradient-to-r ${gradient}`}
      style={{ boxShadow: `0 0 10px ${color}40` }}
    >
      <div className="p-4 h-full flex flex-col justify-between">
        {/* Card Chip and Logo */}
        <div className="flex justify-between items-start">
          <div className="w-10 h-6 bg-gray-300 rounded-sm"></div>
          <Image src="/brand-logo.png" alt="Brand Logo" width={40} height={40} className="object-contain" />
        </div>
        {/* Card Number */}
        <div className="text-white text-sm font-mono tracking-wider">**** **** **** 1234</div>
        {/* Cardholder Name and Expiry */}
        <div className="flex justify-between items-end">
          <div>
            <p className="text-xs text-gray-300">Cardholder Name</p>
            <p className="text-sm font-semibold text-white uppercase">{name || "John Doe"}</p>
          </div>
          <div>
            <p className="text-xs text-gray-300">Expires</p>
            <p className="text-sm text-white">12/28</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Component for premium theme selection with dynamic card preview
function PremiumCardThemeSelector() {
  const themes = [
    {
      name: "Bronze",
      color: "#cd7f32",
      description: "A warm, rustic metallic finish for a timeless appeal.",
      gradient: "from-[#cd7f32] to-[#a16207]",
    },
    {
      name: "Silver",
      color: "#c0c0c0",
      description: "Sleek and modern, perfect for a professional look.",
      gradient: "from-[#c0c0c0] to-[#a3a3a3]",
    },
    {
      name: "Gold",
      color: "#ffd700",
      description: "Luxurious and bold, designed to stand out.",
      gradient: "from-[#ffd700] to-[#d4af37]",
    },
    {
      name: "Platinum",
      color: "#e5e4e2",
      description: "Elegant and understated, for premium exclusivity.",
      gradient: "from-[#e5e4e2] to-[#b0b0b0]",
    },
    {
      name: "Obsidian",
      color: "#1c2526",
      description: "Glossy dark finish with a sophisticated edge.",
      gradient: "from-[#1c2526] to-[#3b444b]",
    },
  ];

  const [selectedTheme, setSelectedTheme] = useState(themes[0]);
  const [cardholderName, setCardholderName] = useState("");

  return (
    <div className="space-y-6">
      <h3 className="text-xl font-medium text-white">Customize Your Card</h3>
      {/* Name Input */}
      <div>
        <label htmlFor="cardholder-name" className="block text-sm text-gray-400 mb-2">
          Cardholder Name
        </label>
        <input
          type="text"
          id="cardholder-name"
          placeholder="Enter your name"
          value={cardholderName}
          onChange={(e) => setCardholderName(e.target.value)}
          className="w-full max-w-xs bg-gray-800 border border-gray-700 rounded-md px-4 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-[#00d2ff]"
        />
      </div>
      {/* Card Preview */}
      <CustomCard name={cardholderName} gradient={selectedTheme.gradient} color={selectedTheme.color} />
      {/* Theme Selector */}
      <div className="grid grid-cols-3 gap-3">
        {themes.map((theme) => (
          <div
            key={theme.name}
            className={`relative p-3 rounded-lg border ${
              selectedTheme.name === theme.name ? "border-[#00d2ff]" : "border-gray-800"
            } bg-[#111111] hover:border-[#00d2ff] transition-colors cursor-pointer`}
            onClick={() => setSelectedTheme(theme)}
          >
            <div
              className={`h-12 rounded-md mb-2 bg-gradient-to-r ${theme.gradient}`}
              style={{ boxShadow: `0 0 8px ${theme.color}40` }}
            ></div>
            <h4 className="text-sm font-semibold text-white">{theme.name}</h4>
            <p className="text-xs text-gray-400 line-clamp-2">{theme.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

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
              <CustomCard name="John Doe" gradient="from-[#00d2ff] to-[#00b8e0]" color="#00d2ff" />
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
            Personalize your card with your name and choose from our exclusive Bronze, Silver, Gold, Platinum, and Obsidian
            themes to create a luxurious, branded experience.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <PremiumCardThemeSelector />

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
                <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Digital Wallet Integration</h3>
                <div className="flex items-center gap-6 mb-6">
                  <Smartphone className="h-10 w-10" />
                  <div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">
                      All cards are compatible with major digital wallets including Apple Pay, Google Pay, and Samsung
                      Pay.
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
                  <Shield className="h-6 w-6 text-purple" />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2 text-white dark:text-white">Fraud Protection</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Advanced AI-powered fraud detection systems protect your cards from unauthorized access.
                    </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-[#00D2FF]/10 p-4 rounded-lg">
                  <CreditCardIcon className="h-6 w-4 text-[#00D2FF]" />
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-2 text-white">Card Controls</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      Enable users to freeze cards, set spending limits, and control where their cards can be used.
                    </p>
                </div>
              </div>

              <div className="relative h-48 w-full rounded-md overflow-hidden mt-6">
                <Image src="/card-stats.png" alt="Card usage statistics" fill className="h-full w-full object-cover object-cover" />
            />
            </div>
          </div>
        </div>
      </section>

      {/* Integration Workflow */}
      <section className="py-12">
        <div className="container mx-auto">
<div className="flex items-center gap-2 mb-4">
          <div class="="h-4" w-6="bg-gray-700 rounded-full"></div>
            <span class="="text-sm text-gray-500 uppercase">Integration Process</span>
            </div>
            <h2 class="="text-2xl font-bold mb-6">A Simple Process to Launch Your Card Program</h3>
            </h2>

            <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
              <ProcessCard
                number="1"
                title="Connect"
                description="Integrate our API using our SDK or direct API endpoints."
              />
              <ProcessCard
                number="2"
                title="Verify"
                description="Set up KYC/AML compliance for secure user onboarding."
              />
              <ProcessCard
                number="3"
                title="Design"
                description="Customize cards with your branding and set usage rules."
              />
              <ProcessCard
                number="4"
                title="Launch"
                description="Issue cards to your users and go live with your program."
              />
            </div>
          </div>
      </section>

      {/* Pricing & SLA */}
      <section className="py-12 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Pricing & SLA</span>
          </div>
            <h2 className="text-3xl font-bold mb-6">Transparent Pricing for All Businesses</h2>
            <p className="text-gray-600 mb-12">
              Flexible plans with service-level agreements to suit startups and enterprises alike.
            </p>

            <div className="grid grid-cols-3 gap-3">
              <PricingCard
                title="Basic"
                price="$500"
                description="Ideal for startups and small businesses."
                features={[
                  "Virtual card issuance",
                  "Basic KYC tools",
                  "Up to 1,000 users",
                  "Email support",
                ]}
                ctaText="Get Started Now"
              />

            <PricingPlanCard
              title="Pro Plan"
              price="$1,500",
              description="Perfect for growing businesses."
              features=[
                "Physical & virtual cards",
                "Advanced KYC/AML compliance",
                "Up to 10,000 users",
                "Priority support",
                "Custom designs",
              ]}
              ctaText="Get Started Now"
              popular={true}
            />

            <PricingCard
              title="Enterprise Plan"
              price="Custom Pricing"
              period=""
              description="Tailored for large organizations."
              features=[
                "Unlimited cards & users",
                "Full compliance suite",
                "Dedicated account manager",
                "Custom integrations",
                "SLA guarantees",
                "On-premise deployment",
              ]}
              ctaText="Contact Us"
            />
          </div>

          <div className="text-center mt-4">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Need a custom plan? Reach out to our sales team.
            </p>
            <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>

      <ServiceCTA
        title="Ready to Transform Financial Services?"
        description="Start with a sandbox environment today and launch your card program."
        primaryCTA="Access Sandbox"
        secondaryCTA="Book a Demo"
      />

      <ServiceFooter />
    </div>
  );
}
