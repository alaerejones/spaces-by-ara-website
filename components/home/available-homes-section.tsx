"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const Homes = [
  {
    id: 1,
    image: "/images/apartment-1.jpg",
    location: "Lekki Phase 1",
    type: "Unfurnished/Semi-Furnished Private Standard Room in Shared Apartment",
    price: "From N250,000/month",
  },
  {
    id: 2,
    image: "/images/apartment-2.jpg",
    location: "Lekki Conservation Area",
    type: "Unfurnished/Semi-Furnished Private Large Room in Shared Apartment",
    price: "From N300,000/month",
  },
  {
    id: 3,
    image: "/images/apartment-3.jpg",
    location: "Lekki Conservation Area",
    type: "Semi-Furnished/Furnished Private Master's Room in Shared Apartment",
    price: "From N350,000/month",
  },
  {
    id: 4,
    image: "/images/apartment-4.jpg",
    location: "Lekki Conservation Area",
    type: "Unfurnished/Semi-Furnished Private Large Room in Shared Apartment",
    price: "From N170,000/month",
  },
]

export function AvailableHomesSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const trackEvent = (eventName: string, location?: string) => {
    if (typeof window !== "undefined") {
      ;(window as any).gtag?.("event", eventName, {
        section: "available_homes",
        location,
      })
    }
  }

  return (
    <section
      id="available-homes"
      ref={ref}
      className="py-20 lg:py-30 bg-secondary"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-3xl mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
            Available Ara Spaces
          </h2>

          <p className="text-md text-muted-foreground leading-relaxed">
            Explore our current vacancies across Lagos, including private units,
            shared apartments, furnished homes, semi furnished homes, and
            unfurnished homes. Every home is professionally managed by Spaces by
            Ara and designed for long term living.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {Homes.map((home, index) => (
            <div
              key={home.id}
              className={cn(
                "bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={home.image}
                  alt={`${home.type} in ${home.location}, Lagos`}
                  fill
                  className="object-cover img-hover-scale"
                  sizes="(max-width:768px) 100vw, (max-width:1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{home.location}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2 leading-snug">
                  {home.type}
                </h3>

                <p className="text-olive dark:text-accent-lime font-semibold mb-4">
                  {home.price}
                </p>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-olive text-olive hover:bg-olive hover:text-white dark:border-accent-lime dark:text-accent-lime dark:hover:bg-accent-lime dark:hover:text-dark-green"
                >
                  <Link
                    href="https://www.instagram.com/spaces_by_ara"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      trackEvent("available_home_view_clicked", home.location)
                    }
                  >
                    View more vacant Spaces
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div
          className={cn(
            "text-center transition-all duration-700 delay-500",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Button
            asChild
            size="lg"
            className="bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90 px-8"
          >
            <Link
              href="/spaces"
              onClick={() => trackEvent("see_available_spaces_clicked")}
            >
              See Available Spaces
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}