'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import type PostHogType from 'posthog-js'

const PostHogContext = createContext<{
  posthog: typeof PostHogType | null
  initialized: boolean
} | null>(null)

export const usePostHog = () => useContext(PostHogContext)

function ThemeWatcher() {
  let { setTheme } = useTheme()

  useEffect(() => {
    setTheme('dark') // Set the theme to dark by default
  }, [setTheme])

  return null
}

export const PostHogProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [posthogClient, setPosthogClient] = useState<typeof PostHogType | null>(null)
  const [posthogInitialized, setPosthogInitialized] = useState(false)

  useEffect(() => {
    if (process.env.NODE_ENV === 'development') return

    // Defer PostHog loading until the main thread is idle to avoid
    // blocking TBT with the ~500ms posthog-recorder.js long task
    const scheduleInit = () => {
      const doInit = async () => {
        try {
          const posthog = (await import('posthog-js')).default
          posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
            api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
          })
          setPosthogClient(posthog)
          setPosthogInitialized(true)
        } catch (err) {
          console.error('PostHog init failed:', err)
        }
      }

      if (typeof requestIdleCallback !== 'undefined') {
        requestIdleCallback(() => doInit(), { timeout: 3000 })
      } else {
        setTimeout(() => doInit(), 2000)
      }
    }

    scheduleInit()
  }, [])

  return (
    <PostHogContext.Provider
      value={{ posthog: posthogClient, initialized: posthogInitialized }}
    >
      {children}
    </PostHogContext.Provider>
  )
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" disableTransitionOnChange>
      <ThemeWatcher />
      <PostHogProvider>{children}</PostHogProvider>
    </ThemeProvider>
  )
}
