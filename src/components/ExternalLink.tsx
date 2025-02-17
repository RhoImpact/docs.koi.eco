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
  url: string;
  target?: string;
  rel?: string;
  ariaLabel?: string;
  linkText: string;
  utmSource?: string;
  utmContent?: string;
};

export function ExternalLink({
  url,
  target = '_blank',
  rel = 'noopener noreferrer',
  ariaLabel,
  linkText,
  utmSource = 'docs',
  utmContent = 'docs-link',
}: ExternalLinkProps) {
  const href = `${url}?utm_source=${utmSource}&utm_content=${utmContent}`;
  return (
    <a href={href} target={target} rel={rel} aria-label={ariaLabel || linkText}>
      {linkText}
    </a>
  );
}
