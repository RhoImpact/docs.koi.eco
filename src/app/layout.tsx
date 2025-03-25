import { type Metadata } from 'next'
import glob from 'fast-glob'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Koi Documentation',
    default: 'Koi Documentation',
  },
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let pages = await glob('**/*.mdx', { cwd: 'src/app' })
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ])
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/d6d6e756d5.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <html lang="en" className="h-full" suppressHydrationWarning>
        <body className="flex min-h-full bg-koiGray-800 antialiased">
          <Providers>
            <div className="w-full">
              <Layout allSections={allSections}>{children}</Layout>
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
