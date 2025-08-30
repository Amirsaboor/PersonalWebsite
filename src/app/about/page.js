import Image from 'next/image'

import { Container } from '@/components/Container'
import { AboutSocialLink } from '@/components/AboutSocialLink'
import { MailIcon } from '@/components/icons'
import {
  GitHubIcon,
  LinkedInIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/assets/images/portrait.jpg'

export const metadata = {
  title: 'About - Name Family',
  description: 'I\'m Name Family. A leader, artist, and frontend enthusiast.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
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
            I&apos;m Victoria. A leader, artist, and frontend enthusiast in
            Austin, TX.
          </h1>
          <div className="mt-6 text-base space-y-7 text-zinc-600 dark:text-zinc-400">
            <p>
              I&apos;m a non-traditional first-generation student pursuing a
              Bachelor of Science in Computer Science. I&apos;m entering my
              senior year at Texas State University and I am the founder and
              president of Girls Who Code TXST. My mission is to empower women
              and non-binary students to take the reins of their independence
              and become the leaders they have always admired.
            </p>
            <p>
              I&apos;ve traveled extensively through Southeast Asia and lived
              in Shanghai, China for a year while teaching English. In 2020, I
              launched an e-commerce store selling stickers and prints of my
              artwork to generate donations for various organizations
              supporting Black and transgender communities.
            </p>
            <p>
              This past summer, I was a frontend engineer intern at a startup
              called F*** You Pay Me, creating an app to help influencers (a
              female-majority community) gain pay equality and fair treatment
              when making deals with brands.
            </p>
            <p>
              In my free time, you can find me rock climbing, working out,
              dancing, or at home spending quality time with my two
              cockatiels.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <AboutSocialLink href="/" icon={GitHubIcon}>
              Follow on GitHub
            </AboutSocialLink>
            <AboutSocialLink href="/" icon={LinkedInIcon}>
              Follow on LinkedIn
            </AboutSocialLink>
            <AboutSocialLink href="/uses" icon={MailIcon}>
              Uses
            </AboutSocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
