'use client'

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from '@headlessui/react'

export function FaqSection({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <div className="mt-10 first:mt-0">
      <h2 className="text-lg font-semibold text-white">{title}</h2>
      <div className="mt-4 divide-y divide-zinc-800">{children}</div>
    </div>
  )
}

export function FaqItem({
  question,
  children,
}: {
  question: string
  children: React.ReactNode
}) {
  return (
    <Disclosure as="div" className="py-3">
      {({ open }) => (
        <>
          <DisclosureButton className="group flex w-full items-start justify-between text-left">
            <span className="text-sm font-medium text-zinc-200 group-hover:text-white transition-colors">
              {question}
            </span>
            <span className="ml-4 mt-0.5 flex-none">
              <svg
                className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </DisclosureButton>
          <DisclosurePanel
            transition
            className="origin-top transition duration-200 ease-out data-[closed]:scale-y-95 data-[closed]:opacity-0 pt-3 pb-1 text-sm text-zinc-400 [&>:first-child]:mt-0 [&>:last-child]:mb-0 [&_a]:text-koiBlue-400 [&_a:hover]:text-koiBlue-300 [&_strong]:text-zinc-300 [&_code]:text-zinc-300"
          >
            {children}
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  )
}
