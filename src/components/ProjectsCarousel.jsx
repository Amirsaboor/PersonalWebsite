'use client'

import { useRef } from 'react'
import Link from 'next/link'
import { FiArrowLeft, FiArrowRight, FiArrowUpRight } from 'react-icons/fi'
import { projects } from '@/data/projects'

const featured = projects.slice(0, 6)

function ProjectArtwork({ project }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]"
      />
    )
  }

  return (
    <div className={\`flex h-full w-full items-center justify-center overflow-hidden project-art project-art--\${project.tone}\`}>
      <div className="relative w-[76%] max-w-[340px] border border-black/10 bg-white px-5 py-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,.28)]">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{project.category}</span>
          <span className="text-xs text-zinc-400">{project.year}</span>
        </div>
        <div className="py-8">
          <span className="block text-4xl font-semibold tracking-[-0.07em] text-zinc-900">{project.mark}</span>
          <span className="mt-2 block text-sm font-medium text-zinc-700">{project.name}</span>
          <span className="mt-1 block max-w-[230px] text-xs leading-5 text-zinc-500">{project.stack.slice(0, 2).join(' · ')}</span>
        </div>
        <div className="flex gap-1.5">
          <span className="h-1.5 w-10 rounded-full bg-zinc-800/80" />
          <span className="h-1.5 w-6 rounded-full bg-zinc-300" />
          <span className="h-1.5 w-4 rounded-full bg-zinc-200" />
        </div>
      </div>
    </div>
  )
}

export function ProjectsCarousel() {
  const track = useRef(null)

  function move(direction) {
    if (!track.current) return
    track.current.scrollBy({
      left: direction * track.current.clientWidth * 0.78,
      behavior: 'smooth',
    })
  }

  return (
    <section className="mt-20 sm:mt-24" aria-labelledby="featured-projects-title">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-orange-600 dark:text-orange-400">Selected work</p>
          <h2 id="featured-projects-title" className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-3xl">A few things I’ve worked on.</h2>
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <button type="button" onClick={() => move(-1)} aria-label="Previous projects" className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"><FiArrowLeft /></button>
          <button type="button" onClick={() => move(1)} aria-label="Next projects" className="flex h-9 w-9 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition hover:border-zinc-400 hover:text-zinc-900 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500 dark:hover:text-white"><FiArrowRight /></button>
        </div>
      </div>

      <div ref={track} className="project-carousel mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {featured.map((project) => (
          <article key={project.id} className="group w-[84%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]">
            <div className="aspect-[5/4] overflow-hidden rounded-2xl bg-zinc-100 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-white/10">
              <ProjectArtwork project={project} />
            </div>
            <div className="mt-4 flex items-start justify-between gap-3">
              <div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.category}</p>
                <h3 className="mt-1 text-base font-semibold text-zinc-900 dark:text-zinc-100">{project.name}</h3>
              </div>
              {project.href ? (
                <a href={project.href} target="_blank" rel="noreferrer" aria-label={\`Open \${project.name}\`} className="mt-1 rounded-full p-1 text-zinc-400 transition hover:text-orange-600 dark:hover:text-orange-400"><FiArrowUpRight /></a>
              ) : (
                <span className="mt-1 text-xs text-zinc-400">{project.year}</span>
              )}
            </div>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{project.description}</p>
          </article>
        ))}
      </div>
      <div className="mt-1 flex justify-end">
        <Link href="/projects" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400">All projects <FiArrowUpRight /></Link>
      </div>
    </section>
  )
}
