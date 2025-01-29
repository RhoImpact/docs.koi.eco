'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import posthog from 'posthog-js'
import { PostHogProvider as OriginalPostHogProvider } from 'posthog-js/react'

const PostHogContext = createContext<{
  posthog: typeof posthog
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
  const [posthogInitialized, setPosthogInitialized] = useState(false)

  useEffect(() => {
    if (!posthog.isFeatureEnabled('posthog-initialized')) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY || '', {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || '',
      })
      posthog.featureFlags.override({ 'posthog-initialized': true })
      setPosthogInitialized(true)
    }
  }, [])

  return (
    <PostHogContext.Provider
      value={{ posthog, initialized: posthogInitialized }}
    >
      <OriginalPostHogProvider client={posthog}>
        {children}
      </OriginalPostHogProvider>
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
