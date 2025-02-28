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
    // <SectionProvider sections={allSections[pathname] ?? []}>
    //   <div className="h-full lg:ml-72 xl:ml-80">
    //     <motion.header
    //       layoutScroll
    //       className="contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex"
    //     >
    //       <div className="contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 xl:w-80 lg:dark:border-white/10">
    //         <div className="hidden lg:flex">
    //           <Link href="/" aria-label="Home">
    //             <Logo className="h-6" />
    //           </Link>
    //         </div>
    //         <Header />
    //         <Navigation className="hidden lg:mt-10 lg:block" id="main-navigation" />
    //       </div>
    //     </motion.header>
    //     <div className="relative flex h-full flex-col px-4 pt-14 sm:px-6 lg:px-8">
    //       <div className={`flex ${allSections[pathname]?.length ? 'lg:pr-64' : ''}`}>
    //         <main className="flex-auto transition-all duration-300" id="main-content">{children}</main>
    //         {allSections[pathname]?.length > 0 && (
    //           <NavigationSections className="w-0 overflow-hidden fixed right-0 top-14 h-full transition-all duration-300 lg:w-64 lg:block bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-700" id="sidebar-navigation" />
    //         )}
    //       </div>
    //       <Footer />
    //     </div>
    //   </div>
    // </SectionProvider>
    <SectionProvider sections={allSections[pathname] ?? []}>
      <div className="flex min-h-screen">
        {/* Left Navigation */}
        <aside className="fixed inset-y-0 left-0 hidden w-72 overflow-y-auto border-r border-white/10 lg:block">
          <nav className="h-full px-6 py-4">
            <Link href="/" aria-label="Home">
              <Logo className="h-6" />
            </Link>
            <Navigation className="pt-10" id="main-navigation" />
          </nav>
        </aside>

        {/* Main Content Wrapper (Accounts for Left Navigation) */}
        <div className="flex flex-1 flex-col lg:ml-72">
          {/* Header (Full Width) */}
          <header className="flex h-14 w-full items-center justify-center">
            <Header />
          </header>

          {/* Main Content & Right Navigation */}
          <div className="flex h-full flex-row">
            <div
              className={`mr-0 flex w-full flex-col ${allSections[pathname]?.length > 0 ? 'lg:mr-48' : ''}`}
            >
              <main
                className="flex-1 transition-all duration-300"
                id="main-content"
              >
                {children}
              </main>
              {/* Footer (Same Width as Main Content) */}
              <Footer />
            </div>

            {/* Right Navigation (Fixed & Positioned After Header) */}
            {allSections[pathname]?.length > 0 && (
              <aside
                className="fixed right-0 top-14 hidden h-full w-48 border-l border-white/10 lg:block"
                id="right-nav"
              >
                <NavigationSections id="sidebar-navigation" />
                {/* <NavigationSections className="w-0 overflow-hidden fixed right-0 top-14 h-full transition-all duration-300 lg:w-64 lg:block bg-white dark:bg-gray-900 shadow-lg border-l border-gray-200 dark:border-gray-700" id="sidebar-navigation" /> */}
                {/* <nav className="h-full p-4">
          <div className="fixed">
            nav here
          </div>
          </nav> */}
              </aside>
            )}
          </div>
        </div>
      </div>
    </SectionProvider>
  )
}
