import { Container } from '@/components/Container'

export const metadata = { title: 'Articles', description: 'Notes and articles by Alex Morgan.' }

const articles = [
  { date: 'May 12, 2025', title: 'Building interfaces that feel effortless', category: 'Design', description: 'A few principles for creating interfaces that stay out of the way and help people focus on what matters.' },
  { date: 'April 03, 2025', title: 'A practical guide to modern React patterns', category: 'Engineering', description: 'Patterns that make component code easier to reason about as a product grows.' },
  { date: 'February 18, 2025', title: 'What I learned shipping my first SaaS', category: 'Notes', description: 'Lessons from scoping, building, launching, and improving a small software product.' },
]

export default function Articles() {
  return <Container className="mt-16 sm:mt-24"><header className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Writing & ideas</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Notes from the workbench.</h1><p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">Short essays and practical notes on design, engineering, and the process of making things. These are sample entries for this portfolio starter.</p></header><div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">{articles.map((article) => <article key={article.title} className="py-8"><div className="flex flex-wrap gap-3 text-xs text-zinc-500"><time>{article.date}</time><span>·</span><span>{article.category}</span></div><h2 className="mt-2 text-xl font-medium text-zinc-900 dark:text-zinc-100">{article.title}</h2><p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">{article.description}</p><span className="mt-4 inline-flex text-sm font-medium text-orange-700 dark:text-orange-400">Sample article</span></article>)}</div></Container>
}