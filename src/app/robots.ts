import { MetadataRoute } from 'next'
import { docsUrl } from '@/shared/urls'
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${docsUrl}/sitemap.xml`,
  }
} 