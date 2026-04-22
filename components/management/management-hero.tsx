"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function ManagementHero() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/property-owner.jpg"
          alt="facility management services"
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
            Professional residential facility management.
          </h1>
          <p className="text-md md:text-l text-white/90 leading-relaxed mb-8 max-w-xl">
            Spaces by Ara provides management services for residential buildings in Lagos. Our role is to ensure properties operate efficiently while maintaining strong tenant structure and facility oversight.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 btn-glow text-base font-medium px-7 py-2"
          >
            <Link href="https://calendar.app.google/h4MZ96LK9L5PWL8E8">
              Book a Discovery Call
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
