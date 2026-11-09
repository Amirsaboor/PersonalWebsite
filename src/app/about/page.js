import Link from 'next/link'
import { Container } from '@/components/Container'
import { FiArrowUpRight, FiGithub, FiCode, FiLayers, FiZap } from 'react-icons/fi'

export const metadata = {
  title: 'About',
  description: 'About Amir Saboor, frontend developer.',
}

const values = [
  { title: 'Clarity first', text: 'I aim to make interfaces easy to understand, with clear structure and predictable interactions.', Icon: FiLayers },
  { title: 'Care about the details', text: 'Responsive behavior, accessibility, performance, and maintainable code are part of the finished work.', Icon: FiZap },
  { title: 'Keep learning', text: 'I keep improving my frontend skills by building, reviewing real projects, and learning modern web tools.', Icon: FiCode },
]

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">About me</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Frontend development with a focus on useful details.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">I’m Amir Saboor, a frontend developer based in Mashhad, Iran. I build responsive web experiences with React and Next.js.</p>
      </header>

      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="space-y-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          <p>My work has included e-commerce websites, business websites, and product interfaces. Across these projects, I’ve worked on everything from responsive layouts and reusable components to product filters, variations, cart flows, and API integration.</p>
          <p>I enjoy taking a design or product requirement and turning it into an interface that feels straightforward to use and remains practical to maintain.</p>
          <p>My day-to-day frontend toolkit includes JavaScript, TypeScript, React, Next.js, Tailwind CSS, and component libraries such as MUI and shadcn/ui.</p>
          <Link href="https://github.com/Amirsaboor" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">Find me on GitHub <FiGithub /></Link>
        </div>
        <aside className="flex flex-col items-center gap-4">
          <div className="h-44 w-44 overflow-hidden rounded-full bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
            <img src="https://github.com/Amirsaboor.png?size=400" alt="Amir Saboor" className="h-full w-full object-cover" />
          </div>
          <p className="text-sm text-zinc-500">Mashhad, Iran</p>
          <Link href="https://github.com/Amirsaboor" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm text-zinc-600 transition hover:text-teal-700 dark:text-zinc-400 dark:hover:text-teal-400">GitHub profile <FiArrowUpRight /></Link>
        </aside>
      </div>

      <section className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">How I approach the work</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-3">
          {values.map(({ title, text, Icon }) => (
            <div key={title}>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"><Icon /></span>
              <h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
              <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
