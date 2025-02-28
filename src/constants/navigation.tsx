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
  
export const navigation: Array<NavGroup> = [
    {
      title: 'Documentation',
      links: [
        { title: 'Overview', href: '/', icon: 'fa-regular fa-house' },
      ],
    },
    {
      title: 'New to Koi?',
      links: [
        { title: 'Getting Started', href: '/docs/getting-started', icon: 'fa-regular fa-flag-swallowtail' },
        { title: 'Quickstart', href: '/docs/getting-started/quickstart', icon: 'fa-regular fa-rocket' },
        { title: 'Features', href: '/docs/getting-started/features', icon: 'fa-regular fa-bolt', links: [
          { title: 'Collections', href: '/docs/getting-started/features/collections', icon: 'fa-regular fa-folder' },
          { title: 'Forecasts', href: '/docs/getting-started/features/forecasts', icon: 'fa-regular fa-chart-line' },
          { title: 'Search', href: '/docs/getting-started/features/search', icon: 'fa-regular fa-magnifying-glass' },
        ] },
        { title: 'FAQs', href: '/docs/getting-started/faqs', icon: 'fa-regular fa-comment-question' },
      ],
    },
    {
      title: 'Key Concepts',
      links: [
        { title: 'Overview', href: '/docs/key-concepts/overview' },
        { title: 'Avoided Emissions', href: '/docs/key-concepts/avoided-emissions' },
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
  