"use client"

import { useState } from "react"
import { ClinifyLogo } from "./clinify-logo"
import { Button } from "./ui/button"

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "FAQs", href: "#faqs" },
    { name: "Contact", href: "#contact" },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 w-full px-3 sm:px-4 pt-3 sm:pt-4">
      <nav className="max-w-7xl mx-auto bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl px-4 sm:px-6 py-3 sm:py-4 hover:bg-white/20 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex-shrink-0 z-10">
            <ClinifyLogo />
          </div>

          <div className="hidden lg:flex items-center space-x-10">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-[var(--clinify-dark-gray)] hover:text-[var(--clinify-blue)] font-medium text-sm relative group transition-all duration-300 ease-out"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--clinify-blue)] group-hover:w-full transition-all duration-300 ease-out"></span>
              </button>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <Button className="bg-[var(--clinify-blue)] hover:bg-[var(--clinify-dark-blue)] text-white px-6 py-2.5 rounded-xl font-medium text-sm transition-all duration-300 ease-out hover:scale-105 hover:shadow-lg">
                Sign In
              </Button>
            </div>

            <div className="lg:hidden">
              <Button className="bg-[var(--clinify-blue)] hover:bg-[var(--clinify-dark-blue)] text-white px-4 py-2 rounded-xl font-medium text-xs transition-all duration-300 ease-out">
                Sign In
              </Button>
            </div>

            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="sm"
                className="text-[var(--clinify-dark-gray)] hover:text-[var(--clinify-blue)] hover:bg-[var(--clinify-blue)]/10 rounded-xl transition-all duration-200"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${isMobileMenuOpen ? "rotate-90" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </Button>
            </div>
          </div>
        </div>

        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-out ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="pt-4 pb-2 space-y-3 border-t border-white/20 mt-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left text-[var(--clinify-dark-gray)] hover:text-[var(--clinify-blue)] font-medium text-sm py-2 px-2 rounded-lg hover:bg-[var(--clinify-blue)]/5 transition-all duration-200"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  )
}
