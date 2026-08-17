import type { Metadata } from "next"
import { Geist_Mono, Public_Sans, Poppins } from "next/font/google"

import "./globals.css"
import { cn } from "@/lib/utils"
import { SITE_CONFIG } from "@/lib/constants"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer/footer"

/* -------------------------------------------------------------------------- */
/*  Fonts                                                                      */
/* -------------------------------------------------------------------------- */

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
  variable: "--font-display",
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

/* -------------------------------------------------------------------------- */
/*  Metadata (SEO)                                                             */
/* -------------------------------------------------------------------------- */

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.title,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords as string[],
  openGraph: {
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    type: "website",
    locale: "en_US",
  },
  metadataBase: new URL(SITE_CONFIG.url),
  robots: {
    index: true,
    follow: true,
  },
}

/* -------------------------------------------------------------------------- */
/*  Layout                                                                     */
/* -------------------------------------------------------------------------- */

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "font-sans antialiased",
        publicSans.variable,
        poppins.variable,
        fontMono.variable
      )}
    >
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
