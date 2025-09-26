// components/ProjectsClient.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./ProjectModal";
import { BiLink } from "react-icons/bi";

export default function ProjectsClient({ initialProjects = [] }) {
  const [projects] = useState(initialProjects);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  // بستن با ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <li
            key={project.name}
            className="group relative flex h-[500px] cursor-pointer flex-col items-start overflow-hidden rounded-xl bg-white p-4 shadow-md dark:bg-zinc-900"
            onClick={() => openModal(project)}
          >
            {/* عکس اول و دوم با hover */}
            <div className="relative h-48 w-full overflow-hidden rounded-lg shadow-sm">
              <Image
                src={project.images[0]}
                alt={project.name}
                fill
                className="object-cover object-top transition-opacity duration-500 group-hover:opacity-0"
              />
              {project.images[1] && (
                <Image
                  src={project.images[1]}
                  alt={`${project.name} preview`}
                  fill
                  className="object-cover object-top opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                />
              )}
            </div>

            {/* محتویات کارت */}
            <div className="mt-4 flex w-full flex-1 flex-col justify-between">
              {/* اسم و توضیحات */}
              <div>
                <h2 className="text-base font-semibold text-zinc-800 dark:text-zinc-100">
                  {project.name}
                </h2>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {project.description}
                </p>
              </div>

              {/* تگ‌ها و لینک */}
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag.id}
                      className="flex items-center gap-1 rounded bg-zinc-600 px-2 py-1 text-xs font-medium text-white"
                    >
                      {tag.name}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-primary-800 inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100"
                  onClick={(e) => e.stopPropagation()}
                >
                  <BiLink className="h-5 w-5" />
                  <span className="ml-2">{project.link.label}</span>
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>

      {/* استفاده از مدال */}
      <Modal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
    </>
  );
}
