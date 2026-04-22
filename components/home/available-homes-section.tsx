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
    type: "Semi-Furnished/ Furnished Private Masters Room in Shared Apartment",
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

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-3xl mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
            Homes currently available in Lagos.
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed">
            Our current Homes are shared apartments located within secure residential neighborhoods in Lagos. Residents have private rooms while sharing common spaces such as the kitchen and living areas. Each home is professionally managed and maintained by the Spaces by Ara team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {Homes.map((home, index) => (
            <div
              key={home.id}
              className={cn(
                "bg-card rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1 group",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={home.image}
                  alt={`Apartment in ${home.location}`}
                  fill
                  className="object-cover img-hover-scale"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-2">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{home.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {home.type}
                </h3>
                <p className="text-olive dark:text-accent-lime font-medium mb-4">
                  {home.price}
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-olive text-olive hover:bg-olive hover:text-white dark:border-accent-lime dark:text-accent-lime dark:hover:bg-accent-lime dark:hover:text-dark-green"
                >
                  <Link href="/spaces">View Space</Link>
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
            <Link href="/spaces">See Available Spaces</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
