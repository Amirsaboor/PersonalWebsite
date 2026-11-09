'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import clsx from 'clsx'
import { FiSun, FiMoon, FiX, FiGlobe } from 'react-icons/fi'
import { useLocale } from '@/i18n/LocaleProvider'

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
    <button type="button" onClick={toggle} aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} title={dark ? 'Light theme' : 'Dark theme'} className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100/90 text-zinc-500 shadow-sm ring-1 ring-black/5 transition hover:bg-zinc-200 hover:text-zinc-900 dark:bg-zinc-800/90 dark:text-zinc-400 dark:ring-white/5 dark:hover:bg-zinc-700 dark:hover:text-white">
      {dark ? <FiSun className="h-4 w-4" /> : <FiMoon className="h-4 w-4" />}
    </button>
  )
}

function NavItem({ href, children, active }) {
  return (
    <li>
      <Link href={href} aria-current={active ? 'page' : undefined} className={clsx(
        'block whitespace-nowrap rounded-full px-3 py-2 text-[11px] font-semibold transition-colors',
        active ? 'bg-zinc-200/80 text-zinc-950 dark:bg-zinc-700/80 dark:text-white' : 'text-zinc-600 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white',
      )}>{children}</Link>
    </li>
  )
}

export function Header() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const { t, isFa, toggleLocale } = useLocale()
  const links = [
    { href: '/', label: t('home') },
    { href: '/about', label: t('about') },
    { href: '/articles', label: t('articles') },
    { href: '/#projects', label: t('projects'), project: true },
    { href: '/speaking', label: t('education') },
    { href: '/uses', label: t('uses') },
    { href: '/contact', label: t('contact') },
  ]
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
        <div className="relative mx-auto grid h-full max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4 sm:px-8">
          <div className="flex items-center">
            <Link href="/" aria-label="Alex Morgan — home" className="inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full ring-1 ring-black/10 transition hover:scale-105 dark:ring-white/10">
              <Image src="/PersonalWebsite/images/avatar.jpg" alt="Alex Morgan" width={40} height={40} className="h-full w-full object-cover" priority unoptimized />
            </Link>
            <button type="button" onClick={() => setMenuOpen(true)} aria-haspopup="dialog" aria-expanded={menuOpen} className="ml-3 inline-flex items-center gap-2 rounded-full bg-zinc-100 px-3.5 py-2 text-xs font-semibold text-zinc-700 ring-1 ring-black/5 dark:bg-zinc-800 dark:text-zinc-200 dark:ring-white/5 md:hidden">
              {isFa ? 'فهرست' : 'Menu'} <span aria-hidden="true">⌄</span>
            </button>
          </div>
          <nav aria-label="Main navigation" className="hidden md:block">
            <ul className="flex items-center gap-0.5 rounded-full bg-zinc-100/90 p-1 ring-1 ring-black/[0.035] dark:bg-zinc-800/80 dark:ring-white/[0.04]">
              {links.map(({ href, label, project }) => <NavItem key={href} href={href} active={project ? pathname === '/' : pathname === href || (href !== '/' && pathname.startsWith(href + '/'))}>{label}</NavItem>)}
            </ul>
          </nav>
          <div className="flex items-center justify-end gap-2">
            <button type="button" onClick={toggleLocale} aria-label="Change language" title={isFa ? 'Switch to English' : 'تغییر زبان به فارسی'} className="flex h-9 items-center gap-1.5 rounded-full bg-zinc-100 px-3 text-[11px] font-semibold text-zinc-600 ring-1 ring-black/5 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:ring-white/5 dark:hover:bg-zinc-700">
              <FiGlobe className="h-3.5 w-3.5" /> {t('language')}
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[60] md:hidden">
          <button type="button" aria-label="Close navigation" onClick={() => setMenuOpen(false)} className="absolute inset-0 h-full w-full bg-black/55 backdrop-blur-sm" />
          <section role="dialog" aria-modal="true" aria-label={isFa ? 'فهرست اصلی' : 'Main navigation'} dir={isFa ? 'rtl' : 'ltr'} className="absolute left-4 right-4 top-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm font-semibold text-zinc-900 dark:text-white">{isFa ? 'رفتن به بخش' : 'Navigate to'}</p>
              <button type="button" onClick={() => setMenuOpen(false)} aria-label={t('close')} className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"><FiX /></button>
            </div>
            <nav><ul className="grid grid-cols-2 gap-2">{links.map(({ href, label }) => <li key={href}><Link href={href} className="block rounded-xl bg-zinc-50 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">{label}</Link></li>)}</ul></nav>
            <button type="button" onClick={toggleLocale} className="mt-3 w-full rounded-xl border border-zinc-200 px-4 py-3 text-sm font-semibold dark:border-zinc-700">{t('language')}</button>
          </section>
        </div>
      )}
    </>
  )
}
