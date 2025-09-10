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
  koiCredits: '/docs/getting-started/features/koi-credits',
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
            title: 'Collections',
            href: routes.collections,
          },
          {
            title: 'Custom Forecasts',
            href: routes.customForecasts,
          },
          {
            title: 'Koi Credits',
            href: routes.koiCredits,
          },
          {
            title: 'Organizations',
            href: routes.organizations,
          },
          {
            title: 'Search',
            href: routes.search,
          },
          {
            title: 'Sharing',
            href: routes.sharing,
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
    title: 'Koi Methodology',
    links: [
      {
        title: 'Overview',
        href: '/docs/data-and-methodology/overview',
      },
      {
        title: 'Key Concepts',
        href: '/docs/data-and-methodology/terms-and-concepts',
        links: [
          {
            title: 'Avoided Emissions',
            href: '/docs/data-and-methodology/avoided-emissions',
          },
          {
            title: 'Mathematical Foundations',
            href: '/docs/data-and-methodology/mathematical-foundations',
          },
        ],
      },
      {
        title: 'Data Sources & Inputs',
        href: '/docs/data-and-methodology/koi-data',
      },
      {
        title: 'Koi Engine',
        href: '/docs/data-and-methodology/koi-engine',
      },
      // {
      //   title: 'Classification Systems',
      //   href: '/docs/data-and-methodology/classification-overview',
      //   links: [
      //     {
      //       title: 'Direct',
      //       href: '/docs/data-and-methodology/classification-direct',
      //     },
      //     {
      //       title: 'Facilitating',
      //       href: '/docs/data-and-methodology/classification-facilitating',
      //     },
      //     {
      //       title: 'Emissions Removal',
      //       href: '/docs/data-and-methodology/classification-emissions-removal',
      //     },
      //   ],
      // },
      {
        title: 'Methodology Alignment',
        href: '/docs/data-and-methodology/methodology-alignment',
      },
    ],
  },
  {
    title: 'API',
    links: [
      { title: 'API Reference', href: '/docs/api/reference' },
      { title: 'SDKs', href: '/docs/api/sdks' },
      // { title: 'API Endpoints', href: '/docs/api/endpoints' },
      // { title: 'Errors', href: '/docs/api/errors' },
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
