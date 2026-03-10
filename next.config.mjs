import nextMDX from '@next/mdx'
import { recmaPlugins } from './src/mdx/recma.mjs'
import { rehypePlugins } from './src/mdx/rehype.mjs'
import { remarkPlugins } from './src/mdx/remark.mjs'
import withSearch from './src/mdx/search.mjs'

const withMDX = nextMDX({
  options: {
    remarkPlugins,
    rehypePlugins,
    recmaPlugins,
  },
})

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  env: {
    NEXT_PUBLIC_KOI_LANDING_BASE_URL:
      process.env.NEXT_PUBLIC_KOI_LANDING_BASE_URL || 'https://koi.eco',
    NEXT_PUBLIC_KOI_DOCS_BASE_URL:
      process.env.NEXT_PUBLIC_KOI_DOCS_BASE_URL || 'https://docs.koi.eco',
    NEXT_PUBLIC_KOI_STUDIO_BASE_URL:
      process.env.NEXT_PUBLIC_KOI_STUDIO_BASE_URL || 'https://app.koi.eco',
    NEXT_PUBLIC_KOI_FEEDBACK_BASE_URL:
      process.env.NEXT_PUBLIC_KOI_FEEDBACK_BASE_URL || 'https://product.koi.eco',
    NEXT_PUBLIC_POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST,
    NEXT_PUBLIC_POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
  },
}

export default withSearch(withMDX(nextConfig))
