const siteUrl = 'https://amirsaboor.github.io/PersonalWebsite'

export default function sitemap() {
  const routes = ['', '/about', '/articles', '/projects', '/speaking', '/uses', '/contact']
  return routes.map((route) => ({
    url: siteUrl + route + (route ? '/' : '/'),
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : 0.7,
  }))
}
