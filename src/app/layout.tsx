import { type Metadata } from 'next'
import glob from 'fast-glob'
import Script from 'next/script'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section, type SubPage } from '@/components/SectionProvider'

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

  // Get all sections from all pages, if exported as `const sections` in the page.mdx file
  let allSectionsEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).sections,
    ]),
  )) as Array<[string, Array<Section>]>
  let allSections = Object.fromEntries(allSectionsEntries)

  // Get all subpages from all pages, if exported as `const subPages` in the page.mdx file
  let allSubPagesEntries = (await Promise.all(
    pages.map(async (filename) => [
      '/' + filename.replace(/(^|\/)page\.mdx$/, ''),
      (await import(`./${filename}`)).subPages,
    ]),
  )) as Array<[string, Array<SubPage>]>
  let allSubPages = Object.fromEntries(allSubPagesEntries)

  return (
    <>
      <Script
        src="https://kit.fontawesome.com/d6d6e756d5.js"
        crossOrigin="anonymous"
        strategy="lazyOnload"
      />
      <html lang="en" className="h-full" suppressHydrationWarning>
        <body className="flex min-h-full bg-white antialiased dark:bg-zinc-900">
          <Providers>
            <div className="w-full">
              <Layout allSections={allSections} allSubPages={allSubPages}>
                {children}
              </Layout>
            </div>
          </Providers>
        </body>
      </html>
    </>
  )
}
