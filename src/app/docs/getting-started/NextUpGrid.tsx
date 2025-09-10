'use client'

import { feedbackUrl, roadmapUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from '@/components/LinksGrid'

const nextUpLinks: Array<GridLink> = [
  {
    href: '/docs/data-and-methodology/overview',
    name: 'Methodology',
    description: "Review Koi's application of global methodologies.",
    icon: 'fa-regular fa-notebook text-koiBlue-400',
    showGrid: false,
  },
  {
    href: '/docs/data-and-methodology/koi-engine',
    name: 'Koi Engine',
    description: "Dive into Koi's data lake and AI-accelerated modeling.",
    icon: 'fa-kit fa-koi-icon-flat text-koiOrange-400',
    showGrid: false,
  },
  {
    href: `${feedbackUrl}`,
    external: true,
    name: 'Provide Feedback',
    description: 'Share your feedback and influence our roadmap.',
    icon: 'fa-regular fa-comment-dots text-koiYellow-400',
    showGrid: false,
  },
  {
    href: `${roadmapUrl}`,
    external: true,
    name: 'Track our Progress',
    description: 'View our public roadmap and progress.',
    icon: 'fa-regular fa-map text-koiGreen-400',
    showGrid: false,
  },
]

export default function NextUpGrid() {
  return <LinksGrid title="Next Up" gridLinks={nextUpLinks} />
}
