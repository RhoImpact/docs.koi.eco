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
      'Scientific Advisory Committee member for AEFDi global avoided emissions factors database.',
    topline: 'AEFDi',
    link: 'https://www.mirova.com/sites/default/files/2023-05/PR_CEI-global-avoidance-factor-database_EN.pdf',
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
  {
    description:
      "Technical and Content Subject Matter Experts for CFI's ESG Certification Program.",
    topline: 'CFI',
    link: 'https://corporatefinanceinstitute.com/course/carbon-market-fundamentals/',
  },
]

export function BuiltOnTrust() {
  return (
    <div>
      <Heading id="built-on-trust" level={2}>
        Built on Trust
      </Heading>
      <p className="mt-6text-gray-300">
        Since 2018, the Rho Impact team has been actively developing the
        world&apos;s most trusted data, tools, and methodologies for estimating
        the potential impact of new climate technologies.{' '}
        <strong>Koi puts the global state-of-the-art to work at scale.</strong>
      </p>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {references.map((stat, idx) => (
          <a
            key={idx}
            href={stat.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-lg p-8 transition dark:bg-koiGray-900/25 dark:hover:bg-koiGray-900/50"
          >
            <dt className="mt-4 text-sm/6 text-gray-300">{stat.description}</dt>
            <dd className="order-first text-3xl font-semibold tracking-tight text-black dark:text-white">
              {stat.topline}
            </dd>
          </a>
        ))}
      </dl>
    </div>
  )
}
