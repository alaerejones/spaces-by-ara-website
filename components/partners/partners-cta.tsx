"use client"

import * as React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function PartnersCta() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-dark-green">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-white leading-[115%] mb-6">
            Ready to partner with us?
          </h2>
          <p className="text-md text-white/80 leading-relaxed mb-10">
            If you provide professional services and want to work with Spaces by Ara, we would like to hear from you.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 btn-glow text-base font-medium px-10 py-2"
          >
            <Link href="mailto:partners@spacesbyara.com?subject=Partnership Inquiry">
              Partner With Us
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
