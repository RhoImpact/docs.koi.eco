import { forwardRef } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { motion, useScroll, useTransform } from 'framer-motion'

import { Button } from '@/components/Button'
import { Logo } from '@/components/Logo'
import {
  NavigationMobile,
  useIsInsideNavigationMobile,
} from '@/components/NavigationMobile'
import { useNavigationMobileStore } from '@/components/NavigationMobile'
import { MobileSearch, Search } from '@/components/Search'
import { baseUrl, landingUrl, feedbackUrl } from '@/shared/urls'

function TopLevelNavItem({
  href,
  children,
  target = '_self',
}: {
  href: string
  children: React.ReactNode
  target?: string
}) {
  return (
    <li>
      <Link
        href={href}
        target={target}
        className="text-sm leading-5 text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export const Header = forwardRef<
  React.ElementRef<'div'>,
  React.ComponentPropsWithoutRef<typeof motion.div>
>(function Header({ className, ...props }, ref) {
  let { isOpen: mobileNavIsOpen } = useNavigationMobileStore()
  let isInsideNavigationMobile = useIsInsideNavigationMobile()

  let { scrollY } = useScroll()
  let bgOpacityLight = useTransform(scrollY, [0, 72], [0.5, 0.9])
  let bgOpacityDark = useTransform(scrollY, [0, 72], [0.2, 0.8])

  return (
    <motion.div
      {...props}
      ref={ref}
      className={clsx(
        className,
        'fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8',
        !isInsideNavigationMobile &&
          'backdrop-blur-sm lg:left-72 dark:backdrop-blur',
        isInsideNavigationMobile
          ? 'bg-white dark:bg-zinc-900'
          : 'bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]'
      )}
      style={
        {
          '--bg-opacity-light': bgOpacityLight,
          '--bg-opacity-dark': bgOpacityDark,
        } as React.CSSProperties
      }
    >
      <div
        className={clsx(
          'absolute inset-x-0 top-full h-px transition',
          (isInsideNavigationMobile || !mobileNavIsOpen) &&
            'bg-zinc-900/7.5 dark:bg-white/7.5'
        )}
      />
      <Search />
      <div className="flex items-center gap-5 lg:hidden">
        <NavigationMobile />
        <Link href="https://koi.eco" aria-label="Home">
          <Logo className="h-6" />
        </Link>
      </div>
      <div className="flex items-center gap-5">
        <nav className="hidden md:block">
          <ul role="list" className="flex items-center gap-8">
            <TopLevelNavItem target="_blank" href={`${baseUrl}`}>
              Open Koi
            </TopLevelNavItem>
            <TopLevelNavItem href="/">Docs</TopLevelNavItem>
            <TopLevelNavItem
              target="_blank"
              href={`${feedbackUrl}/roadmap?utm_source=docs&utm_content=header-nav-link`}
            >
              Roadmap
            </TopLevelNavItem>
            <TopLevelNavItem
              target="_blank"
              href={`${landingUrl}/contact?topic=Support&utm_source=docs&utm_content=header-nav-link`}
            >
              Help
            </TopLevelNavItem>
          </ul>
        </nav>
        <div className="hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15" />
        <div className="flex gap-4">
          <MobileSearch />
        </div>
        <div className="hidden min-[416px]:contents">
          <Button href={`${baseUrl}/login`} target="_blank">
            Sign in
          </Button>
        </div>
      </div>
    </motion.div>
  )
})
