import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/assets/styles/tailwind.css'
import 'focus-visible'
import './global.css'

export const metadata = {
  title: {
    default: 'Alex Morgan — Frontend Engineer',
    template: '%s — Alex Morgan',
  },
  description: 'A fictional portfolio concept for a frontend engineer crafting thoughtful digital products.',
  metadataBase: new URL('https://example.com/'),
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full" suppressHydrationWarning>
      <body className="min-h-full bg-white text-zinc-900 antialiased transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
        <Header />
        <main className="min-h-[70vh]">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
