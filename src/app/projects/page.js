import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { LinkIcon } from '@/components/icons'
import { projects } from '@/components/ProjectsData'

export const metadata = {
    title: 'Projects - Name Family',
    description: 'A couple of my favorite personal projects.',
}

export default function Projects() {
    return (
        <SimpleLayout
            title="A couple of my favorite personal projects."
            intro="This summer, I learned about the trifecta that is React, Next.js, and TailwindCSS. I haven't looked back since!"
        >
            <ul
                role="list"
                className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
            >
                {projects.map((project) => (
                    <Card as="li" key={project.name}>
                        <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                            <Image
                                src={project.logo}
                                alt=""
                                className="h-8 w-8 rounded-full"
                                unoptimized
                            />
                        </div>
                        <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                            <Card.Link href={project.link.href}>{project.name}</Card.Link>
                        </h2>
                        <Card.Description>{project.description}</Card.Description>
                        <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-800 transition group-hover:text-primary-500 dark:text-zinc-200 dark:group-hover:text-primary-500">
                            <LinkIcon className="h-6 w-6 flex-none" />
                            <span className="ml-2">{project.link.label}</span>
                        </p>
                    </Card>
                ))}
            </ul>
        </SimpleLayout>
    )
}
