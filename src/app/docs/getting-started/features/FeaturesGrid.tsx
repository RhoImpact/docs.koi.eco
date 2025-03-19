'use client'

import { feedbackUrl, roadmapUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from '@/components/LinksGrid'
import routes from '@/shared/routes'

const featuresLinks: Array<GridLink> = [
  {
    href: routes.search,
    name: 'Search',
    description: 'Learn about how to find relevant data and models.',
    icon: 'fa-regular fa-magnifying-glass',
    showGrid: false,
  },
  {
    href: routes.collections,
    name: 'Collections',
    description: 'Learn about collections and what you can do with them.',
    icon: 'fa-regular fa-rectangle-history',
    showGrid: false,
  },
  {
    href: routes.sharing,
    name: 'Sharing',
    description: 'Learn about how to share your data with others.',
    icon: 'fa-regular fa-share-nodes',
    showGrid: false,
  },
]

export default function FeaturesGrid() {
  return <LinksGrid title="" gridLinks={featuresLinks} />
}
