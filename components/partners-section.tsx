"use client"

import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import Image from "next/image"

const transitionVariants = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  },
  item: {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  },
}

const partners = [
  {
    name: "Wema Bank",
    logo: "/images/partners-logos.webp",
    description: "Leading financial services partner",
  },
  {
    name: "LASHMA",
    logo: "/images/partners-logos.webp",
    description: "Lagos State Health Management Agency",
  },
  {
    name: "Ogun State Health Insurance",
    logo: "/images/partners-logos.webp",
    description: "State health insurance coverage",
  },
  {
    name: "OGSHIA",
    logo: "/images/partners-logos.webp",
    description: "Ogun State Health Insurance Agency",
  },
  {
    name: "Leadway Health",
    logo: "/images/partners-logos.webp",
    description: "Comprehensive health insurance solutions",
  },
]

export default function PartnersSection() {
  return (
    <section id="partners" className="relative py-20 px-6">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedGroup variants={transitionVariants}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 mb-6">
              <div className="w-2 h-2 bg-[#00ABE2] rounded-full animate-pulse"></div>
              <span className="text-[#042648] font-medium text-sm">Trusted Partnerships</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#042648] mb-4 leading-tight">
              Our
              <br />
              <span className="text-[#00ABE2]">Partners</span>
            </h2>
            <p className="text-[#333333] text-lg max-w-2xl mx-auto">
              Collaborating with leading healthcare organizations and financial institutions across Africa to deliver
              exceptional healthcare solutions.
            </p>
          </div>

          <div className="mb-16">
            <div className="bg-white rounded-3xl p-8 border border-white/20 shadow-sm">
              <div className="flex justify-center mb-8">
                <Image
                  src="/images/partners-logos.webp"
                  alt="Our trusted partners including Wema Bank, LASHMA, Ogun State Health Insurance, OGSHIA, and Leadway Health"
                  width={800}
                  height={200}
                  className="w-full max-w-4xl h-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-3 rounded-3xl p-8 border border-white/20 hover:bg-white/5 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00ABE2]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-[#00ABE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#042648] mb-3">Strategic Partnerships</h3>
                  <p className="text-[#333333] leading-relaxed">
                    Working hand-in-hand with government agencies, financial institutions, and healthcare organizations
                    to create a unified healthcare ecosystem that serves millions across Africa.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-6 border border-white/20 hover:bg-white/5 transition-all duration-500 group">
              <div className="w-10 h-10 bg-[#042648]/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#042648]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-[#042648] mb-2">Government Agencies</h4>
              <p className="text-[#333333] text-sm">LASHMA, OGSHIA, and state health management agencies</p>
            </div>

            <div className="rounded-3xl p-6 border border-white/20 hover:bg-white/5 transition-all duration-500 group">
              <div className="w-10 h-10 bg-[#00ABE2]/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#00ABE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-[#042648] mb-2">Financial Partners</h4>
              <p className="text-[#333333] text-sm">Wema Bank and leading financial institutions</p>
            </div>

            <div className="rounded-3xl p-6 border border-white/20 hover:bg-white/5 transition-all duration-500 group">
              <div className="w-10 h-10 bg-[#042648]/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#042648]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-[#042648] mb-2">Health Insurance</h4>
              <p className="text-[#333333] text-sm">Leadway Health and comprehensive coverage providers</p>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
