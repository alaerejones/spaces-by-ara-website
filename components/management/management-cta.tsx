"use client"

import * as React from "react"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

export function ManagementCta() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  const handleBookingClick = () => {
    const target = document.getElementById('calendar-btn-management-cta')
    if (target) {
      const calBtn = target.querySelector('button, a') as HTMLElement
      if (calBtn) { calBtn.click(); return }
    }
    window.open('https://calendar.app.google/h4MZ96LK9L5PWL8E8', '_blank')
  }

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-dark-green">
      <div id="calendar-btn-management-cta" style={{ display: 'none' }} />
      <link href="https://calendar.google.com/calendar/scheduling-button-script.css" rel="stylesheet" />
      <Script
        src="https://calendar.google.com/calendar/scheduling-button-script.js"
        strategy="lazyOnload"
        onLoad={() => {
          if (typeof window !== 'undefined' && (window as any).calendar) {
            const btn = document.getElementById('calendar-btn-management-cta')
            if (btn) {
              ;(window as any).calendar.schedulingButton.load({
                url: 'https://calendar.google.com/calendar/appointments/schedules/AcZssZ0EPe6QWxzLLC8cUvkxSabr7xM-JE_gCMKkHapG54GNdZN3JBIkDY52BAsRyuLgakohYe7HccFl?gv=true',
                color: '#CCFB6E',
                label: 'Book a Discovery Call',
                target: btn,
              })
            }
          }
        }}
      />

      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center max-w-2xl mx-auto transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-white leading-[115%] mb-6">
            Let us manage your property.
          </h2>
          <p className="text-md text-white/80 leading-relaxed mb-10">
            Schedule a discovery call to discuss how Spaces by Ara can help
            manage your residential property.
          </p>
          <Button
            size="lg"
            className="bg-accent-lime text-dark-green hover:bg-accent-lime/90 btn-glow text-base font-medium px-10 py-2"
            onClick={handleBookingClick}
          >
            Book a Discovery Call
          </Button>
        </div>
      </div>
    </section>
  )
}