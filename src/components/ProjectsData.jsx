import logoAnimaginary from '@/images/logos/animaginary.svg'
import youphoria from '@/images/logos/YOUphoria.png'
import orb from '@/images/logos/orb.gif'
import logoOpenShuttle from '@/images/logos/open-shuttle.svg'
import logoHeart from '@/images/logos/gwc.png'

export const projects = [
  {
    name: 'YOUphoria: A comprehensive sex education app for teens',
    description:
      "YOUphoria is built with Flutter and Firebase Authentication for seamless user experience and secure data handling. Google Maps API provides location-based resources, and ChatGPT API is leveraged to create an inclusive, age-appropriate AI chatbot, addressing teens' nuanced questions with personalized responses.",
    link: {
      href: 'https://github.com/halcyonCore/youphoria',
      label: 'GitHub',
    },
    logo: youphoria,
  },
  {
    name: 'Tailwind Animation Exploration',
    description:
      'Leveraging Tailwind CSS, this captivating one-page project showcases mesmerizing animations and innovative blend modes for striking color and movement',
    link: {
      href: 'https://tailwind-animation-exploration.vercel.app/',
      label: 'tailwind-animation-exploration.vercel.app/',
    },
    logo: orb,
  },
  {
    name: 'Girls Who Code TXST',
    description:
      "I've created the entire structure of our Girls Who Code chapter, including our website! It utilizes Stripe's API to accept donations that fund our events and activities.",
    link: { href: 'http://gwc-txst.com', label: 'gwc-txst.com' },
    logo: logoHeart,
  },
  {
    name: 'Java vs. C++',
    description:
      'Creating an ad-free website that highlights the syntax differences between Java and C++ to benefit the curriculum of my Object Oriented Programming class.',
    link: {
      href: 'https://cpp-vs-java.vercel.app/',
      label: 'cpp-vs-java.vercel.app',
    },
    logo: logoAnimaginary,
  },
]
