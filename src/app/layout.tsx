import { type Metadata } from 'next'
import glob from 'fast-glob'
import Script from 'next/script'
import { Open_Sans } from 'next/font/google'

import { Providers } from '@/app/providers'
import { Layout } from '@/components/Layout'
import { type Section } from '@/components/SectionProvider'

import '@/styles/tailwind.css'

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Koi Documentation',
    default: 'Koi Documentation',
  },
  description: 'Koi documentation -- avoided emissions forecasts, methodology, and API reference for institutional investors and financial platforms.',
  metadataBase: new URL('https://docs.koi.eco'),
  openGraph: {
    type: 'website',
    siteName: 'Koi Documentation',
    images: [{ url: 'https://koi.eco/social/og-default.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['https://koi.eco/social/og-default.png'],
  },
  alternates: {
    canonical: './',
  },
  other: {
    'og:locale': 'en_US',
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
      <html lang="en" className={`h-full ${openSans.variable}`} suppressHydrationWarning>
        <head>
          <link rel="service-desc" href="https://rhoimpact-bucket-public.s3.us-east-1.amazonaws.com/koi/openapi/openapi.json" type="application/json" />
          <link rel="service-doc" href="https://docs.koi.eco/docs/api/reference" />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Koi Documentation',
              url: 'https://docs.koi.eco',
            }) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Rho Impact',
              url: 'https://rhoimpact.com',
              logo: 'https://koi.eco/favicon/android-icon-192x192.png',
              description: 'Rho Impact builds Koi, delivering decision-grade avoided emissions forecasts and asset-level climate analytics for institutional investors and financial platforms.',
            }) }}
          />
        </head>
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
