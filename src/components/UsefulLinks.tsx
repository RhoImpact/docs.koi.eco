'use client'

import { studioUrl, feedbackUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from './LinksGrid'

const usefulLinks: Array<GridLink> = [
  {
    href: `${studioUrl}`,
    external: true,
    name: 'Koi Studio',
    description: 'Use Koi to calculate the impact of new technologies.',
    icon: 'fa-kit fa-koi-icon-flat text-koiOrange-400',
    gridPattern: {
      y: 16,
      squares: [
        [0, -1],
        [1, 3],
      ],
    },
  },
  {
    href: `${feedbackUrl}`,
    external: true,
    name: 'Product Feedback',
    description: 'Share your feedback and influence our roadmap.',
    icon: 'fa-regular fa-comment-dots',
    gridPattern: {
      y: 16,
      squares: [
        [0, 1],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://rhoimpact.com',
    external: true,
    name: 'Rho Impact',
    description: 'See more about Rho Impact, the team behind Koi.',
    icon: 'fa-kit fa-rho-icon-flat text-rhoBlueLight-700',
    gridPattern: {
      y: -6,
      squares: [
        [-1, 2],
        [1, 3],
      ],
    },
  },
  {
    href: 'https://cranetool.org',
    external: true,
    name: 'CRANE Tool',
    description:
      'Explore CRANE, a free tool for calculating emissions reduction potential.',
    icon: 'fa-kit fa-crane-icon-flat text-koiGreen-400',
    gridPattern: {
      y: 32,
      squares: [
        [0, 2],
        [1, 4],
      ],
    },
  },
]

export function UsefulLinks() {
  return <LinksGrid title="Useful Links" gridLinks={usefulLinks} />
}
