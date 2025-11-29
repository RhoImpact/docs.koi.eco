'use client'

import { useEffect, useRef, useState } from 'react'
import '@scalar/api-reference/style.css'

export default function ApiReferencePage() {
  const ref = useRef<HTMLDivElement>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loadScalar = async () => {
      try {
        // Dynamically import Scalar to ensure it runs client-side only
        const { createApiReference } = await import('@scalar/api-reference')

        if (ref.current) {
          createApiReference(ref.current, {
            spec: {
              url: 'https://rhoimpact.github.io/Koi/openapi.json',
            },
            darkMode: true,
            layout: 'modern',
            theme: 'default',
            showSidebar: true,
            hideClientButton: true,
          })
        }
      } catch (err) {
        console.error('Error loading Scalar:', err)
        setError('Failed to load API reference')
      }
    }

    loadScalar()
  }, [])

  if (error) {
    return (
      <div className="flex min-h-[400px] items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">API Reference Unavailable</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            {error}. Please try again later.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="not-prose fixed inset-0 top-14 z-50 overflow-auto bg-white dark:bg-zinc-900 lg:left-72">
      <div ref={ref} className="min-h-full w-full" />
    </div>
  )
}
