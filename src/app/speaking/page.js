import { Container } from '@/components/Container'
import { FiArrowUpRight, FiCalendar, FiMapPin } from 'react-icons/fi'

export const metadata = { title: 'Speaking', description: 'Talks and events from Alex Morgan.' }

const talks = [
  { event: 'Design Systems Meetup', title: 'Small systems, better products', date: 'October 2025', place: 'Brooklyn, NY', type: 'Talk' },
  { event: 'Frontend Friends', title: 'Making the interface feel fast', date: 'June 2025', place: 'New York, NY', type: 'Workshop' },
  { event: 'Build Week', title: 'From rough idea to real interface', date: 'March 2024', place: 'Online', type: 'Panel' },
]

export default function Speaking() {
  return <Container className="mt-16 sm:mt-24"><header className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">On stage & in conversation</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Speaking and sharing ideas.</h1><p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A collection of talks, workshops, and conversations about design, frontend engineering, and building better products. This starter page uses sample events.</p></header><div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">{talks.map((talk) => <article key={talk.title} className="grid gap-4 py-7 sm:grid-cols-[1fr_auto] sm:items-center"><div><div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500"><span>{talk.type}</span><span>·</span><span>{talk.event}</span></div><h2 className="mt-2 text-xl font-medium text-zinc-900 dark:text-zinc-100">{talk.title}</h2><div className="mt-3 flex flex-wrap gap-4 text-sm text-zinc-500"><span className="inline-flex items-center gap-2"><FiCalendar />{talk.date}</span><span className="inline-flex items-center gap-2"><FiMapPin />{talk.place}</span></div></div><span className="inline-flex items-center gap-2 text-sm text-zinc-500">Event details <FiArrowUpRight /></span></article>)}</div></Container>
}