import { SiGithub, SiTelegram, SiLinkedin } from "react-icons/si";
import { FiArrowUpLeft, FiMail, FiMessageCircle } from "react-icons/fi";

const contacts = [
  {
    label: "تلگرام",
    value: "@amir_SV2777",
    href: "https://t.me/amir_SV2777",
    Icon: SiTelegram,
    featured: true,
  },
  {
    label: "ایمیل",
    value: "amir.saboor2777@gmail.com",
    href: "mailto:amir.saboor2777@gmail.com",
    Icon: FiMail,
  },
  {
    label: "LinkedIn",
    value: "پروفایل حرفه‌ای من",
    href: "https://www.linkedin.com/in/amir-saboor-6a4b5a2a8/",
    Icon: SiLinkedin,
  },
  {
    label: "GitHub",
    value: "@Amirsaboor",
    href: "https://github.com/Amirsaboor",
    Icon: SiGithub,
  },
];

export function SocialBox() {
  return (
    <section
      aria-labelledby="contact-title"
      dir="rtl"
      className="relative overflow-hidden rounded-3xl border border-zinc-200/80 bg-white/80 p-6 shadow-sm shadow-zinc-900/[0.03] dark:border-zinc-700/60 dark:bg-zinc-900/60 sm:p-7"
    >
      <div className="pointer-events-none absolute -left-14 -top-16 h-40 w-40 rounded-full bg-orange-500/[0.08] blur-3xl" />
      <div className="relative">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[11px] font-semibold tracking-[0.2em] text-orange-600 dark:text-orange-400">
              LET'S CONNECT
            </p>
            <h2 id="contact-title" className="mt-2 text-xl font-bold text-zinc-900 dark:text-zinc-100">
              راه‌های ارتباطی
            </h2>
          </div>
          <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 dark:text-orange-400">
            <FiMessageCircle className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
        <p className="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
          برای فرصت‌های شغلی، همکاری پروژه‌ای یا گفت‌وگو درباره ایده‌های جدید، از راه‌های زیر با من در ارتباط باش.
        </p>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {contacts.map(({ label, value, href, Icon, featured }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
              className={`group flex min-w-0 items-center gap-3 rounded-2xl border p-3.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50/60 dark:hover:border-orange-500/40 dark:hover:bg-orange-500/[0.06] ${featured ? "border-orange-200 bg-orange-50/70 dark:border-orange-500/25 dark:bg-orange-500/[0.07]" : "border-zinc-200/80 bg-white/60 dark:border-zinc-700/70 dark:bg-zinc-800/40"}`}
            >
              <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl transition-colors ${featured ? "bg-orange-500 text-white" : "bg-zinc-100 text-zinc-600 group-hover:bg-orange-500 group-hover:text-white dark:bg-zinc-800 dark:text-zinc-300"}`}>
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-zinc-800 dark:text-zinc-100">{label}</span>
                <span className="mt-1 block truncate text-xs text-zinc-500 dark:text-zinc-400" dir="ltr">{value}</span>
              </span>
              <FiArrowUpLeft className="h-4 w-4 shrink-0 text-zinc-400 transition-transform group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-orange-500" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-5 text-xs text-zinc-400 dark:text-zinc-500">
          مشهد، ایران <span className="mx-1.5 text-orange-500">•</span> آماده همکاری
        </p>
      </div>
    </section>
  );
}
