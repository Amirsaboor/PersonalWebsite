import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectArtwork } from '@/components/ProjectArtwork'
import { projects } from '@/data/projects'
import { FiArrowUpRight } from 'react-icons/fi'

export const metadata = {
  title: 'Projects',
  description: 'A fictional collection of frontend and product design case studies.',
}

const layouts = [
  'md:col-span-7 md:row-span-1',
  'md:col-span-5 md:row-span-1 md:mt-16',
  'md:col-span-5 md:row-span-1 md:-mt-8',
  'md:col-span-7 md:row-span-1',
  'md:col-span-4 md:row-span-1 md:mt-10',
  'md:col-span-4 md:row-span-1 md:-mt-5',
  'md:col-span-4 md:row-span-1 md:mt-16',
  'md:col-span-6 md:row-span-1',
  'md:col-span-6 md:row-span-1 md:mt-12',
]

const artworkRatios = [
  'aspect-[16/10]', 'aspect-[4/5]', 'aspect-[4/5]',
  'aspect-[16/10]', 'aspect-[5/4]', 'aspect-[5/4]',
  'aspect-[5/4]', 'aspect-[16/10]', 'aspect-[16/10]',
]

export default function ProjectsPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">Selected work · Concept portfolio</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">A collection of digital things.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A fictional body of work spanning commerce, analytics, editorial, and community products. Each concept explores a different challenge in making digital experiences feel simple and considered.</p>
      </header>

      <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-12 md:gap-y-16">
        {projects.map((project, index) => (
          <article key={project.id} id={project.id} className={'group min-w-0 ' + layouts[index % layouts.length]}>
            <div className={'overflow-hidden rounded-[1.35rem] ring-1 ring-zinc-900/5 transition duration-500 group-hover:shadow-2xl group-hover:shadow-black/10 dark:ring-white/10 ' + artworkRatios[index % artworkRatios.length]}>
              <ProjectArtwork project={project} cover />
            </div>
            <div className="mt-5 flex items-center justify-between gap-3">
              <p className="text-xs text-zinc-500 dark:text-zinc-400">{project.category}</p>
              <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-zinc-400">0{index + 1}</span>
            </div>
            <h2 className="mt-1.5 text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{project.name}</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{project.description}</p>
            <p className="mt-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">{project.role}</p>
            <div className="mt-3 flex flex-wrap gap-2">{project.stack.map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{tag}</span>)}</div>
            <Link href={'/projects#' + project.id} className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-violet-700 transition hover:text-violet-500 dark:text-violet-300 dark:hover:text-violet-200">Concept overview <FiArrowUpRight /></Link>
          </article>
        ))}
      </div>

      <div className="mt-20 rounded-2xl border border-zinc-200 p-6 dark:border-zinc-800 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 dark:text-violet-300">A note on this collection</p>
        <p className="mt-3 max-w-3xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">All names, brands, product details, and case studies on this page are fictional content created to demonstrate a complete portfolio layout. They do not represent real clients or commercial products.</p>
      </div>
    </Container>
  )
}
