import { SiGithub } from "react-icons/si";
import { FiArrowUpLeft } from "react-icons/fi";

export function SocialBox() {
  return (
    <section className="rounded-2xl border border-zinc-200/80 bg-white/70 p-6 dark:border-zinc-700/50 dark:bg-zinc-900/40">
      <p className="text-xs font-medium tracking-wide text-red-500">LET'S CONNECT</p>
      <h2 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
        راه‌های ارتباطی
      </h2>
      <p className="mt-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
        برای مشاهده کدها، پروژه‌های جدید و فعالیت‌های برنامه‌نویسی من، به گیت‌هاب سر بزنید.
      </p>
      <a
        href="https://github.com/Amirsaboor"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 flex items-center justify-between rounded-xl border border-zinc-200/80 px-4 py-3 transition-colors hover:border-red-200 hover:bg-red-50/50 dark:border-zinc-700/70 dark:hover:border-red-900/60 dark:hover:bg-red-950/20"
      >
        <span className="flex items-center gap-3">
          <SiGithub className="h-5 w-5 text-zinc-700 dark:text-zinc-200" />
          <span>
            <span className="block text-sm font-medium text-zinc-800 dark:text-zinc-100">GitHub</span>
            <span className="mt-0.5 block text-xs text-zinc-400">github.com/Amirsaboor</span>
          </span>
        </span>
        <FiArrowUpLeft className="h-4 w-4 text-zinc-400" />
      </a>
    </section>
  );
}
