import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectArtwork } from '@/components/ProjectArtwork'
import { projects } from '@/data/projects'
import { FiArrowUpRight } from 'react-icons/fi'

export const metadata = {
  title: 'Projects',
  description: 'Selected frontend and web projects.',
}

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-400">Selected work</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Projects, made along the way.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          A selection of websites and product interfaces across e-commerce, business tools, and everyday web experiences.
        </p>
      </header>

      <div className="mt-14 grid gap-x-7 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <article key={project.id} className="group min-w-0">
            <div className="aspect-[5/4] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
              <ProjectArtwork project={project} />
            </div>
            <div className="mt-5 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.category} <span className="px-1">·</span> {project.year}</p>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{project.name}</h2>
              </div>
              {project.href && (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={\`Visit \${project.name}\`}
                  className="mt-1 rounded-full p-1.5 text-zinc-400 transition hover:bg-zinc-100 hover:text-orange-600 dark:hover:bg-zinc-800 dark:hover:text-orange-400"
                >
                  <FiArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>
              ))}
            </div>
            {project.href && (
              <a href={project.href} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 transition hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400">
                Visit project <FiArrowUpRight />
              </a>
            )}
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Interested in working together?</p>
        <a href="mailto:alex@example.com" className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-zinc-900 transition hover:text-orange-600 dark:text-zinc-100 dark:hover:text-orange-400">Get in touch <FiArrowUpRight /></a>
      </div>
    </Container>
  )
}
