import type { LucideIcon } from "lucide-react"

export interface NavigationItem {
  name: string
  icon: LucideIcon
  href: string
  active?: boolean
}

export interface FeatureCard {
  title: string
  description: string
  icon: LucideIcon
  isNew: boolean
  gradient: string
}
