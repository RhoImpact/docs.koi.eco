// Define all routes in one place
export const routes = {
  search: '/docs/getting-started/features/search',
  collections: '/docs/getting-started/features/collections',
  sensitivityAnalysis:
    '/docs/getting-started/features/collections#use-case:-sensitivity-analysis',
  modelSearch: '/docs/getting-started/features/search#model-search',
  baselineSearch: '/docs/getting-started/features/search#baseline-search',
  sharing: '/docs/getting-started/features/sharing',
  organizations: '/docs/getting-started/features/organizations',
  groups: '/docs/getting-started/features/organizations#groups',
  customForecasts: '/docs/getting-started/features/custom-forecasts',
} as const

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
        title: 'Use Cases',
        href: '/docs/getting-started/use-cases',
        icon: 'fa-regular fa-file-chart-column',
      },
      {
        title: 'Features',
        href: '/docs/getting-started/features',
        icon: 'fa-regular fa-bolt',
        links: [
          {
            title: 'Search',
            href: routes.search,
          },
          {
            title: 'Custom Forecasts',
            href: routes.customForecasts,
          },
          {
            title: 'Collections',
            href: routes.collections,
          },
          {
            title: 'Sharing',
            href: routes.sharing,
          },
          {
            title: 'Organizations',
            href: routes.organizations,
          },
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
      { title: 'Koi Engine', href: '/docs/key-concepts/koi-engine' },
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
