export function ProjectArtwork({ project }) {
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
    <div className={'project-art project-art--' + project.tone + ' flex h-full w-full items-center justify-center overflow-hidden'}>
      <div className="relative w-[76%] max-w-[340px] border border-black/10 bg-white px-5 py-6 shadow-[0_18px_50px_-30px_rgba(0,0,0,.28)]">
        <div className="flex items-center justify-between border-b border-zinc-200 pb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">{project.category}</span>
          <span className="text-xs text-zinc-400">{project.role}</span>
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
