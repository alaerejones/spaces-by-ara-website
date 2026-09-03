import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"
import { EnquiryModalProvider } from "@/components/enquiry-modal-context"
import { EnquiryModal } from "@/components/enquiry-modal"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: {
    default:
      "Spaces by Ara | Monthly Rental Apartments and Homes, Residential Property Management & Investment in Lagos",
    template: "%s | Spaces by Ara",
  },

  description:
    "Spaces by Ara is a residential facility management company in Lagos offering professionally managed monthly rental apartments and homes, residential property management, investment opportunities, and service partnerships.",

  keywords: [
    "monthly rental apartments Lagos",
    "monthly rental homes Lagos",
    "monthly rent Lagos",
    "residential property management Lagos",
    "facility management Lagos",
    "property investment Lagos",
    "Lagos apartments",
    "Lagos homes",
    "furnished apartments Lagos",
    "unfurnished apartments Lagos",
    "shared apartments Lagos",
    "Spaces by Ara",
  ],

  authors: [{ name: "Spaces by Ara" }],

  openGraph: {
    title:
      "Spaces by Ara | Monthly Rental Apartments and Homes, Residential Property Management & Investment in Lagos",
    description:
      "Professionally managed monthly rental apartments and homes in Lagos, with residential property management, investment opportunities, and service partnerships.",
    type: "website",
    locale: "en_NG",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#EAFFE8" },
    { media: "(prefers-color-scheme: dark)", color: "#0A1E02" },
  ],
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-0P8Z4VEE42"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-0P8Z4VEE42');
        `}
      </Script>

      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
          storageKey="spaces-ara-theme"
        >
          <EnquiryModalProvider>
            <Header />
            <main className="min-h-screen pt-20">{children}</main>
            <Footer />
            <ScrollToTop />
            <EnquiryModal />
          </EnquiryModalProvider>
        </ThemeProvider>

        <Analytics />
      </body>
    </html>
  )
}