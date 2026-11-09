'use client'

import { Container } from '@/components/Container'
import { useLocale } from '@/i18n/LocaleProvider'
import { FiAward, FiBookOpen, FiCalendar } from 'react-icons/fi'

const education = [
  { school: 'Copenhagen Institute of Digital Design', schoolFa: 'مؤسسه طراحی دیجیتال کپنهاگ', degree: 'MSc, Interaction Design', degreeFa: 'کارشناسی ارشد طراحی تعامل', period: '2016 — 2018', detail: 'Focused on human-computer interaction, interface systems, prototyping, and research-led product design.', detailFa: 'تمرکز بر تعامل انسان و کامپیوتر، سیستم‌های رابط کاربری، نمونه‌سازی و طراحی محصول مبتنی بر پژوهش.', mark: 'CID' },
  { school: 'Northern Europe University', schoolFa: 'دانشگاه اروپای شمالی', degree: 'BSc, Computer Science', degreeFa: 'کارشناسی علوم کامپیوتر', period: '2012 — 2016', detail: 'Coursework in software engineering, algorithms, web technologies, databases, and applied mathematics.', detailFa: 'دروس مهندسی نرم‌افزار، الگوریتم‌ها، فناوری‌های وب، پایگاه داده و ریاضیات کاربردی.', mark: 'NEU' },
]
const certificates = [
  { issuer: 'Meta', title: 'Frontend Developer Professional Certificate', titleFa: 'گواهی حرفه‌ای توسعه‌دهنده فرانت‌اند', date: '2024', detail: 'Modern frontend foundations, React development, version control, and practical interface projects.', detailFa: 'مبانی مدرن فرانت‌اند، توسعه React، کنترل نسخه و پروژه‌های عملی رابط کاربری.' },
  { issuer: 'Google', title: 'UX Design Certificate', titleFa: 'گواهی طراحی تجربه کاربری', date: '2023', detail: 'User research, wireframing, prototyping, usability testing, and accessible design principles.', detailFa: 'پژوهش کاربر، وایرفریم، نمونه‌سازی، تست کاربردپذیری و اصول طراحی دسترس‌پذیر.' },
  { issuer: 'AWS Training', title: 'Cloud Practitioner Essentials', titleFa: 'مبانی خدمات ابری', date: '2022', detail: 'Core cloud concepts, infrastructure fundamentals, security, and deployment workflows.', detailFa: 'مفاهیم پایه رایانش ابری، زیرساخت، امنیت و فرایندهای استقرار.' },
  { issuer: 'W3C', title: 'Web Accessibility Fundamentals', titleFa: 'مبانی دسترس‌پذیری وب', date: '2021', detail: 'Semantic HTML, accessible interaction patterns, WCAG principles, and inclusive user experiences.', detailFa: 'HTML معنایی، الگوهای تعاملی دسترس‌پذیر، اصول WCAG و تجربه فراگیر.' },
]
const learning = [
  { title: 'Advanced TypeScript Patterns', titleFa: 'الگوهای پیشرفته TypeScript', provider: 'Frontend Masters', date: '2025' },
  { title: 'Design Systems for Developers', titleFa: 'سیستم‌های طراحی برای توسعه‌دهندگان', provider: 'Interaction Design Foundation', date: '2024' },
  { title: 'Web Performance Optimization', titleFa: 'بهینه‌سازی عملکرد وب', provider: 'Google Developers', date: '2023' },
]

