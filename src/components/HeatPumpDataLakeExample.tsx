'use client'

import React, { useState, useMemo } from 'react'

export default function HeatPumpDataLakeExample() {
  // Structured data for each category
  const baselineIntensityOptions = {
    naturalGas: {
      text: 'Heat production from natural gas',
      value: 67,
      units: 'g CO₂e/MJ heat',
    },
    mixedFuels: {
      text: 'Heat production from mixed fuels, 2025 world avg',
      value: 80,
      units: 'g CO₂e/MJ',
    },
    coal: {
      text: 'Heat production from coal',
      value: 100,
      units: 'g CO₂e/MJ',
    },
  }

  const baselineMarketSizeOptions = {
    naturalGasBuildings: {
      text: 'Natural gas heating demand in buildings (World, 2035)',
      value: 25,
      units: 'EJ/year',
    },
    spaceHeatingUS: {
      text: 'Total energy consumption for space heating (US, 2025)',
      value: 9.18,
      units: 'EJ/year',
    },
    industrialHeat: {
      text: 'Total industrial heat consumption (World, 2025)',
      value: 127,
      units: 'EJ/year',
    },
  }

  const solutionIntensityOptions = {
    averageSPF: {
      text: 'Heat production from ground-source heat pumps (average SPF, 2035)',
      value: 14,
      units: 'g CO₂e/MJ heat',
    },
    highSPF: {
      text: 'Heat production from ground-source heat pumps (high SPF, 2035)',
      value: 10,
      units: 'g CO₂e/MJ heat',
    },
  }

  // ✅ Limited to two options
  const marketCaptureOptions = {
    ieaNetZero: {
      text: 'IEA Net Zero Aligned (55% by 2050) - 35% in 2035',
      value: 35,
      units: '%',
    },
    conservative: {
      text: 'Conservative deployment - 15% in 2035',
      value: 15,
      units: '%',
    },
  }

  // State for dropdown selections (using keys)
  const [baselineIntensityKey, setBaselineIntensityKey] = useState('naturalGas')
  const [baselineMarketSizeKey, setBaselineMarketSizeKey] = useState(
    'naturalGasBuildings'
  )
  const [solutionIntensityKey, setSolutionIntensityKey] = useState('averageSPF')
  const [marketCaptureKey, setMarketCaptureKey] = useState('ieaNetZero')

  // Get current values
  const currentBaselineIntensity =
    baselineIntensityOptions[
      baselineIntensityKey as keyof typeof baselineIntensityOptions
    ]
  const currentBaselineMarketSize =
    baselineMarketSizeOptions[
      baselineMarketSizeKey as keyof typeof baselineMarketSizeOptions
    ]
  const currentSolutionIntensity =
    solutionIntensityOptions[
      solutionIntensityKey as keyof typeof solutionIntensityOptions
    ]
  const currentMarketCapture =
    marketCaptureOptions[marketCaptureKey as keyof typeof marketCaptureOptions]

  // ✅ Adjusted math remains the same but now uses only the two defined options
  const annualImpact = useMemo(() => {
    const avoidedEmissionsPerEJ =
      currentBaselineIntensity.value - currentSolutionIntensity.value // g CO2e/MJ difference
    const deploymentRate = currentMarketCapture.value / 100 // convert % to fraction
    const totalImpact =
      avoidedEmissionsPerEJ *
      currentBaselineMarketSize.value *
      deploymentRate // g CO2e/MJ * EJ * fraction
    return Math.round(totalImpact)
  }, [
    currentBaselineIntensity.value,
    currentSolutionIntensity.value,
    currentBaselineMarketSize.value,
    currentMarketCapture.value,
  ])

  return (
    <div className="rounded-lg border border-zinc-200 bg-zinc-50 px-4 pb-4 dark:border-zinc-700 dark:bg-zinc-800/50">
      <div className="space-y-4">
        {/* Baseline GHG Intensity */}
        <div>
          <h5 className="mt-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Baseline GHG Intensity
          </h5>
          <p className="mb-2 mt-0 text-xs italic text-zinc-500 dark:text-zinc-400">
            Top match, click dropdown to see others
          </p>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              value={baselineIntensityKey}
              onChange={(e) => setBaselineIntensityKey(e.target.value)}
            >
              {Object.entries(baselineIntensityOptions).map(([key, option]) => (
                <option key={key} value={key}>
                  {option.text} - {option.value} {option.units}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Baseline Market Size */}
        <div>
          <h5 className="mt-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Baseline Market Size
          </h5>
          <p className="mb-2 mt-0 text-xs italic text-zinc-500 dark:text-zinc-400">
            Top match, click dropdown to see others
          </p>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              value={baselineMarketSizeKey}
              onChange={(e) => setBaselineMarketSizeKey(e.target.value)}
            >
              {Object.entries(baselineMarketSizeOptions).map(
                ([key, option]) => (
                  <option key={key} value={key}>
                    {option.text} - {option.value} {option.units}
                  </option>
                )
              )}
            </select>
          </div>
        </div>

        {/* Solution GHG Intensity */}
        <div>
          <h5 className="mt-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Solution GHG Intensity
          </h5>
          <p className="mb-2 mt-0 text-xs italic text-zinc-500 dark:text-zinc-400">
            Top match, click dropdown to see others
          </p>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              value={solutionIntensityKey}
              onChange={(e) => setSolutionIntensityKey(e.target.value)}
            >
              {Object.entries(solutionIntensityOptions).map(([key, option]) => (
                <option key={key} value={key}>
                  {option.text} - {option.value} {option.units}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Market Capture */}
        <div>
          <h5 className="mt-6 text-sm font-medium text-zinc-700 dark:text-zinc-300">
            Market Capture
          </h5>
          <p className="mb-2 mt-0 text-xs italic text-zinc-500 dark:text-zinc-400">
            Heat pump deployment scenario, click dropdown to see others
          </p>
          <div className="rounded border border-zinc-300 bg-white px-3 py-2 text-sm dark:border-zinc-600 dark:bg-zinc-900">
            <select
              className="w-full bg-transparent text-sm"
              value={marketCaptureKey}
              onChange={(e) => setMarketCaptureKey(e.target.value)}
            >
              {Object.entries(marketCaptureOptions).map(([key, option]) => (
                <option key={key} value={key}>
                  {option.text}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Annual Impact */}
      <div className="mt-4 rounded border border-green-200 bg-green-50 p-3 dark:border-green-800 dark:bg-green-900/20">
        <div className="mb-1 text-sm font-medium text-green-800 dark:text-green-200">
          Annual Impact Calculation (2035)
        </div>
        <div className="text-sm text-green-700 dark:text-green-300">
          ({currentBaselineIntensity.value} - {currentSolutionIntensity.value})
          g CO₂e/MJ × {currentBaselineMarketSize.value} EJ heat ×{' '}
          {currentMarketCapture.value}% deployment ={' '}
          <strong>{annualImpact} Mt CO₂e/year</strong> avoided emissions in 2035
        </div>
      </div>

      {/* Note */}
      <div className="mt-3 text-sm text-zinc-600 dark:text-zinc-400">
        <strong>Note:</strong> Koi aligns years and units automatically. Trends
        between known data points are interpolated to project all years in the
        analysis.
      </div>
    </div>
  )
}
