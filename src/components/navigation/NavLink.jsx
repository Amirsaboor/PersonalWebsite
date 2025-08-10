import Link from 'next/link'

export default function NavLink({ href, children }) {
  return (
    <Link href={href} className="transition hover:text-primary-500 dark:hover:text-primary-400">
      {children}
    </Link>
  )
}


