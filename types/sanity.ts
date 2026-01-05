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

// Types pour la page Services
export interface ServiceData {
  _key: string
  id: {
    current: string
  }
  icon: string
  title: string
  description: string
  details: string[]
}

export interface ServicesPageData {
  hero: {
    title: string
    description: string
  }
  services: ServiceData[]
  cta: {
    title: string
    description: string
    primaryButton: {
      label: string
      phone: string
    }
    secondaryButton: {
      label: string
      link: string
    }
  }
}

// Types pour la page Réalisations
export interface RealisationData {
  _key: string
  title: string
  category: string
  location: string
  mediaType: 'image' | 'video'
  image?: SanityImageSource
  video?: {
    asset: {
      _ref: string
      _type: string
    }
  }
}

export interface RealisationsPageData {
  hero: {
    title: string
    description: string
  }
  categories: string[]
  realisations: RealisationData[]
  cta: {
    title: string
    description: string
    buttonText: string
    buttonLink: string
  }
}

// Types pour la page Contact
export interface ContactPageData {
  hero: {
    title: string
    description: string
  }
  contactCard: {
    title: string
    description: string
  }
}

// Types pour les pages légales
export interface LegalPageData {
  slug: {
    current: string
  }
  title: string
  lastUpdated?: string
  content: any[] // Portable Text blocks
}
