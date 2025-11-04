'use client'

import React from 'react'

export default function CdrImpactFormula() {
  return (
    <div className="my-4 rounded-xl border border-zinc-200 bg-zinc-50/50 p-3 sm:my-6 md:my-8 md:p-6 dark:border-zinc-700 dark:bg-zinc-800/30">
      <div className="text-center">
        <h3 className="mb-2 mt-0 text-sm font-semibold text-zinc-800 sm:mb-3 sm:text-base md:mb-4 md:text-xl dark:text-zinc-200">
          CDR Impact Formula
        </h3>
        <div className="rounded-lg border border-zinc-300 bg-white/80 p-2.5 sm:p-3 md:p-4 dark:border-zinc-600 dark:bg-zinc-900/50">
          <div className="font-mono text-sm font-semibold sm:text-base md:text-xl">
            <div className="flex flex-col items-center justify-center gap-1 sm:flex-row sm:gap-2">
              <span className="text-zinc-700 dark:text-zinc-300">
                Annual Emissions Reduction
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">=</span>
            </div>
            <div className="mt-1.5 flex flex-col items-center justify-center gap-1 sm:mt-1 sm:flex-row sm:gap-2">
              <span className="text-zinc-600 dark:text-zinc-300">
                Unit Impact
              </span>
              <span className="text-zinc-500 dark:text-zinc-400">×</span>
              <span className="text-zinc-600 dark:text-zinc-300">Scale</span>
            </div>
          </div>
        </div>
        <div className="mt-2 flex justify-center sm:mt-3">
          <div className="w-full text-left text-[0.6875rem] text-zinc-600 sm:text-xs md:text-sm dark:text-zinc-400">
            <div>
              <strong>Where:</strong>
            </div>
            <ul className="mt-1 space-y-1 sm:mt-1.5 sm:space-y-1.5">
              <li>
                <strong>Unit Impact</strong> = Baseline Emissions Intensity -
                Solution Emissions Intensity
              </li>
              <li>
                <strong>Scale</strong> = Units of functional output deployed
              </li>
              <li>
                <strong>Emissions Intensities</strong> = Net mass of CO₂e
                emitted per functional unit
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
