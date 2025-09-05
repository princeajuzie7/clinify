"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "./ui/button"
import { AnimatedGroup } from "./motion-primitives/animated-group"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--clinify-dark-blue)] mb-6">Get in Touch</h2>
            <p className="text-lg text-[var(--clinify-dark-gray)] max-w-2xl mx-auto">
              Ready to transform your healthcare management? Contact us today and let's discuss how CLINIFY can help
              your organization.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[var(--clinify-blue)] transition-all duration-300 outline-none bg-white placeholder-transparent"
                    placeholder="Enter your full name"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-[var(--clinify-dark-blue)] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[var(--clinify-blue)]"
                  >
                    Full Name
                  </label>
                </div>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[var(--clinify-blue)] transition-all duration-300 outline-none bg-white placeholder-transparent"
                    placeholder="Enter your email address"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-[var(--clinify-dark-blue)] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[var(--clinify-blue)]"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="peer w-full px-4 py-4 border-2 border-gray-200 rounded-2xl focus:border-[var(--clinify-blue)] transition-all duration-300 outline-none resize-none bg-white placeholder-transparent"
                  placeholder="Tell us about your healthcare management needs..."
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 -top-2.5 bg-white px-2 text-sm font-medium text-[var(--clinify-dark-blue)] transition-all duration-300 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-4 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-[var(--clinify-blue)]"
                >
                  Message
                </label>
              </div>

              <div className="text-center">
                <Button
                  type="submit"
                  className="bg-[var(--clinify-blue)] hover:bg-[var(--clinify-dark-blue)] text-white px-12 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105 text-lg"
                >
                  Send Message
                </Button>
              </div>
            </form>

            <div className="mt-16 text-center">
