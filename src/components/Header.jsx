'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const links = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/uses', label: 'Uses' },
]

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const saved = window.localStorage.getItem('spotlight-theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    const enabled = saved ? saved === 'dark' : prefersDark
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
      className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-600 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-orange-600 dark:bg-zinc-800/90 dark:text-zinc-300 dark:ring-white/10 dark:hover:text-orange-400"
    >
      {dark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  )
}

function navItemClass(active) {
  return clsx(
    'block rounded-full px-3 py-2 text-sm transition',
    active
      ? 'bg-zinc-100 text-zinc-900 dark:bg-zinc-700 dark:text-white'
      : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-300 dark:hover:bg-zinc-700/70 dark:hover:text-white'
  )
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="pointer-events-none relative z-50 h-24 pt-6">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <div className="relative flex items-center justify-end gap-3">
          <nav
            aria-label="Main navigation"
            className="pointer-events-auto hidden items-center rounded-full bg-white/90 px-2 py-1.5 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur md:flex dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10"
          >
            {links.map(({ href, label }) => (
              <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} className={navItemClass(pathname === href)}>
                {label}
              </Link>
            ))}
          </nav>

          <div className="pointer-events-auto md:hidden">
            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={open}
              aria-controls="mobile-navigation"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-zinc-700 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition hover:text-orange-600 dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:text-orange-400"
            >
              {open ? <FiX className="h-4 w-4" /> : <FiMenu className="h-4 w-4" />}
            </button>
          </div>

          <ThemeToggle />

          {open && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="pointer-events-auto absolute right-0 top-12 w-64 rounded-2xl bg-white/95 p-2 shadow-xl shadow-zinc-800/10 ring-1 ring-zinc-900/5 backdrop-blur-xl dark:bg-zinc-800/95 dark:ring-white/10 md:hidden"
            >
              <div className="flex items-center justify-between px-3 pb-2 pt-1">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-400">Menu</span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close navigation menu"
                  className="rounded-full p-1.5 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-700 dark:hover:text-white"
                >
                  <FiX className="h-4 w-4" />
                </button>
              </div>
              <div className="space-y-1">
                {links.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setOpen(false)}
                    aria-current={pathname === href ? 'page' : undefined}
                    className={clsx(navItemClass(pathname === href), 'rounded-xl')}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </nav>
          )}
        </div>
      </div>
    </header>
  )
}
