import { Container } from '@/components/Container'

export const metadata = { title: 'Articles' }

export default function Articles() {
  return <Container className="mt-16 sm:mt-24"><h1 className="text-4xl font-semibold text-zinc-900 dark:text-zinc-100">Notes and articles</h1><p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">Sample writing about design, engineering, and building thoughtful products.</p></Container>
}
