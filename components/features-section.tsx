"use client"

import type React from "react"

import { cn } from "@/lib/utils"
import {
  IconHeartbeat,
  IconShield,
  IconUsers,
  IconChartBar,
  IconClock,
  IconDeviceMobile,
  IconDatabase,
  IconStethoscope,
} from "@tabler/icons-react"

export function FeaturesSection() {
  const features = [
    {
      title: "Patient Management",
      description: "Comprehensive patient records, medical history, and appointment scheduling in one secure platform.",
      icon: <IconUsers />,
    },
    {
      title: "Real-time Analytics",
      description:
        "Advanced healthcare analytics and reporting to make data-driven decisions for better patient outcomes.",
      icon: <IconChartBar />,
    },
    {
      title: "HIPAA Compliant",
      description: "Enterprise-grade security ensuring full HIPAA compliance and patient data protection.",
      icon: <IconShield />,
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous system monitoring and real-time alerts for critical patient information.",
      icon: <IconClock />,
    },
    {
      title: "Mobile Access",
      description: "Access patient data and manage healthcare operations from any device, anywhere.",
      icon: <IconDeviceMobile />,
    },
    {
      title: "Clinical Support",
      description: "AI-powered clinical decision support tools to enhance diagnostic accuracy and treatment plans.",
      icon: <IconStethoscope />,
    },
    {
      title: "Data Integration",
      description: "Seamless integration with existing healthcare systems and medical devices.",
      icon: <IconDatabase />,
    },
    {
      title: "Health Monitoring",
      description: "Continuous patient health monitoring with automated alerts and notifications.",
      icon: <IconHeartbeat />,
    },
  ]

  return (
    <section id="features" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[var(--clinify-dark-blue)] mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-[var(--clinify-dark-gray)] max-w-3xl mx-auto">
            From patient records to clinical support, CLINIFY provides end-to-end healthcare management solutions
            designed for modern healthcare providers.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <Feature key={feature.title} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string
  description: string
  icon: React.ReactNode
  index: number
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-gray-200 bg-white",
        (index === 0 || index === 4) && "lg:border-l border-gray-200",
        index < 4 && "lg:border-b border-gray-200",
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-blue-50 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-blue-50 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[var(--clinify-blue)]">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-gray-200 group-hover/feature:bg-[var(--clinify-blue)] transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-[var(--clinify-dark-blue)]">
          {title}
        </span>
      </div>
      <p className="text-sm text-[var(--clinify-dark-gray)] max-w-xs relative z-10 px-10">{description}</p>
    </div>
  )
}
