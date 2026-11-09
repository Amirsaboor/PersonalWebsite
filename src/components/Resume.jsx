import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiNextdotjs,
  SiWordpress,
  SiMui,
  SiGit,
  SiFigma,
} from "react-icons/si";

const skillGroups = [
  {
    title: "توسعه فرانت‌اند",
    skills: [
      { title: "HTML", icon: FaHtml5, color: "#E34F26" },
      { title: "CSS", icon: FaCss3Alt, color: "#1572B6" },
      { title: "JavaScript", icon: SiJavascript, color: "#D6B800" },
      { title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { title: "React", icon: FaReact, color: "#61DAFB" },
      { title: "Next.js", icon: SiNextdotjs, color: "currentColor" },
    ],
  },
  {
    title: "رابط کاربری و استایل",
    skills: [
      { title: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
      { title: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
      { title: "Material UI", icon: SiMui, color: "#007FFF" },
      { title: "Figma", icon: SiFigma, color: "#F24E1E" },
    ],
  },
  {
    title: "ابزارها و سیستم‌های مدیریت محتوا",
    skills: [
      { title: "Git", icon: SiGit, color: "#F05032" },
      { title: "WordPress", icon: SiWordpress, color: "#21759B" },
    ],
  },
];

export function Resume() {
  return (
    <section
      aria-labelledby="skills-title"
      className="rounded-2xl border border-zinc-200/80 bg-white/70 p-6 dark:border-zinc-700/50 dark:bg-zinc-900/40"
    >
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-medium tracking-wide text-red-500">TOOLKIT</p>
          <h2 id="skills-title" className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-100">
            مهارت‌ها
          </h2>
        </div>
        <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs text-zinc-500 dark:bg-zinc-800 dark:text-zinc-400">
          ۱۲ تکنولوژی
        </span>
      </div>

      <div className="mt-6 space-y-6">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="mb-3 text-xs font-medium text-zinc-500 dark:text-zinc-400">
              {group.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map(({ title, icon: Icon, color }) => (
                <span
                  key={title}
                  className="inline-flex items-center gap-2 rounded-lg border border-zinc-200/80 bg-zinc-50/80 px-3 py-2 text-sm text-zinc-700 transition-colors hover:border-red-200 hover:bg-red-50/60 dark:border-zinc-700/70 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-red-900/60 dark:hover:bg-red-950/20"
                >
                  <Icon aria-hidden="true" className="h-4 w-4" style={{ color }} />
                  {title}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
