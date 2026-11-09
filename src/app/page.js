import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { FiArrowUpRight, FiGithub, FiCode, FiLayers, FiMonitor } from 'react-icons/fi'

export const metadata = {
  title: 'Amir Saboor — Frontend Developer',
  description: 'Frontend developer building responsive web experiences with React and Next.js.',
}

const focusAreas = [
  { title: 'Frontend development', detail: 'React, Next.js, JavaScript and TypeScript', Icon: FiCode },
  { title: 'Interfaces & systems', detail: 'Responsive UI, reusable components and design systems', Icon: FiLayers },
  { title: 'Web performance', detail: 'Accessible, maintainable and production-ready experiences', Icon: FiMonitor },
]

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-20">
      <section className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          I’m Amir, a frontend developer building thoughtful web experiences.
        </h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          I work with React and Next.js to turn product requirements into clear, responsive interfaces. My projects span e-commerce, business websites, and web platforms.
        </p>
        <div className="mt-6 flex items-center gap-6">
          <Link href="https://github.com/Amirsaboor" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="text-zinc-500 transition hover:text-teal-600 dark:text-zinc-400 dark:hover:text-teal-400">
            <FiGithub className="h-6 w-6" />
          </Link>
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition hover:text-teal-600 dark:text-zinc-300 dark:hover:text-teal-400">
            Explore my work <FiArrowUpRight />
          </Link>
        </div>
      </section>

      <section className="mt-20 sm:mt-24" aria-labelledby="selected-work-heading">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">Selected work</p>
            <h2 id="selected-work-heading" className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">A few things I’ve worked on.</h2>
          </div>
          <Link href="/projects" className="hidden items-center gap-2 text-sm text-zinc-500 transition hover:text-teal-600 dark:hover:text-teal-400 sm:inline-flex">
            All projects <FiArrowUpRight />
          </Link>
        </div>
        <ProjectCarousel />
        <Link href="/projects" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-teal-700 dark:text-teal-400 sm:hidden">
          View all projects <FiArrowUpRight />
        </Link>
      </section>

      <section className="mt-24 grid gap-10 border-t border-zinc-200 pt-12 dark:border-zinc-800 sm:grid-cols-[1fr_1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-teal-700 dark:text-teal-400">What I focus on</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">From first component to finished experience.</h2>
          <p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 dark:text-zinc-400">
            I care about the details that make a product feel consistent: useful interactions, clear hierarchy, responsive behavior, and code that remains understandable as the project grows.
          </p>
        </div>
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {focusAreas.map(({ title, detail, Icon }) => (
            <div key={title} className="flex gap-4 py-4 first:pt-0">
              <Icon className="mt-0.5 h-5 w-5 flex-none text-teal-700 dark:text-teal-400" />
              <div>
                <h3 className="text-sm font-medium text-zinc-900 dark:text-zinc-100">{title}</h3>
                <p className="mt-1 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  )
}
