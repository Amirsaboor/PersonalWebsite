import { Container } from '@/components/Container'
import { FiArrowUpRight, FiClock } from 'react-icons/fi'

export const metadata = {
  title: 'Articles',
  description: 'Fictional notes on frontend engineering, design systems, and product craft.',
}

const articles = [
  { category: 'Frontend architecture', date: 'May 14, 2025', read: '7 min read', title: 'The quiet power of a well-shaped component', excerpt: 'A component API is a small design system. Thoughtful boundaries make interfaces easier to compose, test, and evolve.' },
  { category: 'Performance', date: 'April 02, 2025', read: '6 min read', title: 'Making fast feel effortless', excerpt: 'Performance work is most successful when it starts with the moments that matter to people—not just a score in a report.' },
  { category: 'Design systems', date: 'February 19, 2025', read: '9 min read', title: 'Consistency without sameness', excerpt: 'A useful design system creates a shared language while leaving room for each product surface to have its own character.' },
  { category: 'Accessibility', date: 'January 08, 2025', read: '5 min read', title: 'Small accessibility decisions, lasting impact', excerpt: 'Keyboard states, semantic structure, and readable contrast are details that quietly improve the experience for everyone.' },
  { category: 'Career notes', date: 'November 21, 2024', read: '4 min read', title: 'Learning to collaborate earlier', excerpt: 'Bringing engineering into the conversation before a design is finished often leads to better ideas and fewer surprises.' },
]

export default function Articles() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Writing & notes</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Ideas from the workbench.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">Short reflections on frontend engineering, product design, and the craft of making the web a little better.</p>
      </header>
      <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {articles.map((article, index) => (
          <article key={article.title} className="grid gap-3 py-8 sm:grid-cols-[150px_1fr] sm:gap-8">
            <div><p className="text-xs font-medium text-zinc-500">{article.date}</p><p className="mt-2 text-xs text-violet-700 dark:text-violet-300">{article.category}</p></div>
            <div><div className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">Note 0{index + 1}</span><span className="text-zinc-300 dark:text-zinc-700">·</span><span className="inline-flex items-center gap-1 text-[11px] text-zinc-400"><FiClock /> {article.read}</span></div><h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{article.title}</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">{article.excerpt}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-zinc-400">Editorial preview <FiArrowUpRight /></span></div>
          </article>
        ))}
      </div>
      <p className="mt-8 text-xs leading-6 text-zinc-400">These article titles and summaries are fictional editorial samples for the portfolio concept.</p>
    </Container>
  )
}
