'use client'

import { useEffect } from 'react'
import { FiArrowUpRight, FiX } from 'react-icons/fi'
import { useLocale } from '@/i18n/LocaleProvider'

export function ProjectModal({ project, onClose }) {
  const { t, isFa } = useLocale()

  useEffect(() => {
    if (!project) return
    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-md sm:items-center sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        dir={isFa ? 'rtl' : 'ltr'}
        className="relative max-h-[92dvh] w-full max-w-3xl overflow-y-auto rounded-t-[1.75rem] bg-white text-zinc-900 shadow-2xl shadow-black/30 dark:bg-[#18181b] dark:text-zinc-100 sm:rounded-[1.75rem]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={t('close')}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/45 text-white backdrop-blur transition hover:bg-black/65"
        >
          <FiX />
        </button>
        <div className="relative aspect-[16/9] overflow-hidden bg-zinc-200 dark:bg-zinc-800">
          <img src={project.image} alt={project.imageAlt || project.name} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
          <div className="absolute bottom-5 left-6 right-6 text-white sm:bottom-7 sm:left-8 sm:right-8">
            <p className="text-xs font-medium text-white/75">{isFa ? project.categoryFa : project.category}</p>
            <h2 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">{isFa ? project.nameFa : project.name}</h2>
          </div>
        </div>
        <div className="p-6 sm:p-8">
          <div className="grid gap-7 sm:grid-cols-[1fr_190px]">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">{t('overview')}</p>
              <p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{isFa ? project.descriptionFa : project.description}</p>
              <div className="mt-6 grid gap-5 border-t border-zinc-200 pt-5 dark:border-zinc-800">
                <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{isFa ? 'چالش' : 'The challenge'}</p><p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{isFa ? project.challengeFa : project.challenge}</p></div>
                <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{isFa ? 'راهکار' : 'The approach'}</p><p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{isFa ? project.approachFa : project.approach}</p></div>
                <div><p className="text-[10px] font-bold uppercase tracking-[0.16em] text-zinc-400">{isFa ? 'خروجی' : 'The outcome'}</p><p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300">{isFa ? project.outcomeFa : project.outcome}</p></div>
              </div>
              <p className="mt-5 text-xs leading-6 text-zinc-400">{t('projectNote')}</p>
            </div>
            <aside className="space-y-5 border-t border-zinc-200 pt-5 dark:border-zinc-800 sm:border-l sm:border-t-0 sm:pl-6 sm:pt-0">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{t('role')}</p>
                <p className="mt-2 text-sm font-medium">{isFa ? project.roleFa : project.role}</p>
              </div>
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{t('technologies')}</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {project.stack.map((item) => <span key={item} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[10px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{item}</span>)}
                </div>
              </div>
            </aside>
          </div>
          {project.url && (
            <a href={project.url} target="_blank" rel="noreferrer" className="mt-7 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-violet-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-violet-200">
              {isFa ? 'مشاهده پروژه' : 'Visit project'} <FiArrowUpRight />
            </a>
          )}
        </div>
      </section>
    </div>
  )
}
