import { Container } from '@/components/Container'
import { FiArrowUpRight, FiMapPin } from 'react-icons/fi'

export const metadata = {
  title: 'Speaking',
  description: 'Fictional frontend engineering talks and community sessions.',
}

const talks = [
  { event: 'Frontend Futures 2025', location: 'Amsterdam, NL', date: 'October 2025', type: 'Conference talk', title: 'Interfaces that stay fast as products grow', detail: 'A practical look at performance budgets, component boundaries, and the habits that keep a frontend codebase healthy.' },
  { event: 'Design Systems Social', location: 'Copenhagen, DK', date: 'June 2025', type: 'Community session', title: 'A shared language between design and code', detail: 'How tokens, documentation, and small collaboration rituals help teams ship more coherent experiences.' },
  { event: 'Web Makers Meetup', location: 'Online', date: 'March 2025', type: 'Live workshop', title: 'Accessible interactions from the first commit', detail: 'A hands-on session on semantic HTML, keyboard interaction, focus management, and testing real user flows.' },
]

export default function Speaking() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Speaking & community</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Sharing ideas beyond the screen.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A fictional archive of talks, workshops, and conversations about building thoughtful products for the web.</p>
      </header>
      <div className="mt-14 space-y-5">{talks.map((talk) => <article key={talk.title} className="rounded-2xl border border-zinc-200 p-6 transition hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700 sm:p-8"><div className="flex flex-wrap items-center gap-3 text-xs"><span className="font-semibold uppercase tracking-[0.14em] text-violet-700 dark:text-violet-300">{talk.type}</span><span className="text-zinc-300 dark:text-zinc-700">·</span><span className="text-zinc-500">{talk.date}</span></div><h2 className="mt-3 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{talk.title}</h2><p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">{talk.detail}</p><div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-zinc-500"><span className="font-medium text-zinc-700 dark:text-zinc-300">{talk.event}</span><span className="inline-flex items-center gap-1"><FiMapPin /> {talk.location}</span></div></article>)}</div>
      <div className="mt-12 border-t border-zinc-200 pt-8 dark:border-zinc-800"><p className="text-sm text-zinc-500">Interested in a conversation about frontend craft or design systems?</p><a href="mailto:hello@alexmorgan.dev" className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">Invite Alex to speak <FiArrowUpRight /></a></div>
      <p className="mt-8 text-xs text-zinc-400">All event names, dates, and talk details are fictional sample content.</p>
    </Container>
  )
}
