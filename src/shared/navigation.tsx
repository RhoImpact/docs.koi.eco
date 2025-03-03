import { useRef } from 'react'

export interface NavGroup {
  title: string
  links: Array<{
    title: string
    href: string
    icon?: string
    tag?: string
    links?: Array<{
      title: string
      href: string
      icon?: string
      tag?: string
    }>
  }>
}

export interface NavSection {
  title: string
  href: string
  links?: NavSection[]
}

export function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

// The navigation along the left side of the page
export const navigation: Array<NavGroup> = [
  {
    title: 'Documentation',
    links: [{ title: 'Overview', href: '/', icon: 'fa-regular fa-house' }],
  },
  {
    title: 'New to Koi?',
    links: [
      {
        title: 'Start Here',
        href: '/docs/getting-started',
        icon: 'fa-regular fa-flag-swallowtail',
      },
      {
        title: 'Quickstart',
        href: '/docs/getting-started/quickstart',
        icon: 'fa-regular fa-rocket',
      },
      {
        title: 'Features',
        href: '/docs/getting-started/features',
        icon: 'fa-regular fa-bolt',
        links: [
          {
            title: 'Collections',
            href: '/docs/getting-started/features/collections',
          },
          // {
          //   title: 'Forecasts',
          //   href: '/docs/getting-started/features/forecasts',
          // },
          // {
          //   title: 'Search',
          //   href: '/docs/getting-started/features/search',
          // },
        ],
      },
      {
        title: 'FAQs',
        href: '/docs/getting-started/faqs',
        icon: 'fa-regular fa-comment-question',
      },
    ],
  },
  {
    title: 'Key Concepts',
    links: [
      { title: 'Summary', href: '/docs/key-concepts/summary' },
      {
        title: 'Avoided Emissions',
        href: '/docs/key-concepts/avoided-emissions',
      },
      { title: 'Methodologies', href: '/docs/key-concepts/methodologies' },
    ],
  },
  {
    title: 'API',
    links: [
      { title: 'API Reference', href: '/docs/api/reference' },
      { title: 'SDKs', href: '/docs/api/sdks' },
      { title: 'API Endpoints', href: '/docs/api/endpoints' },
      { title: 'Errors', href: '/docs/api/errors' },
    ],
  },
  {
    title: 'Useful Links',
    links: [
      { title: 'Koi', href: 'https://koi.eco' },
      { title: 'Rho Impact', href: 'https://rhoimpact.com' },
      { title: 'CRANE', href: 'https://cranetool.org' },
    ],
  },
]
