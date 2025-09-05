import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";
import { AnimatedGroup } from "@/components/motion-primitives/animated-group";
import { HeroHeader } from "@/components/header";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export default function HeroSection() {
  return (
    <>
      <HeroHeader />
      <main className="overflow-hidden">
        <section id="home">
          <div className="relative pt-24 md:pt-36">
            <div className="mx-auto max-w-[1400px] px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#link"
                    className="hover:bg-white/20 bg-white/10 backdrop-blur-sm group mx-auto flex w-fit items-center gap-4 rounded-full border border-white/20 p-1 pl-4 shadow-lg transition-colors duration-300"
                  >
                    <span className="text-[#042648] text-xs sm:text-sm font-medium">
                      Africa's First Interoperable Healthcare Platform
                    </span>
                    <span className="block h-4 w-0.5 border-l border-[#042648]/20 bg-[#042648]/20"></span>

                    <div className="bg-white/20 group-hover:bg-white/30 size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-[#042648]" />
                        </span>
                        <span className="flex size-6">
                          <ArrowRight className="m-auto size-3 text-[#042648]" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mx-auto mt-6 sm:mt-8 lg:mt-16 max-w-5xl text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-[#042648] font-semibold leading-tight"
                >
                  Centralized Healthcare Systems for Africa
                </TextEffect>

                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-4 sm:mt-6 lg:mt-8 max-w-3xl text-balance text-base sm:text-lg lg:text-xl text-[#333333] leading-relaxed px-4 sm:px-0"
                >
                  Streamline healthcare operations with our interoperable
                  platform designed for African healthcare systems.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-8 sm:mt-10 lg:mt-12 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
                >
                  <div
                    key={1}
                    className="bg-[#00ABE2]/20 rounded-[calc(var(--radius-xl)+0.125rem)] border border-[#00ABE2]/30 p-0.5"
                  >
                    <Button
                      asChild
                      size="lg"
                      className="rounded-xl px-6 sm:px-8 text-base bg-[#00ABE2] hover:bg-[#042648] text-white"
                    >
                      <Link href="#link">
                        <span className="text-nowrap">Get Started</span>
                      </Link>
                    </Button>
                  </div>
                  <Button
                    key={2}
                    asChild
                    size="lg"
                    variant="ghost"
                    className="h-10.5 rounded-xl px-6 sm:px-8 text-[#042648] hover:bg-white/20"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Book a Demo</span>
                    </Link>
                  </Button>
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20 md:-mr-56 lg:mr-0">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-white/80 absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="bg-white/20 backdrop-blur-sm relative mx-auto max-w-[1200px] overflow-hidden rounded-2xl border border-white/30 p-4 shadow-xl">
                  <Image
                    className="relative rounded-2xl object-cover object-center"
                    src="/images/dashboard-hero.svg"
                    alt="CLINIFY Dashboard"
                    width="2700"
                    height="1440"
                    style={{
                      aspectRatio: "16/9",
                      objectFit: "cover",
                      objectPosition: "center top",
                    }}
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