export default function EducationPage() {
  const { isFa } = useLocale()
  return (
    <Container className="mt-16 sm:mt-24" dir={isFa ? 'rtl' : 'ltr'}>
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{isFa ? 'تحصیلات و مدارک' : 'Education & credentials'}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">{isFa ? 'یادگیری بخشی از مسیر حرفه‌ای است.' : 'Learning is part of the work.'}</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">{isFa ? 'مروری بر تحصیلات دانشگاهی، گواهی‌نامه‌های حرفه‌ای و یادگیری مستمر در حوزه فرانت‌اند و طراحی محصول دیجیتال.' : 'A record of formal education, professional certifications, and focused learning across frontend engineering and digital product design.'}</p>
      </header>
      <section className="mt-14">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-violet-700 dark:bg-zinc-800 dark:text-violet-300"><FiBookOpen /></span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{isFa ? 'پیشینه دانشگاهی' : 'Academic background'}</p><h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{isFa ? 'تحصیلات' : 'Education'}</h2></div></div>
        <div className="mt-7 space-y-4">{education.map((item) => <article key={item.school} className="grid gap-4 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800 sm:grid-cols-[1fr_auto] sm:items-start sm:p-6"><div><p className="text-xs font-semibold text-violet-700 dark:text-violet-300">{item.period}</p><h3 className="mt-2 text-lg font-semibold text-zinc-900 dark:text-zinc-100">{isFa ? item.degreeFa : item.degree}</h3><p className="mt-1 text-sm font-medium text-zinc-600 dark:text-zinc-300">{isFa ? item.schoolFa : item.school}</p><p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-500">{isFa ? item.detailFa : item.detail}</p></div><span className="flex h-12 min-w-12 items-center justify-center rounded-xl bg-zinc-100 px-3 text-xs font-bold tracking-wide text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">{item.mark}</span></article>)}</div>
      </section>
      <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <div className="flex items-center gap-3"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 text-violet-700 dark:bg-zinc-800 dark:text-violet-300"><FiAward /></span><div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{isFa ? 'توسعه حرفه‌ای' : 'Professional development'}</p><h2 className="mt-1 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{isFa ? 'گواهی‌نامه‌ها' : 'Certificates'}</h2></div></div>
        <div className="mt-7 grid gap-4 sm:grid-cols-2">{certificates.map((item) => <article key={item.title} className="rounded-2xl border border-zinc-200 p-5 transition hover:-translate-y-1 hover:border-zinc-300 dark:border-zinc-800 dark:hover:border-zinc-700"><div className="flex items-center justify-between gap-3"><span className="text-xs font-semibold text-violet-700 dark:text-violet-300">{item.issuer}</span><span className="inline-flex items-center gap-1 text-[10px] text-zinc-400"><FiCalendar /> {item.date}</span></div><h3 className="mt-3 text-base font-semibold leading-6 text-zinc-900 dark:text-zinc-100">{isFa ? item.titleFa : item.title}</h3><p className="mt-2 text-sm leading-7 text-zinc-500">{isFa ? item.detailFa : item.detail}</p></article>)}</div>
      </section>
      <section className="mt-16 border-t border-zinc-200 pt-12 dark:border-zinc-800">
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-zinc-500">{isFa ? 'یادگیری مداوم' : 'Always learning'}</p><h2 className="mt-2 text-xl font-semibold text-zinc-900 dark:text-zinc-100">{isFa ? 'دوره‌ها و کارگاه‌های منتخب' : 'Selected courses & workshops'}</h2>
        <div className="mt-6 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">{learning.map((item) => <div key={item.title} className="flex flex-wrap items-center justify-between gap-3 py-4"><div><h3 className="text-sm font-medium text-zinc-800 dark:text-zinc-200">{isFa ? item.titleFa : item.title}</h3><p className="mt-1 text-xs text-zinc-500">{item.provider}</p></div><span className="text-xs text-zinc-400">{item.date}</span></div>)}</div>
      </section>
      <p className="mt-10 text-xs leading-6 text-zinc-400">{isFa ? 'تمام مؤسسات، مدارک، عنوان گواهی‌نامه‌ها و تاریخ‌ها محتوای نمونه و خیالی هستند.' : 'All institutions, qualifications, certificate titles, and dates are fictional sample content for this portfolio concept.'}</p>
    </Container>
  )
}
