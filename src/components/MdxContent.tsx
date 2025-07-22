"use client"
import { MDXRemote } from "next-mdx-remote"

export default function MdxContent({ content }: { content: any }) {
  return <MDXRemote {...content} />
}
