'use client'

import React from 'react'

export default function ValueChainInterventionExample() {
  return (
    <div className="my-4 rounded-lg border border-zinc-200 bg-zinc-50 p-3 sm:p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <h4 className="mb-3 text-sm font-semibold text-zinc-900 sm:text-base dark:text-white">
        Example Value Chain Intervention Points
      </h4>
      <div className="space-y-3">
        {/* Mobile: Vertical layout, Desktop: Horizontal layout */}
        <div className="flex flex-col space-y-3 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
          {/* Raw Materials */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 rounded border border-zinc-300 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm dark:border-zinc-600 dark:bg-zinc-900">
              <i className="fa-solid fa-box text-koiBrown-500"></i>
              <span className="whitespace-nowrap">Raw Materials</span>
              <span className="text-zinc-500">Solution: -20%</span>
            </div>
          </div>

          {/* Arrow - hidden on mobile, shown on desktop */}
          <div className="hidden text-zinc-400 sm:block">→</div>

          {/* Processing */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 rounded border border-zinc-300 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm dark:border-zinc-600 dark:bg-zinc-900">
              <i className="fa-solid fa-gear text-koiOrange-500"></i>
              <span className="whitespace-nowrap">Processing</span>
              <span className="text-zinc-500">Unchanged</span>
            </div>
          </div>

          {/* Arrow - hidden on mobile, shown on desktop */}
          <div className="hidden text-zinc-400 sm:block">→</div>

          {/* Transport */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 rounded border border-zinc-300 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm dark:border-zinc-600 dark:bg-zinc-900">
              <i className="fa-solid fa-truck text-koiBlue-500"></i>
              <span className="whitespace-nowrap">Transport</span>
              <span className="text-zinc-500">Unchanged</span>
            </div>
          </div>

          {/* Arrow - hidden on mobile, shown on desktop */}
          <div className="hidden text-zinc-400 sm:block">→</div>

          {/* Use Phase */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 rounded border border-zinc-300 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm dark:border-zinc-600 dark:bg-zinc-900">
              <i className="fa-solid fa-bolt text-koiYellow-500"></i>
              <span className="whitespace-nowrap">Use Phase</span>
              <span className="text-zinc-500">Solution: -10%</span>
            </div>
          </div>

          {/* Arrow - hidden on mobile, shown on desktop */}
          <div className="hidden text-zinc-400 sm:block">→</div>

          {/* End-of-Life */}
          <div className="flex-1 text-center">
            <div className="flex items-center justify-center gap-2 rounded border border-zinc-300 bg-white px-2 py-1.5 text-xs sm:px-3 sm:py-2 sm:text-sm dark:border-zinc-600 dark:bg-zinc-900">
              <i className="fa-solid fa-recycle text-koiGreen-500"></i>
              <span className="whitespace-nowrap">End-of-Life</span>
              <span className="text-zinc-500">Unchanged</span>
            </div>
          </div>
        </div>

        <div className="text-center text-xs text-zinc-500 dark:text-zinc-400">
          Solution targets specific intervention points with material sourcing
          and efficiency improvements
        </div>
      </div>
    </div>
  )
}
