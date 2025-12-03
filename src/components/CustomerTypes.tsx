import React from 'react'

type CustomerTypeColor = 'blue' | 'green' | 'gray' | 'yellow' | 'red'

interface CustomerType {
  label: string
  subtext?: string
  color?: CustomerTypeColor
}

interface CustomerTypesProps {
  types: (string | CustomerType)[]
}

const colorStyles: Record<CustomerTypeColor, string> = {
  blue: 'bg-cyan-400/10 text-cyan-600 ring-cyan-400/30 dark:bg-cyan-400/10 dark:text-cyan-400 dark:ring-cyan-400/30',
  green:
    'bg-emerald-400/10 text-emerald-600 ring-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/30',
  gray: 'bg-zinc-400/10 text-zinc-600 ring-zinc-400/30 dark:bg-zinc-400/10 dark:text-zinc-400 dark:ring-zinc-400/30',
  yellow:
    'bg-amber-400/10 text-amber-600 ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/30',
  red: 'bg-rose-400/10 text-rose-600 ring-rose-400/30 dark:bg-rose-400/10 dark:text-rose-400 dark:ring-rose-400/30',
}

export function CustomerTypes({ types }: CustomerTypesProps) {
  return (
    <div className="not-prose my-4">
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {types.map((type, idx) => {
          const isObject = typeof type === 'object'
          const label = isObject ? type.label : type
          const subtext = isObject ? type.subtext : undefined
          const color = isObject && type.color ? type.color : 'blue'
          const colorClass = colorStyles[color]

          return (
            <div
              key={idx}
              className={`flex flex-col rounded-lg px-4 py-3 ring-1 ring-inset ${colorClass}`}
            >
              <div className="flex items-start">
                <svg
                  className="mr-2 mt-0.5 h-4 w-4 flex-shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 6h.008v.008H6V6z"
                  />
                </svg>
                <div className="flex-1">
                  <div className="text-sm font-semibold leading-snug">
                    {label}
                  </div>
                  {subtext && (
                    <div className="mt-1 text-xs font-normal leading-snug opacity-80">
                      {subtext}
                    </div>
                  )}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
