import { Container } from '@/components/Container'

export const metadata = {
  title: 'Uses',
  description: 'Development setup and tools used by Amir Saboor.',
}

const groups = [
  { title: 'Hardware', items: [
    { name: 'ASUS VivoBook X1504ZA', detail: 'Intel Core i5-1235U · 8 GB RAM' },
    { name: 'Redmi Note 9 Pro', detail: 'Mobile testing and everyday use' },
  ]},
  { title: 'Frontend', items: [
    { name: 'JavaScript & TypeScript', detail: 'Application logic and typed frontend code' },
    { name: 'React & Next.js', detail: 'Component-based interfaces and web applications' },
    { name: 'Tailwind CSS', detail: 'Responsive styling and design consistency' },
    { name: 'MUI & shadcn/ui', detail: 'Reusable interface components' },
  ]},
  { title: 'Workflow', items: [
    { name: 'Git & GitHub', detail: 'Version control and project collaboration' },
    { name: 'Figma', detail: 'Working with interface designs and handoff' },
  ]},
]

export default function Uses() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Uses</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">The setup behind the work.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A short list of the hardware, technologies, and tools I use across my frontend projects.</p>
      </header>
      <div className="mt-14 space-y-12">
        {groups.map((group) => (
          <section key={group.title} className="grid gap-5 sm:grid-cols-[180px_1fr]">
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{group.title}</h2>
            <dl className="divide-y divide-zinc-200 dark:divide-zinc-800">
              {group.items.map((item) => (
                <div key={item.name} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[1fr_1.2fr] sm:gap-6">
                  <dt className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.name}</dt>
                  <dd className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">{item.detail}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>
    </Container>
  )
}
