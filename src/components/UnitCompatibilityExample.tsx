'use client'

import React from 'react'

export default function UnitCompatibilityExample() {
  return (
    <div className="my-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <h4 className="mb-3 font-semibold text-zinc-900 dark:text-white">
        Example Unit Compatibility for an Energy Model
      </h4>
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Baseline GHG Intensity
            </h5>
            <div className="rounded border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-600 dark:bg-zinc-900">
              0.85 Mt CO₂e/TWh
            </div>
          </div>
          <div>
            <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Baseline Market Size
            </h5>
            <div className="rounded border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-600 dark:bg-zinc-900">
              400 TWh/year
            </div>
          </div>
        </div>
        <div className="text-center">
          <div className="text-sm text-zinc-600 dark:text-zinc-400">↓</div>
          <div>
            <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
              Baseline Emissions
            </h5>
            <div className="break-all rounded border border-zinc-300 bg-white px-3 py-2 font-mono text-sm dark:border-zinc-600 dark:bg-zinc-900">
              0.85 Mt CO₂e/TWh × 400 TWh/year = 340 Mt CO₂e/year
            </div>
          </div>
        </div>
        <div className="text-xs text-zinc-500 dark:text-zinc-400">
          In this example, once the solution is matched with a baseline GHG
          intensity in units of emissions/energy production, all additional data
          matches for the baseline market size and solution GHG intensity are
          constrained to be expressed in units of energy. Data Lake matches are
          allowed in any energy unit (Wh, J, BTU, etc.) and Koi handles all
          conversions automatically.
        </div>
      </div>
    </div>
  )
}
