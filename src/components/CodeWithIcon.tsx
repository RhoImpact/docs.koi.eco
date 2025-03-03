export default function CodeWithIcon({
  icon,
  children,
}: {
  icon: string
  children: React.ReactNode
}) {
  return (
    <code>
      <i className={icon} /> {children}
    </code>
  )
}
