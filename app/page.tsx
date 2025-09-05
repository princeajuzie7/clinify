import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import { FeaturesSection } from "@/components/features-section"
import WhoWeServeSection from "@/components/who-we-serve-section"
import PartnersSection from "@/components/partners-section"
import FAQSection from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import FooterSection from "@/components/footer-section"

export default function Home() {
  return (
    <div className="min-h-screen w-full relative">
      {/* Radial Gradient Background from Bottom */}
      <div
        className="fixed inset-0 z-0"
        style={{
          background: "radial-gradient(125% 125% at 50% 90%, #fff 40%, #00ABE2 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div id="home">
          <HeroSection />
        </div>
        <div id="about">
          <AboutSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <WhoWeServeSection />
        <PartnersSection />
        <div id="faqs">
          <FAQSection />
        </div>
        <ContactSection />
        <FooterSection />
      </div>
    </div>
  )
}
