'use client'

import { useRef, useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { AnimatePresence, motion, useIsPresent } from 'framer-motion'
import { NavGroup, navigation } from '@/constants/navigation'
import { useIsInsideNavigationMobile } from '@/components/NavigationMobile'
import { useSectionStore } from '@/components/SectionProvider'
import { Tag } from '@/components/Tag'
import { NavLink } from '@/components/Navigation'

export const baseUrl = process.env.NEXT_PUBLIC_KOI_STUDIO_BASE_URL

function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
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

  const [currentHash, setCurrentHash] = useState('')

  useEffect(() => {
    // Set the initial hash value when the component mounts
    setCurrentHash(window.location.hash)

    const handleHashChange = () => {
      setCurrentHash(window.location.hash)
    }

    window.addEventListener('hashchange', handleHashChange)

    return () => {
      window.removeEventListener('hashchange', handleHashChange)
    }
  }, [])

  const handleNavLinkClick = (hash: string) => {
    setCurrentHash(hash)
  }

  return (
    <li className={clsx('relative mt-6', className)}>
      <div className="relative mt-3 pl-2">
        <ul role="list" className="border-l border-transparent">
          {group.links.map((link, idx) => (
            <motion.li key={link.href + idx} layout="position" className="relative">
              <AnimatePresence mode="popLayout" initial={false}>
                {/* Add sections to the navigation (anchor tags based on headings in the page) */}
                {link.href === pathname && sections.length > 0 && (
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
                          href={`${link.href}#${section.id}`}
                          tag={section.tag}
                          active={`#${section.id}` === currentHash}
                          isAnchorLink
                          onClick={() => handleNavLinkClick(`#${section.id}`)}
                        >
                          {section.title}
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


export function NavigationSections(props: React.ComponentPropsWithoutRef<'nav'>) {
  return (
    <nav {...props}>
      <ul role="list">
        {/* todo: only for the current page and only for sections */}
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
