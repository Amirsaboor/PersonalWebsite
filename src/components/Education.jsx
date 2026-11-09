import { FiBookOpen, FiCalendar, FiGlobe, FiAward } from "react-icons/fi";

const education = [
  { title: "کارشناسی مهندسی نرم‌افزار", institute: "دانشگاه آزاد اسلامی مشهد", period: "۱۳۹۸ — ۱۴۰۰", type: "مدرک دانشگاهی" },
  { title: "کاردانی نرم‌افزار", institute: "دانشگاه آزاد اسلامی مشهد", period: "۱۳۹۵ — ۱۳۹۸", type: "مدرک دانشگاهی" },
];
const courses = [
  { title: "توسعه فرانت‌اند", institute: "Coding Front · دوره ۴ ماهه", year: "۱۴۰۲" },
  { title: "دوره آموزشی مجتمع فنی تهران", institute: "مجتمع فنی تهران · دوره یک‌ساله", year: "۱۴۰۱" },
];

export function Education() {
  return (
    <section aria-labelledby="education-title" className="h-full rounded-[1.8rem] border border-zinc-200/80 bg-white/80 p-6 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/60 sm:p-8">
      <div className="flex items-center gap-3"><span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-300"><FiBookOpen className="h-5 w-5" /></span><div><p className="text-[11px] font-bold tracking-[0.18em] text-orange-600 dark:text-orange-400">EDUCATION</p><h2 id="education-title" className="mt-1 text-xl font-black text-zinc-950 dark:text-white">تحصیلات و آموزش</h2></div></div>
      <div className="mt-7 space-y-5">
        {education.map((item) => <article key={item.title} className="rounded-2xl border border-zinc-200/70 bg-zinc-50/70 p-4 dark:border-zinc-700/60 dark:bg-zinc-800/40"><div className="flex flex-wrap items-center justify-between gap-2"><span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[10px] font-bold text-orange-700 dark:text-orange-300">{item.type}</span><span className="inline-flex items-center gap-1.5 text-[11px] text-zinc-400"><FiCalendar className="h-3.5 w-3.5" />{item.period}</span></div><h3 className="mt-3 text-sm font-bold text-zinc-900 dark:text-zinc-100">{item.title}</h3><p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{item.institute}</p></article>)}
      </div>
      <div className="mt-7 border-t border-dashed border-zinc-200 pt-6 dark:border-zinc-700">
        <h3 className="flex items-center gap-2 text-sm font-bold text-zinc-800 dark:text-zinc-200"><FiAward className="h-4 w-4 text-orange-500" /> دوره‌های آموزشی</h3>
        <div className="mt-4 space-y-4">{courses.map((item) => <div key={item.title} className="flex items-start justify-between gap-3"><div><p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{item.title}</p><p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">{item.institute}</p></div><span className="shrink-0 text-xs text-zinc-400">{item.year}</span></div>)}</div>
      </div>
      <div className="mt-7 border-t border-dashed border-zinc-200 pt-6 dark:border-zinc-700">
        <h3 className="flex items-center gap-2 text-sm font-bold text-zinc-800 dark:text-zinc-200"><FiGlobe className="h-4 w-4 text-orange-500" /> زبان‌ها</h3>
        <div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">فارسی · زبان مادری</span><span className="rounded-full border border-zinc-200 bg-zinc-50 px-3 py-2 text-xs text-zinc-600 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">انگلیسی · متوسط</span></div>
      </div>
    </section>
  );
}
