'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { NavGroup, navigation, useInitialValue } from '@/shared/navigation'
import { useIsInsideNavigationMobile } from '@/components/NavigationMobile'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'

export const baseUrl = process.env.NEXT_PUBLIC_KOI_STUDIO_BASE_URL

function MobileTopLevelNavItem({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <li className="md:hidden">
      <Link
        href={href}
        className="block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
      >
        {children}
      </Link>
    </li>
  )
}

export function NavLink({
  href,
  children,
  tag,
  icon,
  active = false,
  isAnchorLink = false,
  onClick,
}: {
  href: string
  children: React.ReactNode
  tag?: string
  icon?: string
  active?: boolean
  isAnchorLink?: boolean
  onClick?: () => void
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
      className={clsx(
        'flex justify-start gap-2 py-1 pr-3 text-sm transition',
        isAnchorLink ? 'pl-7' : 'pl-4',
        active
          ? 'rounded-r-md border-l-2 border-cyan-500 bg-white/5 text-zinc-900 dark:text-white'
          : 'text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white'
      )}
    >
      {icon && (
        <span className="truncate">
          <i className={`${icon}`}></i>
        </span>
      )}
      <span className="truncate">{children}</span>
      {tag && (
        <Tag variant="small" color="zinc">
          {tag}
        </Tag>
      )}
    </Link>
  )
}

function NavigationGroup({
  group,
  className,
}: {
  group: NavGroup
  className?: string
}) {
  // If this is the mobile navigation then we always render the initial
  // state, so that the state does not change during the close animation.
  // The state will still update when we re-open (re-render) the navigation.
  let isInsideNavigationMobile = useIsInsideNavigationMobile()
  let [pathname, sections] = useInitialValue(
    [usePathname(), useSectionStore((s) => s.sections)],
    isInsideNavigationMobile
  )

  let isActiveGroup =
    group.links.findIndex((link) => link.href === pathname) !== -1

  return (
    <li className={clsx('relative mt-6', className)}>
      <motion.h2
        layout="position"
        className="text-xs font-semibold text-zinc-900 dark:text-white"
      >
        {group.title}
      </motion.h2>
      <div className="relative mt-3 pl-2">
        <motion.div
          layout
          className="absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"
        />
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link, idx) => (
            <motion.li
              key={link.href + idx}
              layout="position"
              className="relative"
            >
              <NavLink
                href={link.href}
                active={link.href === pathname}
                tag={link.tag}
                icon={link.icon}
              >
                {link.title}
              </NavLink>
              <AnimatePresence mode="popLayout" initial={false}>
                {/* Add subpages to the navigation (subPages are defined in the page.mdx file) */}
                {(link.href === pathname ||
                  (link.links &&
                    link.links.some(
                      (subLink) => subLink.href === pathname
                    ))) && (
                  <motion.ul
                    role="list"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 0.1 },
                    }}
                    exit={{
                      opacity: 0,
                      transition: { duration: 0.15 },
                    }}
                  >
                    {link.links?.map((subLink, idx) => (
                      <li key={subLink.href + idx}>
                        <NavLink
                          href={subLink.href}
                          tag={subLink.tag}
                          icon={subLink.icon}
                          isAnchorLink
                          active={subLink.href === pathname}
                        >
                          {subLink.title}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export function Navigation(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul role="list">
        <MobileTopLevelNavItem href="/">
          Documentation Home
        </MobileTopLevelNavItem>
        <MobileTopLevelNavItem href={`${baseUrl}`}>
          Go to Koi
        </MobileTopLevelNavItem>
        <MobileTopLevelNavItem href={`${baseUrl}/contact`}>
          Support
        </MobileTopLevelNavItem>
        {navigation.map((group, groupIndex) => (
          <NavigationGroup
            key={group.title}
            group={group}
            className={groupIndex === 0 ? 'md:mt-0' : ''}
          />
        ))}
      </ul>
    </nav>
  )
}
