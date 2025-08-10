import CardLink from './CardLink'

export default function CardTitle({ as: Component = 'h2', href, children }) {
  return (
    <Component className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <CardLink href={href}>{children}</CardLink> : children}
    </Component>
  )
}


