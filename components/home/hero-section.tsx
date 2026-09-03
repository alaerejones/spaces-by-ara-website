"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined") {
      ;(window as any).gtag?.("event", eventName)
    }
  }

  const scrollToNextSection = (eventName: string) => {
    trackEvent(eventName)

    window.scrollTo({
      top: window.innerHeight - 80,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-lagos-apartment.jpg"
          alt="Professionally managed monthly rental homes in Lagos by Spaces by Ara"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/70 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`max-w-4xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-[32px] md:text-[33px] lg:text-[52px] font-bold text-white leading-[100%] mb-5 max-w-[16ch] md:max-w-none">
            Professionally Managed Monthly Rental Homes in Lagos
          </h1>

          <p className="text-[17px] md:text-lg text-white/90 leading-[1.45] md:leading-relaxed mb-8 max-w-2xl">
            Spaces by Ara is a residential facility management company creating better living experiences across Lagos. We provide professionally managed monthly rental homes for long term living, manage residential properties with care, create investment opportunities, and build service partnerships that strengthen Lagos' residential property ecosystem
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 btn-glow text-base font-medium px-7 py-2"
              onClick={() => scrollToNextSection("hero_get_started")}
            >
              See How It Works
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base font-medium px-7 py-2 bg-white/5"
            >
              <Link
                href="/management"
                onClick={() => trackEvent("hero_management_page_open")}
              >
                Have My Property Managed
              </Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <button
          onClick={() => scrollToNextSection("hero_scroll")}
          className="flex items-center justify-center text-white/70 hover:text-white transition-colors"
          aria-label="Scroll down"
        >
          <ChevronDown className="h-6 w-6" />
        </button>
      </div>
    </section>
  )
}