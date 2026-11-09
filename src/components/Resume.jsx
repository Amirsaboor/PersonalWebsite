import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiTailwindcss, SiNextdotjs, SiWordpress, SiMui, SiGit, SiFigma } from "react-icons/si";
import { FiCode, FiLayers } from "react-icons/fi";

const skillGroups = [
  { title: "توسعه فرانت‌اند", skills: [
    { title: "HTML5", icon: FaHtml5, color: "#E34F26" }, { title: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { title: "JavaScript", icon: SiJavascript, color: "#D6B800" }, { title: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { title: "React", icon: FaReact, color: "#61DAFB" }, { title: "Next.js", icon: SiNextdotjs, color: "currentColor" },
  ]},
  { title: "رابط کاربری و طراحی", skills: [
    { title: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" }, { title: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { title: "Material UI", icon: SiMui, color: "#007FFF" }, { title: "shadcn/ui", icon: FiLayers, color: "currentColor" },
    { title: "Figma", icon: SiFigma, color: "#F24E1E" },
  ]},
  { title: "ابزارها و پلتفرم‌ها", skills: [
    { title: "Git & GitHub", icon: SiGit, color: "#F05032" }, { title: "REST API", icon: FiCode, color: "currentColor" },
    { title: "WordPress", icon: SiWordpress, color: "#21759B" },
  ]},
];

export function Resume() {
  const totalSkills = skillGroups.reduce((total, group) => total + group.skills.length, 0);
  return (
    <section aria-labelledby="skills-title" className="h-full rounded-[1.8rem] border border-zinc-200/80 bg-white/80 p-6 shadow-sm dark:border-zinc-700/60 dark:bg-zinc-900/60 sm:p-8">
      <div className="flex items-center justify-between gap-3"><div><p className="text-[11px] font-bold tracking-[0.18em] text-orange-600 dark:text-orange-400">MY TOOLKIT</p><h2 id="skills-title" className="mt-2 text-xl font-black text-zinc-950 dark:text-white">مهارت‌ها و ابزارها</h2></div><span className="rounded-full bg-orange-500/10 px-3 py-1.5 text-xs font-bold text-orange-700 dark:text-orange-300">{totalSkills} مهارت</span></div>
      <div className="mt-7 space-y-7">
        {skillGroups.map((group, index) => (
          <div key={group.title}>
            <div className="mb-3 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-orange-500" /><h3 className="text-xs font-bold text-zinc-500 dark:text-zinc-400">{group.title}</h3></div>
            <div className="flex flex-wrap gap-2">{group.skills.map(({ title, icon: Icon, color }) => <span key={title} className="inline-flex items-center gap-2 rounded-xl border border-zinc-200/80 bg-zinc-50/80 px-3 py-2.5 text-xs font-medium text-zinc-700 transition-all hover:-translate-y-0.5 hover:border-orange-300 hover:bg-orange-50/70 dark:border-zinc-700/70 dark:bg-zinc-800/60 dark:text-zinc-200 dark:hover:border-orange-500/40 dark:hover:bg-orange-500/[0.06]"><Icon aria-hidden="true" className="h-4 w-4" style={{ color }} />{title}</span>)}</div>
            {index !== skillGroups.length - 1 && <div className="mt-6 border-b border-dashed border-zinc-200 dark:border-zinc-700" />}
          </div>
        ))}
      </div>
    </section>
  );
}
