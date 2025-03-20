'use client'

import { feedbackUrl, roadmapUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from '@/components/LinksGrid'
import routes from '@/shared/routes'

const featuresLinks: Array<GridLink> = [
  {
    href: routes.search,
    name: 'Search',
    description:
      'Find the right data and models quickly with Koi’s powerful search tools.',
    icon: 'fa-regular fa-magnifying-glass',
    showGrid: false,
  },
  {
    href: routes.collections,
    name: 'Collections',
    description:
      'Organize and compare your analyses with flexible collections.',
    icon: 'fa-regular fa-rectangle-history',
    showGrid: false,
  },
  {
    href: routes.sharing,
    name: 'Sharing',
    description:
      'Easily share forecasts and collections with your team or external collaborators.',
    icon: 'fa-regular fa-share-nodes',
    showGrid: false,
  },
  {
    href: routes.organization,
    name: 'Organization',
    description: 'Manage your team and collaboration settings in Koi.',
    icon: 'fa-solid fa-people-group',
    showGrid: false,
  },
]

export default function FeaturesGrid() {
  return <LinksGrid title="" gridLinks={featuresLinks} />
}
