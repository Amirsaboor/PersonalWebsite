const toneClasses = {
  warm: 'project-art--warm',
  ink: 'project-art--ink',
  rose: 'project-art--rose',
  blue: 'project-art--blue',
  green: 'project-art--green',
  sand: 'project-art--sand',
  violet: 'project-art--violet',
}

function MiniBars() {
  return <div className="mt-4 flex h-14 items-end gap-1.5">{[35, 58, 43, 76, 52, 90, 65, 82, 48, 70].map((height, i) => <span key={i} className="flex-1 rounded-t-sm bg-zinc-900/15" style={{ height: height + '%' }} />)}</div>
}

export function ProjectArtwork({ project, cover = false }) {
  const tone = toneClasses[project.tone] || toneClasses.ink

  return (
    <div className={'relative flex h-full w-full items-center justify-center overflow-hidden ' + tone}>
      <div className="absolute -right-12 -top-16 h-44 w-44 rounded-full border border-zinc-900/10" />
      <div className="absolute -bottom-20 -left-12 h-48 w-48 rounded-full border border-zinc-900/10" />
      {cover ? (
        <div className="relative w-[78%] max-w-[430px] rotate-[-2deg] overflow-hidden rounded-xl border border-white/70 bg-white/85 p-3 shadow-2xl shadow-zinc-900/15 backdrop-blur-sm transition duration-500 group-hover:rotate-0 group-hover:scale-[1.025] sm:p-4">
          <div className="flex items-center gap-1.5 border-b border-zinc-200/80 pb-2">
            <i className="h-1.5 w-1.5 rounded-full bg-rose-300" /><i className="h-1.5 w-1.5 rounded-full bg-amber-300" /><i className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <span className="ml-2 h-1 w-16 rounded-full bg-zinc-200" />
          </div>
          <div className="grid grid-cols-[1fr_0.8fr] gap-3 pt-3">
            <div>
              <span className="block h-2 w-2/3 rounded-full bg-zinc-800/75" />
              <span className="mt-2 block h-1.5 w-full rounded-full bg-zinc-200" />
              <span className="mt-1 block h-1.5 w-4/5 rounded-full bg-zinc-200" />
              <div className="mt-4 h-12 rounded-md bg-gradient-to-br from-zinc-200 to-zinc-100 sm:h-16" />
            </div>
            <div className="rounded-md bg-zinc-100/90 p-2">
              <span className="block h-1.5 w-1/2 rounded-full bg-zinc-300" />
              <MiniBars />
            </div>
          </div>
          <div className="mt-3 flex gap-2"><span className="h-1.5 w-1/3 rounded-full bg-zinc-200" /><span className="h-1.5 w-1/5 rounded-full bg-zinc-200" /></div>
        </div>
      ) : (
        <span className="relative text-2xl font-semibold tracking-[-0.08em] text-zinc-800/80">{project.mark}</span>
      )}
      <span className="absolute bottom-4 left-5 text-[9px] font-semibold uppercase tracking-[0.22em] text-zinc-700/50">{project.category}</span>
    </div>
  )
}
