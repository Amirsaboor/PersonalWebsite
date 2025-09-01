import { PiBagSimple } from "react-icons/pi";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiWordpress, SiHyperskill } from "react-icons/si";

export function Resume() {

let skils = [
  { title: 'HTML', logo: FaHtml5, color: '#E34F26' },       
  { title: 'CSS', logo: FaCss3Alt, color: '#1572B6' },      
  { title: 'JavaScript', logo: SiJavascript, color: '#F7DF1E' }, 
  { title: 'React', logo: FaReact, color: '#61DAFB' }, 
  { title: 'Next.js', logo: SiNextdotjs, color: '#000000' }, 
  { title: 'Tailwind CSS', logo: SiTailwindcss, color: '#06B6D4' },
  { title: 'Bootstrap', logo: FaBootstrap, color: '#7952B3' }, 
  { title: 'WordPress', logo: SiWordpress, color: '#21759B' }, 
];


  return (
    <div className="p-6 border rounded-2xl border-zinc-200 dark:border-zinc-700/40">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <SiHyperskill  className="flex-none w-6 h-6" />
        <span className="mx-3 ">مهارت ها</span>
      </h2>
      <ol className="mt-6 space-y-4">
  {skils.map((role, roleIndex) => {
    const Icon = role.logo; 
    return (
      <li key={roleIndex} className="flex items-center gap-4 hover:bg-slate-100 dark:hover:bg-slate-900  rounded p-2 cursor-pointer">
        {Icon && <Icon className="w-6 h-6" style={{ color: role.color }} />}
        <span className="text-zinc-900 dark:text-zinc-100">{role.title}</span>
      </li>
    );
  })}
</ol>
    </div>
  )
}
