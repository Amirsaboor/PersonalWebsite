import { FiCode, FiLayers, FiDatabase, FiGitBranch } from 'react-icons/fi'
import { SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiRadixui, SiNodedotjs, SiSupabase, SiGraphql, SiGit, SiGithub, SiPlaywright, SiJest, SiFigma } from 'react-icons/si'

export const skillGroups = [
  { en: 'Core frontend', fa: 'فرانت‌اند اصلی', Icon: FiCode, items: [{ name: 'JavaScript', Icon: SiJavascript }, { name: 'TypeScript', Icon: SiTypescript }, { name: 'React', Icon: SiReact }, { name: 'Next.js', Icon: SiNextdotjs }, { name: 'HTML5', Icon: SiHtml5 }, { name: 'CSS3', Icon: SiCss3 }] },
  { en: 'UI engineering', fa: 'مهندسی رابط کاربری', Icon: FiLayers, items: [{ name: 'Tailwind CSS', Icon: SiTailwindcss }, { name: 'Radix UI', Icon: SiRadixui }, { name: 'CSS Modules' }, { name: 'Responsive design' }, { name: 'Accessibility' }] },
  { en: 'Data & integration', fa: 'داده و یکپارچه‌سازی', Icon: FiDatabase, items: [{ name: 'REST APIs' }, { name: 'GraphQL', Icon: SiGraphql }, { name: 'Node.js', Icon: SiNodedotjs }, { name: 'Supabase', Icon: SiSupabase }, { name: 'Authentication' }] },
  { en: 'Quality & workflow', fa: 'کیفیت و گردش کار', Icon: FiGitBranch, items: [{ name: 'Git', Icon: SiGit }, { name: 'GitHub', Icon: SiGithub }, { name: 'Playwright', Icon: SiPlaywright }, { name: 'Jest', Icon: SiJest }, { name: 'Figma', Icon: SiFigma }, { name: 'Performance tuning' }] },
]

export const toolSkills = [
  { name: 'React', Icon: SiReact }, { name: 'Next.js', Icon: SiNextdotjs },
  { name: 'TypeScript', Icon: SiTypescript }, { name: 'JavaScript', Icon: SiJavascript },
  { name: 'Tailwind CSS', Icon: SiTailwindcss }, { name: 'Figma', Icon: SiFigma },
  { name: 'Node.js', Icon: SiNodedotjs }, { name: 'GitHub', Icon: SiGithub },
]
