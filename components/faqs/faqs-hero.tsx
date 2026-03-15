"use client"

import * as React from "react"
import Image from "next/image"

export function FaqsHero() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/living-room.jpg"
          alt="Lagos apartment living room"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
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
            Frequently Asked Questions
          </h1>
          <p className="text-md md:text-l text-white/90 leading-relaxed max-w-xl">
            Find answers to common questions about Spaces by Ara homes, our monthly rent structure, and how our managed living works.
          </p>
        </div>
      </div>
    </section>
  )
}
