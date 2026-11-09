'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FiSun, FiMoon, FiX } from 'react-icons/fi'

const links = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/uses', label: 'Uses' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    const stored = window.localStorage.getItem('spotlight-theme')
    const enabled = stored ? stored === 'dark' : true
    document.documentElement.classList.toggle('dark', enabled)
    setDark(enabled)
  }, [])

  function toggle() {
    const next = !dark
    document.documentElement.classList.toggle('dark', next)
    window.localStorage.setItem('spotlight-theme', next ? 'dark' : 'light')
    setDark(next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      title={dark ? 'Light theme' : 'Dark theme'}
      className="pointer-events-auto flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-500 shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800/90 dark:text-zinc-400 dark:ring-white/5 dark:hover:bg-zinc-700 dark:hover:text-white"
    >
      {dark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  )
}

function NavItem({ href, children }) {
  const pathname = usePathname()
  const active = pathname === href || (href !== '/' && pathname.startsWith(href + '/'))

  return (
    <li>
      <Link
        href={href}
        aria-current={active ? 'page' : undefined}
        className={clsx(
          'block whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-semibold transition-colors',
          active
            ? 'bg-zinc-200/80 text-zinc-950 dark:bg-zinc-700/80 dark:text-white'
            : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white',
        )}
      >
        {children}
      </Link>
    </li>
  )
}

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => setMenuOpen(false), [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => event.key === 'Escape' && setMenuOpen(false)
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      <header className="sticky top-0 z-50 h-[4.5rem] border-b border-zinc-200/70 bg-white/85 backdrop-blur-xl dark:border-white/[0.045] dark:bg-[#18181b]/90">
        <div className="relative mx-auto grid h-full max-w-5xl grid-cols-[1fr_auto_1fr] items-center px-5 sm:px-8">
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
              className="pointer-events-auto inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-700 ring-1 ring-black/5 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/5 md:hidden"
            >
              Menu <span aria-hidden="true">⌄</span>
            </button>
          </div>
          <nav aria-label="Main navigation" className="pointer-events-auto hidden md:block">
            <ul className="flex items-center gap-0.5 rounded-full bg-zinc-100/90 p-1 ring-1 ring-black/[0.035] dark:bg-zinc-800/80 dark:ring-white/[0.04]">
              {links.map(({ href, label }) => <NavItem key={href} href={href}>{label}</NavItem>)}
            </ul>
          </nav>
          <div className="flex justify-end"><ThemeToggle /></div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} className="absolute inset-0 h-full w-full bg-black/55 backdrop-blur-sm" />
          <section role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title" className="absolute inset-x-4 top-5 rounded-2xl bg-white p-6 shadow-2xl dark:bg-zinc-900">
            <div className="flex items-center justify-between">
              <h2 id="mobile-navigation-title" className="text-sm font-semibold text-zinc-800 dark:text-zinc-100">Navigation</h2>
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="rounded-full p-1 text-zinc-500 hover:text-zinc-950 dark:hover:text-white"><FiX className="h-5 w-5" /></button>
            </div>
            <nav className="mt-4">
              <ul className="divide-y divide-zinc-100 text-sm dark:divide-zinc-800">
                {links.map(({ href, label }) => <li key={href}><Link href={href} onClick={() => setMenuOpen(false)} className="block py-3 font-medium text-zinc-700 hover:text-violet-600 dark:text-zinc-200 dark:hover:text-violet-300">{label}</Link></li>)}
              </ul>
            </nav>
          </section>
        </div>
      )}
    </>
  )
}
