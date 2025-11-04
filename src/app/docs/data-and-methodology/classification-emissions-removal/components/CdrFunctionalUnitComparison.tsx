'use client'

import React from 'react'

export default function CdrFunctionalUnitComparison() {
  return (
    <div className="my-6 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <h4 className="mb-4 mt-2 font-semibold text-zinc-900 dark:text-white">
        CDR Functional Unit Comparison
      </h4>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-zinc-300 dark:border-zinc-600">
              <th className="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">
                CDR Functional Unit
              </th>
              <th className="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">
                Market for Assessment
              </th>
              <th className="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">
                Total Market Size Options (based on relevant, measurable data)
              </th>
              <th className="px-3 py-2 text-left font-semibold text-zinc-900 dark:text-white">
                Key Limitations
              </th>
              <th className="px-3 py-2 text-center font-semibold text-zinc-900 dark:text-white">
                Used in Koi
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              <td className="px-3 py-3 font-semibold text-zinc-800 dark:text-zinc-200">
                Total sequestered CO₂e
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Mass of CO₂e that can be sequestered
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Planetary CO₂, anthropogenic emissions, suitable geographic
                areas
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Sequestration potential becomes unrealistically large, due to
                the unconstrained total market size, unless the available market
                is highly geographically constrained
              </td>
              <td className="px-3 py-3 text-center text-red-600 dark:text-red-400">
                ❌
              </td>
            </tr>
            <tr className="border-b border-zinc-200 dark:border-zinc-700">
              <td className="px-3 py-3 font-semibold text-zinc-800 dark:text-zinc-200">
                Net sequestered CO₂e
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Net mass of CO₂e that can be sequestered
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Carbon markets
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Always results in GHG intensity = -1 due to numerator being set
                to the inverse (see Unit Impact formula)
              </td>
              <td className="px-3 py-3 text-center text-red-600 dark:text-red-400">
                ❌
              </td>
            </tr>
            <tr>
              <td className="px-3 py-3 font-semibold text-zinc-800 dark:text-zinc-200">
                USD<sub>rce</sub> (removal cost equivalent)
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Future purchases for that type of CDR
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                CCUS financial market size (broadly or technology-specific)
              </td>
              <td className="px-3 py-3 text-zinc-700 dark:text-zinc-300">
                Contains implicit assumption that removal cost is same for
                implementer and buyer
              </td>
              <td className="px-3 py-3 text-center text-green-600 dark:text-green-400">
                ✅
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
