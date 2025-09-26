// components/ProjectsClient.jsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Modal from "./ProjectModal";

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
            className="group relative flex cursor-pointer flex-col items-start"
            onClick={() => openModal(project)}
          >
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt={project.name}
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>

            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
              <span className="relative z-10">{project.name}</span>
            </h2>

            <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {project.description}
            </p>
          </li>
        ))}
      </ul>

      {/* استفاده از مدال */}
      <Modal isOpen={isOpen} onClose={closeModal} project={selectedProject} />
    </>
  );
}
