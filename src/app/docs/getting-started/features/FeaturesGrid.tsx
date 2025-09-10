'use client'

import { GridLink, LinksGrid } from '@/components/LinksGrid'
import { routes } from '@/shared/navigation-data'

const featuresLinks: Array<GridLink> = [
  {
    href: routes.search,
    name: 'Search',
    description:
      "Find the right data and models quickly with Koi's powerful search tools.",
    icon: 'fa-regular fa-magnifying-glass text-koiPurple-100',
    showGrid: false,
  },
  {
    href: routes.customForecasts,
    name: 'Custom Forecasts',
    description: "Tailor Koi's forecasts to your specific needs.",
    icon: 'fa-regular fa-pencil text-koiPurple-200',
    showGrid: false,
  },
  {
    href: routes.collections,
    name: 'Collections',
    description:
      'Organize and compare your analyses with flexible collections.',
    icon: 'fa-regular fa-rectangle-history text-koiPurple-300',
    showGrid: false,
  },
  {
    href: routes.sharing,
    name: 'Sharing',
    description:
      'Easily share forecasts and collections with your team or external collaborators.',
    icon: 'fa-regular fa-share-nodes text-koiPurple-400',
    showGrid: false,
  },
  {
    href: routes.organizations,
    name: 'Organizations',
    description: 'Manage your team and collaboration settings in Koi.',
    icon: 'fa-solid fa-people-group text-koiPurple-500',
    showGrid: false,
  },
  {
    href: routes.koiCredits,
    name: 'Koi Credits',
    description: 'Unlock deeper access when you need it.',
    icon: 'fa-regular fa-unlock text-koiPurple-500',
    showGrid: false,
  },
]

export default function FeaturesGrid() {
  return <LinksGrid title="" gridLinks={featuresLinks} />
}
