import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const guides = [
  {
    href: '/docs/quickstart',
    name: 'Quickstart',
    description: 'Get started with Koi in minutes.',
  },
  {
    href: '/docs/resources/key-concepts-overview',
    name: 'Key Concepts',
    description: 'Learn about the art and science of impact forecasting.',
  },
  {
    href: '/docs/resources/avoided-emissions',
    name: 'Avoided Emissions',
    description:
      'Learn about determining the amount of avoided emissions that can be attributed to climate solutions.',
  },
  {
    href: '/docs/api/reference',
    name: 'REST API',
    description:
      'Integrate our robust climate forecasting data into your workflows.',
  },
]

export function Guides() {
  return (
    <div className="my-16 xl:max-w-none">
      <Heading level={2} id="guides">
        Guides
      </Heading>
      <div className="not-prose mt-4 grid grid-cols-1 gap-8 border-t border-zinc-900/5 pt-10 sm:grid-cols-2 xl:grid-cols-4 dark:border-white/5">
        {guides.map((guide) => (
          <div key={guide.href}>
            <h3 className="text-sm font-semibold text-zinc-900 dark:text-white">
              {guide.name}
            </h3>
            <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
              {guide.description}
            </p>
            <p className="mt-4">
              <Button
                href={guide.href}
                variant="text"
                arrow="right"
                aria-label={`${guide.description}`}
              >
                {guide.name}
              </Button>
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
