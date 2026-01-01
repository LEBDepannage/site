import type { SanityImageSource } from '@sanity/image-url/lib/types/types'

// Types pour la page Home
export interface HeroData {
  badge: string
  title: string
  subtitle: string
  ctaPrimary: {
    label: string
    phone: string
  }
  ctaSecondary: {
    label: string
    link: string
  }
  badges: Array<{
    _key: string
    text: string
    icon: string
  }>
  image?: SanityImageSource
}

export interface ServicesPreviewData {
  sectionLabel: string
  title: string
  description: any[] // Portable Text
  services: Array<{
    _key: string
    name: string
    anchor: string
  }>
  ctaText: string
}

export interface RealisationsPreviewData {
  sectionLabel: string
  title: string
  description: string
  realisations: Array<{
    _key: string
    title: string
    category: string
    location: string
    image?: SanityImageSource
  }>
  ctaText: string
}

export interface TestimonialsData {
  sectionLabel: string
  title: string
  description: string
  stats: Array<{
    _key: string
    value: string
    label: string
    icon: string
  }>
  platforms: Array<{
    _key: string
    name: string
    rating: number
    reviewCount: number
    link: string
    logo?: SanityImageSource
  }>
}

export interface HomePageData {
  hero: HeroData
  servicesPreview: ServicesPreviewData
  realisationsPreview: RealisationsPreviewData
  testimonials: TestimonialsData
}
