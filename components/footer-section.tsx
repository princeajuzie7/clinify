import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export default function FooterSection() {
  return (
    <footer className="relative py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Newsletter Section */}
        <div className="bg-[#042648] rounded-3xl p-8 md:p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Content */}
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Subscribe our newsletter</h2>
              <p className="text-white/80 text-lg leading-relaxed">
                Subscribe to our newsletter and be the first to receive insights, updates, and expert tips on optimizing
                your financial management.
              </p>
            </div>

            {/* Right Content - Email Form */}
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-[#00ABE2] focus:border-transparent transition-all duration-200"
                />
                <button className="px-8 py-3 bg-[#00ABE2] hover:bg-[#00ABE2]/90 text-white font-semibold rounded-xl transition-all duration-200 hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
              <p className="text-white/60 text-sm">
                By subscribing you agree to our{" "}
                <Link href="#" className="text-[#00ABE2] hover:underline">
                  Privacy Policy
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#00ABE2] rounded-full flex items-center justify-center">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#00ABE2] rounded-full"></div>
                  </div>
                </div>
                <span className="text-2xl font-bold text-[#042648]">CLINIFY</span>
              </div>

              <p className="text-[#042648]/80 text-lg leading-relaxed max-w-md">
                A seamless way to digitally centralize health records and make healthcare services easily accessible in
                Africa.
              </p>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-[#042648]/70">
                  <Mail className="w-5 h-5 text-[#00ABE2]" />
                  <span>contact@myclinify.com</span>
                </div>
                <div className="flex items-center gap-3 text-[#042648]/70">
                  <Phone className="w-5 h-5 text-[#00ABE2]" />
                  <span>0700CLINIFY (07002546439)</span>
                </div>
                <div className="flex items-start gap-3 text-[#042648]/70">
                  <MapPin className="w-5 h-5 text-[#00ABE2] mt-0.5" />
                  <span>15b, Wole Olateju Crescent, Admiralty Way, Lekki Phase 1, Lagos, Nigeria.</span>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#042648]">Useful Links</h3>
              <div className="space-y-3">
                {[
                  "About",
                  "Solutions",
                  "Contact",
                  "FAQs",
                  "Privacy Policy",
                  "Information Security Policy",
                  "Terms & Conditions",
                ].map((link) => (
                  <Link
                    key={link}
                    href="#"
                    className="block text-[#042648]/70 hover:text-[#00ABE2] transition-colors duration-200"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-[#042648]">Follow Us</h3>
              <div className="flex gap-4">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Twitter, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map(({ icon: Icon, href }, index) => (
                  <Link
                    key={index}
                    href={href}
                    className="w-12 h-12 bg-[#00ABE2]/10 hover:bg-[#00ABE2] border border-[#00ABE2]/20 rounded-full flex items-center justify-center text-[#00ABE2] hover:text-white transition-all duration-300 hover:scale-110"
                  >
                    <Icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-white/20 text-center">
          <p className="text-[#042648]/60">Copyright 2025 Clinify Inc. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
