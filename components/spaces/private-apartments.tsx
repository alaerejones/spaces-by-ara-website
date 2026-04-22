"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MapPin, Tv, Wifi, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { useEnquiryModal } from "@/components/enquiry-modal-context"
import { cn } from "@/lib/utils"

const PrivateApartments = [
  {
    id: 1,
    image: "/images/apartment-1.jpg",
    location: "Ikeja GRA",
    type: "Luxury One-Bedroom",
    price: "N500,000/month",
    features: ["Private entrance", "Fully furnished", "In-unit kitchen", "Premium finishes"],
  },
  {
    id: 2,
    image: "/images/apartment-2.jpg",
    location: "Victoria Island",
    type: "Executive Two-Bedroom",
    price: "N750,000/month",
    features: ["2 bedrooms", "Living room", "Modern kitchen", "High-speed WiFi"],
  },
  {
    id: 3,
    image: "/images/apartment-3.jpg",
    location: "Lekki Phase 1",
    type: "Premium Studio",
    price: "N400,000/month",
    features: ["Open plan design", "Smart home features", "Concierge service", "Building amenities"],
  },
]

export function PrivateApartments() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const { openEnquiryModal } = useEnquiryModal()

  return (
    <section id="private-apartments" ref={ref} className="py-20 lg:py-30 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-3xl mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-5">
            Premium Private Apartments
          </h2>
          <p className="text-md text-muted-foreground leading-relaxed">
            Our collection of luxury private apartments offers complete independence with world-class amenities. Fully furnished, turnkey solutions for discerning professionals and families.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PrivateApartments.map((apartment, index) => (
            <div
              key={apartment.id}
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
                  src={apartment.image}
                  alt={`${apartment.type} in ${apartment.location}`}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <MapPin className="h-4 w-4" />
                  <span className="text-sm">{apartment.location}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {apartment.type}
                </h3>
                <p className="text-olive dark:text-accent-lime font-semibold text-lg mb-4">
                  {apartment.price}
                </p>
                <ul className="space-y-2 mb-6">
                  {apartment.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-olive dark:bg-accent-lime" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  onClick={() => openEnquiryModal({
                    propertyType: apartment.type,
                    location: apartment.location,
                    priceRange: apartment.price
                  })}
                  className="w-full bg-olive text-white hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
                >
                  Enquire Now
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
