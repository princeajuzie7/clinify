"use client"
import { Timeline } from "@/components/ui/timeline"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"

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
      },
    },
  },
}

export default function WhoWeServeSection() {
  const data = [
    {
      title: "Patients",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-[#333333] md:text-base">
            Providing patients with accurate, up-to-date, and complete medical records and investigation results through
            their personalized portals.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Personal Health Records Access
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Real-time Test Results
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Appointment Scheduling
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Medical History Tracking
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Secure Communication Portal
            </div>
          </div>
          
        </div>
      ),
    },
    {
      title: "Healthcare Providers",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-[#333333] md:text-base">
            Our centralized and robust system is well suited with various tools for hospitals, clinics, radiology
            centres, laboratories, and pharmacies for adequate end-to-end health management.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Hospital Management Systems
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Clinic Administration Tools
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Laboratory Information Systems
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Pharmacy Management
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Radiology Center Integration
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Private Health Insurance",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-[#333333] md:text-base">
            We provide real-time access to claims accrued and encounter details to providers; standardization of
            tariffs, and AI agent based claims validation system for instant flagging of fraudulent claims.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Real-time Claims Processing
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Tariff Standardization
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              AI-powered Fraud Detection
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Encounter Details Management
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Government Agencies",
      content: (
        <div>
          <p className="mb-8 text-sm font-normal text-[#333333] md:text-base">
            We work with government health management agencies and state contributory schemes to provide centralized
            Claims Management System to private as well as public facilities for extensive data reporting and management
            on healthcare delivery optimization; with the overall objective of achieving universal health coverage for
            all.
          </p>
          <div className="mb-8 space-y-3">
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Centralized Claims Management
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Universal Health Coverage Support
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Healthcare Delivery Optimization
            </div>
            <div className="flex items-center gap-3 text-sm text-[#333333] md:text-base">
              <div className="w-5 h-5 rounded-full bg-[#00ABE2] flex items-center justify-center flex-shrink-0">
                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              Extensive Data Reporting
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="who-we-serve" className="relative py-20 px-6">
      <div className="mx-auto max-w-[1400px]">
        <AnimatedGroup variants={transitionVariants}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[#042648] mb-6">We Cater For</h2>
            <p className="text-lg text-[#333333] max-w-3xl mx-auto">
              Our comprehensive healthcare technology platform serves diverse stakeholders across the healthcare
              ecosystem, from individual patients to large government agencies.
            </p>
          </div>
        </AnimatedGroup>

        <div className="relative w-full overflow-clip">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}
