'use client'

import Link from 'next/link'
import { Container } from '@/components/Container'
import { useLocale } from '@/i18n/LocaleProvider'
import { FiArrowUpRight, FiCode, FiLayers, FiDatabase, FiGitBranch } from 'react-icons/fi'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiRadixui, SiNodedotjs, SiSupabase, SiGraphql, SiGit, SiGithub, SiPlaywright, SiJest, SiFigma } from 'react-icons/si'

const skills = [
  { en: 'Core frontend', fa: 'فرانت‌اند اصلی', Icon: FiCode, items: [{ name: 'JavaScript', Icon: SiJavascript }, { name: 'TypeScript', Icon: SiTypescript }, { name: 'React', Icon: SiReact }, { name: 'Next.js', Icon: SiNextdotjs }, { name: 'HTML5', Icon: SiHtml5 }, { name: 'CSS3', Icon: SiCss3 }] },
  { en: 'UI engineering', fa: 'مهندسی رابط کاربری', Icon: FiLayers, items: [{ name: 'Tailwind CSS', Icon: SiTailwindcss }, { name: 'Radix UI', Icon: SiRadixui }, { name: 'CSS Modules' }, { name: 'Responsive design' }, { name: 'Accessibility' }] },
  { en: 'Data & integration', fa: 'داده و یکپارچه‌سازی', Icon: FiDatabase, items: [{ name: 'REST APIs' }, { name: 'GraphQL', Icon: SiGraphql }, { name: 'Node.js', Icon: SiNodedotjs }, { name: 'Supabase', Icon: SiSupabase }, { name: 'Authentication' }] },
  { en: 'Quality & workflow', fa: 'کیفیت و گردش کار', Icon: FiGitBranch, items: [{ name: 'Git', Icon: SiGit }, { name: 'GitHub', Icon: SiGithub }, { name: 'Playwright', Icon: SiPlaywright }, { name: 'Jest', Icon: SiJest }, { name: 'Figma', Icon: SiFigma }, { name: 'Performance tuning' }] },
]
const experience = [
  { company: 'Northstar Digital', role: 'Senior Frontend Engineer', roleFa: 'مهندس ارشد فرانت‌اند', period: '2023 — Present', place: 'Copenhagen · Hybrid', placeFa: 'کپنهاگ · ترکیبی', detail: 'Own frontend delivery for customer-facing products, establish shared component patterns, and improve application reliability and performance.', detailFa: 'مسئولیت توسعه فرانت‌اند محصولات مشتری‌محور، ایجاد الگوهای مشترک کامپوننت‌ها و بهبود پایداری و عملکرد نرم‌افزار.' },
  { company: 'Fieldwork Studio', role: 'Frontend Developer', roleFa: 'توسعه‌دهنده فرانت‌اند', period: '2021 — 2023', place: 'Remote', placeFa: 'دورکاری', detail: 'Implemented e-commerce and marketing experiences, from responsive interfaces and API integration to ongoing optimization.', detailFa: 'پیاده‌سازی تجربه‌های فروشگاهی و بازاریابی؛ از رابط واکنش‌گرا و اتصال API تا بهینه‌سازی مستمر.' },
  { company: 'Independent', role: 'Web Developer', roleFa: 'توسعه‌دهنده وب', period: '2019 — 2021', place: 'Freelance', placeFa: 'فریلنس', detail: 'Helped small teams turn early product ideas into polished websites and interactive prototypes.', detailFa: 'همراهی با تیم‌های کوچک برای تبدیل ایده‌های اولیه محصول به وب‌سایت‌های حرفه‌ای و نمونه‌های تعاملی.' },
]

