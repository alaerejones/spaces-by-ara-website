import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ScrollToTop } from '@/components/scroll-to-top'
import { EnquiryModalProvider } from '@/components/enquiry-modal-context'
import { EnquiryModal } from '@/components/enquiry-modal'
import Script from "next/script"
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: 'Spaces by Ara | Monthly Homes in Lagos',
  description: 'Spaces by Ara provides professionally managed residential Homes in Lagos designed for long term living with monthly payment structures.',
  keywords: ['Lagos apartments', 'monthly rent Lagos', 'facility management Nigeria', 'shared apartments Lagos', 'residential Homes Lagos'],
  authors: [{ name: 'Spaces by Ara' }],
  openGraph: {
    title: 'Spaces by Ara | Monthly Homes in Lagos',
    description: 'Professionally managed residential Homes in Lagos designed for long term living with monthly payment structures.',
    type: 'website',
    locale: 'en_NG',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#EAFFE8' },
    { media: '(prefers-color-scheme: dark)', color: '#0A1E02' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
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
            <main className="min-h-screen pt-20">
              {children}
            </main>
            <Footer />
            <ScrollToTop />
            <EnquiryModal />
          </EnquiryModalProvider>
        </ThemeProvider>
        <Analytics />
        <link
  href="https://calendar.google.com/calendar/scheduling-button-script.css"
  rel="stylesheet"
/>

<Script
  src="https://calendar.google.com/calendar/scheduling-button-script.js"
  strategy="lazyOnload"
/>
      </body>
    </html>
  )
}
