"use client"

import React, { useState } from 'react';
import { CheckCircle } from 'lucide-react';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  serviceInterest: string;
  message: string;
  privacyPolicy: boolean;
}

const GetStartedPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    serviceInterest: '',
    message: '',
    privacyPolicy: false,
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({ ...prev, [name]: (e.target as HTMLInputElement).checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
    setError(null);
    setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch('http://localhost:5000/api/v1/contacts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to submit form');
      }

      setSuccess(true);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        serviceInterest: '',
        message: '',
        privacyPolicy: false,
      });
    } catch (err: any) {
      setError(err.message || 'An error occurred while submitting the form');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden min-h-[80vh] flex items-center">
        <AnimatedStarsBackground />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a] z-0"></div>
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Web3 Journey <span className="text-[#00d2ff]">Today</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Whether you're ready to build, need consultation, or just want to explore possibilities, we're here to
              guide you through each step of your Web3 & AI journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
                Schedule a Call
                <PhoneCall className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="border-gray-700 text-white hover:bg-gray-800">
                Request a Proposal
                <FileText className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Our Process</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">How We Work With You</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Our streamlined process is designed to understand your needs, deliver exceptional results, and provide
            continuous support throughout your journey.
          </p>

          <div className="space-y-12 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
            <ProcessStep
              number="01"
              title="Discovery Call"
              description="We begin with a comprehensive discussion to understand your vision, requirements, and objectives for your Web3 project."
            />

            <ProcessStep
              number="02"
              title="Strategy & Proposal"
              description="Based on your needs, we develop a tailored strategy and detailed proposal including timeline, deliverables, and investment."
            />

            <ProcessStep
              number="03"
              title="Development & Launch"
              description="Our expert team brings your vision to life with regular updates, transparent communication, and timely delivery."
            />
          </div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">Contact Options</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Reach Out in the Way That Works for You</h2>
          <p className="text-gray-400 max-w-3xl mb-12">
            Choose your preferred method to connect with our team. We're here to answer questions and guide you through
            your Web3 journey.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#00d2ff] transition-all duration-300 group">
              <div className="mb-6 text-[#00d2ff] transition-all duration-300">
                <PhoneCall size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white group-hover:text-[#00d2ff] transition-all duration-300">
                Schedule a Call
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Book a 30-minute consultation call with one of our Web3 experts to discuss your project needs.
              </p>
              <Button className="w-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-[#00d2ff] transition-all duration-300">
                Book a Call
              </Button>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#00d2ff] transition-all duration-300 group">
              <div className="mb-6 text-purple-500 transition-all duration-300">
                <Video size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white group-hover:text-[#00d2ff] transition-all duration-300">
                Virtual Meeting
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Schedule a video conference with our team to dive deeper into your project requirements.
              </p>
              <Button className="w-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-[#00d2ff] transition-all duration-300">
                Schedule Meeting
              </Button>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#00d2ff] transition-all duration-300 group">
              <div className="mb-6 text-[#00d2ff] transition-all duration-300">
                <MessageCircle size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white group-hover:text-[#00d2ff] transition-all duration-300">
                Live Chat
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Connect with our support team instantly through our live chat for quick questions and guidance.
              </p>
              <Button className="w-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-[#00d2ff] transition-all duration-300">
                Start Chat
              </Button>
            </div>

            <div className="bg-white dark:bg-[#111111] p-8 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-[#00d2ff] transition-all duration-300 group">
              <div className="mb-6 text-purple-500 transition-all duration-300">
                <Calendar size={40} />
              </div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white group-hover:text-[#00d2ff] transition-all duration-300">
                Visit Our Office
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                Book an in-person meeting at our Nairobi office to discuss your project face-to-face.
              </p>
              <Button className="w-full bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-700 group-hover:border-[#00d2ff] transition-all duration-300">
                Book In-Person
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16">
      <div className="container mx-auto">
        <div className="flex items-center gap-2 mb-4">
          <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
          <span className="text-xs text-gray-400 uppercase">Get In Touch</span>
        </div>
        <h2 className="text-3xl font-bold mb-12">Send Us a Message</h2>
        <p className="text-gray-400 max-w-3xl mb-12">
          Fill out this form and our team will get back to you within 24 hours to help with your Web3 project.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-white dark:bg-[#111111] p-8 rounded-xl border border-gray-200 dark:border-gray-800">
            {success && (
              <div className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-md">
                Form submitted successfully! We'll get back to you soon.
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 rounded-md">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white"
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Company (Optional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[# Maldon] focus:border-transparent text-gray-900 dark:text-white"
                />
              </div>

              <div>
                <label
                  htmlFor="serviceInterest"
                  className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300"
                >
                  Service Interest
                </label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  value={formData.serviceInterest}
                  onChange={handleChange}
                  required
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white"
                >
                  <option value="">Select a service</option>
                  <option value="blockchain-development">Blockchain Development</option>
                  <option value="scroll-integration">Scroll Integration</option>
                  <option value="advisory">Advisory Services</option>
                  <option value="baas-cards">BAAS & Card Solutions</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2 text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00d2ff] focus:border-transparent text-gray-900 dark:text-white"
                  placeholder="Tell us about your project and requirements..."
                ></textarea>
              </div>

              <div className="flex items-start gap-2">
                <input
                  type="checkbox"
                  id="privacyPolicy"
                  name="privacyPolicy"
                  checked={formData.privacyPolicy}
                  onChange={handleChange}
                  required
                  className="mt-1 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded focus:ring-[#00d2ff]"
                />
                <label htmlFor="privacyPolicy" className="text-sm text-gray-600 dark:text-gray-400">
                  I agree to the{" "}
                  <Link href="#" className="text-[#00d2ff] hover:underline">
                    Privacy Policy
                  </Link>{" "}
                  and consent to being contacted about my inquiry.
                </label>
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Submitting...' : 'Send Message'}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Why Work With Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">African Expertise</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Deep understanding of the unique challenges and opportunities in African markets.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Global Standards</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      World-class development practices and solutions that meet international standards.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">End-to-End Solutions</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      From strategy to development to maintenance, we handle the entire lifecycle of your project.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-[#00d2ff] mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">Certified Professionals</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      Our team includes certified blockchain developers and experienced consultants.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-[#111111] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
              <h3 className="text-xl font-medium mb-4 text-gray-900 dark:text-white">Contact Information</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff] flex items-center justify-center text-black mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M20 10C20 14.4183 16.4183 18 12 18C7.58172 18 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z"
                        fill="currentColor"
                      />
                      <path
                        d="M12 18V22M12 22H8M12 22H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Nairobi, Kenya</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff] flex items-center justify-center text-black mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="4" y="4" width="16" height="16" rx="2" fill="currentColor" />
                      <path
                        d="M4 8L12 12L20 8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">hello@web3savannah.com</div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00d2ff] flex items-center justify-center text-black mt-0.5">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5 4H9L11 9L8.5 10.5C9.57096 12.6715 11.3285 14.429 13.5 15.5L15 13L20 15V19C20 19.5304 19.7893 20.0391 19.4142 20.4142C19.0391 20.7893 18.5304 21 18 21C14.0993 20.763 10.4202 19.1065 7.65683 16.3432C4.8935 13.5798 3.23705 9.90074 3 6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">+254 (0) 712 345 678</div>
                </li>
              </ul>

              <div className="mt-6 flex gap-4">
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </Link>
                <Link href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-white">
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="py-16 bg-[#0c0c0c]">
        <div className="container mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-1 w-6 bg-gray-700 rounded-full"></div>
            <span className="text-xs text-gray-400 uppercase">FAQ</span>
          </div>
          <h2 className="text-3xl font-bold mb-12">Frequently Asked Questions</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#111111] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                  What types of projects do you work on?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We specialize in blockchain development, DeFi applications, NFT platforms, Layer 2 solutions,
                  financial services integration, and Web3 advisory services for businesses of all sizes.
                </p>
              </div>

              <div className="bg-white dark:bg-[#111111] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                  How long does a typical project take?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Project timelines vary based on complexity and scope. A simple MVP can be completed in 4-6 weeks,
                  while more complex enterprise solutions may take 3-6 months. We'll provide a detailed timeline during
                  our initial consultation.
                </p>
              </div>

              <div className="bg-white dark:bg-[#111111] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                  Do you offer support after project completion?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Yes, we offer ongoing maintenance, updates, and support packages for all our projects. We're committed
                  to the long-term success of your solution.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="bg-white dark:bg-[#111111] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">What are your payment terms?</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We typically work on a milestone-based payment schedule, with an initial deposit followed by payments
                  at key project milestones. For ongoing services, we offer monthly retainer packages.
                </p>
              </div>

              <div className="bg-white dark:bg-[#111111] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                  Can you work with existing projects or codebases?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Absolutely. We have extensive experience taking over existing projects, improving them, and adding new
                  features. We'll conduct a thorough code review before providing recommendations.
                </p>
              </div>

              <div className="bg-white dark:bg-[#111111] p-6 rounded-lg border border-gray-200 dark:border-gray-800">
                <h3 className="text-lg font-medium mb-3 text-gray-900 dark:text-white">
                  Do you serve clients outside of Africa?
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Yes, while we're based in Africa and have deep expertise in African markets, we work with clients
                  globally. Our team collaborates across time zones to ensure seamless communication.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">
              Still have questions? We're here to help. Contact us directly for more information.
            </p>
            <Button asChild className="bg-[#00d2ff] hover:bg-[#00b8e0] text-black rounded-md px-6 py-2">
              <Link href="#">
                Contact Support
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ServiceFooter />
    </div>
  )
}
      
export default GetStartedPage;
