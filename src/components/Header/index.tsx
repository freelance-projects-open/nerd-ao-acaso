import Link from 'next/link'
export function Header() {
  return (
    <header className="p-4 border-b border-zinc-800 flex justify-between">
      <Link href="/" className="text-xl font-bold">Nerd ao Acaso</Link>
      <nav className="space-x-4">
        <Link href="/blog">Blog</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/contato">Contato</Link>
      </nav>
    </header>
  )
}