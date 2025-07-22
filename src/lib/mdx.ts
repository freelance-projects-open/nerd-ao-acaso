import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { serialize } from 'next-mdx-remote/serialize'

const postsDirectory = path.join(process.cwd(), 'src/content/posts')

export async function getAllPosts() {
  const files = fs.readdirSync(postsDirectory)

  const posts = await Promise.all(
    files.map(async file => {
      const slug = file.replace(/\.mdx?$/, '')
      const filePath = path.join(postsDirectory, file)
      const source = fs.readFileSync(filePath, 'utf-8')
      const { data } = matter(source)
      return {
        slug,
        frontmatter: data
      }
    })
  )

  return posts
}

export async function getPostBySlug(slug: string) {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  const source = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(source)
  const compiled = await serialize(content)
  return {
    frontmatter: data,
    content: compiled
  }
}
