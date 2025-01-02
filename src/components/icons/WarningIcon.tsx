export function WarningIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 2l10 18H2L12 2z"
        />
        <path
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8v4M12 16h.01"
        />
      </svg>
    )
  }
  