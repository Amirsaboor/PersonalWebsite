import Link from 'next/link'
import { Container } from '@/components/Container'
import { FiMail, FiGithub, FiLinkedin, FiArrowUpRight, FiMapPin } from 'react-icons/fi'

export const metadata = {
  title: 'Contact',
  description: 'Fictional contact details for the Alex Morgan portfolio concept.',
}

const channels = [
  { label: 'Email', value: 'hello@alexmorgan.dev', detail: 'Project enquiries and thoughtful conversations', Icon: FiMail },
  { label: 'GitHub', value: 'github.com/alexmorgan', detail: 'Experiments, open-source work, and code notes', Icon: FiGithub },
  { label: 'LinkedIn', value: 'linkedin.com/in/alexmorgan', detail: 'Professional updates and collaboration', Icon: FiLinkedin },
]

export default function Contact() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Have something good in mind?</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">Whether it’s a product idea, a collaboration, or simply a conversation about the web, I’d love to hear what you’re working on.</p>
      </header>
      <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_300px]">
        <div className="divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
          {channels.map(({ label, value, detail, Icon }) => <div key={label} className="flex items-start gap-4 py-6"><span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-violet-700 dark:bg-zinc-800 dark:text-violet-300"><Icon /></span><div><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{label}</h2><p className="mt-1 text-sm font-medium text-violet-700 dark:text-violet-300">{value}</p><p className="mt-1 text-xs leading-6 text-zinc-500">{detail}</p></div></div>)}
        </div>
        <aside className="h-fit rounded-2xl bg-zinc-50 p-6 dark:bg-zinc-900"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-zinc-700 shadow-sm dark:bg-zinc-800 dark:text-zinc-200"><FiMapPin /></span><h2 className="mt-4 font-semibold text-zinc-900 dark:text-zinc-100">Based in Copenhagen</h2><p className="mt-2 text-sm leading-6 text-zinc-500">Working with teams and independent makers across time zones. Open to remote collaboration.</p><div className="mt-6 border-t border-zinc-200 pt-5 dark:border-zinc-800"><p className="text-xs text-zinc-500">Typical response time</p><p className="mt-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">Within two working days</p></div></aside>
      </div>
      <p className="mt-10 text-xs leading-6 text-zinc-400">All names, locations, addresses, and social handles on this page are fictional placeholders for the portfolio design.</p>
      <Link href="/projects" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">Back to selected work <FiArrowUpRight /></Link>
    </Container>
  )
}
