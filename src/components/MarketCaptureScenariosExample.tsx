'use client'

import React from 'react'

export default function MarketCaptureScenariosExample() {
  return (
    <div className="my-6 rounded-xl border border-zinc-200 bg-gradient-to-br from-zinc-50 to-zinc-100 p-8 shadow-sm dark:border-zinc-700 dark:from-zinc-800/50 dark:to-zinc-900/50">
      <h4 className="mb-6 text-center text-lg font-semibold text-zinc-900 dark:text-white">
        Example Market Capture Scenarios
      </h4>
      <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:gap-12">
        <div className="relative h-48 w-48 sm:h-56 sm:w-56">
          {/* Pie chart style - baseline market (remaining 60%) */}
          <div className="absolute inset-0 rounded-full bg-koiGray-300 shadow-inner dark:bg-koiGray-600"></div>

          {/* Long-term solution deployment (30%) */}
          <div
            className="absolute inset-0 rounded-full shadow-lg"
            style={{
              background: `conic-gradient(from 0deg, rgba(60, 142, 168, 0.7) 0deg 108deg, transparent 108deg 360deg)`,
            }}
          ></div>

          {/* Long-term company deployment (8%) - overlapped */}
          <div
            className="absolute inset-0 rounded-full shadow-lg"
            style={{
              background: `conic-gradient(from 0deg, rgba(96, 179, 72, 0.8) 0deg 28.8deg, transparent 28.8deg 360deg)`,
            }}
          ></div>

          {/* Near-term company deployment (2%) - overlapped */}
          <div
            className="absolute inset-0 rounded-full shadow-lg"
            style={{
              background: `conic-gradient(from 0deg, rgba(139, 195, 74, 0.9) 0deg 7.2deg, transparent 7.2deg 360deg)`,
            }}
          ></div>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-center gap-4">
            <div className="h-5 w-5 rounded-full border border-koiGray-400 bg-koiGray-300 shadow-sm dark:border-koiGray-500 dark:bg-koiGray-600"></div>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white">
                Total baseline market
              </div>
              <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                100% of serviceable market
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="h-5 w-5 rounded-full shadow-sm"
              style={{ background: 'rgba(60, 142, 168, 0.7)' }}
            ></div>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white">
                Long-term solution deployment
              </div>
              <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                30% market capture
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="h-5 w-5 rounded-full shadow-sm"
              style={{ background: 'rgba(96, 179, 72, 0.8)' }}
            ></div>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white">
                Long-term company deployment
              </div>
              <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                8% market capture
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div
              className="h-5 w-5 rounded-full shadow-sm"
              style={{ background: 'rgba(139, 195, 74, 0.9)' }}
            ></div>
            <div>
              <div className="font-semibold text-zinc-900 dark:text-white">
                Near-term company deployment
              </div>
              <div className="text-xs font-medium text-zinc-600 dark:text-zinc-400">
                2% market capture
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-6 text-center text-sm font-medium text-zinc-600 dark:text-zinc-400">
        All market deployment scenarios sit within the total baseline market,
        showing differences in the modeled baseline displacement. In the most
        conservative scenario, the solution is modeled according to near-term
        company deployment with a 2% maximum market capture, while in the most
        optimistic impact scenario the long-term effect of the solution on the
        market is modeled with a 30% market capture. *Note that these pie chart
        slices are shown overlayed for simplicity but in actuality should be
        considered in isolation of one another (i.e., they are not additive)*
      </div>
    </div>
  )
}
