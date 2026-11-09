import Link from 'next/link'
import { Container } from '@/components/Container'
import { FiArrowUpRight } from 'react-icons/fi'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 py-10 dark:border-zinc-800">
      <Container className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div><p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Alex Morgan <span className="font-normal text-zinc-400">/ Frontend Engineer</span></p><p className="mt-1 text-xs text-zinc-500">© {new Date().getFullYear()} · A fictional portfolio concept</p></div>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <Link href="/about" className="transition hover:text-violet-600 dark:hover:text-violet-300">About</Link>
          <Link href="/projects" className="transition hover:text-violet-600 dark:hover:text-violet-300">Projects</Link>
          <Link href="/articles" className="transition hover:text-violet-600 dark:hover:text-violet-300">Articles</Link>
          <Link href="/uses" className="transition hover:text-violet-600 dark:hover:text-violet-300">Uses</Link>
          <Link href="/contact" className="inline-flex items-center gap-1 text-zinc-800 transition hover:text-violet-600 dark:text-zinc-200 dark:hover:text-violet-300">Contact <FiArrowUpRight /></Link>
        </nav>
      </Container>
    </footer>
  )
}
