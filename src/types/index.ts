export interface PricingPlan {
  id: string
  name: string
  tagline: string
  price: number
  pricePrefix?: string
  priceNote?: string
  period: string
  currency: string
  featured: boolean
  idealFor: string
  features: string[]
  cta: string
}

export interface ProcessStep {
  number: string
  name: string
  icon: string
  description: string
  duration: string
}

export interface Review {
  id: string
  author: string
  location: string
  rating: number
  service: string
  text: string
  initials: string
  color: string
}

export interface TrustBadge {
  label: string
  value: string
  sub?: string
}

export interface TeamMember {
  name: string
  role: string
  specialty: string
  photo: string
  tags: string[]
}

export interface FounderTimelineItem {
  year: string
  event: string
  detail: string
}

export interface ClientLogo {
  name: string
  src: string
  width?: number
  height?: number
  surface?: 'light' | 'dark'
  modal?: {
    industry: string
    location: string
    channel: string
    channelIcon: string
    services: string[]
    story: string
  }
}
