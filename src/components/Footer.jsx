import Link from 'next/link'
import { Container } from '@/components/Container'

export function Footer() {
  return (
    <footer className="mt-24 border-t border-zinc-200 py-10 dark:border-zinc-800">
      <Container className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">© {new Date().getFullYear()} Amir Saboor. All rights reserved.</p>
        <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-zinc-600 dark:text-zinc-400">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/projects">Projects</Link>
          <Link href="/speaking">Speaking</Link>
          <Link href="/uses">Uses</Link>
        </nav>
      </Container>
    </footer>
  )
}
