import { Container } from '@/components/Container'
import { FiAward, FiBookOpen, FiCalendar, FiExternalLink } from 'react-icons/fi'

export const metadata = {
  title: 'Education & Credentials',
  description: 'Fictional education history, professional certificates, and continued learning.',
}

const education = [
  { school: 'Copenhagen Institute of Digital Design', degree: 'MSc, Interaction Design', period: '2016 — 2018', detail: 'Focused on human-computer interaction, interface systems, prototyping, and research-led product design.', mark: 'CID' },
  { school: 'Northern Europe University', degree: 'BSc, Computer Science', period: '2012 — 2016', detail: 'Coursework in software engineering, algorithms, web technologies, databases, and applied mathematics.', mark: 'NEU' },
]

const certificates = [
  { issuer: 'Meta', title: 'Frontend Developer Professional Certificate', date: '2024', detail: 'Modern frontend foundations, React development, version control, and practical interface projects.' },
  { issuer: 'Google', title: 'UX Design Certificate', date: '2023', detail: 'User research, wireframing, prototyping, usability testing, and accessible design principles.' },
  { issuer: 'AWS Training', title: 'Cloud Practitioner Essentials', date: '2022', detail: 'Core cloud concepts, infrastructure fundamentals, security, and deployment workflows.' },
  { issuer: 'W3C', title: 'Web Accessibility Fundamentals', date: '2021', detail: 'Semantic HTML, accessible interaction patterns, WCAG principles, and inclusive user experiences.' },
]

const learning = [
  { title: 'Advanced TypeScript Patterns', provider: 'Frontend Masters', date: '2025' },
  { title: 'Design Systems for Developers', provider: 'Interaction Design Foundation', date: '2024' },
  { title: 'Web Performance Optimization', provider: 'Google Developers', date: '2023' },
]

export default function EducationPage() {
  return (
    <Container className="mt-16 sm:mt-24">
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Education & credentials</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">Learning is part of the work.</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">A record of formal education, professional certifications, and focused learning across frontend engineering and digital product design.</p>
      </header>

      <section className="mt-14">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-violet-700 dark:bg-zinc-800 dark:text-violet-300"><FiBookOpen /></span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Academic background</p><h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Education</h2></div></div>
        <div className="mt-7 space-y-4">{education.map((item) => <article key={item.school} className="grid gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800 sm:grid-cols-[1fr_auto] sm:items-start sm:p-6"><div><p className="text-xs font-semibold text-violet-700 dark:text-violet-300">{item.period}</p><h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{item.degree}</h3><p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">{item.school}</p><p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">{item.detail}</p></div><span className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 px-3 text-xs font-bold tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{item.mark}</span></article>)}</div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-violet-700 dark:bg-zinc-800 dark:text-violet-300"><FiAward /></span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Professional development</p><h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Certificates</h2></div></div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">{certificates.map((item) => <article key={item.title} className="rounded-2xl border border-zinc-200 p-5 transition hover:-translate-y-1 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold text-violet-700 dark:text-violet-300">{item.issuer}</span><span className="inline-flex items-center gap-1 text-[10px] text-zinc-400"><FiCalendar /> {item.date}</span></div><h3 className="mt-3 text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">{item.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-500">{item.detail}</p></article>)}</div>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">Always learning</p>
        <h2 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">Selected courses & workshops</h2>
        <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">{learning.map((item) => <div key={item.title} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{item.title}</h3><p className="mt-1 text-xs text-zinc-500">{item.provider}</p></div><span className="text-xs text-zinc-400">{item.date}</span></div>)}</div>
      </section>

      <p className="mt-10 text-xs leading-6 text-zinc-400">All institutions, qualifications, certificate titles, and dates are fictional sample content for this portfolio concept.</p>
    </Container>
  )
}
