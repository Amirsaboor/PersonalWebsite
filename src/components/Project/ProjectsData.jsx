import logoAnimaginary from "@/assets/images/logos/animaginary.svg";
import youphoria from "@/assets/images/logos/YOUphoria.png";
import orb from "@/assets/images/logos/orb.gif";
import logoHeart from "@/assets/images/logos/gwc.png";

export const projects = [
  {
    name: "Talar | تالارگاه",
    category: "Next.js",
    featured: true,
    description:
      "پلتفرم معرفی تالارها و باغ‌تالارها با رابط کاربری مدرن، صفحات معرفی اختصاصی و تجربه‌ای روان برای جست‌وجو و بررسی مجموعه‌ها.",
    tags: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "React" },
      { id: 3, name: "TypeScript" },
      { id: 4, name: "Tailwind CSS" },
    ],
    link: { href: "https://github.com/Amirsaboor/Talar", label: "مشاهده کد در GitHub" },
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
  {
    name: "Fast Food",
    category: "Next.js",
    description:
      "وب‌سایت معرفی منو و محصولات یک فست‌فود با صفحات مختلف، رابط واکنش‌گرا و جریان ورود و احراز هویت.",
    tags: [
      { id: 1, name: "Next.js" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Bootstrap" },
    ],
    link: { href: "https://github.com/Amirsaboor", label: "پروفایل GitHub" },
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
    name: "Hadisa Shop",
    category: "WordPress",
    description:
      "فروشگاه اینترنتی پوشاک زنانه با مدیریت محصولات و صفحات فروشگاهی، درگاه پرداخت و بهینه‌سازی پایه موتورهای جست‌وجو.",
    tags: [
      { id: 1, name: "WordPress" },
      { id: 2, name: "Elementor" },
      { id: 3, name: "WooCommerce" },
    ],
    link: { href: "https://hadisashop.ir", label: "مشاهده وب‌سایت" },
    logo: youphoria,
    images: [
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
    category: "React",
    description:
      "پروژه تمرینی نمایش و دسته‌بندی فیلم‌ها با صفحات جزئیات، دسته‌بندی ژانر و رابط کاربری تعاملی.",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "Bootstrap" },
    ],
    link: { href: "https://github.com/Amirsaboor", label: "پروفایل GitHub" },
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
    category: "React",
    description:
      "منوی دیجیتال ساده و واکنش‌گرا برای نمایش دسته‌بندی‌ها و آیتم‌های منو.",
    tags: [
      { id: 1, name: "React" },
      { id: 2, name: "JavaScript" },
      { id: 3, name: "CSS" },
    ],
    link: { href: "https://github.com/Amirsaboor", label: "پروفایل GitHub" },
    logo: logoHeart,
    images: ["/images/project/Menu/1.png", "/images/project/Menu/2.png"],
  },
  {
    name: "Paper Cafe",
    category: "WordPress",
    description:
      "وب‌سایت کافه با تمرکز بر معرفی فضا و ارائه منوی آنلاین در قالبی ساده و قابل استفاده در موبایل.",
    tags: [
      { id: 1, name: "WordPress" },
      { id: 2, name: "Elementor" },
      { id: 3, name: "WooCommerce" },
    ],
    link: { href: "https://papercafee.ir/", label: "مشاهده وب‌سایت" },
    logo: orb,
    images: [
      "/images/project/1.png",
      "/images/project/2.png",
      "/images/project/3.png",
    ],
  },
];
