import { MetadataRoute } from 'next'
import { docsUrl } from '@/shared/urls'
import { excludedUrls } from './sitemap'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: Array.from(excludedUrls).map(url => url.replace(docsUrl || '', '')),
    },
    sitemap: `${docsUrl}/sitemap.xml`,
  }
} 