import Link from 'next/link'
import { Container } from '@/components/Container'
import { FiArrowUpRight, FiBox, FiLayers, FiShoppingCart } from 'react-icons/fi'

export const metadata = {
  title: 'Projects',
  description: 'A selection of fictional projects by Alex Morgan.',
}

const projects = [
  { name: 'Fieldnotes', type: 'Productivity · 2025', description: 'A calm, focused workspace for collecting ideas, connecting notes, and turning research into action.', tags: ['Next.js', 'TypeScript', 'Tailwind CSS'], Icon: FiLayers, tone: 'from-emerald-200 via-teal-100 to-cyan-200' },
  { name: 'Goodwell Market', type: 'E-commerce · 2024', description: 'A storefront concept for independent makers, with a thoughtful shopping experience and flexible catalog.', tags: ['React', 'Commerce', 'Design system'], Icon: FiShoppingCart, tone: 'from-orange-200 via-amber-100 to-yellow-200' },
  { name: 'Orbit Dashboard', type: 'Analytics · 2024', description: 'A compact analytics dashboard that helps small teams understand product usage at a glance.', tags: ['React', 'Charts', 'Accessibility'], Icon: FiBox, tone: 'from-indigo-200 via-violet-100 to-fuchsia-200' },
]

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Selected work</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Things I’ve made along the way.</h1><p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A small collection of product experiments and collaborative projects. All examples on this starter version use fictional content.</p></header>
      <div className="mt-14 grid gap-10 sm:grid-cols-2">{projects.map(({ name, type, description, tags, Icon, tone }, index) => <article key={name} className="group"><div className={'relative flex aspect-[16/10] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br ' + tone}><div className="absolute -right-12 -top-12 h-48 w-48 rounded-full border-[24px] border-white/20 transition-transform duration-700 group-hover:scale-125" /><div className="relative flex h-20 w-20 items-center justify-center rounded-2xl border border-white/50 bg-white/30 text-zinc-800 shadow-xl backdrop-blur"><Icon className="h-9 w-9" /></div><span className="absolute bottom-4 left-5 text-xs font-semibold tracking-[0.2em] text-zinc-800/60">PROJECT 0{index + 1}</span></div><div className="mt-5 flex items-start justify-between gap-4"><div><p className="text-xs text-zinc-500">{type}</p><h2 className="mt-1 text-xl font-medium text-zinc-900 dark:text-zinc-100">{name}</h2></div><span className="mt-1 text-zinc-400 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-orange-500"><FiArrowUpRight /></span></div><p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{description}</p><div className="mt-4 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>)}</div></article>)}</div>
      <div className="mt-16 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8"><h2 className="text-lg font-medium text-zinc-900 dark:text-zinc-100">Have a project in mind?</h2><p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">I’m always interested in hearing about thoughtful ideas and interesting collaborations.</p><a href="mailto:alex@example.com" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-700 hover:text-orange-500 dark:text-orange-400">Start a conversation <FiArrowUpRight /></a></div>
    </Container>
  )
}