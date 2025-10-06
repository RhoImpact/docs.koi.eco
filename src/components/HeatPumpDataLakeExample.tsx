'use client'

import React from 'react'

export default function HeatPumpDataLakeExample() {
  return (
    <div className="my-4 rounded-lg border border-zinc-200 bg-zinc-50 p-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <div className="mb-3 flex items-baseline gap-3">
        <i className="fa-light fa-pump text-2xl leading-none text-koiBlue-500"></i>
        <h4 className="font-semibold text-zinc-900 dark:text-white">
          Example Data Lake Matching and Model Assembly for Heat Pumps
        </h4>
      </div>
      <div className="space-y-4">
        <div>
          <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Baseline GHG Intensity
          </h5>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              defaultValue="Heat production from natural gas - 67 g CO₂e/MJ heat"
            >
              <option>
                Heat production from natural gas - 67 g CO₂e/MJ heat
              </option>
              <option>
                Heat production from mixed fuels, 2025 world avg - 80 g CO₂e/MJ
              </option>
              <option>Heat production from coal - 100 g CO₂e/MJ</option>
            </select>
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Top match, click dropdown to see others
          </p>
        </div>

        <div>
          <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Baseline Market Size
          </h5>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              defaultValue="Natural gas heating demand in buildings (World, 2035) - 25 EJ/year"
            >
              <option>
                Natural gas heating demand in buildings (World, 2035) - 25
                EJ/year
              </option>
              <option>
                Total energy consumption for space heating (US, 2025) - 8.7 quad
                BTU/year
              </option>
              <option>
                Total industrial heat consumption (World, 2025) - 127 EJ/year
              </option>
            </select>
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Top match, click dropdown to see others
          </p>
        </div>

        <div>
          <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Solution GHG Intensity
          </h5>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              defaultValue="Heat production from ground-source heat pumps (average SPF, 2035) - 14 g CO₂e/MJ heat"
            >
              <option>
                Heat production from ground-source heat pumps (average SPF,
                2035) - 14 g CO₂e/MJ heat
              </option>
              <option>
                Heat production from ground-source heat pumps (high SPF, 2035) -
                10 g CO₂e/MJ heat
              </option>
            </select>
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Top match, click dropdown to see others
          </p>
        </div>

        <div>
          <h5 className="mb-2 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Market Capture
          </h5>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            55% (IEA Net Zero Scenario, 2050)
          </div>
          <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
            Based on IEA Net Zero goals for heat pump deployment
          </p>
        </div>
      </div>

      <div className="mt-4 rounded border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
        <div className="mb-1 text-sm font-medium text-green-800 dark:text-green-200">
          Annual Impact Calculation (2035)
        </div>
        <div className="text-sm text-green-700 dark:text-green-300">
          (67 - 14) Mt CO₂e/EJ heat × 25 EJ heat generated x 35% deployment ={' '}
          <strong>464 Mt CO₂e/year</strong> avoided emissions in 2035
        </div>
      </div>

      <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        <strong>Note:</strong> Koi takes care of all year and unit alignment to
        make data inputs compatible. Trends between known data points for each
        input are used to interpolate and project values for all years in the
        analysis.
      </div>
    </div>
  )
}
