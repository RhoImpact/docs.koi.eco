'use client'

import { useRef } from 'react'
import {
  navigation as navigationData,
  NavGroup,
  NavSection,
} from './navigation-data'

export function useInitialValue<T>(value: T, condition = true) {
  let initialValue = useRef(value).current
  return condition ? initialValue : value
}

export { navigationData as navigation }
export type { NavGroup, NavSection }
