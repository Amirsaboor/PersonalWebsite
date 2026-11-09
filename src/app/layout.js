import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { LocaleProvider } from '@/i18n/LocaleProvider'
import { siteConfig } from '@/data/site-config'
import '@/assets/styles/tailwind.css'
import 'focus-visible'
import './global.css'

export const metadata = {
  title: {
    default: siteConfig.name + ' — ' + siteConfig.role,
    template: '%s — ' + siteConfig.name,
  },
  description: siteConfig.description,
  metadataBase: new URL('https://amirsaboor.github.io/PersonalWebsite/'),
  openGraph: {
    type: 'website',
    siteName: siteConfig.name,
    title: siteConfig.name + ' — ' + siteConfig.role,
    description: siteConfig.description,
    url: 'https://amirsaboor.github.io/PersonalWebsite/',
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name + ' — ' + siteConfig.role,
    description: siteConfig.description,
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full dark" suppressHydrationWarning>
      <body className="min-h-full bg-zinc-100 text-zinc-900 antialiased transition-colors duration-300 dark:bg-black dark:text-zinc-100">
        <LocaleProvider>
          <div className="site-shell mx-auto flex min-h-screen w-full max-w-[72rem] flex-col bg-white shadow-2xl shadow-black/10 ring-1 ring-black/[0.04] dark:bg-[#18181b] dark:ring-white/[0.04]">
            <Header />
            <main className="min-h-[70vh] flex-1">{children}</main>
            <Footer />
          </div>
        </LocaleProvider>
      </body>
    </html>
  )
}
