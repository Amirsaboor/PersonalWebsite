import { Container } from '@/components/Container'
import { FiArrowUpRight, FiCompass, FiHeart, FiCoffee } from 'react-icons/fi'

export const metadata = {
  title: 'About',
  description: 'A little more about Alex Morgan.',
}

const values = [
  { title: 'Stay curious', text: 'I enjoy learning how things work, asking better questions, and exploring ideas outside my comfort zone.', Icon: FiCompass },
  { title: 'Care about craft', text: 'The small details matter. I like making interfaces that are accessible, fast, and genuinely pleasant to use.', Icon: FiHeart },
  { title: 'Make time to reset', text: 'Good work needs room to breathe. Long walks, coffee, and books help me find a fresh perspective.', Icon: FiCoffee },
]

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">A little introduction</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">A little about me, and what I care about.</h1><p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">I’m Alex Morgan, a designer and developer who loves bringing thoughtful digital experiences to life.</p></header>
      <div className="mt-16 grid gap-14 lg:grid-cols-[minmax(0,1fr)_280px]">
        <div className="space-y-6 text-base leading-8 text-zinc-600 dark:text-zinc-400"><p>I started out by taking apart websites to understand how they worked. That curiosity gradually turned into a career building products with small, collaborative teams.</p><p>Over the years, I’ve worked across product design and frontend engineering. Moving between those disciplines has taught me to think about the whole experience: the problem, the interface, the implementation, and the people using it.</p><p>These days I focus on building clear, resilient interfaces and helping teams turn complex ideas into simple experiences. I believe the best work happens when good engineering and thoughtful design are part of the same conversation.</p><p>Outside of work, you’ll usually find me exploring a new neighborhood, reading something unrelated to technology, or experimenting with a side project.</p><a href="mailto:alex@example.com" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900">Say hello <FiArrowUpRight /></a></div>
        <aside className="space-y-4"><div className="aspect-[4/5] rounded-[2rem] bg-gradient-to-br from-amber-100 via-orange-200 to-rose-300 p-5"><div className="flex h-full items-end rounded-[1.5rem] border border-white/50 bg-white/10 p-5 backdrop-blur-sm"><p className="text-sm font-medium text-zinc-800">A fictional portrait placeholder</p></div></div><p className="text-center text-xs text-zinc-500">Brooklyn, New York · Available worldwide</p></aside>
      </div>
      <section className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800"><h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100">A few things I value</h2><div className="mt-8 grid gap-8 sm:grid-cols-3">{values.map(({ title, text, Icon }) => <div key={title}><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-zinc-700 dark:bg-zinc-800 dark:text-zinc-200"><Icon /></span><h3 className="mt-4 font-medium text-zinc-900 dark:text-zinc-100">{title}</h3><p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{text}</p></div>)}</div></section>
    </Container>
  )
}