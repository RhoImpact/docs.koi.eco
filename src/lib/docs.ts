import { navigation } from '@/shared/navigation-data'

interface Doc {
  slug: string
  lastModified: string
}

function extractSlugs(links: any[]): string[] {
  const slugs: string[] = []
  
  for (const link of links) {
    if (link.href && link.href.startsWith('/docs/')) {
      slugs.push(link.href.replace('/docs/', ''))
    }
    
    if (link.links) {
      slugs.push(...extractSlugs(link.links))
    }
  }
  
  return slugs
}

export async function getAllDocs(): Promise<Doc[]> {
  const slugs = extractSlugs(navigation)
  
  return slugs.map(slug => ({
    slug,
    lastModified: new Date().toISOString() // TODO: get actual last modified dates
  }))
} 