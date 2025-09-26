"use client";

import { useState } from "react";
import { BiLink } from "react-icons/bi";
import Image from "next/image";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

export default function Modal({ isOpen, onClose, project }) {
  if (!isOpen || !project) return null;

  const [selectedImage, setSelectedImage] = useState(
    project.images?.length ? project.images[0] : null,
  );

  // حالت برای بزرگنمایی عکس
  const [isZoomOpen, setIsZoomOpen] = useState(false);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      {/* بک‌دراپ */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />

      {/* مدال اصلی */}
      <div
        className="relative z-10 w-full max-w-lg transform rounded-lg bg-white p-6 shadow-lg
                   transition-all duration-200 dark:bg-zinc-900"
        onClick={(e) => e.stopPropagation()}
      >
        {/* دکمه بستن */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200"
          aria-label="بستن"
        >
          ✕
        </button>

        {/* لوگو + اسم */}
        <div className="mb-4 flex items-center gap-4">
          {project.logo && (
            <Image
              src={project.logo}
              alt={`${project.name} logo`}
              width={50}
              height={50}
              className="rounded-full"
            />
          )}
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            {project.name}
          </h2>
        </div>

        {/* گالری عکس‌ها */}
        {project.images && project.images.length > 0 && (
          <>
            {/* عکس بزرگ */}
            <div
              className="relative mb-4 h-64 w-full cursor-zoom-in"
              onClick={() => setIsZoomOpen(true)} // کلیک برای بزرگنمایی
            >
              <Image
                src={selectedImage}
                alt={project.name}
                fill
                className="rounded-lg object-contain"
              />
            </div>

            {/* thumbnails */}
            <div className="mb-4 flex gap-2 overflow-x-auto">
              {project.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className={`relative h-20 w-20 rounded-md border-2 
                            ${
                              selectedImage === img
                                ? "border-blue-500"
                                : "border-transparent"
                            }`}
                >
                  <Image
                    src={img}
                    alt={`thumbnail-${index}`}
                    fill
                    className="rounded-md object-cover"
                  />
                </button>
              ))}
            </div>
          </>
        )}

        {/* توضیحات */}
        <p className="text-sm text-zinc-700 dark:text-zinc-300">
          {project.description}
        </p>

        {/* تگ‌ها */}
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

        {/* لینک */}
        <a
          href={project.link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-primary-800 mt-6 inline-flex items-center text-sm font-medium text-zinc-900 dark:text-zinc-100"
        >
          <BiLink className="h-5 w-5" />
          <span className="ml-2">{project.link.label}</span>
        </a>
      </div>

      {/* لایت‌باکس برای بزرگنمایی */}
      {isZoomOpen && (
        <div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-black/90"
          onClick={() => setIsZoomOpen(false)}
        >
          <button
            onClick={() => setIsZoomOpen(false)}
            className="absolute right-6 top-6 text-2xl text-white"
          >
            ✕
          </button>
          <div className="relative h-[90vh] w-[90vw]">
            <Image
              src={selectedImage}
              alt="zoomed"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </div>
  );
}
