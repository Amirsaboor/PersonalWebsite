import Image from 'next/image'
import { Button } from '@/components/Button'
import { BriefcaseIcon, ArrowDownIcon } from '@/components/icons'
import logoDell from '@/images/logos/dell.svg'
import logoFYPM from '@/images/logos/fypm1.svg'
import logoGWC from '@/images/logos/gwcLogo1.png'
import logoTXST from '@/images/logos/txstStar.png'
import halcyoncore from '@/images/logos/hc-logo.png'
import amazonIcon from '@/images/logos/amazonlogo.png'

export function Resume() {
  let resume = [
    {
      company: 'Dell Technologies',
      title: 'Software Engineer',
      logo: logoDell,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Texas State University',
      title: 'Computer Science Student',
      logo: logoTXST,
      start: '2021',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Girls Who Code',
      title: 'Founder and President',
      logo: logoGWC,
      start: '2022',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear(),
      },
    },
    {
      company: 'Amazon',
      title: 'Software Development Engineer Intern',
      logo: amazonIcon,
      start: '2023',
      end: '2023',
    },
    {
      company: 'HalcyonCore',
      title: 'Frontend Developer',
      logo: halcyoncore,
      start: '2022',
      end: '2023',
    },
    {
      company: 'FYPM',
      title: 'Frontend Developer',
      logo: logoFYPM,
      start: '2022',
      end: '2023',
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <li key={roleIndex} className="flex gap-4">
            <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:bg-zinc-800 dark:ring-0">
              <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
            </div>
            <dl className="flex flex-auto flex-col gap-x-2">
              <dt className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                <a
                  href="#"
                  className="transition-colors duration-200 hover:text-primary-500"
                >
                  {role.title}
                </a>
              </dt>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.company}
              </dd>
              <dd className="text-xs text-zinc-500 dark:text-zinc-400">
                {role.start} → {role.end.label || role.end}
              </dd>
            </dl>
          </li>
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}
