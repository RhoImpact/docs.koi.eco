import { Button } from '@/components/Button'
import { HeroPattern } from '@/components/HeroPattern'
import { KoiAsciiBraille } from '@/components/KoiAscii'
export default function NotFound() {
  return (
    <>
      <HeroPattern />
      <div className="mx-auto flex h-full max-w-xl flex-col items-center justify-center py-16 text-center">
        <p className="text-sm font-semibold text-zinc-900 dark:text-white">
          404
        </p>
        <h1 className="mt-2 text-2xl font-bold text-zinc-900 dark:text-white">
          There&apos;s a fish out of water!
        </h1>
        <KoiAsciiBraille />
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          If you believe this is an error, please <a href="mailto:support@koi.eco" className="text-blue-500 hover:underline">contact us</a>.
        </p>
        <Button href="/" arrow="right" className="mt-8">
          Back to docs
        </Button>
      </div>
    </>
  )
}
