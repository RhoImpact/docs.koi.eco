// src/components/ExternalLink.tsx
// This component is used to create external links with UTM parameters
// in a consistent manner.
// Example usage:
// <ExternalLink
//   url={`${studioUrl}`}
//   utmContent="hero-banner-link"
//   ariaLabel="Explore Koi Studio"
//   linkText="Koi"
// />

type ExternalLinkProps = {
  url: string
  target?: string
  rel?: string
  ariaLabel?: string
  linkText: string
  className?: string
  utmSource?: string
  utmContent?: string
}

export default function ExternalLink({
  url,
  target = '_blank',
  rel = 'noopener noreferrer',
  ariaLabel,
  linkText,
  className = 'inline',
  utmSource = 'koi',
  utmContent = 'docs-link',
}: ExternalLinkProps) {
  // Determine the href based on whether the URL is a mailto link or not
  // If it is a mailto link, return the URL as is
  // If it is not a mailto link, add UTM parameters to the URL
  const href = url.startsWith('mailto:')
    ? url
    : `${url}${url.includes('?') ? '&' : '?'}utm_source=${utmSource}&utm_content=${utmContent}`

  // Return the anchor element with the appropriate href and attributes
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      aria-label={ariaLabel || linkText}
      className={className}
    >
      {linkText}
    </a>
  )
}
