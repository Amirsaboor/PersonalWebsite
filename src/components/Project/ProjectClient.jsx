"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Modal from "./ProjectModal";
import { FiArrowUpLeft, FiExternalLink, FiLayers, FiShoppingBag, FiTarget } from "react-icons/fi";

const filters = ["همه", "Next.js", "React", "WordPress"];

const withBasePath = (src) =>
  src?.startsWith("/")
    ? `${process.env.NODE_ENV === "production" ? "/PersonalWebsite" : ""}${src}`
    : src;

export default function ProjectsClient({ initialProjects = [] }) {
  const [activeFilter, setActiveFilter] = useState("همه");
  const [selectedProject, setSelectedProject] = useState(null);

  const visibleProjects = useMemo(
    () =>
      activeFilter === "همه"
        ? initialProjects
        : initialProjects.filter((project) => project.category === activeFilter),
    [activeFilter, initialProjects]
  );

  const closeModal = () => setSelectedProject(null);

  useEffect(() => {
    if (!selectedProject) return undefined;
    const onKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedProject]);

  return (
    <>
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-zinc-500 dark:text-zinc-400">
          {visibleProjects.length} پروژه
          <span className="mx-2 text-zinc-300 dark:text-zinc-700">/</span>
          گزیده‌ای از تجربه‌های من در طراحی و توسعه وب
        </p>
        <div className="flex flex-wrap gap-2" role="group" aria-label="فیلتر پروژه‌ها">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              aria-pressed={activeFilter === filter}
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 ${
                activeFilter === filter
                  ? "bg-orange-500 text-white shadow-sm shadow-orange-500/20"
                  : "bg-zinc-100 text-zinc-600 hover:bg-orange-50 hover:text-orange-700 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-orange-500/10 dark:hover:text-orange-300"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {visibleProjects.map((project, index) => (
          <li
            key={project.name}
            className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/90 transition duration-300 hover:-translate-y-1 hover:border-orange-300/70 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/70 dark:hover:border-orange-500/40 dark:hover:shadow-black/20 ${project.featured ? "sm:col-span-2 xl:col-span-2" : ""}`}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="relative block w-full overflow-hidden bg-zinc-100 text-right dark:bg-zinc-800"
              aria-label={`مشاهده جزئیات پروژه ${project.name}`}
            >
              {project.images?.[0] ? (
                <div className={`relative w-full ${project.featured ? "aspect-[16/7]" : "aspect-[16/10]"}`}>
                  <Image
                    src={withBasePath(project.images[0])}
                    alt={`تصویر پروژه ${project.name}`}
                    fill
                    sizes={project.featured ? "(min-width: 1280px) 66vw, 100vw" : "(min-width: 640px) 50vw, 100vw"}
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
                  />
                  <span className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-70" />
                  <span className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/35 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                    <FiLayers className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-medium text-white">
                      پروژه منتخب
                    </span>
                  )}
                </div>
              ) : (
                <div className={`relative flex w-full items-center justify-center overflow-hidden ${project.featured ? "aspect-[16/7]" : "aspect-[16/10]"} ${project.cover === "leather" ? "bg-gradient-to-br from-stone-950 via-amber-950 to-orange-900" : "bg-gradient-to-br from-slate-950 via-slate-900 to-orange-950"}`}>
                  <div className="absolute -left-12 -top-16 h-48 w-48 rounded-full bg-orange-500/25 blur-3xl" />
                  <div className="absolute -bottom-20 -right-12 h-56 w-56 rounded-full bg-amber-400/15 blur-3xl" />
                  <div className="relative flex flex-col items-center gap-3 text-center text-white">
                    <span className="grid h-16 w-16 place-items-center rounded-[22px] border border-white/15 bg-white/10 shadow-2xl shadow-black/20 backdrop-blur">
                      {project.cover === "leather" ? <FiShoppingBag className="h-7 w-7 text-orange-300" /> : <FiTarget className="h-7 w-7 text-orange-300" />}
                    </span>
                    <span className="text-[10px] font-semibold tracking-[0.28em] text-orange-200/80">
                      {project.cover === "leather" ? "LEATHER COMMERCE" : "GOALS & KEY RESULTS"}
                    </span>
                    <span className="text-xl font-bold sm:text-2xl">
                      {project.cover === "leather" ? "NAFIS LEATHER" : "OKR MANAGEMENT"}
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-black/25 px-3 py-1.5 text-[11px] font-medium text-white backdrop-blur">
                    <FiLayers className="h-3.5 w-3.5" />
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="absolute left-4 top-4 rounded-full bg-orange-500 px-3 py-1.5 text-[11px] font-medium text-white">
                      پروژه منتخب
                    </span>
                  )}
                </div>
              )}
            </button>

            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    {project.name}
                  </h2>
                  <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                    {project.description}
                  </p>
                </div>
                <span className="mt-1 text-xs tabular-nums text-zinc-400">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag.id}
                    className="rounded-md bg-zinc-100 px-2.5 py-1 text-[11px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
                  >
                    {tag.name}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between border-t border-zinc-100 pt-4 dark:border-zinc-800">
                <button
                  type="button"
                  onClick={() => setSelectedProject(project)}
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-orange-500 dark:text-zinc-200"
                >
                  جزئیات پروژه
                  <FiArrowUpLeft className="h-4 w-4" />
                </button>
                {project.link?.href && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(event) => event.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-orange-500"
                  >
                    {project.link.label}
                    <FiExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal
        isOpen={Boolean(selectedProject)}
        onClose={closeModal}
        project={selectedProject}
      />
    </>
  );
}
