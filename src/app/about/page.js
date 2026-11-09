import Link from 'next/link'
import { Container } from '@/components/Container'
import { FiArrowUpRight, FiCode, FiLayers, FiDatabase, FiGitBranch } from 'react-icons/fi'

export const metadata = {
  title: 'About',
  description: 'The story, skills, and experience behind this fictional frontend engineer portfolio.',
}

const skills = [
  { group: 'Core frontend', Icon: FiCode, items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'HTML & CSS'] },
  { group: 'UI engineering', Icon: FiLayers, items: ['Tailwind CSS', 'CSS Modules', 'Radix UI', 'Responsive design', 'Accessibility'] },
  { group: 'Data & integration', Icon: FiDatabase, items: ['REST APIs', 'GraphQL basics', 'Node.js', 'Supabase', 'Authentication'] },
  { group: 'Quality & workflow', Icon: FiGitBranch, items: ['Git & GitHub', 'Playwright', 'Jest', 'Figma', 'Performance tuning'] },
]

const experience = [
  { company: 'Northstar Digital', role: 'Senior Frontend Engineer', period: '2023 — Present', place: 'Copenhagen · Hybrid', detail: 'Own frontend delivery for a suite of customer-facing products. Partner with product designers, establish shared component patterns, and improve reliability and performance across the application.' },
  { company: 'Fieldwork Studio', role: 'Frontend Developer', period: '2021 — 2023', place: 'Remote', detail: 'Implemented e-commerce and marketing experiences for a range of growing brands. Worked across design handoff, responsive implementation, API integration, and ongoing optimization.' },
  { company: 'Independent', role: 'Web Developer', period: '2019 — 2021', place: 'Freelance', detail: 'Worked with small teams and independent clients to shape early product ideas into polished websites and interactive prototypes.' },
]

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">About</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">A little about the person behind the interface.</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">I’m Alex Morgan, a fictional frontend engineer based in Copenhagen. I enjoy the space where thoughtful design meets robust engineering—and the small decisions that make digital products feel effortless.</p>
      </header>

      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_280px]">
        <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          <p>Over the years, I’ve moved between product teams, independent projects, and studio work. That variety taught me to adapt quickly, ask better questions, and keep the user’s needs visible throughout the development process.</p>
          <p>My day-to-day work is centered on React, Next.js, and TypeScript. I care about component architecture, accessible interaction patterns, performance, and making sure the finished experience feels considered on both a large monitor and a small phone.</p>
          <p>Outside the editor, this fictional profile enjoys architecture books, long city walks, specialty coffee, and collecting ideas from well-made everyday objects.</p>
        </div>
        <aside className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10">
          <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85" alt="Portrait of a fictional creative professional" className="h-full w-full object-cover" loading="lazy" />
        </aside>
      </div>

      <section className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Capabilities</p>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">A toolkit for building complete experiences.</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">
          {skills.map((group) => <div key={group.group}><h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"><group.Icon className="h-4 w-4 text-violet-600 dark:text-violet-300" />{group.group}</h3><div className="mt-3 flex flex-wrap gap-2">{group.items.map((item) => <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"><FiZap className="h-3 w-3 text-violet-500" />{item}</span>)}</div></div>)}
        </div>
      </section>

      <section id="experience" className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Experience</p>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">A path shaped by making things.</h2>
        <div className="mt-10 space-y-10">{experience.map((item) => <article key={item.company} className="grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-8"><div><p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.period}</p><p className="mt-1 text-xs text-zinc-500">{item.place}</p></div><div className="border-l border-zinc-200 pl-5 dark:border-zinc-800"><h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h3><p className="mt-1 text-sm font-medium text-violet-700 dark:text-violet-300">{item.company}</p><p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{item.detail}</p></div></article>)}</div>
      </section>
      <div className="mt-16"><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">Get in touch <FiArrowUpRight /></Link></div>
    </Container>
  )
}
