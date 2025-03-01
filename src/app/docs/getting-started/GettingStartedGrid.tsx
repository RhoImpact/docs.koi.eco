'use client'

import { studioUrl, feedbackUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from '@/components/LinksGrid'

const gettingStartedLinks: Array<GridLink> = [
  {
    href: `${studioUrl}/sign-up`,
    external: true,
    name: 'Sign Up',
    description: "Create a Koi account to get started. It's quick.",
    icon: 'fa-regular fa-user-plus text-koiBlue-400',
    showGrid: false,
  },
  {
    href: '/docs/getting-started/quickstart',
    name: 'Read the Quick Start',
    description: 'Learn how to use Koi by working through examples.',
    icon: 'fa-regular fa-rocket text-koiOrange-400',
    showGrid: false,
  },
  {
    href: '/docs/getting-started/features',
    name: 'Review Key Features',
    description: 'Learn about the key features of Koi.',
    icon: 'fa-regular fa-bolt text-yellow-400',
    showGrid: false,
  },
  {
    href: '/docs/key-concepts/summary',
    name: 'Learn Key Concepts',
    description: 'Learn about the key concepts of Koi.',
    icon: 'fa-regular fa-lightbulb text-koiGreen-400',
    showGrid: false,
  },
]

export function GettingStartedGrid() {
  return <LinksGrid title="First Steps" gridLinks={gettingStartedLinks} />
}
