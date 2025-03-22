'use client'

import { useEffect } from 'react'
import mermaid from 'mermaid'

export default function MermaidWrapper({ chart }: { chart: string }) {
  useEffect(() => {
    mermaid.initialize({ startOnLoad: true })
    mermaid.run({ nodes: document.querySelectorAll('.mermaid') })
  }, [])

  return <div className="mermaid">{chart}</div>
}
