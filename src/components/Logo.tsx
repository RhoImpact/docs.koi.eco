import Image from 'next/image'
import koiLogo from '@/images/logos/koi-logo-transparentbg.svg'

export function Logo({
  src = koiLogo,
  alt = 'Koi Docs',
  ...props
}: Partial<React.ComponentPropsWithoutRef<typeof Image>>) {
  return (
    <div className="flex items-center justify-start gap-2">
      <Image
        src={src}
        alt={alt}
        className="h-6 w-auto"
        width={24}
        height={24}
        {...props}
      />
      <span>Koi Docs</span>
    </div>
  )
}
