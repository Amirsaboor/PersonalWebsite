'use client'

import { Container } from '@/components/Container'
import { useLocale } from '@/i18n/LocaleProvider'
import { FiArrowUpRight, FiClock } from 'react-icons/fi'
import { articles } from '@/data/articles'

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
