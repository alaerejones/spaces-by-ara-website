"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { useEnquiryModal } from "@/components/enquiry-modal-context"
import { cn } from "@/lib/utils"

export function FaqsCta() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })
  const { openModal } = useEnquiryModal()

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-dark-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] md:text-[33px] font-bold text-white leading-[115%] mb-6">
            Still have questions?
          </h2>
          <p className="text-md text-white/80 leading-relaxed mb-10">
            Contact us directly and our team will be happy to help you with any questions about our apartments, investments, or services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => openEnquiryModal()}
              size="lg"
              className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 btn-glow text-base font-medium px-10 py-2"
            >
              Contact Us
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-white/30 text-white hover:bg-white/10 hover:text-white text-base font-medium px-10 py-2 bg-white/5"
            >
              <Link href="/spaces">Find a Home</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
