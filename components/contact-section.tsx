"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { AnimatedGroup } from "./motion-primitives/animated-group";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedGroup>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-[var(--clinify-dark-blue)] mb-6">
              Get in Touch
            </h2>
            <p className="text-lg text-[var(--clinify-dark-gray)] max-w-2xl mx-auto">
              Ready to transform your healthcare management? Contact us today
              and let's discuss how CLINIFY can help your organization.
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
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-[var(--clinify-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--clinify-dark-blue)] mb-2">
                    Email Us
                  </h3>
                  <p className="text-[var(--clinify-dark-gray)]">
                    info@clinify.com
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-[var(--clinify-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--clinify-dark-blue)] mb-2">
                    Call Us
                  </h3>
                  <p className="text-[var(--clinify-dark-gray)]">
                    +234 (0) 123 456 7890
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-[var(--clinify-blue)] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-[var(--clinify-dark-blue)] mb-2">
                    Visit Us
                  </h3>
                  <p className="text-[var(--clinify-dark-gray)]">
                    Lagos, Nigeria
                  </p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedGroup>
      </div>
    </section>
  );
}

export default ContactSection;
