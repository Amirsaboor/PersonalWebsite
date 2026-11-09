import Link from 'next/link'
import { Container } from '@/components/Container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[65vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">404 · Page not found</p>
      <h1 className="mt-5 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">This page wandered off.</h1>
      <p className="mt-4 max-w-md text-sm leading-7 text-zinc-500">The page may have moved, or the address may be incorrect. You can head back to the homepage and continue exploring.</p>
      <Link href="/" className="mt-8 rounded-full bg-zinc-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-700 dark:bg-white dark:text-zinc-900">Back to home</Link>
    </Container>
  )
}
