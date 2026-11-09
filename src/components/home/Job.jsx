import { FiBriefcase, FiCalendar, FiArrowUpLeft } from "react-icons/fi";

const experiences = [
  {
    type: "پروژه‌های تجاری و مستقل",
    title: "توسعه‌دهنده فرانت‌اند",
    period: "همکاری پروژه‌ای",
    description:
      "طراحی و پیاده‌سازی رابط‌های کاربری واکنش‌گرا با React و Next.js؛ با تمرکز بر تجربه کاربری، کیفیت کد و عملکرد.",
    highlights: ["Nafis Leather", "Mahan IT", "CSeven", "Talar"],
    current: true,
  },
  {
    type: "میتلند",
    title: "ادمین و پشتیبان وب‌سایت فروشگاهی",
    period: "بهمن ۱۳۹۹ — فروردین ۱۴۰۱",
    description:
      "مدیریت و پشتیبانی وب‌سایت فروشگاهی، بررسی و رفع ایرادهای سایت و به‌روزرسانی محتوای صفحات.",
    highlights: [],
    current: false,
  },
];

export default function Job() {
  return (
    <section
      aria-labelledby="experience-title"
      className="rounded-2xl border border-zinc-200/80 bg-white/70 p-6 dark:border-zinc-700/50 dark:bg-zinc-900/40 sm:p-7"
      dir="rtl"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide text-red-500">CAREER</p>
          <h2 id="experience-title" className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            تجربه و سابقه کاری
          </h2>
        </div>
        <FiBriefcase className="h-5 w-5 text-zinc-400" aria-hidden="true" />
      </div>

      <div className="relative mt-7 space-y-8 before:absolute before:right-[7px] before:top-2 before:h-[calc(100%-1rem)] before:w-px before:bg-zinc-200 dark:before:bg-zinc-700">
        {experiences.map((experience) => (
          <article key={experience.title + experience.type} className="relative pr-8">
            <span
              className={`absolute right-0 top-1.5 h-[15px] w-[15px] rounded-full border-[3px] border-white dark:border-zinc-900 ${experience.current ? "bg-red-500 ring-4 ring-red-500/10" : "bg-zinc-300 dark:bg-zinc-600"}`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
              <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">
                {experience.type}
              </span>
              <span className="inline-flex items-center gap-1 text-xs text-zinc-400">
                <FiCalendar className="h-3 w-3" aria-hidden="true" />
                {experience.period}
              </span>
            </div>
            <h3 className="mt-2 text-base font-semibold text-zinc-900 dark:text-zinc-100">
              {experience.title}
            </h3>
            <p className="mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
              {experience.description}
            </p>
            {experience.highlights.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-2">
                {experience.highlights.map((item) => (
                  <span key={item} className="rounded-md bg-zinc-100 px-2.5 py-1 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-300">
                    {item}
                  </span>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
      <a
        href="https://github.com/Amirsaboor"
        target="_blank"
        rel="noreferrer"
        className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition-colors hover:text-red-500 dark:text-zinc-400"
      >
        مشاهده فعالیت‌ها در گیت‌هاب
        <FiArrowUpLeft className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
