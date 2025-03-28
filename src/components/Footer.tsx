'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { Button } from '@/components/Button'
import { navigation } from '@/shared/navigation'
import { Feedback } from '@/components/Feedback'
import { githubUrl, linkedinUrl } from '@/shared/urls'

function PageLink({
  label,
  page,
  previous = false,
}: {
  label: string
  page: { href: string; title: string }
  previous?: boolean
}) {
  return (
    <>
      <Button
        href={page.href}
        aria-label={`${label}: ${page.title}`}
        variant="secondary"
        arrow={previous ? 'left' : 'right'}
      >
        {label}
      </Button>
      <Link
        href={page.href}
        tabIndex={-1}
        aria-hidden="true"
        className="text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300"
      >
        {page.title}
      </Link>
    </>
  )
}

function PageNavigation() {
  let pathname = usePathname()
  let allPages = navigation.flatMap((group) => group.links)
  let currentPageIndex = allPages.findIndex((page) => page.href === pathname)

  if (currentPageIndex === -1) {
    return null
  }

  let previousPage = allPages[currentPageIndex - 1]
  let nextPage = allPages[currentPageIndex + 1]

  if (!previousPage && !nextPage) {
    return null
  }

  return (
    <div className="flex">
      {previousPage && (
        <div className="flex flex-col items-start gap-3">
          <PageLink label="Previous" page={previousPage} previous />
        </div>
      )}
      {nextPage && (
        <div className="ml-auto flex flex-col items-end gap-3">
          <PageLink label="Next" page={nextPage} />
        </div>
      )}
    </div>
  )
}

function SocialLink({
  href,
  icon,
  children,
}: {
  href: string
  icon: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="group"
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="sr-only">{children}</span>
      <i
        className={`h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500 ${icon}`}
      />
    </Link>
  )
}

function SmallPrint() {
  return (
    <div className="flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 sm:flex-row dark:border-white/5">
      <p className="text-xs text-zinc-600 dark:text-zinc-400">
        &copy; Copyright {new Date().getFullYear()}. All rights reserved.
      </p>
      <div className="flex gap-4">
        <SocialLink href={linkedinUrl} icon="fa-brands fa-linkedin-in">
          Follow us on LinkedIn
        </SocialLink>
        <SocialLink href={githubUrl} icon="fa-brands fa-github">
          Contribute on GitHub
        </SocialLink>
      </div>
    </div>
  )
}

export function Footer({
  className,
  id = 'footer-primary',
}: {
  className?: string
  id?: string
}) {
  return (
    <footer
      id={id}
      className={`mx-auto w-full space-y-10 px-10 pb-16 ${className || ''}`}
    >
      <PageNavigation />
      <Feedback />
      <SmallPrint />
    </footer>
  )
}
