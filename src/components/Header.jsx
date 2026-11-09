'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi'

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
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

  return <button type="button" onClick={toggle} aria-label="Toggle color theme" className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-600 transition hover:border-zinc-400 dark:border-zinc-800 dark:bg-zinc-900 dark:text-zinc-300">{dark ? <FiSun /> : <FiMoon />}</button>
}

export function Header() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200/70 bg-white/80 backdrop-blur-xl dark:border-zinc-800/80 dark:bg-zinc-950/80">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-rose-300 text-xs font-bold text-zinc-800">AM</span><span className="text-sm font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Alex Morgan</span></Link>
        <nav className="hidden items-center gap-1 rounded-full border border-zinc-200 bg-white/70 p-1 dark:border-zinc-800 dark:bg-zinc-900/70 md:flex" aria-label="Main navigation">
          {links.map(({ href, label }) => <Link key={href} href={href} className={clsx('rounded-full px-4 py-2 text-sm transition', pathname === href ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-zinc-800')}>{label}</Link>)}
        </nav>
        <div className="flex items-center gap-2"><ThemeToggle /><button type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 dark:border-zinc-800 dark:text-zinc-300 md:hidden">{open ? <FiX /> : <FiMenu />}</button></div>
      </div>
      {open && <nav className="border-t border-zinc-200 px-5 py-3 dark:border-zinc-800 md:hidden" aria-label="Mobile navigation"><div className="mx-auto grid max-w-5xl grid-cols-2 gap-2">{links.map(({ href, label }) => <Link key={href} href={href} className={clsx('rounded-xl px-4 py-3 text-sm', pathname === href ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900' : 'bg-zinc-100 text-zinc-700 dark:bg-zinc-900 dark:text-zinc-300')}>{label}</Link>)}</div></nav>}
    </header>
  )
}