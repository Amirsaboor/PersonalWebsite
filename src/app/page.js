import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/Container";
import { SocialLink } from "@/components/SocialLink";
import { Photos } from "@/components/Photos";
import { AiFillGithub } from "react-icons/ai";
import {
  FiArrowUpLeft,
  FiBriefcase,
  FiCode,
  FiLayers,
  FiMapPin,
  FiMessageCircle,
} from "react-icons/fi";
import Job from "@/components/home/Job";
import { SocialBox } from "@/components/SocialBox";
import { Resume } from "@/components/Resume";
import { Education } from "@/components/Education";
import { Expertise } from "@/components/Expertise";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import portraitImage from "@/assets/images/photos/6.jpg";

export const metadata = {
  title: "امیر صبور | توسعه‌دهنده فرانت‌اند",
  description:
    "پورتفولیوی امیر صبور، توسعه‌دهنده فرانت‌اند در انفورماتیک ماهان؛ متخصص React، Next.js و ساخت رابط‌های کاربری مدرن و فروشگاه‌های اینترنتی.",
};

const highlights = [
  { value: "۰۳", label: "تجربه کاری", Icon: FiBriefcase },
  { value: "۰۳", label: "پروژه شاخص", Icon: FiLayers },
  { value: "۰۴", label: "راه ارتباطی", Icon: FiMessageCircle },
];

export default function Home() {
  return (
    <>
      <Container className="mt-8 sm:mt-12">
        <section className="hero-panel relative isolate overflow-hidden rounded-[2rem] border border-zinc-200/80 bg-white/80 px-5 py-8 shadow-xl shadow-zinc-900/[0.04] dark:border-zinc-700/60 dark:bg-zinc-900/70 sm:px-9 sm:py-11 lg:px-12">
          <div className="hero-glow hero-glow-one" />
          <div className="hero-glow hero-glow-two" />
          <div className="relative grid items-center gap-9 lg:grid-cols-[minmax(0,1fr)_250px] lg:gap-12">
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-3.5 py-2 text-xs font-semibold text-emerald-700 dark:border-emerald-900/60 dark:bg-emerald-950/40 dark:text-emerald-300">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                برنامه‌نویس فرانت‌اند در انفورماتیک ماهان
              </div>
              <p className="mt-7 text-sm font-semibold text-orange-600 dark:text-orange-400">سلام، من امیر صبور هستم</p>
              <h1 className="mt-2 max-w-3xl text-3xl font-black leading-[1.55] tracking-tight text-zinc-950 dark:text-white sm:text-5xl sm:leading-[1.45]">
                ایده‌ها را به <span className="hero-gradient mx-2">تجربه‌های وب</span> کاربردی تبدیل می‌کنم.
              </h1>
              <p className="mt-5 max-w-2xl text-sm leading-8 text-zinc-600 dark:text-zinc-300 sm:text-base sm:leading-9">
                فارغ‌التحصیل مهندسی نرم‌افزار و توسعه‌دهنده فرانت‌اند هستم. با React و Next.js وب‌اپلیکیشن‌های سریع، واکنش‌گرا و قابل نگهداری می‌سازم؛ از پیاده‌سازی رابط کاربری و اتصال به API تا توسعه تجربه‌های کامل فروشگاهی.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link href="/projects" className="inline-flex items-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/10 transition hover:-translate-y-0.5 hover:bg-orange-600 dark:bg-white dark:text-zinc-950 dark:hover:bg-orange-300">
                  دیدن نمونه‌کارها <FiArrowUpLeft className="h-4 w-4" />
                </Link>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-zinc-300 bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-700 transition hover:-translate-y-0.5 hover:border-orange-400 hover:text-orange-600 dark:border-zinc-700 dark:bg-zinc-950/30 dark:text-zinc-200 dark:hover:border-orange-500 dark:hover:text-orange-300">
                  شروع گفتگو <FiMessageCircle className="h-4 w-4" />
                </a>
              </div>
              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500 dark:text-zinc-400">
                <span className="inline-flex items-center gap-2"><FiMapPin className="h-4 w-4 text-orange-500" /> مشهد، ایران</span>
                <span className="hidden h-4 w-px bg-zinc-300 dark:bg-zinc-700 sm:block" />
                <span className="inline-flex items-center gap-2"><FiCode className="h-4 w-4 text-orange-500" /> React · Next.js · TypeScript</span>
                <SocialLink href="https://github.com/Amirsaboor" aria-label="GitHub" icon={AiFillGithub} />
              </div>
            </div>
            <div className="relative mx-auto w-full max-w-[230px] lg:max-w-none">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-orange-400/30 via-rose-400/20 to-amber-300/30 blur-2xl" />
              <div className="relative rotate-2 overflow-hidden rounded-[1.7rem] border border-white/70 bg-zinc-100 p-2 shadow-2xl shadow-zinc-900/20 dark:border-zinc-600 dark:bg-zinc-800">
                <Image src={portraitImage} alt="امیر صبور، توسعه‌دهنده فرانت‌اند" priority sizes="(min-width: 1024px) 230px, 65vw" className="aspect-[4/5] w-full rounded-[1.2rem] object-cover" />
                <div className="absolute bottom-4 right-4 left-4 rounded-xl border border-white/20 bg-zinc-950/70 px-3 py-2 text-white backdrop-blur-md">
                  <p className="text-sm font-bold">Amir Saboor</p>
                  <p className="mt-0.5 text-[10px] text-white/70">Frontend Developer</p>
                </div>
              </div>
              <div className="absolute -bottom-5 -left-5 rounded-2xl border border-zinc-200 bg-white px-4 py-3 shadow-xl dark:border-zinc-700 dark:bg-zinc-800">
                <p className="text-[10px] text-zinc-500 dark:text-zinc-400">تمرکز اصلی</p>
                <p className="mt-1 text-sm font-bold text-zinc-900 dark:text-white">React & Next.js</p>
              </div>
            </div>
          </div>
          <div className="relative mt-12 grid grid-cols-3 divide-x divide-x-reverse divide-zinc-200 border-t border-zinc-200 pt-6 dark:divide-zinc-700 dark:border-zinc-700">
            {highlights.map(({ value, label, Icon }) => (
              <div key={label} className="flex flex-col items-center gap-1.5 px-2 text-center sm:flex-row sm:justify-center sm:gap-3">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-300"><Icon className="h-4 w-4" /></span>
                <span><strong className="block text-lg font-black text-zinc-900 dark:text-white">{value}</strong><span className="text-[10px] text-zinc-500 dark:text-zinc-400 sm:text-xs">{label}</span></span>
              </div>
            ))}
          </div>
        </section>
      </Container>

      <Photos />

      <Container className="mt-20 space-y-20 sm:mt-24 sm:space-y-24">
        <Expertise />
        <FeaturedProjects />
        <section id="experience" className="scroll-mt-24">
          <div className="mb-6 max-w-2xl">
            <p className="text-xs font-bold tracking-[0.18em] text-orange-600 dark:text-orange-400">CAREER JOURNEY</p>
            <h2 className="mt-2 text-2xl font-black text-zinc-950 dark:text-white sm:text-3xl">مسیر حرفه‌ای من</h2>
            <p className="mt-2 text-sm leading-7 text-zinc-500 dark:text-zinc-400">تجربه‌هایی در توسعه محصول، مدیریت فروشگاه اینترنتی و پشتیبانی عملیات فروش.</p>
          </div>
          <Job />
        </section>
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-2">
          <Education />
          <Resume />
        </div>
        <section id="contact" className="scroll-mt-24"><SocialBox /></section>
      </Container>
    </>
  );
}
