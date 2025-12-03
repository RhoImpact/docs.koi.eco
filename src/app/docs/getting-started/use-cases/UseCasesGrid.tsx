'use client'

import { GridLink, LinksGrid } from '@/components/LinksGrid'
import { routes } from '@/shared/navigation-data'

const useCasesLinks: Array<GridLink> = [
  {
    href: routes.assetOwners,
    name: 'Asset Owners',
    description:
      'Pension funds, sovereign wealth funds, family offices, and endowments using Koi for ESG mandates and net-zero alignment.',
    icon: 'fa-regular fa-building-columns text-cyan-600',
    showGrid: false,
  },
  {
    href: routes.assetManagers,
    name: 'Asset Managers',
    description:
      'VC, PE, and multi-asset managers using Koi for investment diligence and portfolio impact reporting.',
    icon: 'fa-regular fa-chart-line text-cyan-600',
    showGrid: false,
  },
  {
    href: routes.innovators,
    name: 'Innovators',
    description:
      'Climate tech startups, R&D teams, and product developers using Koi for market prioritization and investor communication.',
    icon: 'fa-regular fa-lightbulb text-cyan-600',
    showGrid: false,
  },
  {
    href: routes.serviceProviders,
    name: 'Service Providers',
    description:
      'Sustainability consultants, climate advisors, and ESG rating agencies using Koi for client impact analysis.',
    icon: 'fa-regular fa-handshake text-cyan-600',
    showGrid: false,
  },
  {
    href: routes.dataProviders,
    name: 'Data Providers',
    description:
      'Researchers, data scientists, and tool developers using Koi for climate tech datasets and analysis.',
    icon: 'fa-regular fa-database text-cyan-600',
    showGrid: false,
  },
  {
    href: routes.enterprises,
    name: 'Enterprises',
    description:
      'Corporate sustainability teams, product development, and supply chain professionals using Koi for decarbonization.',
    icon: 'fa-regular fa-industry text-cyan-600',
    showGrid: false,
  },
]

export default function UseCasesGrid() {
  return <LinksGrid title="" gridLinks={useCasesLinks} />
}
