"use client"

import { motion } from "framer-motion"
import type { ReactNode } from "react"

interface AnimatedGroupProps {
  children: ReactNode
  variants?: any
  className?: string
}

export function AnimatedGroup({ children, variants, className = "" }: AnimatedGroupProps) {
  return (
    <motion.div initial="hidden" animate="visible" variants={variants} className={className}>
      {children}
    </motion.div>
  )
}
