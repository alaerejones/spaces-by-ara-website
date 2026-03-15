"use client"

import * as React from "react"
import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const faqs = [
  {
    question: "How does the monthly rent structure work?",
    answer:
      "Instead of paying a full year upfront, residents pay rent in a structure designed for monthly income earners. The exact payment terms are discussed during the application process based on the specific property and arrangement.",
  },
  {
    question: "What type of homes are currently available?",
    answer:
      "Our current homes are shared apartments where residents have their own private bedroom while sharing common areas like the kitchen and living room. All homes are located in secure residential neighborhoods in Lagos.",
  },
  {
    question: "Who manages the properties?",
    answer:
      "All Spaces by Ara homes are professionally managed by our team. We handle maintenance, tenant coordination, house rules enforcement, and ensure each home operates smoothly.",
  },
  {
    question: "How do I apply for a home?",
    answer:
      "You can start by browsing our available spaces and submitting a viewing request. Our team will reach out to schedule a viewing and discuss the application process.",
  },
  {
    question: "Are utilities included in the rent?",
    answer:
      "Utility arrangements vary by property. Some homes include utilities in the rent while others have a separate utility structure. This is clarified during the application process.",
  },
]

export function FaqSection() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.1 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-secondary">
      <div className="container mx-auto px-4 lg:px-8">
        <div
          className={cn(
            "text-center mb-12 transition-all duration-700",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <h2 className="text-[21px] md:text-[25px] lg:text-[33px] font-bold text-foreground leading-[120%] mb-4">
            Frequently Asked Questions
          </h2>
        </div>

        <div
          className={cn(
            "max-w-3xl mx-auto transition-all duration-700 delay-200",
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          )}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-md font-medium py-5 hover:no-underline hover:text-olive dark:hover:text-accent-lime">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-10">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-olive text-olive hover:bg-olive hover:text-white dark:border-accent-lime dark:text-accent-lime dark:hover:bg-accent-lime dark:hover:text-dark-green px-8"
            >
              <Link href="/faqs">View All FAQs</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
