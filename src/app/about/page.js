import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import portraitImage from "@/assets/images/photos/6.jpg";
import { AiFillGithub } from "react-icons/ai";
import { FiArrowUpLeft } from "react-icons/fi";

export const metadata = {
  title: "درباره من | امیر صبور",
  description:
    "با امیر صبور، توسعه‌دهنده فرانت‌اند و علاقه‌مند به React و Next.js بیشتر آشنا شوید.",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-24">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-20">
        <div>
          <p className="text-xs font-medium tracking-wide text-red-500">ABOUT ME</p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 sm:text-4xl">
            کمی درباره من
          </h1>
          <div className="mt-7 max-w-2xl space-y-5 text-justify text-sm leading-8 text-zinc-600 dark:text-zinc-400 sm:text-base">
            <p>
              من امیر صبور، توسعه‌دهنده فرانت‌اند و فارغ‌التحصیل مهندسی نرم‌افزار از دانشگاه آزاد اسلامی مشهد هستم. علاقه‌ام ساخت وب‌سایت‌هایی است که در کنار ظاهر جذاب، سریع، قابل استفاده و قابل نگهداری باشند.
            </p>
            <p>
              در مسیر توسعه وب با HTML، CSS، JavaScript، TypeScript، React و Next.js کار کرده‌ام و از ابزارهایی مانند Tailwind CSS و کتابخانه‌های رابط کاربری برای پیاده‌سازی تجربه‌های واکنش‌گرا استفاده می‌کنم.
            </p>
            <p>
              تجربه کار روی فروشگاه‌های اینترنتی، وب‌سایت‌های شرکتی و پروژه‌های مستقل به من کمک کرده تا از طراحی رابط تا اتصال به API و بهینه‌سازی جزئیات محصول را در نظر بگیرم. همیشه از یادگیری فناوری‌های تازه و حل مسئله‌های واقعی لذت می‌برم.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-red-600 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-red-400">
              دیدن نمونه‌کارها <FiArrowUpLeft className="h-4 w-4" />
            </Link>
            <a href="https://github.com/Amirsaboor" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-zinc-200 px-5 py-3 text-sm font-medium text-zinc-700 transition hover:border-zinc-400 dark:border-zinc-700 dark:text-zinc-300">
              <AiFillGithub className="h-4 w-4" /> GitHub
            </a>
          </div>
        </div>
        <aside className="mx-auto w-full max-w-xs lg:mx-0">
          <div className="overflow-hidden rounded-2xl border border-zinc-200/80 bg-zinc-100 p-2 dark:border-zinc-700/60 dark:bg-zinc-800">
            <Image
              src={portraitImage}
              alt="تصویر امیر صبور"
              sizes="(min-width: 1024px) 20rem, 80vw"
              className="aspect-[4/5] w-full rounded-xl object-cover"
              priority
            />
          </div>
          <p className="mt-4 text-center text-xs text-zinc-400">
            Frontend Developer · React & Next.js
          </p>
        </aside>
      </div>
    </Container>
  );
}
