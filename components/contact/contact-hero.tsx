"use client"

import * as React from "react"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function ContactHero() {
  const { ref, isInView } = useInView<HTMLDivElement>({ threshold: 0.3 })

  return (
    <section
      ref={ref}
      className="pt-32 pb-16 lg:pt-40 lg:pb-24 bg-gradient-to-b from-muted/50 to-background"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "max-w-2xl mx-auto text-center transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h1 className="text-[32px] md:text-[40px] lg:text-[48px] font-bold text-foreground leading-[120%] mb-6">
            Get in Touch
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Have questions about our spaces or services? We&apos;d love to hear from you. Reach out to our team and we&apos;ll get back to you as soon as possible.
          </p>
        </div>
      </div>
    </section>
  )
}
