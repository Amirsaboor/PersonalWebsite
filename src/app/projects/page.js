import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectArtwork } from '@/components/ProjectArtwork'
import { projects } from '@/data/projects'
import { FiArrowUpRight, FiGithub } from 'react-icons/fi'

export const metadata = {
  title: 'Projects',
  description: 'Selected frontend and web projects by Amir Saboor.',
}

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-2xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700 dark:text-teal-400">Selected work</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Projects, made along the way.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          A selection of e-commerce experiences, business websites, and web platforms I’ve worked on. The collection includes client work as well as personal and learning projects.
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
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.category}</p>
                <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{project.name}</h2>
              </div>
              {(project.href || project.source) && (
                <span className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-400 transition group-hover:border-zinc-400 group-hover:text-teal-700 dark:border-zinc-700 dark:group-hover:text-teal-400">
                  <FiArrowUpRight />
                </span>
              )}
            </div>
            <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <p className="mt-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">{project.role}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {project.stack.map((tag) => (
                <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs font-medium">
              {project.href && <Link href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-teal-700 transition hover:text-teal-500 dark:text-teal-400 dark:hover:text-teal-300">Visit project <FiArrowUpRight /></Link>}
              {project.source && <Link href={project.source} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-zinc-500 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100"><FiGithub /> Source code</Link>}
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 border-t border-zinc-200 pt-8 dark:border-zinc-800">
        <p className="text-sm text-zinc-600 dark:text-zinc-400">Some projects are client or private work, so a public source-code link is not available for every entry.</p>
      </div>
    </Container>
  )
}
