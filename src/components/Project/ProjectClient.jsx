"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Modal from "./ProjectModal";
import { FiArrowUpLeft, FiExternalLink, FiLayers } from "react-icons/fi";

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
              className={`rounded-full px-4 py-2 text-xs font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-zinc-950 ${
                activeFilter === filter
                  ? "bg-zinc-900 text-white shadow-sm dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700"
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
            className={`group flex min-w-0 flex-col overflow-hidden rounded-2xl border border-zinc-200/80 bg-white transition duration-300 hover:-translate-y-1 hover:border-zinc-300 hover:shadow-xl hover:shadow-zinc-900/5 dark:border-zinc-700/60 dark:bg-zinc-900/60 dark:hover:border-zinc-600 dark:hover:shadow-black/20 ${project.featured ? "sm:col-span-2 xl:col-span-2" : ""}`}
          >
            <button
              type="button"
              onClick={() => setSelectedProject(project)}
              className="relative block w-full overflow-hidden bg-zinc-100 text-right dark:bg-zinc-800"
              aria-label={`مشاهده جزئیات پروژه ${project.name}`}
            >
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
                  <span className="absolute left-4 top-4 rounded-full bg-red-500 px-3 py-1.5 text-[11px] font-medium text-white">
                    پروژه منتخب
                  </span>
                )}
              </div>
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-zinc-700 transition-colors hover:text-red-500 dark:text-zinc-200"
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
                    className="inline-flex items-center gap-1.5 text-xs text-zinc-400 transition-colors hover:text-red-500"
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
