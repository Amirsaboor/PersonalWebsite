import Link from 'next/link'
import { Container } from '@/components/Container'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiCalendar, FiBriefcase } from 'react-icons/fi'

const articles = [
  { date: 'May 12, 2025', title: 'Building interfaces that feel effortless', category: 'Design', read: '6 min read' },
  { date: 'April 03, 2025', title: 'A practical guide to modern React patterns', category: 'Engineering', read: '8 min read' },
  { date: 'February 18, 2025', title: 'What I learned shipping my first SaaS', category: 'Notes', read: '4 min read' },
]

const roles = [
  { company: 'Studio North', role: 'Senior Frontend Engineer', period: '2023 — Present', detail: 'Leading frontend architecture and building thoughtful product experiences.' },
  { company: 'Pixel & Form', role: 'Frontend Developer', period: '2021 — 2023', detail: 'Worked across design systems, web applications, and performance improvements.' },
  { company: 'Freelance', role: 'Independent Developer', period: '2019 — 2021', detail: 'Partnered with small teams to turn early ideas into polished websites.' },
]

const snapshots = [
  { label: 'Studio days', tone: 'from-amber-100 via-orange-200 to-rose-200', shape: 'rounded-[2.5rem] rotate-2' },
  { label: 'A little inspiration', tone: 'from-sky-100 via-cyan-100 to-emerald-200', shape: 'rounded-2xl -rotate-2' },
  { label: 'On the move', tone: 'from-violet-100 via-fuchsia-100 to-pink-200', shape: 'rounded-[2rem] rotate-2' },
  { label: 'The details', tone: 'from-lime-100 via-yellow-100 to-amber-200', shape: 'rounded-2xl -rotate-3' },
  { label: 'After hours', tone: 'from-slate-200 via-zinc-200 to-stone-300', shape: 'rounded-[2.5rem] rotate-2' },
]

export const metadata = {
  title: 'Alex Morgan — Designer & Developer',
  description: 'The personal website of Alex Morgan, a designer and software developer.',
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-24">
      <section className="max-w-3xl">
        <h1 className="text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">I’m Alex Morgan. I live in Brooklyn, where I design the future.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">I’m a designer and developer who loves turning complex problems into simple, beautiful, and intuitive experiences. When I’m not pushing pixels or writing code, you’ll find me exploring the city, taking photos, or hunting down a good cup of coffee.</p>
        <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-2"><FiMapPin /> Brooklyn, NY</span>
          <a href="https://github.com" aria-label="GitHub" className="transition hover:text-orange-600 dark:hover:text-orange-400"><FiGithub className="h-5 w-5" /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="transition hover:text-orange-600 dark:hover:text-orange-400"><FiLinkedin className="h-5 w-5" /></a>
          <a href="mailto:alex@example.com" aria-label="Email" className="transition hover:text-orange-600 dark:hover:text-orange-400"><FiMail className="h-5 w-5" /></a>
        </div>
      </section>

      <section aria-label="Snapshots" className="mt-16 overflow-hidden py-4">
        <div className="flex min-w-max justify-center gap-5 px-2 sm:gap-7">
          {snapshots.map((item, index) => <div key={item.label} className={'relative flex h-44 w-36 shrink-0 items-end overflow-hidden bg-gradient-to-br p-4 shadow-lg shadow-zinc-900/5 sm:h-56 sm:w-44 ' + item.tone + ' ' + item.shape}><div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border-[16px] border-white/30" /><div className="absolute -bottom-10 -left-8 h-32 w-32 rounded-full bg-white/30 blur-xl" /><span className="relative rounded-full border border-white/40 bg-white/30 px-3 py-1.5 text-[10px] font-medium text-zinc-700 backdrop-blur">{item.label}</span><span className="absolute right-4 top-4 text-xs font-semibold text-zinc-700/50">0{index + 1}</span></div>)}
        </div>
      </section>

      <div className="mt-20 grid gap-16 lg:grid-cols-[minmax(0,1fr)_300px]">
        <section>
          <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Writing</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Latest articles</h2></div><Link href="/articles" className="text-sm text-zinc-500 hover:text-orange-600 dark:hover:text-orange-400">All articles ↗</Link></div>
          <div className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
            {articles.map((article) => <article key={article.title} className="py-6 first:pt-0"><div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500"><time>{article.date}</time><span>·</span><span>{article.category}</span><span>·</span><span>{article.read}</span></div><h3 className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">{article.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">Thoughts, lessons, and practical notes from the work of making digital products.</p></article>)}
          </div>
        </section>
        <aside>
          <div className="flex items-center gap-2"><FiBriefcase className="text-orange-600 dark:text-orange-400" /><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Career</p></div>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Work experience</h2>
          <div className="mt-8 space-y-7">{roles.map((role) => <div key={role.company}><p className="text-xs text-zinc-500">{role.period}</p><h3 className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{role.role}</h3><p className="mt-1 text-sm text-orange-700 dark:text-orange-400">{role.company}</p><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{role.detail}</p></div>)}</div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400">More about me <FiArrowUpRight /></Link>
          <div className="mt-12 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"><FiCalendar className="h-5 w-5 text-orange-600 dark:text-orange-400" /><h3 className="mt-3 font-medium text-zinc-900 dark:text-zinc-100">Let’s work together</h3><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">Have an interesting project or just want to say hello?</p><a href="mailto:alex@example.com" className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-orange-700 dark:text-orange-400">Get in touch <FiArrowUpRight /></a></div>
        </aside>
      </div>
    </Container>
  )
}