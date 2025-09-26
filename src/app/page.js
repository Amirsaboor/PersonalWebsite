import { Container } from "@/components/Container";
import { SocialLink } from "@/components/SocialLink";
import { Resume } from "@/components/Resume";
import { Photos } from "@/components/Photos";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import Job from "@/components/home/Job";

export const metadata = {
  title: "Name Family - Leader, artist, and frontend enthusiast",
  description: "I'm Name Family. A leader, artist, and frontend enthusiast",
};

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            برنامه‌نویس FrontEnd و طراح سایت
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="/"
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
          </div>
        </div>
      </Container>
    </>
  );
}
