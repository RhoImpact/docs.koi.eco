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
    <article className="flex flex-col pb-10 pt-16">
      <Prose className="flex-auto">{children}</Prose>
    </article>
  )
}

export const h2 = function H2(
  props: Omit<React.ComponentPropsWithoutRef<typeof Heading>, 'level'>,
) {
  return <Heading level={2} {...props} />
}


export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-cyan-500/20 bg-cyan-50/50 p-4 leading-6 text-cyan-900 dark:border-cyan-500/30 dark:bg-cyan-500/5 dark:text-cyan-200 dark:[--tw-prose-links-hover:theme(colors.cyan.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <InfoIcon className="mt-1 h-4 w-4 flex-none fill-cyan-500 stroke-white dark:fill-cyan-200/20 dark:stroke-cyan-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}
export { Note as Info }  // Alias for Note

export function Warning({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-orange-500/20 bg-orange-50/50 p-4 leading-6 text-orange-900 dark:border-orange-500/30 dark:bg-orange-500/5 dark:text-orange-200 dark:[--tw-prose-links-hover:theme(colors.orange.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <WarningIcon className="mt-1 h-4 w-4 flex-none fill-orange-500 stroke-white dark:fill-orange-200/20 dark:stroke-orange-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Tip({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-green-500/20 bg-green-50/50 p-4 leading-6 text-green-900 dark:border-green-500/30 dark:bg-green-500/5 dark:text-green-200 dark:[--tw-prose-links-hover:theme(colors.green.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <LightbulbIcon className="mt-1 h-4 w-4 flex-none fill-green-500 stroke-white dark:fill-green-200/20 dark:stroke-green-200" />
      <div className="[&>:first-child]:mt-0 [&>:last-child]:mb-0">
        {children}
      </div>
    </div>
  )
}

export function Danger({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-6 flex gap-2.5 rounded-2xl border border-red-500/20 bg-red-50/50 p-4 leading-6 text-red-900 dark:border-red-500/30 dark:bg-red-500/5 dark:text-red-200 dark:[--tw-prose-links-hover:theme(colors.red.300)] dark:[--tw-prose-links:theme(colors.white)]">
      <FireIcon className="mt-1 h-4 w-4 flex-none fill-red-500 stroke-white dark:fill-red-200/20 dark:stroke-red-200" />
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
        sticky && 'xl:sticky xl:top-24',
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
