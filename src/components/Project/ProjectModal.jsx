"use client";

import { useEffect, useState } from "react";
import { BiLink } from "react-icons/bi";
import { FiX, FiZoomIn } from "react-icons/fi";
import Image from "next/image";

const withBasePath = (src) =>
  src?.startsWith("/")
    ? `${process.env.NODE_ENV === "production" ? "/PersonalWebsite" : ""}${src}`
    : src;

export default function Modal({ isOpen, onClose, project }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  useEffect(() => {
    setSelectedImage(project?.images?.[0] ?? null);
    setIsZoomOpen(false);
  }, [project]);

  useEffect(() => {
    if (!isOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`جزئیات پروژه ${project.name}`}
    >
      <button
        type="button"
        className="absolute inset-0 cursor-default bg-black/65 backdrop-blur-sm"
        onClick={onClose}
        aria-label="بستن پنجره جزئیات"
      />

      <div className="relative z-10 flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-2xl dark:border-zinc-700 dark:bg-zinc-900">
        <div className="flex items-center justify-between border-b border-zinc-100 px-5 py-4 dark:border-zinc-800 sm:px-6">
          <div>
            <p className="text-[11px] font-medium text-orange-500">{project.category}</p>
            <h2 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
              {project.name}
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-900 dark:hover:bg-zinc-800 dark:hover:text-white"
            aria-label="بستن"
          >
            <FiX className="h-5 w-5" />
          </button>
        </div>

        <div className="overflow-y-auto p-5 sm:p-6">
          {project.images?.length > 0 && selectedImage && (
            <>
              <button
                type="button"
                onClick={() => setIsZoomOpen(true)}
                className="group relative mb-3 block aspect-[16/9] w-full overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
                aria-label="بزرگ‌نمایی تصویر پروژه"
              >
                <Image
                  src={withBasePath(selectedImage)}
                  alt={`تصویر ${project.name}`}
                  fill
                  sizes="(min-width: 768px) 768px, 100vw"
                  className="object-contain"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-black/55 p-2 text-white opacity-0 transition group-hover:opacity-100">
                  <FiZoomIn className="h-4 w-4" />
                </span>
              </button>

              <div className="mb-6 flex gap-2 overflow-x-auto pb-1">
                {project.images.map((img, index) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setSelectedImage(img)}
                    aria-label={`نمایش تصویر شماره ${index + 1}`}
                    aria-pressed={selectedImage === img}
                    className={`relative h-16 w-24 flex-none overflow-hidden rounded-lg border-2 transition sm:h-20 sm:w-28 ${
                      selectedImage === img
                        ? "border-orange-500"
                        : "border-transparent opacity-65 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={withBasePath(img)}
                      alt=""
                      fill
                      sizes="112px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </>
          )}

          <p className="text-sm leading-8 text-zinc-600 dark:text-zinc-300">
            {project.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag.id}
                className="rounded-md bg-zinc-100 px-3 py-1.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"
              >
                {tag.name}
              </span>
            ))}
          </div>

          {project.link?.href && (
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-orange-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-orange-400"
            >
              <BiLink className="h-4 w-4" />
              {project.link.label}
            </a>
          )}
        </div>
      </div>

      {isZoomOpen && selectedImage && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsZoomOpen(false)}
          role="presentation"
        >
          <button
            type="button"
            onClick={() => setIsZoomOpen(false)}
            className="absolute right-5 top-5 rounded-full bg-white/10 p-3 text-white"
            aria-label="بستن تصویر بزرگ"
          >
            <FiX className="h-5 w-5" />
          </button>
          <div className="relative h-[85vh] w-[94vw]">
            <Image
              src={withBasePath(selectedImage)}
              alt={`نمای بزرگ تصویر ${project.name}`}
              fill
              sizes="94vw"
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
