import Link from "next/link";
import { Container } from "@/components/Container";
import { SocialLink } from "@/components/SocialLink";
import { Resume } from "@/components/Resume";
import { Photos } from "@/components/Photos";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowUpLeft, FiCode } from "react-icons/fi";
import Job from "@/components/home/Job";
import { SocialBox } from "@/components/SocialBox";

export const metadata = {
  title: "امیر صبور | توسعه‌دهنده فرانت‌اند",
  description:
    "وب‌سایت شخصی امیر صبور؛ توسعه‌دهنده فرانت‌اند با تمرکز بر React، Next.js و ساخت تجربه‌های کاربری مدرن.",
};

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <section className="px-5 py-8 sm:px-10 sm:py-12">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-red-200/70 bg-red-50/70 px-3 py-1.5 text-xs font-medium text-red-600 dark:border-red-900/50 dark:bg-red-950/30 dark:text-red-300">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500" />
            آماده یادگیری و همکاری روی پروژه‌های جدید
          </div>
          <h1 className="max-w-3xl text-3xl font-bold leading-[1.5] tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-5xl sm:leading-[1.4]">
            سلام، من امیر صبور هستم.
            <span className="mt-1 block text-zinc-500 dark:text-zinc-400">
              توسعه‌دهنده فرانت‌اند و علاقه‌مند به ساخت تجربه‌های وب بهتر.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl text-sm leading-8 text-zinc-600 dark:text-zinc-400 sm:text-base">
            با React و Next.js رابط‌های کاربری مدرن، واکنش‌گرا و کاربردی می‌سازم.
            تمرکزم روی کدنویسی تمیز، جزئیات تجربه کاربری و تبدیل ایده‌ها به محصولی قابل استفاده است.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-red-400"
            >
              مشاهده پروژه‌ها
              <FiArrowUpLeft className="h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300 dark:hover:border-zinc-500"
            >
              بیشتر درباره من
            </Link>
          </div>
          <div className="mt-7 flex items-center gap-4">
            <SocialLink
              href="https://github.com/Amirsaboor"
              aria-label="GitHub"
              icon={AiFillGithub}
            />
            <span className="h-4 w-px bg-zinc-200 dark:bg-zinc-700" />
            <span className="inline-flex items-center gap-2 text-xs text-zinc-400">
              <FiCode className="h-4 w-4" />
              React · Next.js · TypeScript
            </span>
          </div>
        </section>
      </Container>

      <Photos />

      <Container className="mt-20 md:mt-24">
        <div className="mx-auto grid max-w-xl grid-cols-12 gap-5 lg:max-w-none">
          <div className="col-span-12 md:col-span-7">
            <Job />
          </div>
          <div className="col-span-12 space-y-5 md:col-span-5">
            <Resume />
            <SocialBox />
          </div>
        </div>
      </Container>
    </>
  );
}
