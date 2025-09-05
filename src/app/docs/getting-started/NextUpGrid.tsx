'use client'

import { feedbackUrl, roadmapUrl } from '@/shared/urls'
import { GridLink, LinksGrid } from '@/components/LinksGrid'

const nextUpLinks: Array<GridLink> = [
  {
    href: '/docs/data-and-methodology/avoided-emissions',
    name: 'Avoided Emissions',
    description: 'Learn about avoided emissions and what to do with them.',
    icon: 'fa-regular fa-chart-line-up-down',
    showGrid: false,
  },
  {
    href: '/docs/data-and-methodology/overview',
    name: 'Methodologies',
    description: "Review Koi's methodology and aligned global methodologies.",
    icon: 'fa-regular fa-notebook',
    showGrid: false,
  },
  {
    href: `${feedbackUrl}`,
    external: true,
    name: 'Provide Feedback',
    description: 'Share your feedback and influence our roadmap.',
    icon: 'fa-regular fa-comment-dots',
    showGrid: false,
  },
  {
    href: `${roadmapUrl}`,
    external: true,
    name: 'Track our Progress',
    description: 'View our public roadmap and progress.',
    icon: 'fa-regular fa-map',
    showGrid: false,
  },
]

export default function NextUpGrid() {
  return <LinksGrid title="Next Up" gridLinks={nextUpLinks} />
}