export default function About() {
  const { isFa } = useLocale()
  return (
    <Container className="mt-16 sm:mt-24" dir={isFa ? 'rtl' : 'ltr'}>
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{isFa ? 'درباره من' : 'About'}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">{isFa ? 'کمی درباره فردی که پشت این رابط کاربری قرار دارد.' : 'A little about the person behind the interface.'}</h1>
        <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">{isFa ? 'من الکس مورگان هستم؛ مهندس فرانت‌اندی خیالی در کپنهاگ. از نقطه تلاقی طراحی دقیق و مهندسی قدرتمند لذت می‌برم؛ به‌ویژه تصمیم‌های کوچکی که تجربه محصولات دیجیتال را ساده و روان می‌کنند.' : 'I’m Alex Morgan, a fictional frontend engineer based in Copenhagen. I enjoy the space where thoughtful design meets robust engineering—and the small decisions that make digital products feel effortless.'}</p>
      </header>
      <div className="mt-14 grid items-start gap-12 lg:grid-cols-[1fr_280px]">
        <div className="space-y-5 text-base leading-8 text-zinc-600 dark:text-zinc-400">
          <p>{isFa ? 'در طول سال‌ها میان تیم‌های محصول، پروژه‌های مستقل و فعالیت در استودیوها کار کرده‌ام. این تنوع به من یاد داده سریع سازگار شوم، سؤال‌های دقیق‌تری بپرسم و نیاز کاربر را در تمام مراحل توسعه در نظر بگیرم.' : 'Over the years, I’ve moved between product teams, independent projects, and studio work. That variety taught me to adapt quickly, ask better questions, and keep the user’s needs visible throughout the development process.'}</p>
          <p>{isFa ? 'تمرکز روزانه من روی React، Next.js و TypeScript است. به معماری کامپوننت‌ها، دسترس‌پذیری، عملکرد و کیفیت تجربه در نمایشگرهای بزرگ و کوچک اهمیت می‌دهم.' : 'My day-to-day work is centered on React, Next.js, and TypeScript. I care about component architecture, accessible interaction patterns, performance, and making sure the finished experience feels considered on both a large monitor and a small phone.'}</p>
          <p>{isFa ? 'خارج از فضای کدنویسی، این شخصیت نمونه به کتاب‌های معماری، پیاده‌روی شهری، قهوه تخصصی و اشیای روزمره خوش‌ساخت علاقه دارد.' : 'Outside the editor, this fictional profile enjoys architecture books, long city walks, specialty coffee, and collecting ideas from well-made everyday objects.'}</p>
        </div>
        <aside className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-zinc-200 ring-1 ring-black/5 dark:bg-zinc-800 dark:ring-white/10"><img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85" alt={isFa ? 'تصویر نمونه یک متخصص خلاق' : 'Portrait of a fictional creative professional'} className="h-full w-full object-cover" loading="lazy" /></aside>
      </div>
      <section className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{isFa ? 'توانمندی‌ها' : 'Capabilities'}</p>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{isFa ? 'ابزارهایی برای ساخت تجربه‌های کامل.' : 'A toolkit for building complete experiences.'}</h2>
        <div className="mt-8 grid gap-8 sm:grid-cols-2">{skills.map((group) => <div key={group.en}><h3 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"><group.Icon className="h-4 w-4 text-violet-600 dark:text-violet-300" />{isFa ? group.fa : group.en}</h3><div className="mt-3 flex flex-wrap gap-2">{group.items.map((item) => <span key={item.name} className="inline-flex items-center gap-1.5 rounded-full bg-zinc-100 px-3 py-1.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{item.Icon ? <item.Icon className="h-3.5 w-3.5" aria-hidden="true" /> : <FiCode className="h-3 w-3 text-violet-500" />}{item.name}</span>)}</div></div>)}</div>
      </section>
      <section id="experience" className="mt-20 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{isFa ? 'سوابق کاری' : 'Experience'}</p>
        <h2 className="mt-3 text-2xl font-semibold text-zinc-900 dark:text-zinc-100">{isFa ? 'مسیر حرفه‌ای با ساختن تجربه‌ها شکل گرفته است.' : 'A path shaped by making things.'}</h2>
        <div className="mt-10 space-y-10">{experience.map((item) => <article key={item.company} className="grid gap-3 sm:grid-cols-[190px_1fr] sm:gap-8"><div><p className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">{item.period}</p><p className="mt-1 text-xs text-zinc-500">{isFa ? item.placeFa : item.place}</p></div><div className="border-r border-zinc-200 pr-5 dark:border-zinc-800 ltr:border-l ltr:border-r-0 ltr:pl-5 ltr:pr-0"><h3 className="font-semibold text-zinc-900 dark:text-zinc-100">{isFa ? item.roleFa : item.role}</h3><p className="mt-1 text-sm font-medium text-violet-700 dark:text-violet-300">{item.company}</p><p className="mt-3 text-sm leading-7 text-zinc-600 dark:text-zinc-400">{isFa ? item.detailFa : item.detail}</p></div></article>)}</div>
      </section>
      <div className="mt-16"><Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-violet-700 dark:text-violet-300">{isFa ? 'در تماس باشیم' : 'Get in touch'} <FiArrowUpRight /></Link></div>
    </Container>
  )
}
