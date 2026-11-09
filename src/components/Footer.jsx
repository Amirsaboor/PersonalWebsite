import Link from 'next/link'
import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200/80 py-8 dark:border-white/[0.055]">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] font-semibold text-zinc-600 dark:text-zinc-400">
          <Link href="/about" className="transition hover:text-zinc-950 dark:hover:text-white">About</Link>
          <Link href="/projects" className="transition hover:text-zinc-950 dark:hover:text-white">Projects</Link>
          <Link href="/speaking" className="transition hover:text-zinc-950 dark:hover:text-white">Education</Link>
          <Link href="/uses" className="transition hover:text-zinc-950 dark:hover:text-white">Uses</Link>
          <Link href="/contact" className="transition hover:text-zinc-950 dark:hover:text-white">Contact</Link>
        </nav>
        <p className="text-[11px] text-zinc-400 dark:text-zinc-600">© {new Date().getFullYear()} Alex Morgan. All rights reserved.</p>
      </Container>
    </footer>
  )
}
