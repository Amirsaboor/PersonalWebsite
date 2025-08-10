import glob from 'fast-glob'
import * as path from 'path'

async function importArticle(articleFilename) {
  try {
    // For now, return a simple structure since we're in App Router
    return {
      slug: articleFilename.replace(/(\/page)?\.mdx$/, ''),
      title: articleFilename.replace(/(\/page)?\.mdx$/, '').replace(/-/g, ' '),
      date: new Date().toISOString(),
      description: `Article about ${articleFilename.replace(/(\/page)?\.mdx$/, '').replace(/-/g, ' ')}`,
    }
  } catch (error) {
    console.error(`Error importing article ${articleFilename}:`, error)
    return null
  }
}

export async function getAllArticles() {
  try {
    // Look for articles in app directory
    let articleFilenames = []

    try {
      articleFilenames = await glob(['*/page.mdx', '*.mdx'], {
        cwd: path.join(process.cwd(), 'src/app/articles'),
      })
    } catch (error) {
      console.log('No articles found in app directory')
      return []
    }

    let articles = await Promise.all(articleFilenames.map(importArticle))

    // Filter out null articles
    articles = articles.filter(article => article !== null)

    return articles.sort((a, z) => new Date(z.date) - new Date(a.date))
  } catch (error) {
    console.error('Error loading articles:', error)
    return []
  }
}
