"use client"

import * as React from "react"
import Image from "next/image"
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
      "https://www.youtube.com/embed/863BWPwYs4w?autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&iv_load_policy=3&playsinline=1&enablejsapi=1",
  },
]

export function PrivateApartments() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const { openEnquiryModal } = useEnquiryModal()
  const [selectedProperty, setSelectedProperty] = React.useState<string | null>(null)
  const [bookingModalOpen, setBookingModalOpen] = React.useState(false)

  const handleBookingModalOpen = (propertyName: string) => {
    setSelectedProperty(propertyName)
    setBookingModalOpen(true)
  }

  return (
    <>
      <section
        id="private-apartments"
        ref={ref}
        className="py-20 lg:py-30 bg-muted/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          
          {/* Header */}
          <div
            className={cn(
              "max-w-3xl mb-12 transition-all duration-700",
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            )}
          >
            <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold mb-5">
              Premium Private Apartments
            </h2>
            <p className="text-md text-muted-foreground">
              Our collection of luxury private apartments offers complete independence with world-class amenities.
            </p>
          </div>

          {/* Grid */}
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
                <div className="relative h-56 overflow-hidden bg-black">
                  {apartment.videoUrl ? (
                    <iframe
                      src={apartment.videoUrl}
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={apartment.name}
                    />
                  ) : (
                    <Image
                      src="/placeholder.jpg"
                      alt={apartment.name}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>

                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-2">
                    {apartment.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {apartment.price}
                  </p>

                  <Button
                    className="w-full"
                    onClick={() => handleBookingModalOpen(apartment.name)}
                  >
                    Book Now
                  </Button>
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
            <DialogTitle>
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