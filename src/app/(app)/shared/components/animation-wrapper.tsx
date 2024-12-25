'use client'

import { type ReactNode, useEffect } from 'react'
import Lenis from 'lenis'

function AnimationWrapper({ children }: { children: ReactNode }) {
  useEffect(() => {
    if (window) {
      new Lenis({
        autoRaf: true,
      })
    }
  })
  return <>{children}</>
}

export default AnimationWrapper
