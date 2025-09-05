"use client"

import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { useState, useEffect } from "react"
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

function CounterWidget({ target, label, suffix = "" }: { target: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = target / steps
    const stepDuration = duration / steps

    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, stepDuration)

    return () => clearInterval(timer)
  }, [target])

  return (
    <div className="text-center">
      <div className="text-4xl font-bold text-[#00ABE2] mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-[#042648] font-medium text-sm">{label}</div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section id="about" className="relative py-20 px-6">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedGroup variants={transitionVariants}>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 border border-white/20 mb-6">
              <div className="w-2 h-2 bg-[#00ABE2] rounded-full animate-pulse"></div>
              <span className="text-[#042648] font-medium text-sm">About Clinify</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-[#042648] mb-4 leading-tight">
              Africa's Healthcare
              <br />
              <span className="text-[#00ABE2]">Revolution</span>
            </h2>
            <p className="text-[#333333] text-lg max-w-2xl mx-auto">
              Bridging Health Insurance and Healthcare Providers with cutting-edge technology and global expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="lg:col-span-2 rounded-3xl p-8 border border-white/20 hover:bg-white/5 transition-all duration-500 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#00ABE2]/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-6 h-6 text-[#00ABE2]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#042648] mb-3">Our Mission</h3>
                  <p className="text-[#333333] leading-relaxed">
                    Centralizing healthcare delivery across Africa through strategic positioning between insurers and
                    providers.
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl p-6 border border-white/20 hover:bg-white/5 transition-all duration-500 hover:scale-105">
              <CounterWidget target={100} label="Interoperability" suffix="%" />
            </div>

            <div className="rounded-3xl p-6 border border-white/20 hover:bg-white/5 transition-all duration-500 hover:scale-105">
              <CounterWidget target={247} label="System Uptime" />
            </div>

            <div className="rounded-3xl p-6 border border-white/20 hover:bg-white/5 transition-all duration-500 group">
              <div className="w-10 h-10 bg-[#042648]/20 rounded-xl flex items-center justify-center mb-4 group-hover:rotate-12 transition-transform duration-300">
                <svg className="w-5 h-5 text-[#042648]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                  />
                </svg>
              </div>
              <h4 className="font-semibold text-[#042648] mb-2">Global Standards</h4>
              <p className="text-[#333333] text-sm">WHO ICD-10/11, SNOMED CT compliance</p>
            </div>

            <div className="rounded-3xl p-6 border border-white/20 hover:bg-white/5 transition-all duration-500">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[#042648] font-medium text-sm">Live Status</span>
              </div>
              <div className="text-2xl font-bold text-[#00ABE2] mb-1">Active</div>
              <p className="text-[#333333] text-xs">All systems operational</p>
            </div>

            <div className="lg:col-span-2 bg-white rounded-3xl p-8 border border-white/20 hover:bg-white/95 transition-all duration-500 shadow-sm">
              <h3 className="text-2xl font-semibold text-[#042648] mb-3">Ready to Transform Healthcare?</h3>
              <p className="text-[#333333] mb-6">Join Africa's leading healthcare technology revolution.</p>

              <div className="flex flex-col sm:flex-row gap-4 items-start">
                <button className="bg-[#00ABE2] hover:bg-[#042648] text-white px-6 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 inline-flex items-center gap-2">
                  Get Started
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="#" className="hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/google-play-badge.png"
                      alt="Get it on Google Play"
                      width={180}
                      height={54}
                      className="h-14 w-auto"
                    />
                  </a>
                  <a href="#" className="hover:scale-105 transition-transform duration-300">
                    <Image
                      src="/images/app-store-badge.png"
                      alt="Download on the App Store"
                      width={180}
                      height={54}
                      className="w-auto h-[47px]"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
