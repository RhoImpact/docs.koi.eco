// import { Button } from '@/components/Button'
import { Heading } from '@/components/Heading'
import { Danger, Info, Tip, Warning } from '@/components/mdx'

export function Callouts() {
  return (
    <div>
      <Heading id="callouts" level={2}>
        Use of Callouts
      </Heading>
      You&apos;ll find some callouts throughout the documentation to draw your
      attention. These are usually notes that go into more detail about a
      specific point, refer you to further reading, or call out something
      important you should know.
      <Tip>This is a tip.</Tip>
      <Warning>This is a warning.</Warning>
      <Danger>This is what you should avoid or be careful about.</Danger>
      <Info>This is for standard information.</Info>
    </div>
  )
}
