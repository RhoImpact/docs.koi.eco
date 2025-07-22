'use client'

import { baseUrl, feedbackUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from '@/components/LinksGrid'

const gettingStartedLinks: Array<GridLink> = [
  {
    href: `${baseUrl}/sign-up`,
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
    href: '/docs/data-and-methodology/koi-data',
    name: 'Understand Koi Data',
    description: 'Learn about the data that powers Koi.',
    icon: 'fa-regular fa-lightbulb text-koiGreen-400',
    showGrid: false,
  },
]

export default function GettingStartedGrid() {
  return <LinksGrid title="First Steps" gridLinks={gettingStartedLinks} />
}
