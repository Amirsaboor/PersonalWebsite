import { BiLink } from "react-icons/bi"
import Image from 'next/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import { projects } from '@/components/ProjectsData'
import Link from "next/link"

export const metadata = {
  title: 'Projects - Name Family',
  description: 'A couple of my favorite personal projects.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="پروژه های مورد علاقه من"
      intro="تعدادی از پروژه‌های شخصی و تمرینی من در حوزه وب و برنامه‌نویسی."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <li  key={project.name} className="group relative flex flex-col items-start cursor-pointer">
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt={project.name}
                className="h-8 w-8 rounded-full"
                unoptimized
              />
            </div>

                <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                    <div className="absolute -inset-y-6 -inset-x-4 z-0 scale-95 bg-zinc-50 opacity-0 transition group-hover:scale-100 group-hover:opacity-100 dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      <Link  href={project.link.href}>
        <span className="absolute -inset-y-6 -inset-x-4 z-20 sm:-inset-x-6 sm:rounded-2xl" />
        <span className="relative z-10">{project.name}</span>
      </Link>
            </h2>

                <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">{project.description}</p>

            {/* نمایش تگ‌ها و آیکون‌ها */}
            <div className="mt-4 flex flex-wrap gap-2">
  {project.tags.map((tag) => (
    <span
      key={tag.id}
      className="flex items-center gap-1 rounded 
                 bg-zinc-600 !text-white  /* متن همیشه سفید */
                 px-2 py-1 text-xs font-medium
                 z-10
                 transition-colors duration-200
                 hover:bg-zinc-800"
    >
      {tag.icon && <tag.icon className="h-4 w-4" />}
      {tag.name}
    </span>
  ))}
</div>

            





            {/* لینک پروژه */}
            <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-800 transition group-hover:text-primary-500 dark:text-zinc-200 dark:group-hover:text-primary-500">
              <BiLink className="h-6 w-6 flex-none" />
              <span className="ml-2">{project.link.label}</span>
            </p>
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
