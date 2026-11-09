'use client'

import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LocaleContext = createContext(null)

const messages = {
  en: {
    home: 'Home', about: 'About', articles: 'Articles', projects: 'Projects',
    education: 'Education', uses: 'Uses', contact: 'Contact',
    language: 'فارسی', light: 'Light theme', dark: 'Dark theme',
    selectedWork: 'Selected work', exploreProjects: 'Select a project to explore its details',
    close: 'Close', overview: 'Overview', role: 'Role', technologies: 'Technologies',
    projectNote: 'Concept project · Sample portfolio content',
    latestArticles: 'Latest articles', viewAll: 'View all',
    experience: 'Experience', tools: 'Tools', educationTitle: 'Education, certificates & learning',
    exploreEducation: 'Explore education', contactCta: 'Let’s work together',
    backToTop: 'Back to top',
  },
  fa: {
    home: 'خانه', about: 'درباره من', articles: 'مقالات', projects: 'نمونه‌کارها',
    education: 'تحصیلات', uses: 'ابزارها', contact: 'ارتباط با من',
    language: 'English', light: 'حالت روشن', dark: 'حالت تاریک',
    selectedWork: 'نمونه‌کارهای منتخب', exploreProjects: 'برای مشاهده جزئیات، یک پروژه را انتخاب کنید',
    close: 'بستن', overview: 'معرفی پروژه', role: 'نقش من', technologies: 'فناوری‌ها',
    projectNote: 'پروژه مفهومی · محتوای نمونه قالب',
    latestArticles: 'آخرین مقاله‌ها', viewAll: 'مشاهده همه',
    experience: 'سوابق کاری', tools: 'ابزارها', educationTitle: 'تحصیلات، گواهی‌نامه‌ها و یادگیری',
    exploreEducation: 'مشاهده تحصیلات', contactCta: 'برای همکاری در تماس باشیم',
    backToTop: 'بازگشت به بالا',
  },
}

export function LocaleProvider({ children }) {
  const [locale, setLocale] = useState('en')

  useEffect(() => {
    const saved = window.localStorage.getItem('portfolio-locale')
    const next = saved === 'fa' ? 'fa' : 'en'
    setLocale(next)
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = locale === 'fa' ? 'rtl' : 'ltr'
    document.documentElement.classList.toggle('locale-fa', locale === 'fa')
    window.localStorage.setItem('portfolio-locale', locale)
  }, [locale])

  const value = useMemo(() => ({
    locale,
    isFa: locale === 'fa',
    setLocale,
    toggleLocale: () => setLocale((current) => current === 'fa' ? 'en' : 'fa'),
    t: (key) => messages[locale][key] || messages.en[key] || key,
  }), [locale])

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
}

export function useLocale() {
  const context = useContext(LocaleContext)
  if (!context) throw new Error('useLocale must be used inside LocaleProvider')
  return context
}
