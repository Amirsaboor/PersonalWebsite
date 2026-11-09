import { Container } from '@/components/Container'

export const metadata = {
  title: 'Articles',
  description: 'Notes and articles by Amir Saboor.',
}

export default function Articles() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Writing</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Notes from the workbench.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">Technical notes and lessons from frontend projects will live here.</p>
      </header>
      <div className="mt-14 border-y border-zinc-200 py-8 dark:border-zinc-800">
        <p className="text-sm leading-7 text-zinc-500 dark:text-zinc-400">No articles published yet.</p>
      </div>
    </Container>
  )
}
