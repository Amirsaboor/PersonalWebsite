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

function Avatar({ large = false }) {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={clsx(
        'pointer-events-auto block shrink-0 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:ring-white/10',
        large ? 'h-[116px] w-[116px]' : 'h-[68px] w-[68px]',
      )}
    >
      <img
        src="https://github.com/Amirsaboor.png?size=160"
        alt="Amir Saboor"
        width="112"
        height="112"
        className={clsx('h-full w-full rounded-full bg-zinc-100 object-cover dark:bg-zinc-800')}
      />
    </Link>
  )
}

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
      aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'}
      onClick={toggle}
      className="pointer-events-auto group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm transition hover:ring-zinc-900/10 dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
    >
      {dark
        ? <FiSun className="h-6 w-6 fill-zinc-700 stroke-zinc-400 transition group-hover:stroke-zinc-200" />
        : <FiMoon className="h-6 w-6 fill-zinc-100 stroke-zinc-500 transition group-hover:fill-zinc-200 group-hover:stroke-zinc-700" />}
    </button>
  )
}

function NavItem({ href, children }) {
  const active = usePathname() === href

  return (
    <li>
      <Link
        href={href}
        aria-current={active ? 'page' : undefined}
        className={clsx(
          'relative block px-3 py-2 transition-colors',
          active
            ? 'text-teal-600 dark:text-teal-400'
            : 'hover:text-teal-600 dark:hover:text-teal-400',
        )}
      >
        {children}
        {active && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-500/0 via-teal-500/50 to-teal-500/0 dark:via-teal-400/50" />
        )}
      </Link>
    </li>
  )
}

export function Header() {
  const pathname = usePathname()
  const isHomePage = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 90)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <>
      {isHomePage && (
        <div className="pointer-events-none relative z-40 mx-auto max-w-5xl px-5 pt-6 sm:px-8">
          <Avatar large />
        </div>
      )}

      <header className={clsx('sticky top-0 z-50 h-16 pointer-events-none', scrolled ? 'pt-0' : 'pt-6')}>
        <Container className="w-full">
          <div className="relative flex gap-4">
            <div className="flex flex-1 items-center">
              {(!isHomePage || scrolled) && <Avatar />}
            </div>

            <div className="flex flex-1 justify-end md:justify-center">
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-haspopup="dialog"
                aria-expanded={menuOpen}
                className="pointer-events-auto group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 md:hidden"
              >
                Menu
                <svg viewBox="0 0 8 6" aria-hidden="true" className="ml-3 h-auto w-2 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-300">
                  <path d="M1.75 1.75 4 4.25l2.25-2.5" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>

              <nav aria-label="Main navigation" className="pointer-events-auto hidden md:block">
                <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur-sm dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
                  {links.map(({ href, label }) => <NavItem key={href} href={href}>{label}</NavItem>)}
                </ul>
              </nav>
            </div>

            <div className="flex flex-1 justify-end">
              <ThemeToggle />
            </div>
          </div>
        </Container>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60]">
          <button
            type="button"
            aria-label="Close navigation"
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 h-full w-full bg-zinc-800/40 backdrop-blur-[2px] dark:bg-black/80"
          />
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="mobile-navigation-title"
            className="absolute inset-x-4 top-8 rounded-3xl bg-white p-8 shadow-2xl ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)} className="-m-1 rounded-full p-1 text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white">
                <FiX className="h-6 w-6" />
              </button>
              <h2 id="mobile-navigation-title" className="text-sm font-medium text-zinc-600 dark:text-zinc-400">Navigation</h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                {links.map(({ href, label }) => (
                  <li key={href}>
                    <Link href={href} onClick={() => setMenuOpen(false)} className="block py-3 transition-colors hover:text-teal-600 dark:hover:text-teal-400">{label}</Link>
                  </li>
                ))}
              </ul>
            </nav>
          </section>
        </div>
      )}
    </>
  )
}
