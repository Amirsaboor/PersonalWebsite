import logoAnimaginary from "@/assets/images/logos/animaginary.svg";
import youphoria from "@/assets/images/logos/YOUphoria.png";
import orb from "@/assets/images/logos/orb.gif";
import Hadisa1 from "@/assets/images/project/hadisa/1.png";

import logoHeart from "@/assets/images/logos/gwc.png";

// آیکون‌ها از react-icons
import {
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { SiElementor, SiWoocommerce } from "react-icons/si";
import { RiNextjsLine } from "react-icons/ri";

export const projects = [
  {
    name: "Fast Food",
    description:
      "وبسایت نمایش غذاهای یک فست فود همراه با ورود و احراز هویت که با Next.js نوشته شده است.",
    tags: [
      { id: 1, name: "Html", icon: "FaHtml5" },
      { id: 2, name: "Css", icon: "FaCss3Alt" },
      { id: 3, name: "Bootstrap", icon: "FaBootstrap" },
      { id: 4, name: "Js", icon: "FaJs" },
      { id: 5, name: "Next.js", icon: "RiNextjsLine" },
    ],
    link: { href: "https://github.com/Amirsaboor", label: "Github" },
    logo: logoAnimaginary,
    images: [
      "/images/project/FastFood/1.png",
      "/images/project/FastFood/2.png",
      "/images/project/FastFood/3.png",
      "/images/project/FastFood/4.png",
      "/images/project/FastFood/5.png",
    ],
  },
  {
    name: "Hadisa shop",
    description: "وبسایت ساخته شده با وردپرس...",
    tags: [
      { id: 1, name: "Wordpress", icon: "FaWordpress" },
      { id: 2, name: "Elementor", icon: "SiElementor" },
      { id: 3, name: "Woocommerce", icon: "SiWoocommerce" },
    ],
    link: {
      href: "https://hadisashop.ir",
      label: "View Website",
    },
    logo: youphoria, // لوگو
    images: [
      // گالری عکس
      "/images/project/hadisa/1.png",
      "/images/project/hadisa/2.png",
      "/images/project/hadisa/3.png",
      "/images/project/hadisa/4.png",
      "/images/project/hadisa/5.png",
      "/images/project/hadisa/6.png",
    ],
  },
  {
    name: "Movie",
    description: "وبسایت نمایش فیلم که با React نوشته شده است.",
    tags: [
      { id: 1, name: "Html", icon: "FaHtml5" },
      { id: 2, name: "Css", icon: "FaCss3Alt" },
      { id: 3, name: "Bootstrap", icon: "FaBootstrap" },
      { id: 4, name: "Js", icon: "FaJs" },
      { id: 5, name: "React.js", icon: "FaReact" },
    ],
    link: { href: "https://github.com/Amirsaboor", label: "Github" },
    logo: logoHeart,
    images: [
      "/images/project/movie/1.png",
      "/images/project/movie/2.png",
      "/images/project/movie/3.png",
      "/images/project/movie/4.png",
      "/images/project/movie/5.png",
    ],
  },
  {
    name: "Menu",
    description: "وبسایت نمایش منو که با React نوشته شده است.",
    tags: [
      { id: 1, name: "Html", icon: "FaHtml5" },
      { id: 2, name: "Css", icon: "FaCss3Alt" },
      { id: 3, name: "Bootstrap", icon: "FaBootstrap" },
      { id: 4, name: "Js", icon: "FaJs" },
      { id: 5, name: "React.js", icon: "FaReact" },
    ],
    link: { href: "https://github.com/Amirsaboor", label: "Github" },
    logo: logoHeart,
    images: [
      "/images/project/Menu/1.png",
      "/images/project/Menu/2.png",
    ],
  },

  {
    name: "Paper Cafe",
    description: "وبسایت ساخته شده با وردپرس...",
    tags: [
      { id: 1, name: "Wordpress", icon: "FaWordpress" },
      { id: 2, name: "Elementor", icon: "SiElementor" },
      { id: 3, name: "Woocommerce", icon: "SiWoocommerce" },
    ],
    link: {
      href: "https://papercafee.ir/",
      label: "View Website",
    },
    logo: orb,
    images: [
      "/images/project/1.png",
      "/images/project/2.png",
      "/images/project/3.png",
    ],
  },,

  {
    name: "Talar | تالارگاه",
    description:
      "پلتفرم معرفی و نمایش تالارها و باغ‌تالارها با رابط کاربری مدرن؛ توسعه‌یافته با Next.js، React و TypeScript.",
    tags: [
      { id: 1, name: "Next.js", icon: "FaReact" },
      { id: 2, name: "React", icon: "FaReact" },
      { id: 3, name: "TypeScript", icon: "FaJs" },
      { id: 4, name: "Tailwind CSS", icon: "FaCss3Alt" },
    ],
    link: {
      href: "https://github.com/Amirsaboor/Talar",
      label: "GitHub",
    },
    images: [
      "https://raw.githubusercontent.com/Amirsaboor/Talar/master/public/images/banner.webp",
      "https://raw.githubusercontent.com/Amirsaboor/Talar/master/public/images/1.webp",
      "https://raw.githubusercontent.com/Amirsaboor/Talar/master/public/images/2.webp",
      "https://raw.githubusercontent.com/Amirsaboor/Talar/master/public/images/3.webp",
      "https://raw.githubusercontent.com/Amirsaboor/Talar/master/public/images/4.webp",
      "https://raw.githubusercontent.com/Amirsaboor/Talar/master/public/images/5.webp",
      "https://raw.githubusercontent.com/Amirsaboor/Talar/master/public/images/6.webp",
    ],
  },

];
