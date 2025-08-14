import { Container } from '@/components/Container'
import { SocialLink } from '@/components/SocialLink'
import { Resume } from '@/components/Resume'
import { Photos } from '@/components/Photos'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

export const metadata = {
  title: 'Name Family - Leader, artist, and frontend enthusiast',
  description: "I'm Name Family. A leader, artist, and frontend enthusiast",
}

export default function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
            برنامه‌نویس FrontEnd و طراح سایت
          </h1>
          <p className=" mt-6 text-base text-zinc-600 dark:text-zinc-400">
            I&apos;m Victoria, a computer science student and the Founder and
            President of Girls Who Code at Texas State University. I am
            passionate about frontend engineering, empowering women in tech, and
            creating inclusive spaces for beginners in computer science
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="/"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="/"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-2 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
          </div>
        </div>
      </Container>
    </>
  )
}
