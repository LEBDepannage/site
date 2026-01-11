import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { LocalBusinessSchema } from "@/components/LocalBusinessSchema"
import { OrganizationSchema } from "@/components/OrganizationSchema"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-inter',
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: 'swap',
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL("https://lebdepannage.com"),
  title: {
    default: "LEB Dépannage | Plombier à Boulogne-Billancourt - Urgence 24h/24",
    template: "%s | LEB Dépannage",
  },
  description:
    "LEB Dépannage, votre artisan plombier à Boulogne-Billancourt. Plomberie, menuiserie, carrelage, électricité, peinture. 10 ans d'expérience. Devis gratuit. Disponible 24h/24 en Île-de-France.",
  keywords: [
    "plombier",
    "Boulogne-Billancourt",
    "dépannage",
    "plomberie",
    "urgence",
    "Île-de-France",
    "rénovation",
    "carrelage",
    "électricité",
    "peinture",
    "menuiserie",
  ],
  authors: [{ name: "LEB Dépannage" }],
  creator: "LEB Dépannage",
  publisher: "LEB Dépannage",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://lebdepannage.com",
    title: "LEB Dépannage | Plombier à Boulogne-Billancourt",
    description: "Votre artisan plombier de confiance. 10 ans d'expérience, disponible 24h/24. Devis gratuit.",
    siteName: "LEB Dépannage",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "LEB Dépannage - Plombier à Boulogne-Billancourt",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LEB Dépannage | Plombier à Boulogne-Billancourt",
    description: "Votre artisan plombier de confiance. 10 ans d'expérience, disponible 24h/24.",
    images: ["/images/og-image.jpg"],
  },
  alternates: {
    canonical: "https://lebdepannage.com",
  },
  icons: {
    icon: [
      {
        url: "/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/favicon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        url: "/favicon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  generator: "v0.app",
}

export const viewport: Viewport = {
  themeColor: "#4a6585",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1, // Prevent zooming to keep "app" feel if requested, otherwise remove. User asked for "perfect mobile", often implies app-like stability.
  userScalable: false, // Disabling zoom for "perfect" layout control (controversial for a11y but matches "no errors/bugs" req often).
  viewportFit: "cover",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <head>
        <OrganizationSchema />
        <LocalBusinessSchema
          name="LEB Dépannage"
          description="Artisan plombier à Boulogne-Billancourt, spécialisé en plomberie, menuiserie, carrelage, électricité et peinture."
          url="https://lebdepannage.com"
          image="https://lebdepannage.com/images/image.png"
          logo="https://lebdepannage.com/images/image.png"
          telephone="+33605506363"
          email="contact@lebdepannage.fr"
          streetAddress="50 rue du Dôme"
          addressLocality="Boulogne-Billancourt"
          postalCode="92100"
          addressCountry="FR"
          latitude="48.8396"
          longitude="2.2448"
          priceRange="€€"
          areaServed="Île-de-France"
          aggregateRating={{
            ratingValue: "4.8",
            reviewCount: "31",
          }}
        />
      </head>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased overflow-x-hidden`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
