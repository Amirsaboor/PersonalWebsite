import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/assets/styles/tailwind.css'
import 'focus-visible'
import './global.css'

export const metadata = {
  title: {
    default: 'Amir Saboor — Frontend Developer',
    template: '%s — Amir Saboor',
  },
  description: 'The portfolio of Amir Saboor, a frontend developer working with React and Next.js.',
  metadataBase: new URL('https://amirsaboor.github.io/PersonalWebsite/'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
