import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import "@/assets/styles/tailwind.css";
import "focus-visible";
import "./global.css";

export const metadata = {
  title: {
    default: "امیر صبور | توسعه‌دهنده فرانت‌اند",
    template: "%s | امیر صبور",
  },
  description:
    "پورتفولیوی امیر صبور؛ توسعه‌دهنده فرانت‌اند با تمرکز بر React، Next.js و تجربه کاربری.",
  metadataBase: new URL("https://amirsaboor.github.io/PersonalWebsite/"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className="h-full">
      <body className="h-full bg-white dark:bg-black dark:ring-zinc-300/20">
        <div className="fixed inset-0 flex justify-center sm:px-8">
          <div className="flex w-full max-w-7xl lg:px-8">
            <div className="w-full bg-gray-50 ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
