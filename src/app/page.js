import HomePage from '@/components/HomePage'
import { siteConfig } from '@/data/site-config'

export const metadata = {
  title: siteConfig.name + ' — ' + siteConfig.role,
  description: siteConfig.description,
}

export default function Home() {
  return <HomePage />
}
