import Link from 'next/link'
import { Container } from '@/components/Container'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiBriefcase, FiCode, FiLayers } from 'react-icons/fi'

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

const stats = [
  { label: 'Years building', value: '06', Icon: FiBriefcase },
  { label: 'Projects shipped', value: '24', Icon: FiLayers },
  { label: 'Technologies', value: '12', Icon: FiCode },
]

export const metadata = {
  title: 'Alex Morgan — Designer & Developer',
  description: 'The personal website of Alex Morgan, a designer and software developer.',
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-24">
      <section className="grid gap-12 lg:grid-cols-[1fr_280px] lg:items-center">
        <div>
          <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-amber-200 via-orange-300 to-rose-300 text-xl font-semibold text-zinc-800 shadow-lg shadow-orange-900/10">AM</div>
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">
            Designer, developer, and curious human building things for the web.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400">
            I’m Alex, a digital product designer and software engineer based in Brooklyn. I care about the details that make software feel clear, useful, and a little more human.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="mailto:alex@example.com" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-white">Get in touch <FiArrowUpRight /></a>
            <a href="https://github.com" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-500 dark:border-zinc-700 dark:text-zinc-300"><FiGithub /> GitHub</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-sm text-zinc-500 dark:text-zinc-400">
            <span className="inline-flex items-center gap-2"><FiMapPin /> Brooklyn, NY</span>
            <a className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white" href="https://linkedin.com"><FiLinkedin /> LinkedIn</a>
            <a className="inline-flex items-center gap-2 hover:text-zinc-900 dark:hover:text-white" href="mailto:alex@example.com"><FiMail /> Email</a>
          </div>
        </div>
        <aside className="hidden lg:block">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-br from-amber-100 via-orange-200 to-rose-300 p-5 shadow-xl shadow-zinc-900/10">
            <div className="absolute -right-10 top-8 h-48 w-48 rounded-full border-[24px] border-white/30" />
            <div className="absolute -bottom-10 -left-8 h-56 w-56 rounded-full bg-rose-400/40 blur-2xl" />
            <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/40 bg-white/50 p-4 backdrop-blur">
              <p className="text-xs uppercase tracking-[0.2em] text-zinc-600">Currently exploring</p>
              <p className="mt-2 text-lg font-semibold text-zinc-900">Creative code & thoughtful products</p>
            </div>
          </div>
        </aside>
      </section>

      <section className="mt-20 grid grid-cols-3 gap-3 border-y border-zinc-200 py-7 dark:border-zinc-800 sm:gap-8">
        {stats.map(({ label, value, Icon }) => <div key={label} className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-4"><span className="flex h-9 w-9 items-center justify-center rounded-xl bg-zinc-100 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"><Icon /></span><div><p className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{value}</p><p className="text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">{label}</p></div></div>)}
      </section>

      <div className="mt-20 grid gap-16 lg:grid-cols-[1fr_300px]">
        <section>
          <div className="flex items-end justify-between gap-4"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Writing</p><h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">A few things I’ve written</h2></div><Link href="/articles" className="text-sm text-zinc-500 hover:text-orange-600 dark:hover:text-orange-400">All articles ↗</Link></div>
          <div className="mt-8 divide-y divide-zinc-200 dark:divide-zinc-800">
            {articles.map((article) => <article key={article.title} className="py-6 first:pt-0"><div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-zinc-500"><time>{article.date}</time><span>·</span><span>{article.category}</span><span>·</span><span>{article.read}</span></div><h3 className="mt-2 text-lg font-medium text-zinc-900 dark:text-zinc-100">{article.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">Thoughts, lessons, and practical notes from the work of making digital products.</p></article>)}
          </div>
        </section>
        <aside>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Experience</p>
          <h2 className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Where I’ve worked</h2>
          <div className="mt-8 space-y-7">{roles.map((role) => <div key={role.company}><p className="text-xs text-zinc-500">{role.period}</p><h3 className="mt-1 font-medium text-zinc-900 dark:text-zinc-100">{role.role}</h3><p className="mt-1 text-sm text-orange-700 dark:text-orange-400">{role.company}</p><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{role.detail}</p></div>)}</div>
          <Link href="/about" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-zinc-700 hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400">More about me <FiArrowUpRight /></Link>
        </aside>
      </div>
    </Container>
  )
}