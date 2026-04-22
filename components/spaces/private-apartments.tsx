"use client"

import * as React from "react"
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

// TO ADD MORE PROPERTIES: duplicate the card object in the
// privateApartmentsData array below and update the values
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

          <div className="grid grid-cols-1 lg:grid-cols-1 gap-8">
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
                {/* Video Embed */}
                <div className="relative h-96 overflow-hidden bg-black">
                  <iframe
                    src={apartment.videoUrl}
                    title={apartment.name}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>

                <div className="p-6 lg:p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-2">
                        {apartment.name}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {apartment.location}
                      </p>
                    </div>
                    <Badge className="bg-olive text-white dark:bg-accent-lime dark:text-dark-green whitespace-nowrap">
                      {apartment.badge}
                    </Badge>
                  </div>

                  <p className="text-olive dark:text-accent-lime font-bold text-2xl mb-4">
                    {apartment.price}
                  </p>

                  <p className="text-muted-foreground mb-6">
                    {apartment.description}
                  </p>

                  <div className="mb-8">
                    <h4 className="font-semibold text-foreground mb-3">
                      Key Features:
                    </h4>
                    <ul className="space-y-2">
                      {apartment.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="text-sm text-muted-foreground flex items-center gap-2"
                        >
                          <div className="w-2 h-2 rounded-full bg-olive dark:bg-accent-lime" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      onClick={() => handleBookingModalOpen(apartment.name)}
                      className="flex-1 bg-olive text-white hover:bg-dark-green dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
                    >
                      Book Reservation
                    </Button>
                    <Button
                      onClick={() =>
                        openEnquiryModal({
                          property: apartment.name,
                          enquiryType: "Property Booking / Reservation",
                        })
                      }
                      variant="outline"
                      className="flex-1"
                    >
                      Request Viewing
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
            <script src="https://www.bookingmood.com/js/resize.js"></script>
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
