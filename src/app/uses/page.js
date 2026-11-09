import { Container } from '@/components/Container'
import { FiMonitor, FiCode, FiPenTool, FiLayers, FiCheckCircle } from 'react-icons/fi'

export const metadata = {
  title: 'Uses',
  description: 'A fictional frontend engineer’s tools, hardware, and workflow.',
}

const groups = [
  { title: 'Desk & hardware', Icon: FiMonitor, intro: 'A calm, reliable setup for long stretches of focused work.', items: [
    { name: '14-inch MacBook Pro', detail: 'Apple silicon · 32 GB memory · Space Black' },
    { name: 'Studio Display', detail: 'A crisp main display with a simple single-cable desk setup' },
    { name: 'Keychron Q1', detail: 'Mechanical keyboard · tactile switches' },
    { name: 'Logitech MX Master 3S', detail: 'A comfortable daily driver for design and development work' },
  ]},
  { title: 'Development', Icon: FiCode, intro: 'A small set of tools that stay out of the way.', items: [
    { name: 'Visual Studio Code', detail: 'Editor, integrated terminal, and a focused extension set' },
    { name: 'Warp', detail: 'Terminal for project work, scripts, and Git workflows' },
    { name: 'Node.js & pnpm', detail: 'Runtime and package management for JavaScript projects' },
    { name: 'Chrome & Firefox', detail: 'Browser testing, accessibility checks, and responsive QA' },
  ]},
  { title: 'Design & collaboration', Icon: FiPenTool, intro: 'Tools for making decisions visible and sharing context.', items: [
    { name: 'Figma', detail: 'Interface exploration, component libraries, and design handoff' },
    { name: 'Linear', detail: 'Planning work, tracking decisions, and keeping projects moving' },
    { name: 'Notion', detail: 'Project notes, lightweight documentation, and research' },
    { name: 'GitHub', detail: 'Version control, code review, and team collaboration' },
  ]},
  { title: 'Everyday stack', Icon: FiLayers, intro: 'The technologies I reach for when building modern web products.', items: [
    { name: 'React & Next.js', detail: 'Component-driven interfaces and full-stack web applications' },
    { name: 'TypeScript', detail: 'Safer application code and expressive component APIs' },
    { name: 'Tailwind CSS', detail: 'Consistent, responsive styling with a shared design vocabulary' },
    { name: 'Playwright', detail: 'Browser-based tests for the journeys that matter' },
  ]},
]

export default function Uses() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Uses</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">The tools behind the work.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A considered setup for designing, building, testing, and shipping digital products. Nothing too complicated—just tools that work well together.</p>
      </header>
      <div className="mt-14 space-y-12">{groups.map((group) => <section key={group.title} className="grid gap-5 sm:grid-cols-[190px_1fr] sm:gap-10"><div><h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"><group.Icon className="h-4 w-4 text-violet-600 dark:text-violet-300" />{group.title}</h2><p className="mt-2 text-xs leading-6 text-zinc-500">{group.intro}</p></div><dl className="divide-y divide-zinc-200 dark:divide-zinc-800">{group.items.map((item) => <div key={item.name} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[1fr_1.2fr] sm:gap-6"><dt className="flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200"><FiCheckCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />{item.name}</dt><dd className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">{item.detail}</dd></div>)}</dl></section>)}</div>
      <p className="mt-14 border-t border-zinc-200 pt-6 text-xs leading-6 text-zinc-400 dark:border-zinc-800">This equipment and workflow list is fictional sample content and can be replaced with a real setup later.</p>
    </Container>
  )
}
