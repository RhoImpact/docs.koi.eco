import dynamic from 'next/dynamic'

// Dynamically import the client component with no SSR
const MermaidWrapper = dynamic(() => import('./MermaidWrapper'), {
  ssr: false,
})

export default function Mermaid({ chart }: { chart: string }) {
  return <MermaidWrapper chart={chart} />
}
