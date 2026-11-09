import { SiGithub, SiTelegram, SiLinkedin } from "react-icons/si";
import { FiArrowUpLeft, FiMail, FiExternalLink } from "react-icons/fi";

const contacts = [
  { label: "تلگرام", value: "@amir_SV2777", detail: "پیام مستقیم و سریع", href: "https://t.me/amir_SV2777", Icon: SiTelegram, featured: true },
  { label: "ایمیل", value: "amir.saboor2777@gmail.com", detail: "برای همکاری و فرصت‌های شغلی", href: "mailto:amir.saboor2777@gmail.com", Icon: FiMail },
  { label: "LinkedIn", value: "Amir Saboor", detail: "سوابق و ارتباط حرفه‌ای", href: "https://www.linkedin.com/in/amir-saboor-6a4b5a2a8/", Icon: SiLinkedin },
  { label: "GitHub", value: "@Amirsaboor", detail: "کدها و پروژه‌های من", href: "https://github.com/Amirsaboor", Icon: SiGithub },
];

export function SocialBox() {
  return (
    <div className="relative overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/80 p-6 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/70 sm:p-9">
      <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-orange-500/[0.08] blur-3xl" />
      <div className="relative grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:items-center">
        <div>
          <p className="text-[11px] font-bold tracking-[0.18em] text-orange-600 dark:text-orange-400">LET'S TALK</p>
          <h2 className="mt-2 text-2xl font-black text-zinc-950 dark:text-white sm:text-3xl">برای همکاری آماده‌ام.</h2>
          <p className="mt-4 max-w-md text-sm leading-8 text-zinc-600 dark:text-zinc-400">اگر برای توسعه یک محصول وب، همکاری در یک تیم فنی یا بررسی یک فرصت شغلی به دنبال برنامه‌نویس فرانت‌اند هستید، خوشحال می‌شوم از شما بشنوم.</p>
          <a href="mailto:amir.saboor2777@gmail.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-orange-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600">ارسال ایمیل <FiArrowUpLeft className="h-4 w-4" /></a>
          <p className="mt-5 flex items-center gap-2 text-xs text-zinc-400 dark:text-zinc-500"><span className="h-2 w-2 rounded-full bg-emerald-500" /> مشهد، ایران · ارتباط آنلاین</p>
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contacts.map(({ label, value, detail, href, Icon, featured }) => (
            <a key={label} href={href} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noopener noreferrer" : undefined} className={`group flex min-w-0 items-start gap-3 rounded-2xl border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-orange-500/[0.06] ${featured ? "border-orange-200 bg-orange-50/80 dark:border-orange-500/25 dark:bg-orange-500/[0.07]" : "border-zinc-200/80 bg-white/70 dark:border-zinc-700/70 dark:bg-zinc-800/50"}`}>
              <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl transition-colors ${featured ? "bg-orange-500 text-white" : "bg-zinc-100 text-zinc-600 group-hover:bg-orange-500 group-hover:text-white dark:bg-zinc-700 dark:text-zinc-200"}`}><Icon className="h-5 w-5" aria-hidden="true" /></span>
              <span className="min-w-0 flex-1"><span className="block text-sm font-bold text-zinc-900 dark:text-zinc-100">{label}</span><span className="mt-1 block truncate text-xs font-medium text-zinc-600 dark:text-zinc-300" dir="ltr">{value}</span><span className="mt-2 block text-[10px] leading-5 text-zinc-400 dark:text-zinc-500">{detail}</span></span>
              <FiExternalLink className="mt-1 h-3.5 w-3.5 shrink-0 text-zinc-400 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-orange-500" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
