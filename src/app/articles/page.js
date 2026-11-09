'use client'

import { Container } from '@/components/Container'
import { useLocale } from '@/i18n/LocaleProvider'
import { FiArrowUpRight, FiClock } from 'react-icons/fi'

const articles = [
  { category: 'Frontend architecture', categoryFa: 'معماری فرانت‌اند', date: 'May 14, 2025', read: '7 min read', readFa: '۷ دقیقه مطالعه', title: 'The quiet power of a well-shaped component', titleFa: 'قدرت پنهان یک کامپوننت خوش‌ساخت', excerpt: 'A component API is a small design system. Thoughtful boundaries make interfaces easier to compose, test, and evolve.', excerptFa: 'رابط یک کامپوننت در واقع یک سیستم طراحی کوچک است. مرزبندی درست، ترکیب، تست و توسعه رابط‌ها را ساده‌تر می‌کند.' },
  { category: 'Performance', categoryFa: 'عملکرد', date: 'April 02, 2025', read: '6 min read', readFa: '۶ دقیقه مطالعه', title: 'Making fast feel effortless', titleFa: 'سرعتی که به چشم نمی‌آید، اما حس می‌شود', excerpt: 'Performance work is most successful when it starts with the moments that matter to people—not just a score in a report.', excerptFa: 'بهینه‌سازی زمانی موفق است که از لحظه‌های مهم برای کاربر شروع شود، نه صرفاً از یک امتیاز در گزارش.' },
  { category: 'Design systems', categoryFa: 'سیستم طراحی', date: 'February 19, 2025', read: '9 min read', readFa: '۹ دقیقه مطالعه', title: 'Consistency without sameness', titleFa: 'یکپارچگی بدون یکنواختی', excerpt: 'A useful design system creates a shared language while leaving room for each product surface to have its own character.', excerptFa: 'یک سیستم طراحی کاربردی زبان مشترکی ایجاد می‌کند و در عین حال به هر بخش محصول اجازه می‌دهد شخصیت خودش را داشته باشد.' },
  { category: 'Accessibility', categoryFa: 'دسترس‌پذیری', date: 'January 08, 2025', read: '5 min read', readFa: '۵ دقیقه مطالعه', title: 'Small accessibility decisions, lasting impact', titleFa: 'تصمیم‌های کوچک دسترس‌پذیری، تأثیری ماندگار', excerpt: 'Keyboard states, semantic structure, and readable contrast are details that quietly improve the experience for everyone.', excerptFa: 'وضعیت‌های صفحه‌کلید، ساختار معنایی و کنتراست خوانا جزئیاتی هستند که تجربه را برای همه بهتر می‌کنند.' },
  { category: 'Career notes', categoryFa: 'یادداشت‌های حرفه‌ای', date: 'November 21, 2024', read: '4 min read', readFa: '۴ دقیقه مطالعه', title: 'Learning to collaborate earlier', titleFa: 'یادگیری همکاری از مراحل ابتدایی', excerpt: 'Bringing engineering into the conversation before a design is finished often leads to better ideas and fewer surprises.', excerptFa: 'وارد کردن مهندسی به گفت‌وگو پیش از نهایی‌شدن طراحی، اغلب به ایده‌های بهتر و غافلگیری‌های کمتر منجر می‌شود.' },
]

export default function Articles() {
  const { isFa } = useLocale()
  return (
    <Container className="mt-16 sm:mt-24" dir={isFa ? 'rtl' : 'ltr'}>
      <header className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-violet-600 dark:text-violet-300">{isFa ? 'نوشته‌ها و یادداشت‌ها' : 'Writing & notes'}</p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl">{isFa ? 'ایده‌هایی از میز کار.' : 'Ideas from the workbench.'}</h1>
        <p className="mt-6 text-base leading-8 text-zinc-600 dark:text-zinc-400">{isFa ? 'یادداشت‌هایی کوتاه درباره مهندسی فرانت‌اند، طراحی محصول و بهتر ساختن تجربه وب.' : 'Short reflections on frontend engineering, product design, and the craft of making the web a little better.'}</p>
      </header>
      <div className="mt-14 divide-y divide-zinc-200 border-y border-zinc-200 dark:divide-zinc-800 dark:border-zinc-800">
        {articles.map((article, index) => <article key={article.title} className="grid gap-3 py-8 sm:grid-cols-[150px_1fr] sm:gap-8">
          <div><p className="text-xs font-medium text-zinc-500">{article.date}</p><p className="mt-2 text-xs text-violet-700 dark:text-violet-300">{isFa ? article.categoryFa : article.category}</p></div>
          <div><div className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">{isFa ? 'یادداشت' : 'Note'} 0{index + 1}</span><span className="text-zinc-300 dark:text-zinc-700">·</span><span className="inline-flex items-center gap-1 text-[11px] text-zinc-400"><FiClock /> {isFa ? article.readFa : article.read}</span></div><h2 className="mt-2 text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">{isFa ? article.titleFa : article.title}</h2><p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-600 dark:text-zinc-400">{isFa ? article.excerptFa : article.excerpt}</p><span className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-zinc-400">{isFa ? 'پیش‌نمایش مطلب' : 'Editorial preview'} <FiArrowUpRight /></span></div>
        </article>)}
      </div>
      <p className="mt-8 text-xs leading-6 text-zinc-400">{isFa ? 'عنوان‌ها و توضیحات این بخش محتوای نمونه و خیالی هستند.' : 'These article titles and summaries are fictional editorial samples for the portfolio concept.'}</p>
    </Container>
  )
}
