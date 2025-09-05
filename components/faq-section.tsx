"use client"

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { AnimatedGroup } from "@/components/motion-primitives/animated-group"
import { TextEffect } from "@/components/motion-primitives/text-effect"

const faqData = [
  {
    question: "What is CLINIFY and how does it work?",
    answer:
      "CLINIFY is Africa's first interoperable healthcare platform that centralizes and streamlines healthcare systems across the continent. It connects hospitals, clinics, and healthcare providers through a unified digital ecosystem, enabling seamless data sharing, automated processes, and improved patient care coordination.",
  },
  {
    question: "How does CLINIFY ensure data security and patient privacy?",
    answer:
      "We implement enterprise-grade security measures including end-to-end encryption, HIPAA compliance, multi-factor authentication, and regular security audits. All patient data is stored in secure, geographically distributed data centers with strict access controls and audit trails.",
  },
  {
    question: "Can CLINIFY integrate with existing hospital management systems?",
    answer:
      "Yes, CLINIFY is designed for seamless integration with existing HMS, EHR, and other healthcare software. Our API-first architecture and interoperability standards ensure smooth data migration and real-time synchronization with your current systems.",
  },
  {
    question: "What types of healthcare facilities can use CLINIFY?",
    answer:
      "CLINIFY serves all healthcare facilities including hospitals, clinics, diagnostic centers, pharmacies, laboratories, and telemedicine providers. Our scalable platform adapts to organizations of any size, from small clinics to large hospital networks.",
  },
  {
    question: "How does CLINIFY improve operational efficiency?",
    answer:
      "CLINIFY automates routine tasks like appointment scheduling, billing, inventory management, and reporting. It reduces paperwork, eliminates data silos, provides real-time analytics, and streamlines workflows, allowing healthcare professionals to focus more on patient care.",
  },
  {
    question: "What support and training does CLINIFY provide?",
    answer:
      "We offer comprehensive onboarding, 24/7 technical support, regular training sessions, and dedicated account management. Our team provides ongoing assistance to ensure smooth implementation and optimal platform utilization for your healthcare facility.",
  },
]

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(8px)",
      y: 20,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.2,
        duration: 0.8,
      },
    },
  },
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <section id="faqs" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00ABE2]/5 to-transparent" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00ABE2]/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#042648]/10 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="mx-auto max-w-4xl px-6 relative z-10">
        <div className="text-center mb-16">
          <AnimatedGroup variants={transitionVariants}>
            <div className="inline-flex items-center gap-2 bg-[#00ABE2]/10 backdrop-blur-sm border border-[#00ABE2]/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-[#00ABE2] rounded-full animate-pulse" />
              <span className="text-[#042648] text-sm font-medium">Frequently Asked Questions</span>
            </div>
          </AnimatedGroup>

          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            as="h2"
            className="text-4xl md:text-5xl lg:text-6xl font-semibold text-[#042648] mb-6"
          >
            Got Questions? We've Got Answers
          </TextEffect>

          <TextEffect
            preset="fade-in-blur"
            speedSegment={0.3}
            delay={0.3}
            as="p"
            className="text-lg text-[#333333] max-w-2xl mx-auto"
          >
            Everything you need to know about CLINIFY's healthcare platform and how it can transform your medical
            facility.
          </TextEffect>
        </div>

        <AnimatedGroup
          variants={{
            container: {
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.5,
                },
              },
            },
            ...transitionVariants,
          }}
          className="space-y-2"
        >
          {faqData.map((faq, index) => {
            const isOpen = openItems.includes(index)

            return (
              <div
                key={index}
                className="group bg-white/40 backdrop-blur-sm border border-white/30 rounded-xl overflow-hidden hover:bg-white/60 hover:border-[#00ABE2]/30 transition-all duration-300"
              >
                <button
                  onClick={() => toggleItem(index)}
                  className="w-full p-6 text-left flex items-center justify-between transition-colors duration-300"
                >
                  <h3 className="text-lg font-semibold text-[#042648] pr-4 group-hover:text-[#00ABE2] transition-colors duration-300">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`transform transition-all duration-500 ${isOpen ? "rotate-180 scale-110" : "rotate-0"}`}
                    >
                      {isOpen ? (
                        <Minus className="w-5 h-5 text-[#00ABE2]" />
                      ) : (
                        <Plus className="w-5 h-5 text-[#042648] group-hover:text-[#00ABE2] transition-colors duration-300" />
                      )}
                    </div>
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-6">
                    <div className="h-px bg-gradient-to-r from-[#00ABE2]/20 via-[#00ABE2]/40 to-[#00ABE2]/20 mb-4" />
                    <p className="text-[#333333] leading-relaxed animate-fade-in">{faq.answer}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </AnimatedGroup>

        {/* Call to Action */}
        <AnimatedGroup variants={transitionVariants}>
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-[#00ABE2]/10 via-[#042648]/10 to-[#00ABE2]/10 backdrop-blur-sm border border-white/30 rounded-xl p-8">
              <h3 className="text-2xl font-semibold text-[#042648] mb-4">Still have questions?</h3>
              <p className="text-[#333333] mb-6">
                Our healthcare technology experts are here to help you understand how CLINIFY can transform your
                facility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-[#00ABE2] hover:bg-[#042648] text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                  Contact Support
                </button>
                <button className="border border-[#00ABE2] text-[#042648] hover:bg-[#00ABE2] hover:text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105">
                  Schedule a Demo
                </button>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  )
}
