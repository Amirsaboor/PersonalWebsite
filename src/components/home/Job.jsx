import { FiBriefcase, FiCalendar, FiArrowUpLeft } from "react-icons/fi";

const experiences = [
  {
    company: "انفورماتیک ماهان",
    role: "برنامه‌نویس فرانت‌اند",
    period: "اردیبهشت ۱۴۰۴ — اکنون",
    location: "مشهد، ایران",
    description: [
      "توسعه و نگهداری رابط کاربری اپلیکیشن‌های وب با React و Next.js.",
      "پیاده‌سازی فروشگاه اینترنتی چرم نفیس؛ شامل کاتالوگ و جزئیات محصولات، تخفیف‌ها، سبد خرید، فرایند ثبت سفارش و پرداخت.",
      "توسعه قابلیت‌های تکمیلی فروشگاه مانند کارت هدیه، باشگاه مشتریان و نمایش نقشه شعبه‌ها.",
      "پیاده‌سازی رابط‌های واکنش‌گرا و اتصال بخش‌های مختلف فرانت‌اند به APIهای بک‌اند.",
    ],
    skills: ["React", "Next.js", "JavaScript", "Tailwind CSS", "shadcn/ui", "REST API"],
    current: true,
  },
  {
    company: "مؤسسه آفرینش‌های هنری آستان قدس رضوی",
    role: "ادمین وب‌سایت (امریه سربازی)",
    period: "اردیبهشت ۱۴۰۱ — اردیبهشت ۱۴۰۳",
    location: "مشهد، ایران",
    description: [
      "مدیریت فروشگاه اینترنتی آثار هنری و ثبت، تکمیل و به‌روزرسانی اطلاعات محصولات.",
      "پیگیری سفارش‌های ثبت‌شده در وب‌سایت و هماهنگی امور مربوط به فرایند فروش.",
      "رسیدگی به امور فروش و حسابداری سفارش‌ها و پیگیری وضعیت آن‌ها.",
    ],
    skills: ["WordPress", "مدیریت فروشگاه", "ثبت و مدیریت محصول", "E-commerce"],
    current: false,
  },
  {
    company: "شرکت بهاران برتر تورنگ",
    role: "مدیر فروشگاه اینترنتی",
    period: "بهمن ۱۳۹۹ — اردیبهشت ۱۴۰۱",
    location: "مشهد، ایران",
    description: [
      "مدیریت فرایند فروش اینترنتی محصولات پروتئینی و پیگیری سفارش‌های مشتریان.",
      "پاسخ‌گویی و پشتیبانی مشتریان در مراحل ثبت و پیگیری سفارش.",
      "رسیدگی به امور فروش و حسابداری مرتبط با سفارش‌های آنلاین.",
    ],
    skills: ["فروش اینترنتی", "پشتیبانی مشتری", "مدیریت سفارش", "E-commerce"],
    current: false,
  },
];

export default function Job() {
  return (
    <div className="relative overflow-hidden rounded-[1.8rem] border border-zinc-200/80 bg-white/80 p-6 shadow-sm shadow-zinc-900/[0.03] dark:border-zinc-700/60 dark:bg-zinc-900/60 sm:p-8">
      <div className="pointer-events-none absolute -left-20 -top-24 h-64 w-64 rounded-full bg-orange-500/[0.07] blur-3xl" />
      <div className="relative flex flex-wrap items-center justify-between gap-4">
        <div><p className="text-[11px] font-bold tracking-[0.18em] text-orange-600 dark:text-orange-400">WORK EXPERIENCE</p><h3 className="mt-2 text-xl font-black text-zinc-950 dark:text-white">سوابق شغلی</h3><p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">سه تجربه کاری ثبت‌شده در مسیر حرفه‌ای من</p></div>
        <span className="grid h-12 w-12 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-300"><FiBriefcase className="h-5 w-5" aria-hidden="true" /></span>
      </div>
      <div className="relative mt-9 space-y-10 before:absolute before:right-[9px] before:top-2 before:h-[calc(100%-1.5rem)] before:w-px before:bg-gradient-to-b before:from-orange-400 before:via-zinc-200 before:to-transparent dark:before:via-zinc-700">
        {experiences.map((experience, index) => (
          <article key={experience.company} className="relative pr-9">
            <span className={`absolute right-0 top-1.5 h-[19px] w-[19px] rounded-full border-[4px] border-white dark:border-zinc-900 ${experience.current ? "bg-orange-500 ring-4 ring-orange-500/10" : "bg-zinc-300 dark:bg-zinc-600"}`} aria-hidden="true" />
            <div className="flex flex-wrap items-center gap-2"><span className="text-sm font-bold text-zinc-900 dark:text-zinc-100">{experience.company}</span>{experience.current && <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-bold text-emerald-700 dark:text-emerald-300">همکاری فعلی</span>}</div>
            <h4 className="mt-2 text-base font-bold text-orange-700 dark:text-orange-300">{experience.role}</h4>
            <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2 text-xs text-zinc-500 dark:text-zinc-400"><span className="inline-flex items-center gap-1.5"><FiCalendar className="h-3.5 w-3.5 text-orange-500" />{experience.period}</span><span>{experience.location}</span></div>
            <ul className="mt-4 space-y-2.5">{experience.description.map((item) => <li key={item} className="flex gap-2.5 text-sm leading-7 text-zinc-600 dark:text-zinc-400"><span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-orange-400" aria-hidden="true" /><span>{item}</span></li>)}</ul>
            <div className="mt-4 flex flex-wrap gap-2">{experience.skills.map((skill) => <span key={skill} className="rounded-lg border border-zinc-200/80 bg-zinc-50 px-2.5 py-1.5 text-[11px] font-medium text-zinc-600 dark:border-zinc-700/70 dark:bg-zinc-800/70 dark:text-zinc-300">{skill}</span>)}</div>
            {index !== experiences.length - 1 && <div className="mt-8 border-b border-dashed border-zinc-200/80 dark:border-zinc-700/60" />}
          </article>
        ))}
      </div>
      <a href="https://github.com/Amirsaboor" target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-zinc-500 transition-colors hover:text-orange-600 dark:text-zinc-400 dark:hover:text-orange-300">مشاهده فعالیت‌ها در گیت‌هاب <FiArrowUpLeft className="h-4 w-4" /></a>
    </div>
  );
}
