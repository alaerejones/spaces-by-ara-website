"use client"

import * as React from "react"
import Image from "next/image"
import { Check } from "lucide-react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const audiences = [
  "Property developers",
  "Building owners",
  "Residential investors",
  "Companies managing residential assets",
]

export function WhoIsFor() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={cn(
              "transition-all duration-700 order-2 lg:order-1",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <h2 className="text-[21px] md:text-[28px] lg:text-[36px] font-bold text-foreground leading-[120%] mb-4">
              Who This Service Is For
            </h2>

            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
              Whether you own one residential property or manage a growing portfolio, Spaces by Ara provides professional management built for long term residential living.
            </p>

            <ul className="space-y-5">
              {audiences.map((item, index) => (
                <li
                  key={item}
                  className={cn(
                    "flex items-center gap-4 transition-all duration-500",
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="w-7 h-7 rounded-full bg-olive dark:bg-accent-lime flex items-center justify-center flex-shrink-0">
                    <Check className="h-5 w-5 text-white dark:text-dark-green" />
                  </div>

                  <span className="text-base font-medium text-foreground">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={cn(
              "relative h-[400px] lg:h-[500px] rounded-xl overflow-hidden transition-all duration-700 delay-200 order-1 lg:order-2",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <Image
              src="/images/apartment-1.jpg"
              alt="Professionally managed residential property in Lagos"
              fill
              className="object-cover img-hover-scale"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}