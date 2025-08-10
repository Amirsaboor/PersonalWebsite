import { Inter } from 'next/font/google'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import 'focus-visible'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Name Family - Leader, artist, and frontend enthusiast',
  description: "I'm Name Family. A leader, artist, and frontend enthusiast",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} h-full bg-white  dark:bg-black dark:ring-zinc-300/20`}>
        <div className="fixed inset-0 flex justify-center sm:px-8 ">
          <div className="flex w-full max-w-7xl lg:px-8 ">
            <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
          </div>
        </div>
        <div className="relative">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
