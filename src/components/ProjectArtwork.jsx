const toneClasses = {
  warm: 'project-art--warm',
  ink: 'project-art--ink',
  rose: 'project-art--rose',
  blue: 'project-art--blue',
  green: 'project-art--green',
  sand: 'project-art--sand',
}

export function ProjectArtwork({ project, cover = false }) {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.name}
        loading="lazy"
        className={cover
          ? 'h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.025]'
          : 'h-full w-full object-cover'}
      />
    )
  }

  const tone = toneClasses[project.tone] || toneClasses.ink

  if (cover) {
    return (
      <div className={'relative flex h-full w-full flex-col items-center justify-center overflow-hidden ' + tone}>
        <span className="absolute left-5 top-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-700/50">{project.category}</span>
        <span className="text-6xl font-semibold tracking-[-0.08em] text-zinc-800/80 sm:text-7xl">{project.mark}</span>
        <span className="mt-3 text-xs font-medium tracking-[0.08em] text-zinc-700/70">{project.name}</span>
      </div>
    )
  }

  return (
    <div className={'flex h-full w-full items-center justify-center ' + tone}>
      <span className="text-xl font-semibold tracking-[-0.06em] text-zinc-800/80">{project.mark}</span>
    </div>
  )
}
