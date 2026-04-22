"use client"

import * as React from "react"
import Image from "next/image"
import { MapPin } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { useEnquiryModal } from "@/components/enquiry-modal-context"
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"

const privateApartmentsData = [
  {
    id: 1,
    name: "Ara's Premium 2 Bedroom Apartment",
    price: "₦2,100,000/month",
    location: "Lagos",
    type: "Private Apartment",
    image: "/images/apartment-3.jpg",
    badge: "Minimum 3 months",
    availability: "Available",
    description: "Experience luxury living with our premium 2-bedroom apartment.",
    features: [
      "2 Bedrooms fully furnished",
      "Entirely private (no shared spaces)",
      "Full kitchen",
      "Living room & bathrooms",
      "Professional management included",
      "Utilities coordination",
    ],
    videoUrl:
      "https://www.youtube.com/embed/o3vkM66MWJs?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&iv_load_policy=3&playsinline=1&enablejsapi=1",
  },
]

export function PrivateApartments() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const { openEnquiryModal } = useEnquiryModal()
  const [selectedProperty, setSelectedProperty] = React.useState<string | null>(
    null
  )
  const [bookingModalOpen, setBookingModalOpen] = React.useState(false)

  const handleBookingModalOpen = (propertyName: string) => {
    setSelectedProperty(propertyName)
    setBookingModalOpen(true)
  }

  return (
    <>
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
              Our collection of luxury private apartments offers complete
              independence with world-class amenities. Fully furnished, turnkey
              solutions for discerning professionals and families.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {privateApartmentsData.map((apartment, index) => (
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
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{apartment.badge}</Badge>
                    <Badge variant="outline" className="text-green-600 border-green-600">
                      {apartment.availability}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{apartment.name}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{apartment.description}</p>
                  <ul className="text-sm text-muted-foreground mb-4 space-y-1">
                    {apartment.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <p className="font-bold text-foreground mb-4">{apartment.price}</p>
                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      onClick={() => handleBookingModalOpen(apartment.name)}
                    >
                      Book Now
                    </Button>
                    <Button
                      variant="outline"
                      className="flex-1"
                      onClick={() => openEnquiryModal(apartment.name)}
                    >
                      Enquire
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Modal */}
      <Dialog open={bookingModalOpen} onOpenChange={setBookingModalOpen}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-xl">
              {selectedProperty && `Book ${selectedProperty}`}
            </DialogTitle>
            <DialogClose />
          </DialogHeader>

          <div className="w-full mt-4">
            <iframe
              src="https://www.bookingmood.com/embed/a307c975-c2cb-4a73-aa84-f3ec8b2e9eff?"
              style={{ width: "100%", border: "none", minHeight: "500px" }}
              title="Booking System"
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
