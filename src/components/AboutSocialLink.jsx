import Link from 'next/link'
import clsx from 'clsx'

export function AboutSocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className='flex my-2'>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-primary-500 dark:text-zinc-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
