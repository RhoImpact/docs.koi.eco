export function AvoidedEmissionsExplained() {
  return (
    <div className="mx-auto max-w-5xl px-0">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2>Avoided Emissions</h2>
        <p className="text-base/7 text-slate-200">
          Avoided emissions are the greenhouse gas emissions that are prevented
          from being released into the atmosphere as a result of a project or
          activity. This can be achieved through the implementation of
          sustainable practices, technologies, or policies that reduce or
          eliminate the production of greenhouse gases. Avoided emissions are an
          important metric for measuring the environmental impact of a project
          and can help to quantify the benefits of sustainable practices.
        </p>
      </div>
      <div className="mx-auto mt-16 flex max-w-2xl flex-col gap-8 xl:mx-0 xl:mt-20 xl:max-w-none xl:flex-row xl:items-end">
        <div className="flex w-full flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-slate-600 p-8 xl:w-72 xl:flex-none xl:flex-col xl:items-start xl:gap-y-44">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">
            1.014 Mt CO<sub>2</sub>e<br />
            <span className="text-lg font-thin">per Unit of Measure</span>
          </p>
          <div className="sm:w-80 sm:shrink xl:w-auto xl:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">
              Conventional System
            </p>
            <p className="mt-2 text-base/7 text-slate-200">
              e.g. traditional milk production, a conventional energy source, or
              modes of heating and cooling.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-slate-100 p-8 xl:w-full xl:max-w-sm xl:flex-auto xl:flex-col xl:items-start xl:gap-y-28">
          <p className="flex-none text-3xl font-bold tracking-tight text-gray-900">
            0.855 Mt CO<sub>2</sub>e<br />
            <span className="text-lg font-thin">per Unit of Measure</span>
          </p>
          <div className="sm:w-80 sm:shrink xl:w-auto xl:flex-none">
            <p className="text-lg font-semibold tracking-tight text-slate-800">
              New Solution
            </p>
            <p className="mt-2 text-base/7 text-slate-600">
              e.g. plant-based milk production, renewable energy, or hybrid
              heating and cooling systems.
            </p>
          </div>
        </div>
        <div className="flex w-full flex-col-reverse justify-between gap-x-16 gap-y-8 rounded-2xl bg-emerald-600 p-8 xl:w-full xl:max-w-none xl:flex-auto xl:flex-col xl:items-start xl:gap-y-2">
          <p className="flex-none text-3xl font-bold tracking-tight text-white">
            0.159 Mt CO<sub>2</sub>e<br />
            <span className="text-lg font-thin">per Unit of Measure</span>
          </p>
          <div className="sm:w-80 sm:shrink xl:w-auto xl:flex-none">
            <p className="text-lg font-semibold tracking-tight text-white">
              Avoided Emissions
            </p>
            <p className="mt-2 text-base/7 text-white">
              The emissions avoided by scaling the new solution over the
              conventional system.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-4 text-right">
        <p className="text-sm italic text-gray-500">*Diagram not to scale</p>
      </div>
    </div>
  )
}
