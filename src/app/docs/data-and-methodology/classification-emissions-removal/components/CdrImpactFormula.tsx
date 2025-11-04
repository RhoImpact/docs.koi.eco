'use client'

import React from 'react'

export default function CdrImpactFormula() {
  return (
    <div className="my-8 rounded-xl border border-zinc-200 bg-zinc-50/50 p-6 dark:border-zinc-700 dark:bg-zinc-800/30">
      <div className="text-center">
        <h3 className="mb-4 text-lg font-semibold text-zinc-800 dark:text-zinc-200">
          CDR Impact Formula
        </h3>
        <div className="rounded-lg border border-zinc-300 bg-white/80 p-4 dark:border-zinc-600 dark:bg-zinc-900/50">
          <div className="font-mono text-xl font-semibold">
            <span className="text-zinc-700 dark:text-zinc-300">
              Annual Emissions Reduction
            </span>
            <span className="mx-2 text-zinc-500 dark:text-zinc-400">=</span>
            <div className="mt-1">
              <span className="text-zinc-600 dark:text-zinc-300">
                Unit Impact
              </span>
              <span className="mx-2 text-zinc-500 dark:text-zinc-400">×</span>
              <span className="text-zinc-600 dark:text-zinc-300">Scale</span>
            </div>
          </div>
        </div>
        <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
          <div>
            <strong>Where:</strong>
          </div>
          <div className="mt-1">
            • <strong>Unit Impact</strong> = Baseline Emissions Intensity −
            Solution Emissions Intensity
          </div>
          <div className="mt-1">
            • <strong>Scale</strong> = Units of functional output deployed
          </div>
          <div className="mt-1">
            • <strong>Emissions Intensities</strong> = Net mass of CO₂e emitted
            per functional unit
          </div>
        </div>
      </div>
    </div>
  )
}
