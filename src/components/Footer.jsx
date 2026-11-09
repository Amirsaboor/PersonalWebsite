import { ContainerOuter, ContainerInner } from "@/components/Container";
import NavLink from "@/components/navigation/NavLink";

export function Footer() {
  return (
    <footer className="mt-28">
      <ContainerOuter>
        <div className="border-t border-zinc-100 py-8 dark:border-zinc-700/50">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
              <nav aria-label="پیوندهای پایین صفحه" className="flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
                <NavLink href="/">خانه</NavLink>
                <NavLink href="/projects">نمونه‌کارها</NavLink>
                <NavLink href="/about">درباره من</NavLink>
              </nav>
              <p className="text-xs text-zinc-400 dark:text-zinc-500">
                © {new Date().getFullYear()} امیر صبور · طراحی و توسعه با علاقه
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
