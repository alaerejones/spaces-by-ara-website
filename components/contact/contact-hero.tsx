"use client"

import * as React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export function ContactHero() {
  const [isVisible, setIsVisible] = React.useState(false)

  React.useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToForm = () => {
    document.getElementById("contact-form")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  const scrollToContact = () => {
    document.getElementById("contact-info")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    })
  }

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/images/living-room.jpg"
          alt="Professionally managed apartment in Lagos"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-dark-green/90 via-dark-green/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-green/75 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div
          className={`max-w-2xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h1 className="text-[32px] md:text-[44px] lg:text-[56px] font-bold text-white leading-[110%] mb-5">
            Let's Talk About Your Next Move
          </h1>

          <p className="text-base md:text-lg text-white/90 leading-relaxed mb-8">
            Whether you're looking for a home, property management, investment opportunities, or a service partnership, our team is ready to help.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              onClick={scrollToForm}
              className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 text-base font-semibold px-7 py-2"
            >
              Send an Enquiry
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={scrollToContact}
              className="border-white bg-white/10 text-white hover:bg-white hover:text-dark-green text-base font-semibold px-7 py-2"
            >
              Contact Information
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}