"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

interface LandingPageProps {
  isLoading: boolean;
}

const services = [
  {
    title: "Savannah Devs",
    description: "Expert blockchain development services tailored to your needs.",
    href: "/services/savannah-devs",
    icon: (
      <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
        <path d="M12 6V18M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  // {
  //   title: "Scroll Savannah",
  //   description: "Building the future of Ethereum scalability in Africa.",
  //   href: "/services/scroll-savannah",
  //   icon: (
  //     <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  //       <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
  //       <path d="M7 14L12 9L17 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  //     </svg>
  //   ),
  // },
  {
    title: "Advisory",
    description: "Strategic consulting on tokenomics, technical architecture, and market fit.",
    href: "/services/advisory",
    icon: (
      <svg className="w-8 h-8 text-cyan-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "BAAS & Card Solutions",
    description: "Empower your platform with embedded financial services.",
    href: "/services/baas-card-solutions",
    icon: (
      <svg className="w-8 h-8 text-purple-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="12" fill="currentColor" fillOpacity="0.1" />
        <rect x="6" y="8" width="12" height="8" rx="1" stroke="currentColor" strokeWidth="2" />
        <path d="M6 11H18" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

export function Navbar({ isLoading }: LandingPageProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [timeoutId, setTimeoutId] = useState(null);

  const [nav, setNav] = useState(false)

  const handleLoadingComplete = () => {
    setNav(true)
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle mouse enter to open dropdown
  const handleMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId); // Clear any pending close
    setIsServicesOpen(true);
  };

  // Handle mouse leave to close dropdown with timeout
  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsServicesOpen(false);
    }, 300); // 300ms delay before closing
    setTimeoutId(id);
  };

  // Update the date to reflect the current date
  const today = new Date().toLocaleDateString("en-US", {
    month: "2-digit",
    day: "2-digit",
    year: "numeric",
  });

  return (
    <>
      <header
        className={cn(
          `fixed top-0 left-0 right-0 transition-all duration-300`,
          !isLoading ? "z-30" : "z-50",
          isScrolled
            ? "mx-4 mt-4 bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md py-2 rounded-full border border-gray-200 dark:border-gray-800 shadow-lg"
            : "bg-transparent py-4",
        )}
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="relative w-32 h-10">
                <Image src="/landscapelogo.webp" alt="Web3 Savannah Logo" fill className="object-contain" />
              </div>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-sm text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center gap-1 text-sm text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              >
                Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-white dark:bg-[#111111] border border-gray-200 dark:border-gray-800 rounded-xl shadow-xl p-6 grid grid-cols-2 gap-6 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {services.map((service, index) => (
                    <Link
                      key={index}
                      href={service.href}
                      className="flex gap-4 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                    >
                      <div className="flex-shrink-0">{service.icon}</div>
                      <div>
                        <h3 className="font-medium text-gray-900 dark:text-white">{service.title}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{service.description}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/events"
              className="text-sm text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Events
            </Link>
            <Link
              href="/blog"
              className="text-sm text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-sm text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
            >
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <div className="text-xs text-gray-500 dark:text-gray-400 hidden md:block">Today: {today}</div>
            <ThemeToggle />
            <Button asChild className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md text-sm px-4 py-2">
              <Link href="/get-started">Contact Us</Link>
            </Button>
            <button
              className="md:hidden text-gray-800 dark:text-white"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white dark:bg-black pt-16 pb-6 px-4 md:hidden overflow-y-auto">
{/*           <div className="flex items-center gap-2 mb-8">
            <div className="relative w-32 h-10">
              <Image src="/landscapelogo.png" alt="Web3 Savannah Logo" fill className="object-contain" />
            </div>
          </div> */}
          <nav className="flex flex-col space-y-6 mt-8">
            <Link
              href="/"
              className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <div className="space-y-4">
              <h3 className="text-lg font-medium text-gray-800 dark:text-white">Services</h3>
              <div className="ml-4 space-y-4">
                {services.map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="flex items-center gap-3 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <div className="flex-shrink-0">{service.icon}</div>
                    <span>{service.title}</span>
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/events"
              className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="/blog"
              className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              href="/about"
              className="text-lg font-medium text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
{/*             <div className="flex items-center gap-4">
              <ThemeToggle />
              <span className="text-gray-500 dark:text-gray-400">Toggle theme</span>
            </div> */}
{/*             <Button
              asChild
              className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md text-lg w-full py-3 mt-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <Link href="/get-started">Contact Us</Link>
            </Button> */}
          </nav>
        </div>
      )}

      {/* Spacer for fixed header */}
      <div className="h-20"></div>
    </>
  );
}
