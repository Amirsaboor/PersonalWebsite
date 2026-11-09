'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '@/data/projects'
import { ProjectArtwork } from '@/components/ProjectArtwork'
import { ProjectModal } from '@/components/ProjectModal'
import { useLocale } from '@/i18n/LocaleProvider'

export function ProjectCarousel() {
  const trackRef = useRef(null)
  const [canGoBack, setCanGoBack] = useState(false)
  const [canGoForward, setCanGoForward] = useState(true)
  const [selectedProject, setSelectedProject] = useState(null)
  const { t, isFa } = useLocale()

  const updateControls = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    setCanGoBack(track.scrollLeft > 4)
    setCanGoForward(track.scrollLeft + track.clientWidth < track.scrollWidth - 4)
  }, [])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    updateControls()
    track.addEventListener('scroll', updateControls, { passive: true })
    window.addEventListener('resize', updateControls)
    return () => {
      track.removeEventListener('scroll', updateControls)
      window.removeEventListener('resize', updateControls)
    }
  }, [updateControls])

  function move(direction) {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('[data-project-card]')
    const distance = card ? card.getBoundingClientRect().width + 24 : 360
    track.scrollBy({ left: direction * distance, behavior: 'smooth' })
  }

  return (
    <>
      <div>
        <div ref={trackRef} dir="ltr" className="project-carousel -mx-5 flex snap-x snap-mandatory gap-6 overflow-x-auto px-5 pb-4 sm:-mx-8 sm:px-8 lg:mx-0 lg:px-0" aria-label={t('selectedWork')}>
          {projects.map((project) => (
            <article key={project.id} data-project-card className="w-[min(82vw,360px)] flex-none snap-start sm:w-[380px]">
              <button type="button" onClick={() => setSelectedProject(project)} aria-haspopup="dialog" className="group block w-full text-left">
                <div className="aspect-[5/4] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
                  <ProjectArtwork project={project} cover />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">{isFa ? project.categoryFa : project.category} <span className="px-1">·</span> {isFa ? project.roleFa : project.role}</p>
                    <h3 className="mt-1.5 text-left text-lg font-semibold tracking-tight text-zinc-900 transition-colors group-hover:text-violet-700 dark:text-zinc-100 dark:group-hover:text-violet-300">{isFa ? project.nameFa : project.name}</h3>
                  </div>
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-500 transition group-hover:border-violet-400 group-hover:text-violet-700 dark:border-zinc-700 dark:text-zinc-400 dark:group-hover:text-violet-300"><FiArrowUpRight /></span>
                </div>
                <p className="mt-2 line-clamp-2 text-left text-sm leading-6 text-zinc-600 dark:text-zinc-400">{isFa ? project.descriptionFa : project.description}</p>
              </button>
            </article>
          ))}
        </div>
        <div className="mt-3 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs text-zinc-500 dark:text-zinc-400">{t('exploreProjects')}</p>
          <div className="flex gap-2">
            <button type="button" onClick={() => move(-1)} disabled={!canGoBack} aria-label={isFa ? 'پروژه‌های قبلی' : 'Previous projects'} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-30 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"><FiChevronLeft /></button>
            <button type="button" onClick={() => move(1)} disabled={!canGoForward} aria-label={isFa ? 'پروژه‌های بعدی' : 'Next projects'} className="flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-700 transition hover:border-zinc-400 disabled:cursor-not-allowed disabled:opacity-30 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"><FiChevronRight /></button>
          </div>
        </div>
      </div>
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
