import Link from 'next/link'
import routes from '@/shared/routes'

type InternalLinkProps = {
  href?: string
  route?: keyof typeof routes
  linkText: string
  ariaLabel?: string
  className?: string
}

export default function InternalLink({
  href,
  route,
  linkText,
  ariaLabel,
  className = 'inline',
}: InternalLinkProps) {
  // Resolve route dynamically if `route` is provided
  const resolvedHref = route ? routes[route] : href || '#' // Default to "#"

  console.log('🔗 InternalLink href:', resolvedHref) // Debugging

  return (
    <Link
      href={resolvedHref}
      scroll={true}
      className={className}
      aria-label={ariaLabel || linkText}
    >
      {linkText}
    </Link>
  )
}
