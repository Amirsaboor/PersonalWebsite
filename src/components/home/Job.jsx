import { FiBriefcase, FiCalendar, FiArrowUpLeft, FiMapPin } from "react-icons/fi";

const experiences = [
  {
    company: "انفورماتیک ماهان",
    role: "برنامه‌نویس فرانت‌اند",
    period: "اردیبهشت ۱۴۰۴ — اکنون",
    description: [
      "توسعه رابط کاربری اپلیکیشن‌های وب با React و Next.js.",
      "پیاده‌سازی فروشگاه اینترنتی چرم نفیس شامل کاتالوگ محصولات، سبد خرید و پرداخت، کارت هدیه، باشگاه مشتریان و نقشه شعبه‌ها.",
    ],
    skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui"],
    current: true,
  },
  {
    company: "مؤسسه آفرینش‌های هنری آستان قدس رضوی",
    role: "ادمین وب‌سایت (امریه سربازی)",
    period: "اردیبهشت ۱۴۰۱ — اردیبهشت ۱۴۰۳",
    description: [
      "مدیریت فروشگاه اینترنتی آثار هنری، ثبت محصولات و پیگیری سفارش‌های وب‌سایت.",
      "رسیدگی به امور فروش و حسابداری سفارش‌ها.",
    ],
    skills: ["مدیریت فروشگاه", "WordPress", "E-commerce"],
    current: false,
  },
  {
    company: "شرکت بهاران برتر تورنگ",
    role: "مدیر فروشگاه اینترنتی",
    period: "بهمن ۱۳۹۹ — اردیبهشت ۱۴۰۱",
    description: [
      "مدیریت فروش اینترنتی محصولات پروتئینی و پشتیبانی از مشتریان.",
      "رسیدگی به امور فروش و حسابداری.",
    ],
    skills: ["فروش آنلاین", "پشتیبانی مشتری", "E-commerce"],
    current: false,
  },
];

export default function Job() {
  return (
    <section
      aria-labelledby="experience-title"
      dir="rtl"
      className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm shadow-zinc-900/[0.03] dark:border-zinc-700/60 dark:bg-zinc-900/60 sm:p-7"
    >
      <div className="pointer-events-none absolute -left-16 -top-20 h-44 w-44 rounded-full bg-orange-500/[0.07] blur-3xl" />
      <div className="relative flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold tracking-[0.2em] text-orange-600 dark:text-orange-400">
            CAREER JOURNEY
          </p>
          <h2 id="experience-title" className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
            سوابق و تجربه کاری
          </h2>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            مسیر حرفه‌ای من در توسعه وب و مدیریت فروشگاه‌های اینترنتی
          </p>
        </div>
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
          <FiBriefcase className="h-5 w-5" aria-hidden="true" />
        </span>
      </div>

      <div className="relative mt-8 space-y-8 before:absolute before:right-[9px] before:top-2 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-orange-400/70 before:via-zinc-200 before:to-transparent dark:before:via-zinc-700">
        {experiences.map((experience, index) => (
          <article key={experience.company} className="relative pr-9">
            <span
              className={`absolute right-0 top-1.5 grid h-[19px] w-[19px] place-items-center rounded-full border-[4px] border-white dark:border-zinc-900 ${experience.current ? "bg-orange-500 ring-4 ring-orange-500/10" : "bg-zinc-300 dark:bg-zinc-600"}`}
              aria-hidden="true"
            />
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="text-xs font-semibold text-orange-700 dark:text-orange-400">
                {experience.company}
              </span>
              {experience.current && (
                <span className="rounded-full bg-orange-500/10 px-2.5 py-1 text-[10px] font-semibold text-orange-700 dark:text-orange-300">
                  همکاری فعلی
                </span>
              )}
            </div>
            <h3 className="mt-2 text-base font-bold text-zinc-900 dark:text-zinc-100">
              {experience.role}
            </h3>
            <span className="mt-2 inline-flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400">
              <FiCalendar className="h-3.5 w-3.5 text-orange-500" aria-hidden="true" />
              {experience.period}
            </span>
            <ul className="mt-3 space-y-2">
              {experience.description.map((item) => (
                <li key={item} className="flex gap-2 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {experience.skills.map((skill) => (
                <span key={skill} className="rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1 text-[11px] font-medium text-zinc-600 dark:border-zinc-700/70 dark:bg-zinc-800/70 dark:text-zinc-300">
                  {skill}
                </span>
              ))}
            </div>
            {index !== experiences.length - 1 && (
              <div className="mt-7 border-b border-dashed border-zinc-200/80 dark:border-zinc-700/60" />
            )}
          </article>
        ))}
      </div>
      <a
        href="https://github.com/Amirsaboor"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-400"
      >
        مشاهده فعالیت‌ها در گیت‌هاب
        <FiArrowUpLeft className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}
