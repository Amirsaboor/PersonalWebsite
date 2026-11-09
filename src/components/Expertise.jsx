import { FiMonitor, FiShoppingCart, FiDatabase, FiZap } from "react-icons/fi";

const areas = [
  { number: "01", title: "توسعه رابط کاربری", description: "پیاده‌سازی صفحات مدرن، واکنش‌گرا و سازگار با موبایل با React، Next.js و ابزارهای رابط کاربری.", Icon: FiMonitor },
  { number: "02", title: "فروشگاه‌های اینترنتی", description: "ساخت تجربه خرید از کاتالوگ و جزئیات محصول تا سبد خرید، سفارش و پرداخت آنلاین.", Icon: FiShoppingCart },
  { number: "03", title: "اتصال به API", description: "دریافت و مدیریت داده‌ها، پیاده‌سازی فرم‌ها و اتصال بخش‌های مختلف رابط کاربری به سرویس‌های بک‌اند.", Icon: FiDatabase },
  { number: "04", title: "کیفیت و تجربه کاربری", description: "توجه به ساختار کامپوننت‌ها، تجربه کاربری، دسترس‌پذیری، عملکرد و اصول پایه SEO.", Icon: FiZap },
];

export function Expertise() {
  return (
    <section aria-labelledby="expertise-title">
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4"><div><p className="text-[11px] font-bold tracking-[0.18em] text-orange-600 dark:text-orange-400">WHAT I DO</p><h2 id="expertise-title" className="mt-2 text-2xl font-black text-zinc-950 dark:text-white sm:text-3xl">حوزه‌های تخصصی من</h2></div><p className="max-w-md text-sm leading-7 text-zinc-500 dark:text-zinc-400">از طراحی و پیاده‌سازی رابط تا اتصال به سرویس‌ها و تحویل تجربه‌ای قابل استفاده.</p></div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {areas.map(({ number, title, description, Icon }) => <article key={number} className="expertise-card group relative overflow-hidden rounded-2xl border border-zinc-200/80 bg-white/75 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-orange-300 hover:shadow-xl hover:shadow-orange-500/[0.06] dark:border-zinc-700/60 dark:bg-zinc-900/55 dark:hover:border-orange-500/40"><div className="flex items-center justify-between"><span className="text-xs font-bold tabular-nums text-zinc-300 dark:text-zinc-600">{number}</span><span className="grid h-11 w-11 place-items-center rounded-2xl bg-orange-500/10 text-orange-600 transition-transform duration-300 group-hover:rotate-[-8deg] group-hover:scale-110 dark:text-orange-300"><Icon className="h-5 w-5" /></span></div><h3 className="mt-6 text-base font-black text-zinc-900 dark:text-white">{title}</h3><p className="mt-2 text-xs leading-7 text-zinc-500 dark:text-zinc-400">{description}</p></article>)}
      </div>
    </section>
  );
}
