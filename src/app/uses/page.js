import { Container } from '@/components/Container'

export const metadata = { title: 'Uses', description: 'Tools and gear used by Alex Morgan.' }

const groups = [
  { title: 'Hardware', items: [{ name: 'MacBook Pro 14”', detail: 'M3 Pro · 18 GB memory' }, { name: 'Studio Display', detail: '27-inch 5K display' }, { name: 'Keychron Q1', detail: 'Mechanical keyboard' }, { name: 'Logitech MX Master 3S', detail: 'Wireless mouse' }] },
  { title: 'Software', items: [{ name: 'Visual Studio Code', detail: 'Editor and daily development environment' }, { name: 'Figma', detail: 'Interface design and prototyping' }, { name: 'Raycast', detail: 'Launcher and productivity shortcuts' }, { name: 'Notion', detail: 'Notes, planning, and documentation' }] },
  { title: 'Development', items: [{ name: 'Next.js', detail: 'React framework for web applications' }, { name: 'TypeScript', detail: 'Typed application code' }, { name: 'Tailwind CSS', detail: 'Utility-first styling' }, { name: 'GitHub', detail: 'Version control and collaboration' }] },
]

export default function Uses() {
  return <Container className="mt-16 sm:mt-24"><header className="max-w-2xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-orange-600 dark:text-orange-400">Tools of the trade</p><h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">The tools I use to get things done.</h1><p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A living list of the hardware, software, and tools in my everyday setup. Everything here is sample data for the starter portfolio.</p></header><div className="mt-14 space-y-12">{groups.map((group) => <section key={group.title} className="grid gap-5 sm:grid-cols-[180px_1fr]"><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group.title}</h2><dl className="divide-y divide-zinc-200 dark:divide-zinc-800">{group.items.map((item) => <div key={item.name} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[1fr_1.2fr] sm:gap-6"><dt className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.name}</dt><dd className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">{item.detail}</dd></div>)}</dl></section>)}</div></Container>
}