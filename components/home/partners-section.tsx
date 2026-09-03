"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Sparkles,
  Wrench,
  Hammer,
  Zap,
  Droplets,
  Shield,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const partnerTypes = [
  { icon: Sparkles, label: "Cleaning Companies" },
  { icon: Wrench, label: "Facility Maintenance Teams" },
  { icon: Hammer, label: "Artisan Networks" },
  { icon: Zap, label: "Electrical Technicians" },
  { icon: Droplets, label: "Plumbing Services" },
  { icon: Shield, label: "Security Providers" },
]

const partnerImages = [
  {
    src: "/images/cleaning-service.jpg",
    alt: "Cleaning company supporting residential property management in Lagos",
  },
  {
    src: "/images/maintenance-technician.jpg",
    alt: "Facility maintenance technician working in a residential property",
  },
  {
    src: "/images/artisan-services.jpg",
    alt: "Artisan carrying out residential property maintenance",
  },
  {
    src: "/images/security-services.jpg",
    alt: "Security provider supporting a residential property in Lagos",
  },
]

export function PartnersSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined") {
      ;(window as any).gtag?.("event", eventName, {
        section: "partners",
      })
    }
  }

  return (
    <section
      id="partners"
      ref={ref}
      className="py-16 lg:py-24 bg-light-bg dark:bg-olive/20"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          <div
            className={cn(
              "transition-all duration-700",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            )}
          >
            <h2 className="text-[25px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
              Become a Service Partner.
            </h2>

            <p className="text-base text-muted-foreground leading-relaxed mb-6">
              Great homes need great people behind them. Spaces by Ara works with trusted service providers who help keep our residential properties running smoothly, from maintenance and cleaning to other essential property support services across Lagos.
            </p>

            <ul className="space-y-3 mb-6">
              {partnerTypes.map((partner, index) => (
                <li
                  key={partner.label}
                  className={cn(
                    "flex items-center gap-3 transition-all duration-500",
                    isInView
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  )}
                  style={{ transitionDelay: `${index * 80}ms` }}
                >
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-olive flex items-center justify-center flex-shrink-0">
                    <partner.icon className="h-4 w-4 text-olive dark:text-accent-lime" />
                  </div>

                  <span className="text-foreground font-medium text-sm">
                    {partner.label}
                  </span>
                </li>
              ))}
            </ul>

            <Button
              asChild
              size="lg"
              className="bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90 px-8"
            >
              <Link
                href="/partners"
                onClick={() => trackEvent("partners_page_open")}
              >
                Learn More
              </Link>
            </Button>
          </div>

          <div
            className={cn(
              "grid grid-cols-2 gap-3 transition-all duration-700 delay-200",
              isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            )}
          >
            <div className="space-y-3">
              <div className="relative h-44 rounded-xl overflow-hidden">
                <Image
                  src={partnerImages[0].src}
                  alt={partnerImages[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>

              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={partnerImages[1].src}
                  alt={partnerImages[1].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
            </div>

            <div className="space-y-3 pt-6">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src={partnerImages[2].src}
                  alt={partnerImages[2].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>

              <div className="relative h-44 rounded-xl overflow-hidden">
                <Image
                  src={partnerImages[3].src}
                  alt={partnerImages[3].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 50vw, 25vw"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}