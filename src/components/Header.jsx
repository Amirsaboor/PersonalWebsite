'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FiSun, FiMoon, FiX } from 'react-icons/fi'
import { Container } from '@/components/Container'

const links = [
  { href: '/about', label: 'About' },
  { href: '/articles', label: 'Articles' },
  { href: '/projects', label: 'Projects' },
  { href: '/speaking', label: 'Speaking' },
  { href: '/uses', label: 'Uses' },
]

function Avatar() {
  return (
    <Link href="/" aria-label="Alex Morgan — Home" className="pointer-events-auto block h-[3.25rem] w-[3.25rem] shrink-0 overflow-hidden rounded-full bg-zinc-900 p-[3px] shadow-lg shadow-zinc-800/10 ring-1 ring-zinc-900/10 dark:bg-zinc-100 dark:ring-white/10">
      <span className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-[radial-gradient(circle_at_30%_20%,#c4b5fd,transparent_42%),linear-gradient(145deg,#27272a,#18181b)] text-sm font-semibold tracking-[-0.08em] text-white dark:bg-[radial-gradient(circle_at_30%_20%,#a5f3fc,transparent_42%),linear-gradient(145deg,#e4e4e7,#a1a1aa)] dark:text-zinc-900">
        AM
        <span className="absolute bottom-1 right-1 h-1.5 w-1.5 rounded-full bg-emerald-400 ring-2 ring-zinc-800 dark:ring-zinc-200" />
      </span>
    </Link>
  )
}

function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    const stored = window.localStorage.getItem('spotlight-theme')
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches
    const enabled = stored === 'dark' || (stored !== 'light' && preferred)
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
      className="pointer-events-auto flex h-11 w-11 items-center justify-center rounded-full bg-white text-zinc-600 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:text-violet-600 hover:ring-zinc-900/10 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-white/10 dark:hover:text-violet-300"
    >
      {dark ? <FiSun className="h-[18px] w-[18px]" /> : <FiMoon className="h-[18px] w-[18px]" />}
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
          'relative block whitespace-nowrap px-3 py-2 transition-colors',
          active ? 'text-violet-600 dark:text-violet-300' : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white',
        )}
      >
        {children}
        {active && <span className="absolute inset-x-2 -bottom-px h-px bg-gradient-to-r from-violet-500/0 via-violet-500/60 to-violet-500/0" />}
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
      <header className="pointer-events-none relative z-50 flex flex-none flex-col">
        <div className="top-0 z-10 h-16 pt-6">
          <Container>
            <div className="relative flex gap-4">
              <div className="flex flex-1 items-center"><Avatar /></div>
              <div className="flex flex-1 justify-end md:justify-center">
                <button
                  type="button"
                  onClick={() => setMenuOpen(true)}
                  aria-haspopup="dialog"
                  aria-expanded={menuOpen}
                  className="pointer-events-auto flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-zinc-700 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition hover:text-violet-600 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/10 dark:hover:text-violet-300 md:hidden"
                >
                  Menu
                  <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-current">
                    <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <nav aria-label="Main navigation" className="pointer-events-auto hidden md:block">
                  <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10">
                    {links.map(({ href, label }) => <NavItem key={href} href={href}>{label}</NavItem>)}
                  </ul>
                </nav>
              </div>
              <div className="flex flex-1 justify-end"><ThemeToggle /></div>
            </div>
          </Container>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <button type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} className="absolute inset-0 h-full w-full bg-zinc-900/40 backdrop-blur-[2px] dark:bg-black/75" />
          <section role="dialog" aria-modal="true" aria-labelledby="mobile-navigation-title" className="absolute inset-x-4 top-8 rounded-3xl bg-white p-7 shadow-2xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-white/10">
            <div className="flex items-center justify-between">
              <h2 id="mobile-navigation-title" className="text-sm font-medium text-zinc-600 dark:text-zinc-300">Navigation</h2>
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="rounded-full p-1 text-zinc-500 transition hover:text-zinc-950 dark:hover:text-white"><FiX className="h-5 w-5" /></button>
            </div>
            <nav className="mt-5">
              <ul className="divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-800 dark:text-zinc-200">
                {links.map(({ href, label }) => (
                  <li key={href}><Link href={href} onClick={() => setMenuOpen(false)} className="block py-3 transition-colors hover:text-violet-600 dark:hover:text-violet-300">{label}</Link></li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      )}
    </>
  )
}
