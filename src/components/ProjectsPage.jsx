'use client'

import { useCallback, useState } from 'react'
import { FiArrowUpRight } from 'react-icons/fi'
import { Container } from '@/components/Container'
import { ProjectArtwork } from '@/components/ProjectArtwork'
import { ProjectModal } from '@/components/ProjectModal'
import { projects } from '@/data/projects'
import { useLocale } from '@/i18n/LocaleProvider'

export default function ProjectsPage() {
  const { isFa } = useLocale()
  const [selectedProject, setSelectedProject] = useState(null)
  const closeProject = useCallback(() => setSelectedProject(null), [])

  return (
    <Container className="py-12 sm:py-16">
      <section dir={isFa ? 'rtl' : 'ltr'}>
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">
          {isFa ? 'نمونه‌کارها' : 'Selected work'}
        </p>
        <div className="mt-3 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
              {isFa ? 'پروژه‌ها و تجربه‌های دیجیتال' : 'Projects & digital experiences'}
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              {isFa
                ? 'مجموعه‌ای از محصولات، رابط‌ها و ایده‌هایی که با تمرکز بر طراحی دقیق و مهندسی فرانت‌اند شکل گرفته‌اند. برای دیدن جزئیات، هر پروژه را انتخاب کنید.'
                : 'A collection of products, interfaces, and ideas shaped through thoughtful design and frontend engineering. Select any project to explore its story.'}
            </p>
          </div>
          <span className="text-xs text-zinc-400">{String(projects.length).padStart(2, '0')} {isFa ? 'پروژه' : 'projects'}</span>
        </div>
      </section>

      <section className="mt-10 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3" aria-label={isFa ? 'فهرست پروژه‌ها' : 'Project gallery'}>
        {projects.map((project, index) => (
          <article key={project.id} className={index % 5 === 1 ? 'sm:translate-y-8' : ''}>
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              aria-haspopup="dialog"
              className="group block w-full text-left"
            >
              <div className="relative aspect-[5/4] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 transition duration-500 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-black/10 dark:bg-zinc-800 dark:ring-white/10">
                <ProjectArtwork project={project} cover isFa={isFa} />
                <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/35 text-white opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
                  <FiArrowUpRight />
                </span>
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">{isFa ? project.categoryFa : project.category}</p>
                  <h2 className="mt-1.5 text-base font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-teal-600 dark:text-zinc-100 dark:group-hover:text-teal-300">
                    {isFa ? project.nameFa : project.name}
                  </h2>
                </div>
                <span className="mt-1 shrink-0 text-[10px] text-zinc-400">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <p className="mt-2 line-clamp-2 text-xs leading-6 text-zinc-500 dark:text-zinc-400">
                {isFa ? project.descriptionFa : project.description}
              </p>
            </button>
          </article>
        ))}
      </section>
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </Container>
  )
}
