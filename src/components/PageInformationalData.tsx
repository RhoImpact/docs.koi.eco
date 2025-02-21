// Common informational data that is displayed at the top of a page.
// This is used to display the last updated date, author, and other metadata when available.
type PageInformationalDataProps = {
  lastModified: string;
  lastModifiedLabel?: string;
  contributors?: string[];
  className?: string;
};

export default function PageInformationalData({
  lastModified,
  lastModifiedLabel,
  contributors,
  className,
}: PageInformationalDataProps) {
  return (
    <p className={`text-sm italic ${className}`}>
      {lastModifiedLabel || 'Last Updated:'} {lastModified}
      {contributors && (
        <>
          &nbsp;&bull;
          Contributors: {contributors.join(', ')}
        </>
      )}
    </p>
  );
}
