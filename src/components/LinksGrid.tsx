'use client'

import Link from 'next/link'
import {
  type MotionValue,
  motion,
  useMotionTemplate,
  useMotionValue,
} from 'framer-motion'

import { GridPattern } from '@/components/GridPattern'
import { Heading } from '@/components/Heading'

export interface GridLink {
  href: string // Link, can be internal or external
  external?: boolean // Whether the link is external
  name: string
  description: string
  icon?: string
  showGrid?: boolean
  gridPattern?: Omit<
    React.ComponentPropsWithoutRef<typeof GridPattern>,
    'width' | 'height' | 'x'
  >
}

function GridLinkIcon({ icon }: { icon: string }) {
  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-zinc-900/5 ring-1 ring-zinc-900/25 backdrop-blur-[2px] transition duration-300 group-hover:bg-white/50 group-hover:ring-zinc-900/25 dark:bg-white/7.5 dark:ring-white/15 dark:group-hover:bg-cyan-300/10 dark:group-hover:ring-cyan-400">
      <i
        className={`h-5 w-5 fill-zinc-700/10 stroke-zinc-700 transition-colors duration-300 group-hover:stroke-zinc-900 dark:fill-white/10 dark:stroke-zinc-400 dark:group-hover:fill-cyan-300/10 dark:group-hover:stroke-cyan-400 ${icon}`}
      />
    </div>
  )
}

function GridLinkPattern({
  mouseX,
  mouseY,
  ...gridProps
}: GridLink['gridPattern'] & {
  mouseX: MotionValue<number>
  mouseY: MotionValue<number>
  y: number
  squares?: [number, number][]
}) {
  let maskImage = useMotionTemplate`radial-gradient(180px at ${mouseX}px ${mouseY}px, white, transparent)`
  let style = { maskImage, WebkitMaskImage: maskImage }

  return (
    <div className="pointer-events-none">
      <div className="absolute inset-0 rounded-2xl transition duration-300 [mask-image:linear-gradient(white,transparent)] group-hover:opacity-50">
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/[0.02] stroke-black/5 dark:fill-white/1 dark:stroke-white/2.5"
          {...gridProps}
        />
      </div>
      <motion.div
        className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#d7e4ed] to-[#dffbf4] opacity-0 transition duration-300 group-hover:opacity-100 dark:from-[#202D2E] dark:to-[#283434]"
        style={style}
      />
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 mix-blend-overlay transition duration-300 group-hover:opacity-100"
        style={style}
      >
        <GridPattern
          width={72}
          height={56}
          x="50%"
          className="absolute inset-x-0 inset-y-[-30%] h-[160%] w-full skew-y-[-18deg] fill-black/50 stroke-black/70 dark:fill-white/2.5 dark:stroke-white/10"
          {...gridProps}
        />
      </motion.div>
    </div>
  )
}

function GridLink({ gridLink }: { gridLink: GridLink }) {
  const { showGrid = true, ...rest } = gridLink
  let mouseX = useMotionValue(0)
  let mouseY = useMotionValue(0)

  function onMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDivElement>) {
    let { left, top } = currentTarget.getBoundingClientRect()
    mouseX.set(clientX - left)
    mouseY.set(clientY - top)
  }

  return (
    <div
      key={gridLink.href}
      onMouseMove={onMouseMove}
      className="group relative flex rounded-2xl bg-koiGray-900/25 transition-shadow hover:shadow-md hover:shadow-black/5"
    >
      {showGrid && (
        <GridLinkPattern
          {...gridLink.gridPattern}
          mouseX={mouseX}
          mouseY={mouseY}
          y={Number(gridLink.gridPattern?.y) || 0}
          squares={gridLink.gridPattern?.squares || []}
        />
      )}
      <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-zinc-900/7.5 group-hover:ring-zinc-900/10 dark:ring-white/10 dark:group-hover:ring-white/20" />
      <div className="relative rounded-2xl px-4 pb-4 pt-16">
        <GridLinkIcon icon={gridLink.icon || ''} />
        <h3 className="mt-4 text-sm font-semibold leading-7 text-zinc-900 dark:text-white">
          {gridLink.external ? (
            <a href={gridLink.href} target="_blank" rel="noopener noreferrer">
              <span className="absolute inset-0 rounded-2xl" />
              {gridLink.name}
            </a>
          ) : (
            <Link href={gridLink.href}>
              <span className="absolute inset-0 rounded-2xl" />
              {gridLink.name}
            </Link>
          )}
        </h3>
        <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
          {gridLink.description}
        </p>
      </div>
    </div>
  )
}

export function LinksGrid({
  title,
  gridLinks,
}: {
  title: string
  gridLinks: GridLink[]
}) {
  return (
    <div className="my-8 xl:max-w-5xl">
      {title && (
        <Heading level={2} id={title}>
          {title}
        </Heading>
      )}
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-6 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {gridLinks.map((gridLink) => (
          <GridLink key={gridLink.href} gridLink={gridLink} />
        ))}
      </div>
    </div>
  )
}
