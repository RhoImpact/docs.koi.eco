import Link from 'next/link'
import clsx from 'clsx'

import { LightbulbIcon } from '@/components/icons/LightbulbIcon'
import { InfoIcon } from '@/components/icons/InfoIcon'
import { WarningIcon } from '@/components/icons/WarningIcon'
import { FireIcon } from '@/components/icons/FireIcon'
import { Heading } from '@/components/Heading'
import { Prose } from '@/components/Prose'

export const a = Link
export { Button } from '@/components/Button'
export { CodeGroup, Code as code, Pre as pre } from '@/components/Code'

export function wrapper({ children }: { children: React.ReactNode }) {
  return (
    <article className="flex flex-col pb-10 pt-10">
      <Prose className="flex-auto">{children}</Prose>
    </article>
  )
}

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>
) {
  return <Heading level={2} {...props} />
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-koiBlue-400/30 bg-koiBlue-400/5 text-koiBlue-200 my-6 flex gap-2.5 rounded-2xl border p-4 leading-6 [--tw-prose-links-hover:theme(colors.koiBlue.300)] [--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="fill-koiBlue-200/20 stroke-koiBlue-200 mt-1 h-4 w-4 flex-none" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
export { Note as Info } // Alias for Note

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-koiOrange-300/30 bg-koiOrange-300/5 text-koiOrange-200 my-6 flex gap-2.5 rounded-2xl border p-4 leading-6 [--tw-prose-links-hover:theme(colors.koiOrange.300)] [--tw-prose-links:theme(colors.white)]">
      <WarningIcon className="fill-koiOrange-200/20 stroke-koiOrange-200 mt-1 h-4 w-4 flex-none" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-koiGreen-400/30 bg-koiGreen-500/5 text-koiGreen-200 my-6 flex gap-2.5 rounded-2xl border p-4 leading-6 [--tw-prose-links-hover:theme(colors.koiGreen.300)] [--tw-prose-links:theme(colors.white)]">
      <LightbulbIcon className="fill-koiGreen-200/20 stroke-koiGreen-200 mt-1 h-4 w-4 flex-none" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Danger({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-koiRed-400/30 bg-koiRed-400/5 text-koiRed-200 my-6 flex gap-2.5 rounded-2xl border p-4 leading-6 [--tw-prose-links-hover:theme(colors.koiRed.300)] [--tw-prose-links:theme(colors.white)]">
      <FireIcon className="fill-koiRed-200/20 stroke-koiRed-200 mt-1 h-4 w-4 flex-none" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Row({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2">
      {children}
    </div>
  )
}

export function Col({
  children,
  sticky = false,
}: {
  children: React.ReactNode
  sticky?: boolean
}) {
  return (
    <div
      className={clsx(
        '[&>:first-child]:mt-0 [&>:last-child]:mb-0',
        sticky && 'xl:sticky xl:top-24'
      )}
    >
      {children}
    </div>
  )
}

export function Properties({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6">
      <ul
        role="list"
        className="m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5"
      >
        {children}
      </ul>
    </div>
  )
}

export function Property({
  name,
  children,
  type,
}: {
  name: string
  children: React.ReactNode
  type?: string
}) {
  return (
    <li className="m-0 px-0 py-4 first:pt-0 last:pb-0">
      <dl className="m-0 flex flex-wrap items-center gap-x-3 gap-y-2">
        <dt className="sr-only">Name</dt>
        <dd>
          <code>{name}</code>
        </dd>
        {type && (
          <>
            <dt className="sr-only">Type</dt>
            <dd className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
              {type}
            </dd>
          </>
        )}
        <dt className="sr-only">Description</dt>
        <dd className="w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0">
          {children}
        </dd>
      </dl>
    </li>
  )
}
