import type React from "react"

interface LocalBusinessSchemaProps {
  name: string
  description: string
  telephone: string
  email: string
  streetAddress: string
  addressLocality: string
  postalCode: string
  addressCountry: string
  latitude: string
  longitude: string
  url: string
  logo?: string
  image?: string
  priceRange?: string
  areaServed?: string
  openingHours?: {
    dayOfWeek: string[]
    opens: string
    closes: string
  }
  aggregateRating?: {
    ratingValue: string
    reviewCount: string
  }
}

export function LocalBusinessSchema({
  name,
  description,
  telephone,
  email,
  streetAddress,
  addressLocality,
  postalCode,
  addressCountry,
  latitude,
  longitude,
  url,
  logo,
  image,
  priceRange = "€€",
  areaServed = "Île-de-France",
  openingHours = {
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    opens: "00:00",
    closes: "23:59",
  },
  aggregateRating,
}: LocalBusinessSchemaProps): React.ReactElement {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name,
    description,
    url,
    ...(logo && { logo }),
    ...(image && { image }),
    telephone,
    email,
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality,
      postalCode,
      addressCountry,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude,
      longitude,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: openingHours.dayOfWeek,
      opens: openingHours.opens,
      closes: openingHours.closes,
    },
    priceRange,
    areaServed: {
      "@type": "Place",
      name: areaServed,
    },
    ...(aggregateRating && {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: aggregateRating.ratingValue,
        reviewCount: aggregateRating.reviewCount,
      },
    }),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  )
}
