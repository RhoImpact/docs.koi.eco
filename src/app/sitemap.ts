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
    priority: 0.5,
  }))

  // Routes with custom settings (most commonly when setting priority higher than 0.5)
  const staticRoutes = [
    {
      url: docsUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${docsUrl}/docs/getting-started`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${docsUrl}/docs/key-concepts/avoided-emissions`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
  ]

  // Combine and deduplicate, preferring staticRoutes when there's a URL conflict
  return [...staticRoutes, ...docRoutes].filter(
    (route, index, self) =>
      index === self.findIndex((r) => r.url === route.url)
  )
}