'use client'

import { useRef, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import { useInitialValue, NavSection, navigation } from '@/shared/navigation'
import { useIsInsideNavigationMobile } from '@/components/NavigationMobile'
import { useSectionStore } from '@/components/SectionProvider'
import { NavLink } from '@/components/Navigation'

export const baseUrl = process.env.NEXT_PUBLIC_KOI_STUDIO_BASE_URL

// Find the navigation group (from navigation list out of constants/navigation.tsx) for the current pathname
// e.g. if pathname is /docs/getting-started/features
//      this will return the object for features in form of
//      { title: 'Features', href: '/docs/getting-started/features', links: [...] }
// if pathname is /docs/getting-started/features/collections
//     this will return the object for collections in form of
//     { title: 'Collections', href: '/docs/getting-started/features/collections', links: [...] }
function findGroupForPathname(
  links: NavSection[],
  pathname: string
): NavSection | null {
  for (const link of links) {
    if (link.href === pathname) {
      return link
    }
    if (link.links) {
      const found: NavSection | null = findGroupForPathname(
        link.links,
        pathname
      )
      if (found) {
        return found
      }
    }
  }
  return null
}

function NavigationSection({
  group,
  className,
}: {
  group: NavSection
  className?: string
}) {
  let isInsideNavigationMobile = useIsInsideNavigationMobile()
  let [pathname, sections] = useInitialValue(
    [usePathname(), useSectionStore((s) => s.sections)],
    isInsideNavigationMobile
  )

  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    // Set the initial hash value when the component mounts or pathname changes
    setCurrentHash(window.location.hash)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [pathname])

  const handleNavLinkClick = (hash: string) => {
    setCurrentHash(hash)
  }

  return (
    <li className={clsx('relative mt-6', className)}>
      <div className="relative mt-3 pr-2">
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
          {sections.map((section) => (
            <li key={section.id}>
              <NavLink
                href={`#${section.id}`}
                tag={section.tag}
                active={`#${section.id}` === currentHash}
                onClick={() => handleNavLinkClick(`#${section.id}`)}
              >
                {section.title}
              </NavLink>
            </li>
          ))}
        </motion.ul>
      </div>
    </li>
  )
}

export function NavigationSections(
  props: React.ComponentPropsWithoutRef<'nav'>
) {
  const pathname = usePathname() // Access the current pathname

  return (
    <nav {...props}>
      <ul role="list">
        {navigation.map((group, groupIndex) => {
          const activeGroup = findGroupForPathname(group.links, pathname)
          if (activeGroup) {
            return (
              <NavigationSection
                key={group.title}
                group={activeGroup}
                className={groupIndex === 0 ? 'md:mt-0' : ''}
              />
            )
          }
          return null
        })}
      </ul>
    </nav>
  )
}
