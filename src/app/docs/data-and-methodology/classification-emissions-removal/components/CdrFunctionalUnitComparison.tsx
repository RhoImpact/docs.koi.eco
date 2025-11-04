'use client'

import React from 'react'

export default function CdrFunctionalUnitComparison() {
  return (
    <div className="my-4 rounded-lg border border-zinc-200 bg-zinc-50 p-2 sm:my-6 sm:p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <h4 className="mb-2 mt-1 text-base font-semibold text-zinc-900 sm:mb-4 sm:mt-2 sm:text-lg dark:text-white">
        CDR Functional Unit Comparison
      </h4>
      <div className="-mx-2 overflow-x-auto sm:mx-0">
        <div className="inline-block min-w-full px-2 align-middle sm:px-0">
          <table className="my-0 min-w-full border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-zinc-300 dark:border-zinc-600">
                <th className="w-[33%] px-1.5 py-1.5 text-left font-semibold text-zinc-900 sm:w-[25%] sm:px-3 sm:py-2 dark:text-white">
                  Market for Assessment
                </th>
                <th className="w-[33%] px-1.5 py-1.5 text-left font-semibold text-zinc-900 sm:w-[25%] sm:px-3 sm:py-2 dark:text-white">
                  Total Market Size Options*
                </th>
                <th className="w-[33%] px-1.5 py-1.5 text-left font-semibold text-zinc-900 sm:w-[50%] sm:px-3 sm:py-2 dark:text-white">
                  Key Limitations
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-zinc-100/50 dark:bg-zinc-700/30">
                <td
                  colSpan={3}
                  className="border border-zinc-200 px-1.5 py-2 font-semibold text-zinc-800 sm:px-3 sm:py-2 dark:border-zinc-700 dark:text-zinc-200"
                >
                  Total sequestered CO₂e
                </td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Mass of CO₂e that can be sequestered
                  <br />
                  <span className="text-red-600 dark:text-red-400">
                    Used in Koi:
                  </span>
                  <span className="fa-solid fa-xmark ml-2 text-red-600 dark:text-red-400"></span>
                </td>
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Planetary CO₂, anthropogenic emissions, suitable geographic
                  areas
                </td>
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Sequestration potential becomes unrealistically large, due to
                  the unconstrained total market size, unless the available
                  market is highly geographically constrained
                </td>
              </tr>
              <tr className="bg-zinc-100/50 dark:bg-zinc-700/30">
                <td
                  colSpan={3}
                  className="border border-zinc-200 px-1.5 py-2 font-semibold text-zinc-800 sm:px-3 sm:py-2 dark:border-zinc-700 dark:text-zinc-200"
                >
                  Net sequestered CO₂e
                </td>
              </tr>
              <tr className="border-b border-zinc-200 dark:border-zinc-700">
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Net mass of CO₂e that can be sequestered
                  <br />
                  <span className="text-red-600 dark:text-red-400">
                    Used in Koi:
                  </span>
                  <span className="fa-solid fa-xmark ml-2 text-red-600 dark:text-red-400"></span>
                </td>
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Carbon markets
                </td>
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Always results in GHG intensity = -1 due to numerator being
                  set to the inverse (see Unit Impact formula)
                </td>
              </tr>
              <tr className="bg-zinc-100/50 dark:bg-zinc-700/30">
                <td
                  colSpan={3}
                  className="border border-zinc-200 px-1.5 py-2 font-semibold text-zinc-800 sm:px-3 sm:py-2 dark:border-zinc-700 dark:text-zinc-200"
                >
                  USD<sub>rce</sub> (removal cost equivalent)
                </td>
              </tr>
              <tr>
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Future purchases for that type of CDR
                  <br />
                  <span className="text-green-600 dark:text-green-400">
                    Used in Koi:
                    <span className="fa-solid fa-check ml-2 text-green-600 dark:text-green-400"></span>
                  </span>
                </td>
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  CCUS financial market size (broadly or technology-specific)
                </td>
                <td className="px-1.5 py-2 text-zinc-700 sm:px-3 sm:py-3 dark:text-zinc-300">
                  Contains implicit assumption that removal cost is same for
                  implementer and buyer
                </td>
              </tr>
              <tr>
                <td
                  colSpan={3}
                  className="px-1.5 pt-2 text-left text-[0.625rem] italic text-zinc-700 sm:px-3 sm:pt-3 sm:text-xs dark:text-zinc-300"
                >
                  <span className="text-zinc-700 dark:text-zinc-300">* </span>
                  Based on relevant, measurable data
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
