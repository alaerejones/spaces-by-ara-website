"use client"

import * as React from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const expectations = [
  "Secure residential locations in Lagos",
  "Professionally managed apartments",
  "Private rooms with shared living areas",
  "Clear house rules and peaceful co-living",
  "Maintenance support when needed",
]

export function WhatToExpect() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-6">
              What residents can expect.
            </h2>

            <ul className="space-y-5">
              {expectations.map((item, index) => (
                <li
                  key={index}
                  className={cn(
                    "flex items-start gap-4 transition-all duration-500",
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-olive dark:bg-accent-lime flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white dark:text-dark-green" />
                  </div>
                  <span className="text-md text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Images */}
          <div
            className={cn(
              "grid grid-cols-2 gap-4 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="space-y-4">
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/bedroom.jpg"
                  alt="Private bedroom"
                  fill
                  className="object-cover img-hover-scale"
                  sizes="(max-width: 1021px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/kitchen.jpg"
                  alt="Shared kitchen"
                  fill
                  className="object-cover img-hover-scale"
                  sizes="(max-width: 1021px) 50vw, 25vw"
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="relative h-64 rounded-xl overflow-hidden">
                <Image
                  src="/images/living-room.jpg"
                  alt="Living room"
                  fill
                  className="object-cover img-hover-scale"
                  sizes="(max-width: 1021px) 50vw, 25vw"
                />
              </div>
              <div className="relative h-48 rounded-xl overflow-hidden">
                <Image
                  src="/images/apartment-interior.jpg"
                  alt="Apartment interior"
                  fill
                  className="object-cover img-hover-scale"
                  sizes="(max-width: 1021px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
