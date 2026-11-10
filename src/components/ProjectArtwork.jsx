export function ProjectArtwork({ project, cover = false, isFa = false }) {
  return (
    <div className="relative h-full w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
      <img
        src={project.image}
        alt={project.imageAlt || project.name}
        loading="lazy"
        className="block h-full w-full object-cover transition duration-700 group-hover:scale-[1.045]"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/5" />
      {cover && (
        <span className="absolute bottom-4 left-4 rounded-full border border-white/25 bg-black/30 px-3 py-1.5 text-[10px] font-medium tracking-wide text-white backdrop-blur-md">
          {isFa ? project.categoryFa : project.category}
        </span>
      )}
    </div>
  )
}
