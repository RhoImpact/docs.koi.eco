import { MetadataRoute } from 'next'
import { getAllDocs } from '../lib/docs'
import { docsUrl } from '@/shared/urls'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  if (!docsUrl) return []
  
  // Get all documentation pages
  const docs = await getAllDocs()
  
  // Generate sitemap entries for docs
  const docRoutes = docs.map((doc) => ({
    url: `${docsUrl}/docs/${doc.slug}`,
    lastModified: new Date(doc.lastModified),
    changeFrequency: 'weekly' as const,
    priority: 0.6,
  }))

  // Static routes
  const staticRoutes = [
    {
      url: docsUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${docsUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    // Add more static routes as needed
  ]

  return [...staticRoutes, ...docRoutes]
}