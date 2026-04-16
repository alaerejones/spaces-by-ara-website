"use client"

import * as React from "react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useInView } from "@/hooks/use-in-view"
import { cn } from "@/lib/utils"

const faqCategories = [
  {
    title: "For Residents",
    faqs: [
      {
        question: "How does the monthly rent structure work?",
        answer:
          "Instead of paying a full year upfront, residents pay rent in a structure designed for monthly income earners. The exact payment terms are discussed during the application process based on the specific property and arrangement. This model is designed to reduce the financial pressure of traditional yearly rent payments in Lagos.",
      },
      {
        question: "What type of Houses are currently available?",
        answer:
          "Our current Houses are shared apartments where residents have their own private bedroom while sharing common areas like the kitchen and living room. All Houses are located in secure residential neighborhoods across Lagos.",
      },
      {
        question: "How do I apply for a home?",
        answer:
          "You can start by browsing our available spaces on the Spaces page. Once you find a suitable option, submit a viewing request with your details. Our team will reach out to schedule a viewing and guide you through the application process.",
      },
      {
        question: "Are utilities included in the rent?",
        answer:
          "Utility arrangements vary by property. Some Houses include utilities in the rent while others have a separate utility structure. This information is clarified during the application process so you know exactly what to expect.",
      },
      {
        question: "What are the house rules?",
        answer:
          "Each Spaces by Ara home has clear house rules designed to maintain a peaceful living environment. These typically include quiet hours, guidelines for shared space usage, visitor policies, and maintenance reporting procedures. All house rules are shared with residents before move-in.",
      },
      {
        question: "How is maintenance handled?",
        answer:
          "Spaces by Ara coordinates all maintenance through our network of professional service partners. Residents can report maintenance issues through designated channels, and our team ensures timely resolution. Regular preventive maintenance is also conducted to keep properties in excellent condition.",
      },
    ],
  },
  {
    title: "For Investors",
    faqs: [
      {
        question: "What investment opportunities are available?",
        answer:
          "We offer three main investment structures: Furnished Apartment Investment (invest in furnishing units for managed occupancy), Unfurnished Apartment Investment (provide residential units for long-term tenants), and Property Owner Partnership (partner with us to manage your existing property while receiving structured returns).",
      },
      {
        question: "How are returns structured?",
        answer:
          "Return structures depend on the investment model chosen. Each arrangement is discussed individually based on the property type, location, and level of involvement. Our team provides detailed projections during the investor consultation process.",
      },
      {
        question: "What does Spaces by Ara handle for investors?",
        answer:
          "We handle all operational aspects including tenant management, rent collection, property maintenance, occupancy management, and facility oversight. Investors receive regular reports on their property performance without the stress of day-to-day management.",
      },
      {
        question: "How can I get more information about investing?",
        answer:
          "You can request our investor brochure by contacting us through the Invest page. Our team will provide detailed information about current opportunities and schedule a consultation to discuss your investment goals.",
      },
    ],
  },
  {
    title: "For Property Owners",
    faqs: [
      {
        question: "What properties do you manage?",
        answer:
          "We provide management services for residential buildings in Lagos, including apartment complexes and multi-unit residential properties. We work with property developers, building owners, and companies holding residential assets.",
      },
      {
        question: "What does your management service include?",
        answer:
          "Our management services cover tenant structure and onboarding, occupancy management, facility oversight, maintenance coordination, resident communication, and operational management. We ensure properties operate efficiently while maintaining high standards.",
      },
      {
        question: "How do I start working with Spaces by Ara?",
        answer:
          "Begin by scheduling a discovery call through our facility management page. We will assess your property, discuss your management needs, and propose a customized management structure that aligns with your goals.",
      },
    ],
  },
  {
    title: "For Service Partners",
    faqs: [
      {
        question: "What types of service partners do you work with?",
        answer:
          "We collaborate with cleaning companies, facility maintenance teams, artisan networks, electrical technicians, plumbing services, and security providers. We prioritize partners who maintain high professional standards and reliability.",
      },
      {
        question: "How do I become a service partner?",
        answer:
          "Contact us through the Partners page with information about your company and services. Our team will review your application and discuss partnership opportunities if there is a good fit with our service needs.",
      },
      {
        question: "What are the benefits of partnering with Spaces by Ara?",
        answer:
          "Service partners gain access to consistent operational work across our managed residential properties. We prioritize long-term relationships with partners who demonstrate reliability, professionalism, and quality service delivery.",
      },
    ],
  },
]

export function FaqsAccordion() {
  const { ref, isInView } = useInView<HTMLElement>({ threshold: 0.05 })

  return (
    <section ref={ref} className="py-20 lg:py-30 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {faqCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={cn(
                "mb-12 last:mb-0 transition-all duration-700",
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              )}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                {category.title}
              </h2>
              <Accordion type="single" collapsible className="space-y-4">
                {category.faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`${category.title}-item-${index}`}
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
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
