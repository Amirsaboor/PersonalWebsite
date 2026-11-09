import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export default function NavLink({ href, children }) {
  const pathname = usePathname();
  const currentPath = pathname?.replace(/\/+$/, "") || "/";
  const targetPath = href?.replace(/\/+$/, "") || "/";
  const isActive =
    currentPath === targetPath ||
    (targetPath !== "/" && currentPath.startsWith(`${targetPath}/`));

  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={clsx(
        "relative rounded-full px-3 py-2 transition-colors duration-200",
        isActive
          ? "bg-orange-500/10 font-semibold text-orange-600 dark:bg-orange-400/10 dark:text-orange-400"
          : "text-zinc-600 hover:bg-orange-500/[0.07] hover:text-orange-600 dark:text-zinc-300 dark:hover:text-orange-400"
      )}
    >
      {children}
    </Link>
  );
}
