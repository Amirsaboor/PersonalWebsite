import { Container } from '@/components/Container'
import { SocialLink } from '@/components/SocialLink'
import { Resume } from '@/components/Resume'
import { Photos } from '@/components/Photos'
import { FaLinkedin } from "react-icons/fa"; 
import { AiFillGithub } from "react-icons/ai";
import Job from "@/components/home/Job";
import { SocialBox } from '@/components/SocialBox';

export const metadata = {
  title: "امیر صبور /  برنامه‌نویس FrontEnd و طراح سایت",
  description: "I'm Name Family. A leader, artist, and frontend enthusiast",
};

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="p-10">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            برنامه‌نویس FrontEnd و طراح سایت
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            سلام! من امیر صبور هستم، 27 ساله و برنامه‌نویس فرانت‌اند با تجربه در
            توسعه وب. فارغ‌التحصیل رشته مهندسی نرم‌افزار از دانشگاه آزاد اسلامی
            مشهد با مدرک کارشناسی و علاقه‌مند به یادگیری تکنولوژی‌های روز در
            حوزه فرانت‌اند. تسلط کامل به HTML، CSS، Bootstrap و JavaScript دارم
            و با React و Next.js به‌صورت کاربردی و پروژه‌محور آشنایی دارم.
            دوره‌های تخصصی فرانت‌اند را هم به‌صورت خودآموز و هم در کلاس‌های
            آنلاین گذرانده‌ام. تمرکز من روی طراحی، توسعه و بهینه‌سازی رابط‌های
            کاربری و تجربه کاربری است و همواره دنبال فرصت‌های چالش‌برانگیز برای
            رشد و ارتقای مهارت‌هایم در توسعه وب می‌باشم. این وب‌سایت به عنوان
            رزومه آنلاین من طراحی شده است و شامل نمونه پروژه‌ها، توانمندی‌ها و
            سوابق حرفه‌ای من است تا بتوانید به راحتی با تجربه و مهارت‌هایم آشنا
            شوید.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/Amirsaboor"
              aria-label="Follow on GitHub"
              icon={AiFillGithub}
            />
            <SocialLink
              href="/"
              aria-label="Follow on LinkedIn"
              icon={FaLinkedin}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-12 gap-2 lg:max-w-none ">
          <div className="col-span-12 md:col-span-7">
            <Job />
          </div>
          <div className="col-span-12 md:col-span-5">
            <Resume />
            <SocialBox />
          </div>
        </div>
      </Container>
    </>
  );
}
