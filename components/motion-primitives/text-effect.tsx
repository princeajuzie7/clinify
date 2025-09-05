"use client"

import { motion } from "framer-motion"
import type { ReactNode, JSX } from "react"

interface TextEffectProps {
  children: ReactNode
  preset?: "fade-in-blur"
  speedSegment?: number
  as?: keyof JSX.IntrinsicElements
  className?: string
  per?: "line" | "word" | "char"
  delay?: number
}

export function TextEffect({
  children,
  preset = "fade-in-blur",
  speedSegment = 0.3,
  as: Component = "div",
  className = "",
  per = "word",
  delay = 0,
}: TextEffectProps) {
  const variants = {
    hidden: { opacity: 0, filter: "blur(12px)", y: 20 },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        duration: speedSegment,
        delay: delay,
        ease: "easeOut",
      },
    },
  }

  return (
    <motion.div initial="hidden" animate="visible" variants={variants} className={className}>
      <Component>{children}</Component>
    </motion.div>
  )
}
