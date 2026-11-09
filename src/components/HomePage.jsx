'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { ProjectCarousel } from '@/components/ProjectCarousel'
import { useLocale } from '@/i18n/LocaleProvider'
import { FiArrowUpRight, FiGithub, FiInstagram, FiLinkedin, FiMail, FiExternalLink, FiBriefcase } from 'react-icons/fi'
import { SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiFigma, SiNodedotjs, SiGithub } from 'react-icons/si'

const gallery = [
  { src: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?auto=format&fit=crop&w=900&q=85', alt: 'Aerial view from a small aircraft', className: 'rotate-[-1.5deg]' },
  { src: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=900&q=85', alt: 'A large creative technology conference', className: 'rotate-[1deg]' },
  { src: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=85', alt: 'A minimal creative workspace', className: 'rotate-[-1deg]' },
  { src: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85', alt: 'A hiker looking across a mountain landscape', className: 'rotate-[1.5deg]' },
  { src: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?auto=format&fit=crop&w=900&q=85', alt: 'An astronaut exploring a red desert', className: 'rotate-[-1deg]' },
  { src: 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=900&q=85', alt: 'An abstract visual experiment', className: 'rotate-[1deg]' },
]
const articles = [
  { date: 'September 5, 2025', title: 'Crafting a design system for products that scale', excerpt: 'A design system is more than a library of components. It is a shared language that helps a team make consistent decisions while leaving room for the product to evolve.', read: '8 min read', category: 'Design systems' },
  { date: 'August 18, 2025', title: 'Introducing Motion Lab: a playground for the web', excerpt: 'A small collection of experiments exploring expressive transitions, subtle feedback, and the role motion can play in making interfaces easier to understand.', read: '6 min read', category: 'Experiments' },
  { date: 'June 27, 2025', title: 'What I learned rebuilding a product from the ground up', excerpt: 'Revisiting an established application is an exercise in restraint: understand the existing mental model, simplify the rough edges, and improve the foundations without losing what works.', read: '9 min read', category: 'Engineering' },
]
const work = [
  { company: 'Northstar Labs', role: 'Founder & Creative Director', period: '2022 — Present', mark: 'N', tone: 'bg-violet-500' },
  { company: 'Airbnb', role: 'Product Designer', period: '2019 — 2022', mark: 'A', tone: 'bg-rose-500' },
  { company: 'Meta', role: 'Frontend Engineer', period: '2016 — 2019', mark: 'M', tone: 'bg-blue-500' },
  { company: 'Studio Current', role: 'Interaction Designer', period: '2013 — 2016', mark: 'S', tone: 'bg-emerald-600' },
]
const skills = [
  { name: 'React', Icon: SiReact }, { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TypeScript', Icon: SiTypescript }, { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Tailwind CSS', Icon: SiTailwindcss }, { name: 'Figma', Icon: SiFigma },
  { name: 'Node.js', Icon: SiNodedotjs }, { name: 'GitHub', Icon: SiGithub },
]

export default function Home() {
  const { t, isFa } = useLocale()
  return (
    <Container className="pt-10 sm:pt-11" >
      <section className="max-w-[34rem]" dir={isFa ? 'rtl' : 'ltr'}>
        <h1 className="max-w-[34rem] text-[2rem] font-bold leading-[1.12] tracking-[-0.045em] text-zinc-900 dark:text-zinc-100 sm:text-[2.35rem]">
          {isFa ? 'طراح نرم‌افزار، سازنده محصولات دیجیتال و کاوشگر ایده‌های تازه.' : 'Software designer, founder, and amateur astronaut.'}
        </h1>
        <p className="mt-4 max-w-[32rem] text-[13px] leading-[1.95] text-zinc-600 dark:text-zinc-400">
          {isFa ? 'من الکس هستم؛ مهندس فرانت‌اند و طراح محصول دیجیتال در کپنهاگ. تجربه‌های دیجیتال می‌سازم و به نقطه تلاقی طراحی دقیق و مهندسی مدرن فرانت‌اند علاقه دارم.' : 'I’m Alex, a software designer and creative technologist based in Copenhagen. I build digital products, explore new ideas, and work at the intersection of thoughtful design and modern frontend engineering.'}
        </p>
        <div className="mt-5 flex items-center gap-5 text-zinc-500 dark:text-zinc-400">
          <a href="https://x.com/" aria-label="X profile" className="transition hover:text-zinc-950 dark:hover:text-white"><span className="text-sm font-semibold">𝕏</span></a>
          <a href="https://instagram.com/" aria-label="Instagram profile" className="transition hover:text-zinc-950 dark:hover:text-white"><FiInstagram className="h-[15px] w-[15px]" /></a>
          <a href="https://github.com/" aria-label="GitHub profile" className="transition hover:text-zinc-950 dark:hover:text-white"><FiGithub className="h-[16px] w-[16px]" /></a>
          <a href="https://linkedin.com/" aria-label="LinkedIn profile" className="transition hover:text-zinc-950 dark:hover:text-white"><FiLinkedin className="h-[15px] w-[15px]" /></a>
          <a href="mailto:hello@alexmorgan.dev" aria-label="Email Alex" className="transition hover:text-zinc-950 dark:hover:text-white"><FiMail className="h-[15px] w-[15px]" /></a>
        </div>
      </section>

      <section aria-label="A few things that inspire me" className="photo-ribbon mt-12 sm:mt-14">
        <div className="photo-ribbon-track">{gallery.map((photo) => <div key={photo.src} className={'photo-ribbon-card ' + photo.className}><img src={photo.src} alt={photo.alt} loading="lazy" className="h-full w-full object-cover" /></div>)}</div>
      </section>

      <section id="projects" className="mt-16 scroll-mt-24 sm:mt-20" aria-labelledby="projects-heading">
        <div className="mb-6 flex items-end justify-between gap-4" dir={isFa ? 'rtl' : 'ltr'}>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">{t('selectedWork')}</p>
            <h2 id="projects-heading" className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{isFa ? 'چند تجربه دیجیتال که ساخته‌ام.' : 'A few things I’ve made.'}</h2>
          </div>
        </div>
        <ProjectCarousel />
      </section>

      <section className="mt-16 grid gap-8 border-t border-zinc-200 pt-10 dark:border-white/[0.06] sm:mt-20 sm:grid-cols-[1.15fr_0.85fr] sm:gap-8" dir={isFa ? 'rtl' : 'ltr'}>
        <div>
          <div className="mb-6 flex items-center justify-between"><h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{t('latestArticles')}</h2><Link href="/articles" className="text-[11px] font-medium text-zinc-500 transition hover:text-teal-600 dark:hover:text-teal-300">{t('viewAll')}</Link></div>
          <div className="space-y-8">{articles.map((article) => <article key={article.title} className="relative pl-3"><span className="absolute bottom-1 left-0 top-1 w-px bg-zinc-300 dark:bg-zinc-700" /><p className="text-[10px] text-zinc-500">{article.date} <span className="px-1">·</span> {article.category}</p><h3 className="mt-2 text-[13px] font-semibold leading-6 text-zinc-900 dark:text-zinc-100">{article.title}</h3><p className="mt-2 text-[11px] leading-[1.8] text-zinc-500 dark:text-zinc-400">{article.excerpt}</p><Link href="/articles" className="mt-2 inline-flex items-center gap-1 text-[10px] font-semibold text-teal-600 transition hover:text-teal-500 dark:text-teal-400">{isFa ? 'مطالعه مقاله' : 'Read article'} <FiArrowUpRight /></Link></article>)}</div>
        </div>
        <aside className="space-y-5">
          <section className="rounded-xl border border-zinc-200 p-4 dark:border-white/[0.07]"><div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"><FiMail className="h-4 w-4" /><h2 className="text-[11px] font-semibold">{isFa ? 'در جریان بمانید' : 'Stay up to date'}</h2></div><p className="mt-2 text-[11px] leading-[1.8] text-zinc-500">{isFa ? 'یادداشت‌هایی درباره طراحی، مهندسی و ایده‌های تازه؛ بدون پیام‌های اضافی.' : 'Occasional notes on design, engineering, and things worth exploring. No noise, just the good stuff.'}</p><Link href="/articles" className="mt-4 flex items-center justify-between rounded-md bg-zinc-100 px-3 py-2.5 text-[10px] font-semibold text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">{isFa ? 'مطالعه یادداشت‌ها' : 'Explore the journal'} <FiArrowUpRight /></Link></section>
          <section className="rounded-xl border border-zinc-200 p-4 dark:border-white/[0.07]"><div className="flex items-center gap-2 text-zinc-700 dark:text-zinc-300"><FiBriefcase className="h-4 w-4" /><h2 className="text-[11px] font-semibold">{t('experience')}</h2></div><div className="mt-4 space-y-4">{work.map((item) => <div key={item.company} className="flex items-center gap-3"><span className={'flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white ' + item.tone}>{item.mark}</span><div className="min-w-0 flex-1"><p className="truncate text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">{item.company}</p><p className="mt-0.5 truncate text-[10px] text-zinc-500">{item.role}</p></div><span className="shrink-0 text-[9px] text-zinc-400">{item.period}</span></div>)}</div><Link href="/about#experience" className="mt-4 flex items-center justify-center gap-2 rounded-md bg-zinc-100 px-3 py-2.5 text-[10px] font-semibold text-zinc-700 transition hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-200 dark:hover:bg-zinc-700">{isFa ? 'جزئیات سوابق کاری' : 'More about my experience'} <FiArrowUpRight /></Link></section>
          <section className="rounded-xl border border-zinc-200 p-4 dark:border-white/[0.07]"><h2 className="text-[11px] font-semibold text-zinc-800 dark:text-zinc-200">{isFa ? 'ابزارهای مورد استفاده' : 'A few tools in my kit'}</h2><div className="mt-3 flex flex-wrap gap-1.5">{skills.map(({ name, Icon }) => <span key={name} className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-2.5 py-1.5 text-[9px] text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300"><Icon className="h-3 w-3 text-teal-600 dark:text-teal-400" />{name}</span>)}</div><Link href="/uses" className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold text-teal-600 dark:text-teal-400">{isFa ? 'مشاهده فهرست کامل' : 'Full setup'} <FiExternalLink /></Link></section>
        </aside>
      </section>

      <section className="mt-16 border-t border-zinc-200 pt-9 dark:border-white/[0.06]" dir={isFa ? 'rtl' : 'ltr'}>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal-600 dark:text-teal-400">{isFa ? 'فراتر از صفحه نمایش' : 'Beyond the screen'}</p><h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{t('educationTitle')}</h2><p className="mt-2 max-w-lg text-[11px] leading-6 text-zinc-500">{isFa ? 'نگاهی به مسیر تحصیلی، گواهی‌نامه‌های حرفه‌ای و یادگیری مستمر.' : 'A snapshot of academic background, professional certificates, and ongoing learning.'}</p></div><Link href="/speaking" className="inline-flex items-center gap-2 self-start rounded-full border border-zinc-200 px-4 py-2 text-[11px] font-semibold text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500">{t('exploreEducation')} <FiArrowUpRight /></Link></div>
      </section>
    </Container>
  )
}
