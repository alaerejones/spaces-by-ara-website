"use client"

import * as React from "react"
import Image from "next/image"
import { MapPin, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { useEnquiryModal } from "@/components/enquiry-modal-context"
import { cn } from "@/lib/utils"

const Homes = [
  {
    id: 1,
    image: "/images/bedroom.jpg",
    location: "BQ",
    type: "Boys Quarter Unit",
    occupancy: "Available",
    price: "N170,000/month",
    features: ["Private unit", "Self-contained", "24/7 security", "Utilities included"],
  },
  {
    id: 2,
    image: "/images/apartment-1.jpg",
    location: "Standard Room",
    type: "Private Room in Shared Apartment",
    occupancy: "Available",
    price: "N250,000/month",
    features: ["Private bedroom", "Shared kitchen", "Shared living area", "24/7 security"],
  },
  {
    id: 3,
    image: "/images/apartment-2.jpg",
    location: "Large Room",
    type: "Large Private Room",
    occupancy: "Available",
    price: "N300,000/month",
    features: ["Spacious bedroom", "Shared kitchen", "Work-friendly space", "Premium amenities"],
  },
  {
    id: 4,
    image: "/images/apartment-3.jpg",
    location: "Masters Room",
    type: "Master Bedroom with Ensuite",
    occupancy: "Available",
    price: "N350,000/month",
    features: ["Master bedroom", "Private bathroom", "Premium location", "Full amenities"],
  },
]

export function CurrentOptions() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const { openEnquiryModal } = useEnquiryModal()

  return (
    <section id="available-Homes" ref={ref} className="py-20 lg:py-30 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-3xl mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
            Current options available.
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed">
            Shared apartments with private rooms are currently available across selected Lagos neighborhoods. Additional housing options including full apartments and furnished units will be introduced in future phases.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">{home.location}</span>
                  </div>
                  <div className="flex items-center gap-1 text-olive dark:text-accent-lime text-sm">
                    <Users className="h-4 w-4" />
                    <span>{home.occupancy}</span>
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {home.type}
                </h3>
                <p className="text-olive dark:text-accent-lime font-semibold text-lg mb-4">
                  {home.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {home.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-olive dark:bg-accent-lime" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() =>
                    openEnquiryModal({
                      property: 'home.type',
                      enquiryType: "Viewing Request",
                    })
                  }
                  className="w-full bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
                >
                  Request Viewing
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
