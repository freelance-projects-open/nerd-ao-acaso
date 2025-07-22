import Link from 'next/link'
import { getAllPosts } from '@/lib/mdx'

export default async function Blog() {
  const posts = await getAllPosts()

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Artigos</h1>
      <ul className="space-y-4">
        {posts.map(post => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="block hover:underline">
              <h2 className="text-xl font-semibold">{post.frontmatter.title}</h2>
              <p className="text-sm text-muted-foreground">{post.frontmatter.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}