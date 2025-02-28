'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Logo } from '@/components/Logo'
import { Navigation } from '@/components/Navigation'
import { NavigationSections } from '@/components/NavigationSections'
import { type Section, SectionProvider } from '@/components/SectionProvider'

export function Layout({
  children,
  allSections,
}: {
  children: React.ReactNode
  allSections: Record<string, Array<Section>>
}) {
  let pathname = usePathname()

  return (
    <SectionProvider sections={allSections[pathname] ?? []}>
      <div className="h-full lg:ml-72 xl:ml-80">
        <motion.header
          layoutScroll
          className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
        >
          <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10">
            <div className="hidden lg:flex">
              <Link href="/" aria-label="Home">
                <Logo className="h-6" />
              </Link>
            </div>
            <Header />
            <Navigation className="hidden lg:mt-10 lg:block" id="main-navigation" />
          </div>
        </motion.header>
        <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
          <div className={`flex ${allSections[pathname]?.length ? 'lg:pr-64' : ''}`}>
            <main className="flex-auto transition-all duration-300" id="main-content">{children}</main>
            {allSections[pathname]?.length > 0 && (
              <NavigationSections className="w-0 overflow-hidden fixed right-0 top-14 h-full transition-all duration-300 lg:w-64 lg:block bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-700" id="sidebar-navigation" />
            )}
          </div>
          <Footer />
        </div>
      </div>
    </SectionProvider>
  )
}
