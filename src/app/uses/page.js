'use client'

import { Container } from '@/components/Container'
import { useLocale } from '@/i18n/LocaleProvider'
import { FiMonitor, FiCode, FiPenTool, FiLayers, FiCheckCircle } from 'react-icons/fi'

const groups = [
  { title: 'Desk & hardware', titleFa: 'میز کار و تجهیزات', Icon: FiMonitor, intro: 'A calm, reliable setup for long stretches of focused work.', introFa: 'چیدمانی ساده و قابل اتکا برای ساعت‌ها کار متمرکز.', items: [
    { name: '14-inch MacBook Pro', detail: 'Apple silicon · 32 GB memory · Space Black', detailFa: 'پردازنده Apple Silicon · حافظه ۳۲ گیگابایت · مشکی' },
    { name: 'Studio Display', detail: 'A crisp main display with a simple single-cable desk setup', detailFa: 'نمایشگر اصلی باکیفیت و اتصال ساده با یک کابل' },
    { name: 'Keychron Q1', detail: 'Mechanical keyboard · tactile switches', detailFa: 'کیبورد مکانیکی با سوییچ‌های لمسی' },
    { name: 'Logitech MX Master 3S', detail: 'A comfortable daily driver for design and development work', detailFa: 'ماوس ارگونومیک برای طراحی و توسعه روزانه' },
  ]},
  { title: 'Development', titleFa: 'توسعه', Icon: FiCode, intro: 'A small set of tools that stay out of the way.', introFa: 'مجموعه‌ای کوچک از ابزارهایی که مزاحم تمرکز نمی‌شوند.', items: [
    { name: 'Visual Studio Code', detail: 'Editor, integrated terminal, and a focused extension set', detailFa: 'ویرایشگر کد، ترمینال داخلی و افزونه‌های ضروری' },
    { name: 'Warp', detail: 'Terminal for project work, scripts, and Git workflows', detailFa: 'ترمینال برای مدیریت پروژه، اسکریپت‌ها و گردش کار Git' },
    { name: 'Node.js & pnpm', detail: 'Runtime and package management for JavaScript projects', detailFa: 'محیط اجرا و مدیریت پکیج برای پروژه‌های جاوااسکریپت' },
    { name: 'Chrome & Firefox', detail: 'Browser testing, accessibility checks, and responsive QA', detailFa: 'تست مرورگر، بررسی دسترس‌پذیری و کنترل واکنش‌گرایی' },
  ]},
  { title: 'Design & collaboration', titleFa: 'طراحی و همکاری', Icon: FiPenTool, intro: 'Tools for making decisions visible and sharing context.', introFa: 'ابزارهایی برای شفاف‌کردن تصمیم‌ها و به‌اشتراک‌گذاری اطلاعات.', items: [
    { name: 'Figma', detail: 'Interface exploration, component libraries, and design handoff', detailFa: 'طراحی رابط، کتابخانه کامپوننت و تحویل طرح' },
    { name: 'Linear', detail: 'Planning work, tracking decisions, and keeping projects moving', detailFa: 'برنامه‌ریزی، پیگیری تصمیم‌ها و مدیریت پیشرفت پروژه' },
    { name: 'Notion', detail: 'Project notes, lightweight documentation, and research', detailFa: 'یادداشت پروژه، مستندات سبک و پژوهش' },
    { name: 'GitHub', detail: 'Version control, code review, and team collaboration', detailFa: 'کنترل نسخه، بازبینی کد و همکاری تیمی' },
  ]},
  { title: 'Everyday stack', titleFa: 'فناوری‌های روزمره', Icon: FiLayers, intro: 'The technologies I reach for when building modern web products.', introFa: 'فناوری‌هایی که برای ساخت محصولات وب مدرن استفاده می‌کنم.', items: [
    { name: 'React & Next.js', detail: 'Component-driven interfaces and full-stack web applications', detailFa: 'رابط‌های مبتنی بر کامپوننت و برنامه‌های وب' },
    { name: 'TypeScript', detail: 'Safer application code and expressive component APIs', detailFa: 'کدنویسی مطمئن‌تر و APIهای خوانا برای کامپوننت‌ها' },
    { name: 'Tailwind CSS', detail: 'Consistent, responsive styling with a shared design vocabulary', detailFa: 'استایل‌دهی یکپارچه و واکنش‌گرا با زبان طراحی مشترک' },
    { name: 'Playwright', detail: 'Browser-based tests for the journeys that matter', detailFa: 'تست مرورگر برای مسیرهای مهم کاربر' },
  ]},
]

export default function Uses() {
  const { isFa } = useLocale()
  return (
    <Container className="mt-16 sm:mt-24" dir={isFa ? 'rtl' : 'ltr'}>
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{isFa ? 'ابزارها' : 'Uses'}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">{isFa ? 'ابزارهایی که به ساخت محصولات کمک می‌کنند.' : 'The tools behind the work.'}</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">{isFa ? 'چیدمانی برای طراحی، توسعه، تست و انتشار محصولات دیجیتال؛ ساده و هماهنگ.' : 'A considered setup for designing, building, testing, and shipping digital products. Nothing too complicated—just tools that work well together.'}</p>
      </header>
      <div className="mt-14 space-y-12">{groups.map((group) => <section key={group.title} className="grid gap-5 sm:grid-cols-[190px_1fr] sm:gap-10"><div><h2 className="flex items-center gap-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100"><group.Icon className="h-4 w-4 text-violet-600 dark:text-violet-300" />{isFa ? group.titleFa : group.title}</h2><p className="mt-2 text-xs leading-6 text-zinc-500">{isFa ? group.introFa : group.intro}</p></div><dl className="divide-y divide-zinc-200 dark:divide-zinc-800">{group.items.map((item) => <div key={item.name} className="grid gap-1 py-4 first:pt-0 sm:grid-cols-[1fr_1.2fr] sm:gap-6"><dt className="flex items-center gap-2 text-sm font-medium text-zinc-800 dark:text-zinc-200"><FiCheckCircle className="h-3.5 w-3.5 text-emerald-600 dark:text-emerald-400" />{item.name}</dt><dd className="text-sm leading-6 text-zinc-500 dark:text-zinc-400">{isFa ? item.detailFa : item.detail}</dd></div>)}</dl></section>)}</div>
      <p className="mt-14 border-t border-zinc-200 pt-6 text-xs leading-6 text-zinc-400 dark:border-zinc-800">{isFa ? 'فهرست تجهیزات و گردش کار، محتوای نمونه است و می‌تواند با اطلاعات واقعی جایگزین شود.' : 'This equipment and workflow list is fictional sample content and can be replaced with a real setup later.'}</p>
    </Container>
  )
}
