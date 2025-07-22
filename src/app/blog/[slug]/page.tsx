import { getPostBySlug } from "@/lib/mdx"
import { Metadata } from "next"
import MdxContent from "@/components/MdxContent"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)
  return { title: post.frontmatter.title }
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)
  return (
    <article className="prose dark:prose-invert max-w-2xl mx-auto p-4">
      <h1>{post.frontmatter.title}</h1>
      <p className="text-sm text-muted-foreground">{post.frontmatter.date}</p>
      <MdxContent content={post.content} />
    </article>
  )
}
