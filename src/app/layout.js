import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/assets/styles/tailwind.css'
import 'focus-visible'
import './global.css'

export const metadata = {
  title: {
    default: 'Alex Morgan — Software Designer & Developer',
    template: '%s — Alex Morgan',
  },
  description: 'A fictional portfolio exploring software, design, and thoughtful digital products.',
  metadataBase: new URL('https://amirsaboor.github.io/PersonalWebsite/'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <body className="min-h-full bg-zinc-100 text-zinc-900 antialiased transition-colors duration-300 dark:bg-black dark:text-zinc-100">
        <div className="site-shell mx-auto flex min-h-screen w-full max-w-[68rem] flex-col bg-white shadow-2xl shadow-black/10 ring-1 ring-black/[0.04] dark:bg-[#18181b] dark:ring-white/[0.04]">
          <Header />
          <main className="min-h-[70vh] flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
