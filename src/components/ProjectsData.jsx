import logoAnimaginary from '@/assets/images/logos/animaginary.svg'
import youphoria from '@/assets/images/logos/YOUphoria.png'
import orb from '@/assets/images/logos/orb.gif'
import logoHeart from '@/assets/images/logos/gwc.png'

// آیکون‌ها از react-icons
import { FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaWordpress } from "react-icons/fa"
import { SiElementor, SiWoocommerce } from "react-icons/si"

export const projects = [
  {
    name: 'Hadisa shop',
    description:
      "وبسایت ساخته شده با وردپرس و المنتور در حوزه فروش پوشاک زنانه، شامل درگاه پرداخت زرین پال.",
    tags: [
      { id: 1, name: 'Wordpress', icon: FaWordpress },
      { id: 2, name: 'Elementor', icon: SiElementor },
      { id: 3, name: 'Woocommerce', icon: SiWoocommerce },
    ],
    link: {
      href: 'https://hadisashop.ir',
      label: 'View Website',
    },
    logo: youphoria,
  },
  {
    name: 'Hexa shop',
    description: 'نمونه فروشگاه که با React کدنویسی شده است.',
    tags: [
      { id: 1, name: 'Html', icon: FaHtml5 },
      { id: 2, name: 'Css', icon: FaCss3Alt },
      { id: 3, name: 'Bootstrap', icon: FaBootstrap },
      { id: 4, name: 'Js', icon: FaJs },
      { id: 5, name: 'React.js', icon: FaReact },
    ],
    link: {
      href: 'https://github.com/Amirsaboor',
      label: 'Github',
    },
    logo: orb,
  },
  {
    name: 'Movie',
    description: "وبسایت نمایش فیلم که با React نوشته شده است.",
    tags: [
      { id: 1, name: 'Html', icon: FaHtml5 },
      { id: 2, name: 'Css', icon: FaCss3Alt },
      { id: 3, name: 'Bootstrap', icon: FaBootstrap },
      { id: 4, name: 'Js', icon: FaJs },
      { id: 5, name: 'React.js', icon: FaReact },
    ],
    link: {
      href: 'https://github.com/Amirsaboor',
      label: 'Github',
    },
    logo: logoHeart,
  },
  {
    name: 'Fast Food',
    description:
      'وبسایت نمایش غذاهای یک فست فود همراه با ورود و احراز هویت که با Next.js نوشته شده است.',
    tags: [
      { id: 1, name: 'Html', icon: FaHtml5 },
      { id: 2, name: 'Css', icon: FaCss3Alt },
      { id: 3, name: 'Bootstrap', icon: FaBootstrap },
      { id: 4, name: 'Js', icon: FaJs },
      { id: 5, name: 'React.js', icon: FaReact },
    ],
    link: {
      href: 'https://github.com/Amirsaboor',
      label: 'Github',
    },
    logo: logoAnimaginary,
  },
]
