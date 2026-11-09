import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiCode, FiLayers, FiZap, FiMonitor } from 'react-icons/fi'

export const metadata = {
  title: 'Alex Morgan — Frontend Engineer',
  description: 'A fictional portfolio concept for a frontend engineer building thoughtful digital products.',
}

const skills = [
  { name: 'JavaScript', level: 'Advanced' },
  { name: 'TypeScript', level: 'Advanced' },
  { name: 'React', level: 'Advanced' },
  { name: 'Next.js', level: 'Advanced' },
  { name: 'CSS & Tailwind', level: 'Advanced' },
  { name: 'Accessibility', level: 'Working knowledge' },
  { name: 'Node.js', level: 'Working knowledge' },
  { name: 'Testing & tooling', level: 'Working knowledge' },
]

const experience = [
  { company: 'Northstar Digital', role: 'Senior Frontend Engineer', period: '2023 — Present', detail: 'Leading interface development for customer-facing products, shaping component architecture, and partnering with design and product teams.' },
  { company: 'Fieldwork Studio', role: 'Frontend Developer', period: '2021 — 2023', detail: 'Built responsive marketing sites and e-commerce experiences, improved page performance, and maintained a shared UI library.' },
  { company: 'Independent', role: 'Web Developer', period: '2019 — 2021', detail: 'Delivered small business websites and interactive prototypes while building a strong foundation in modern frontend development.' },
]

const strengths = [
  { title: 'Thoughtful interfaces', detail: 'Clear hierarchy, accessible patterns, and interactions that feel natural.', Icon: FiLayers },
  { title: 'Frontend craft', detail: 'Reusable components and maintainable React and TypeScript applications.', Icon: FiCode },
  { title: 'Performance-minded', detail: 'Fast, responsive experiences that work well across devices.', Icon: FiZap },
  { title: 'Design collaboration', detail: 'Careful implementation that respects the intent behind each design.', Icon: FiMonitor },
]

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-20">
      <section className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-600 dark:text-violet-300">Frontend engineer · Design-minded developer</p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-6xl sm:leading-[1.08]">
          Building thoughtful digital experiences, one detail at a time.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-8 text-zinc-600 dark:text-zinc-400 sm:text-lg">
          I’m Alex — a fictional frontend engineer focused on turning complex ideas into clear, useful, and beautifully considered web products.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-violet-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-violet-200">Explore selected work <FiArrowUpRight /></Link>
          <Link href="/about" className="inline-flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium text-zinc-600 transition hover:text-violet-700 dark:text-zinc-300 dark:hover:text-violet-300">More about me <FiArrowUpRight /></Link>
        </div>
        <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-500 dark:text-zinc-400">
          <span className="inline-flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-500" /> Available for select projects</span>
          <span className="hidden h-1 w-1 rounded-full bg-zinc-300 sm:block" />
          <span>Based in Copenhagen, Denmark</span>
        </div>
      </section>

      <section className="mt-20 sm:mt-24" aria-labelledby="selected-work-heading">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Selected work</p><h2 id="selected-work-heading" className="mt-2 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">A selection of recent projects.</h2></div>
          <Link href="/projects" className="hidden items-center gap-2 text-sm text-zinc-500 transition hover:text-violet-700 dark:hover:text-violet-300 sm:inline-flex">All projects <FiArrowUpRight /></Link>
        </div>
        <ProjectCarousel />
      </section>

      <section className="mt-24 grid gap-10 border-t border-zinc-200 pt-12 dark:border-zinc-800 sm:grid-cols-[0.9fr_1.1fr]">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">What I bring</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">A balance of engineering and experience.</h2><p className="mt-4 max-w-lg text-sm leading-7 text-zinc-600 dark:text-zinc-400">Good frontend work is more than making a screen match a design. It is the thoughtful combination of accessibility, performance, interaction, and a codebase a team can confidently build on.</p></div>
        <div className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
          {strengths.map(({ title, detail, Icon }) => <div key={title}><Icon className="h-5 w-5 text-violet-600 dark:text-violet-300" /><h3 className="mt-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">{title}</h3><p className="mt-1.5 text-sm leading-6 text-zinc-500 dark:text-zinc-400">{detail}</p></div>)}
        </div>
      </section>

      <section className="mt-24 grid gap-12 border-t border-zinc-200 pt-12 dark:border-zinc-800 lg:grid-cols-[0.8fr_1.2fr]">
        <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Experience</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Where I’ve made an impact.</h2><p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">A snapshot of a fictional career path, from independent projects to product teams.</p><Link href="/about#experience" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">Full background <FiArrowUpRight /></Link></div>
        <div className="space-y-8">{experience.map((item) => <article key={item.company} className="relative border-l border-zinc-200 pl-6 dark:border-zinc-800"><span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-violet-500 ring-4 ring-white dark:ring-zinc-950" /><div className="flex flex-wrap items-baseline justify-between gap-2"><h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{item.role}</h3><span className="text-xs text-zinc-500">{item.period}</span></div><p className="mt-1 text-sm font-medium text-violet-700 dark:text-violet-300">{item.company}</p><p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">{item.detail}</p></article>)}</div>
      </section>

      <section className="mt-24 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">Toolbox</p><h2 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">Skills I use to bring ideas to life.</h2><p className="mt-3 max-w-xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">A practical mix of frontend technologies, interface craft, and product-minded problem solving.</p></div>
          <Link href="/uses" className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">My setup <FiArrowUpRight /></Link>
        </div>
        <div className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{skills.map((skill) => <div key={skill.name} className="flex items-center justify-between gap-3 rounded-xl border border-zinc-200 px-4 py-3 dark:border-zinc-800"><span className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{skill.name}</span><span className="text-[10px] text-zinc-400">{skill.level}</span></div>)}</div>
      </section>

      <section id="contact" className="mt-24 rounded-3xl bg-zinc-950 px-7 py-10 text-white dark:bg-zinc-900 sm:px-10 sm:py-12">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-300">Have a good project in mind?</p>
        <div className="mt-4 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><h2 className="max-w-xl text-3xl font-semibold tracking-tight sm:text-4xl">Let’s make something meaningful.</h2><p className="mt-3 max-w-lg text-sm leading-7 text-zinc-400">For this portfolio concept, reach out through the sample contact details or explore the fictional social profiles.</p></div><Link href="/contact" className="inline-flex shrink-0 items-center gap-2 self-start rounded-full bg-white px-5 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-violet-100 sm:self-auto">Get in touch <FiArrowUpRight /></Link></div>
        <div className="mt-8 flex flex-wrap gap-5 border-t border-white/10 pt-6 text-sm text-zinc-400"><span className="inline-flex items-center gap-2"><FiMail /> hello@alexmorgan.dev</span><span className="inline-flex items-center gap-2"><FiGithub /> github.com/alexmorgan</span><span className="inline-flex items-center gap-2"><FiLinkedin /> linkedin.com/in/alexmorgan</span></div>
      </section>
    </Container>
  )
}
