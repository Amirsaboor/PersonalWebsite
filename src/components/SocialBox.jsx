import { PiBagSimple } from "react-icons/pi";
import { FaHtml5, FaCss3Alt, FaBootstrap, FaReact } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiNextdotjs, SiWordpress, SiHyperskill } from "react-icons/si";
import { SiTelegram, SiInstagram, SiGithub, SiGmail } from "react-icons/si";

export function SocialBox() {

let contacts = [
  {
    title: "Telegram",
    logo: SiTelegram,
    link: "https://t.me/YourUsername",
    color: "#0088cc",
  },
  {
    title: "Instagram",
    logo: SiInstagram,
    link: "https://instagram.com/YourUsername",
    color: "#C13584",
  },
  {
    title: "GitHub",
    logo: SiGithub,
    link: "https://github.com/YourUsername",
    color: "#181717",
  },
  {
    title: "Email",
    logo: SiGmail,
    link: "mailto:your.email@example.com",
    color: "#D14836",
  },
];


  return (
    <div className="rounded-2xl border border-zinc-200 p-6 dark:border-zinc-700/40 mt-4">
      <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <SiHyperskill className="h-6 w-6 flex-none" />
        <span className="mx-3 ">راه های ارتباطی</span>
      </h2>
      <div className="mt-6 grid grid-cols-2 gap-4">
        {contacts.map((role, roleIndex) => {
          const Icon = role.logo;
          return (
            <div
              key={roleIndex}
              className="flex cursor-pointer items-center gap-4 rounded p-2 hover:bg-slate-100 dark:hover:bg-slate-900"
            >
              {Icon && (
                <Icon className="h-6 w-6" style={{ color: role.color }} />
              )}
              <span className="text-zinc-900 dark:text-zinc-100">
                {role.title}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
