import Image from 'next/image'
import { Container } from '@/components/Container'
import { AboutSocialLink } from '@/components/AboutSocialLink'
import portraitImage from '@/assets/images/photos/6.jpg'
import { AiOutlineMail } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";

export const metadata = {
  title: 'About - Name Family',
  description: 'I\'m Name Family. A leader, artist, and frontend enthusiast.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12 ">
        <div className="flex flex-row justify-center p-5">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="object-cover aspect-square rotate-3 rounded-2xl bg-zinc-100 dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            لورم ایپسوم متن ساختگی
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400 px-5 text-justify">
            <p className=''>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
              از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
              و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز،
              و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و
              متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
              رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی
              ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در
              ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
              شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته
              اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <p className=''>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
              از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
              و سطرآنچنان که لازم است، و برای شرایط فعلی تکنول
              اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>

            <p className=''>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده
              از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون
              اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            
          </div>
        </div>
        <div className="ps-5">

          <ul role="list">
            <AboutSocialLink href="/" icon={AiFillGithub}>
              Follow on GitHub
            </AboutSocialLink>
            <AboutSocialLink href="/" icon={FaLinkedin}>
              Follow on LinkedIn
            </AboutSocialLink>
            <AboutSocialLink href="/uses" icon={AiOutlineMail}>
              Uses
            </AboutSocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
