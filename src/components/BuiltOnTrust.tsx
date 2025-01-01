// import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'

const references = [
  {
    description:
      "Co-creators of the world's most comprehensive free tool for projecting potential impact.",
    topline: 'CRANE',
    link: 'https://cranetool.org',
  },
  {
    description:
      "Contributors to Project Frame's methodology for assessing future GHG impact.",
    topline: 'Frame',
    link: 'https://projectframe.how/preinvestment-ghg-assessment',
  },
  {
    description:
      'Contributors to CDPs Emerging Climate Technology (ECT) Framework.',
    topline: 'ECT',
    link: 'https://cdn.cdp.net/cdp-production/comfy/cms/files/files/000/005/163/original/ECT_Framework_v1.1_%284%29.pdf',
  },
  {
    description:
      'Co-creators of the ECO Framework for communicating potential impact.',
    topline: 'ECO',
    link: 'https://eco.rhoimpact.com/',
  },
]

export function BuiltOnTrust() {
  return (
    <div>
      <Heading id="built-on-trust" level={2}>
        Built on Trust
      </Heading>
      <p className="mt-6 text-gray-300">
        Since 2018, the Rho Impact team has been actively contributing to and
        developing some of the world&apos;s most trusted data, tools, and
        methodologies for calculating the potential impact of new climate
        technologies. Koi represents the global state-of-the-art and is designed
        to evolve as this important field continues to improve.
      </p>

      <dl className="mt-6 grid grid-cols-1 gap-0.5 overflow-hidden rounded-xl text-center sm:grid-cols-2 lg:grid-cols-4">
        {references.map((stat, idx) => (
          <a
            key={idx}
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col bg-white/5 p-8 transition hover:bg-white/10"
          >
            <dt className="mt-4 text-sm/6 text-gray-300">{stat.description}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-white">
              {stat.topline}
            </dd>
          </a>
        ))}
      </dl>
    </div>
  )
}
