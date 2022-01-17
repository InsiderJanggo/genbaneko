import * as fs from 'fs'
import matter from 'gray-matter'
import { join } from 'path'

const postsDirectory = join(process.cwd(), '/_posts');

export function getPostSlugs() {
    return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(slug, fields = []) {
    const realSlug = slug.replace(/\.md$/, '')
    const path = join(postsDirectory, `${realSlug}.md`)
    const fileContents = fs.readFileSync(path, 'utf8')
    const { data, content } = matter(fileContents)

    const items = {}

    fields.forEach((field) => {
        if (field === 'slug') {
          items[field] = slug
        }
        if (field === 'content') {
          items[field] = content
        }
    
        if (typeof data[field] !== 'undefined') {
          items[field] = data[field]
        }
    })

    return items;
}

export function getAllPosts(fields = []) {
    const slugs = getPostSlugs()
    const posts = slugs
      .map((slug) => getPostBySlug(slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.createdAt > post2.createdAt ? -1 : 1))
    return posts
}