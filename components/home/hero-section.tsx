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

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-lagos-apartment.jpg"
          alt="Modern Lagos apartment building at sunset"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-[25px] md:text-[33px] lg:text-[52px] font-bold text-white leading-[115%] mb-5 text-balance">
            Rental homes in Lagos you can pay for monthly.
          </h1>
          <p className="text-md md:text-l text-white/90 leading-relaxed mb-8 max-w-xl">
            Spaces by Ara provides professionally managed homes for long term living. Our apartments are structured for people who earn monthly and want stability without the pressure of yearly rent.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              asChild
              size="lg"
              className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 btn-glow text-base font-medium px-7 py-2"
            >
              <Link href="/spaces">See What We Have</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base font-medium px-7 py-2 bg-white/5"
            >
              <Link href="#how-it-works">Learn How It Works</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <Link
          href="#how-it-works"
          className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll</span>
          <ChevronDown className="h-5 w-5" />
        </Link>
      </div>
    </section>
  )
}
