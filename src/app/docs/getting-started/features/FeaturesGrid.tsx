'use client'

import { feedbackUrl, roadmapUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from '@/components/LinksGrid'

const featuresLinks: Array<GridLink> = [
  {
    href: '/docs/getting-started/features/collections',
    name: 'Collections',
    description: 'Learn about collections and what you can do with them.',
    icon: 'fa-regular fa-rectangle-history',
    showGrid: false,
  },
]

export default function FeaturesGrid() {
  return <LinksGrid title="" gridLinks={featuresLinks} />
}
