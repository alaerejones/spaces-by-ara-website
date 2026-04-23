"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { useEnquiryModal } from "@/components/enquiry-modal-context"
import { cn } from "@/lib/utils"

export function SpacesCta() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const { openEnquiryModal } = useEnquiryModal()

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-dark-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-white leading-[120%] mb-5">
            Looking for a home in Lagos?
          </h2>
          <p className="text-md text-white/80 leading-relaxed mb-10">
            Contact us to schedule a viewing and learn more about our available spaces.
          </p>
          <Button
            size="lg"
            className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 btn-glow text-base font-medium px-10 py-2"
          >
            <a href="/contact" > Contact Us </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
