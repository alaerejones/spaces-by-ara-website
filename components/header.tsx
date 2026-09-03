"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { cn } from "@/lib/utils"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/spaces", label: "Spaces" },
  { href: "/invest", label: "Invest" },
  { href: "/partners", label: "Partners" },
  { href: "/management", label: "Management" },
  { href: "/faqs", label: "FAQs" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false)

  const pathname = usePathname()

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  React.useEffect(() => {
    setIsMobileMenuOpen(false)
  }, [pathname])

  const trackEvent = (eventName: string) => {
    if (typeof window !== "undefined") {
      ;(window as any).gtag?.("event", eventName)
    }
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 h-20 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container mx-auto h-full px-4 lg:px-8">
        <nav className="flex items-center justify-between h-full">
          <Link href="/" className="flex-shrink-0">
            <>
              <Image
                src="/images/logo.PNG"
                alt="Spaces by Ara"
                width={180}
                height={50}
                className="h-10 w-auto dark:hidden"
                priority
              />
              <Image
                src="/images/white logo.PNG"
                alt="Spaces by Ara"
                width={180}
                height={50}
                className="hidden h-10 w-auto dark:block"
                priority
              />
            </>
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative text-base font-medium transition-colors pb-1",
                    isActive
                      ? "text-olive dark:text-accent-lime font-semibold"
                      : "text-foreground hover:text-olive dark:hover:text-accent-lime"
                  )}
                >
                  {link.label}

                  {isActive && (
                    <span className="absolute left-0 -bottom-1 h-0.5 w-full rounded-full bg-olive dark:bg-accent-lime" />
                  )}
                </Link>
              )
            })}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <ThemeToggle />

            <Button
              asChild
              className="bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
            >
              <Link
                href="https://wa.link/hv3y8c"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("header_make_enquiry_click")}
              >
                Get Started
              </Link>
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />

            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </nav>
      </div>

      <div
        className={cn(
          "lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border shadow-lg transition-all duration-300 overflow-hidden",
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        )}
      >
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "rounded-lg px-3 py-3 text-lg font-medium transition-colors",
                    isActive
                      ? "bg-muted text-olive dark:text-accent-lime"
                      : "text-foreground hover:bg-muted hover:text-olive dark:hover:text-accent-lime"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}

            <Button
              asChild
              className="w-full mt-2 bg-olive text-white hover:bg-dark-green btn-glow dark:bg-accent-lime dark:text-dark-green dark:hover:bg-accent-lime/90"
            >
              <Link
                href="https://wa.link/hv3y8c"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent("header_make_enquiry_click")}
              >
                Get Started
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}