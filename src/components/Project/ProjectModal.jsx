// components/Modal.jsx
"use client";

import { BiLink } from "react-icons/bi";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* بک‌دراپ — کلیک روی بک‌دراپ مدال رو می‌بنده */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* خود مدال — stopPropagation برای جلوگیری از بسته شدن هنگام کلیک داخل */}
      <div
        className="relative z-10 w-full max-w-lg transform rounded-lg bg-white p-6 shadow-lg
                   transition-all duration-200 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          aria-label="بستن"
        >
          ✕
        </button>

        <div className="flex items-center gap-4">
          <Image
            src={project.logo}
            alt={project.name}
            width={50}
            height={50}
            className="rounded-full"
          />
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {project.name}
          </h2>
        </div>

        <p className="mt-4 text-sm text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => {
            const Icon = FaIcons[tag.icon] || BiIcons[tag.icon] || null;
            return (
              <span
                key={tag.id}
                className="flex items-center gap-1 rounded bg-zinc-600 px-2 py-1 text-xs font-medium text-white"
              >
                {Icon && <Icon className="h-4 w-4" />}
                {tag.name}
              </span>
            );
          })}
        </div>

        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-800 mt-6 inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400"
        >
          <BiLink className="h-5 w-5" />
          <span className="ml-2">{project.link.label}</span>
        </a>
      </div>
    </div>
  );
}
