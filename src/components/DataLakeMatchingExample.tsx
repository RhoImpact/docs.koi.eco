'use client'

import React from 'react'

export default function DataLakeMatchingExample() {
  return (
    <div className="my-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <h4 className="mb-3 font-semibold text-zinc-900 dark:text-white">
        Example Data Lake Matching (Automated or Manual)
      </h4>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Climate Solution
          </h5>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            Modular fusion reactor
          </div>
        </div>
        <div>
          <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Matched Baseline
          </h5>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              defaultValue="diesel-generators"
            >
              <option value="diesel-generators">
                Electricity generation from small diesel generators
              </option>
              <option value="grid-world-avg">
                Electricity generation from grid (world avg, STEPS)
              </option>
              <option value="solar">Electricity generation from solar</option>
            </select>
          </div>
          <div className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Click to see other baseline options
          </div>
        </div>
      </div>
    </div>
  )
}
