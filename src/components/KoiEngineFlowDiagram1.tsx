'use client'

import React from 'react'
import Image from 'next/image'
import koiLogo from '@/images/logos-internal/koi-logo-transparentbg.svg'

export default function KoiEngineFlowDiagram1() {
  return (
    <div className="flex w-full flex-col items-center space-y-4">
      {/* Flowchart */}
      <div className="flex w-full flex-col items-center space-y-4 md:flex-row md:justify-between md:space-x-4 md:space-y-0">
        {/* Step 1 */}
        <div className="relative flex h-48 w-3/4 flex-col rounded-2xl bg-koiGray-600 p-2 text-center shadow md:w-auto md:flex-1">
          <h3 className="mt-2 text-base font-semibold">
            Climate Solution
            <br />
            Overview
          </h3>
          <p className="mt-2 text-xs">
            Provide solution name &amp; description
          </p>
          <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-koiGray-300 py-1 text-sm font-semibold text-koiGray-800">
            <i className="fa fa-user"></i> User Input
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden text-2xl text-gray-400 md:block">
          <i className="fa fa-arrow-right"></i>
        </div>
        <div className="text-2xl text-gray-400 md:hidden">
          <i className="fa fa-arrow-down"></i>
        </div>

        {/* Step 2 */}
        <div className="relative flex h-48 w-3/4 flex-col rounded-2xl bg-koiGray-500 p-2 text-center shadow md:w-auto md:flex-1">
          <h3 className="mt-2 text-base font-semibold">
            Data Lake
            <br />
            Integration
          </h3>
          <p className="mt-2 text-xs">
            Align to relevant datasets from the Koi Data Lake
          </p>
          <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-koiGray-300 py-1 text-sm font-semibold text-koiGray-800">
            <i className="fa fa-sparkles"></i> Koi Engine
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden text-2xl text-gray-400 md:block">
          <i className="fa fa-arrow-right"></i>
        </div>
        <div className="text-2xl text-gray-400 md:hidden">
          <i className="fa fa-arrow-down"></i>
        </div>

        {/* Step 3 */}
        <div className="relative flex h-48 w-3/4 flex-col rounded-2xl bg-koiGray-500 p-2 text-center shadow md:w-auto md:flex-1">
          <h3 className="mt-2 text-base font-semibold">
            Solution
            <br />
            Modeling
          </h3>
          <p className="mt-2 text-xs">
            Model solution based on curated data foundation
          </p>
          <div className="absolute bottom-0 left-0 right-0 rounded-b-2xl bg-koiGray-300 py-1 text-sm font-semibold text-koiGray-800">
            <i className="fa fa-sparkles"></i> Koi Engine
          </div>
        </div>

        {/* Arrow */}
        <div className="hidden text-2xl text-gray-400 md:block">
          <i className="fa fa-arrow-right"></i>
        </div>
        <div className="text-2xl text-gray-400 md:hidden">
          <i className="fa fa-arrow-down"></i>
        </div>

        {/* Final Step */}
        <div className="flex h-48 w-3/4 flex-col items-center justify-center rounded-2xl bg-koiGray-800 p-2 text-center text-white shadow md:w-auto md:flex-1">
          <div className="">
            <Image
              src={koiLogo}
              alt="Fish Icon"
              width={48}
              height={48}
              className="h-12 w-12"
            />
          </div>
          <h3 className="mt-2 text-base font-semibold">
            Rapid, On-Demand Forecasts
          </h3>
        </div>
      </div>

      {/* Footnote */}
      {/* <p className="max-w-xl text-center text-sm italic text-gray-500">
        Note: ...
      </p> */}
    </div>
  )
}
