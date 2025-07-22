export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col bg-[#111122] overflow-x-hidden" style={{ fontFamily: '"Work Sans", "Noto Sans", sans-serif' }}>
      <header className="flex items-center justify-between border-b border-b-[#242447] px-10 py-3">
        <div className="flex items-center gap-4 text-white">
          <div className="size-4">
            {/* SVG logo */}
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M24 4H42V17.3333V30.6667H24V44H6V30.6667V17.3333H24V4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-lg font-bold">Nerd ao Acaso</h2>
        </div>
        <nav className="flex flex-1 justify-end gap-8">
          <div className="flex items-center gap-9">
            <a className="text-white text-sm font-medium" href="/blog">Artigos</a>
            <a className="text-white text-sm font-medium" href="#">Sobre</a>
            <a className="text-white text-sm font-medium" href="#">Contato</a>
          </div>
          <button className="flex items-center rounded-lg h-10 bg-[#242447] text-white px-2.5 font-bold">
            {/* Ícone lua */}
            <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M233.54,142.23a8,8,0,0,0-8-2..." />
            </svg>
          </button>
          <div className="bg-center bg-cover rounded-full size-10" style={{ backgroundImage: 'url("https://lh3.googleusercontent.com/aida-public/AB6AXuAfRMVd5Ov8sIIZCnx4Bk4UMyJihlFRRwqQU2PgOtYBjQK7bgc4tW0ifev2goO8Weuk8EtSd1pdZZ3QQYXVz_OqIKntIt0ty_fO918NKdyVL4GFbqxN9Hs_m_-zvTUAm90vsn5EpqVxaIPBkjGSfvZGYFLVaVeL0pC0mRVB1c-sjVfI0To6j79DKBW3CJ4Q2rp3oi8fjmEwRSdhUFGDnJ2ZVaqfVcyRfdHDCt3BWXHyeO25_NsSIOcXaSxZ6UYcWJRry09sQa_vQaw")' }} />
        </nav>
      </header>
      <main className="px-40 flex flex-1 justify-center py-5">
        <div className="flex flex-col max-w-[960px] flex-1">
          <section className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center items-center justify-center p-4 rounded-lg"
            style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.4)),url("https://lh3.googleusercontent.com/aida-public/AB6AXuDLH20YnWT3zB9CRpy3zkLwyZuLS38HEyi9NcI74KywwCXI3XEwcOGRp9nWSQTgLoIedgiSOU7PBS5cP0jCkVOWA3UTGI1OxFHpxgMIDZOokXHis4mXeeIU7Sf6gAG2-YVcYuqusg1Ej_1wGSGQoXKQmdV9FYtW8qRimxY0_AOtJeHJiLCENoVNRwRk75fcVPQEwP7pV31UqCpqbN64ixecokV-LKkwYcE8OAsIzSA04vZKASWvCUIZ-_vffTCkBUmPZZZSptCDfMU")' }}>
            <h1 className="text-white text-4xl font-black text-center">Onde o acaso encontra o universo nerd</h1>
            <a href="/blog" className="flex items-center justify-center rounded-lg h-10 px-4 bg-[#1414b7] text-white text-sm font-bold">Explorar</a>
          </section>
          {/* Destaques e outras seções podem ser adicionadas aqui, seguindo o mesmo padrão */}
        </div>
      </main>
      <footer className="flex justify-center">
        <div className="flex max-w-[960px] flex-1 flex-col">
          <div className="flex flex-col gap-6 px-5 py-10 text-center">
            <div className="flex flex-wrap items-center justify-center gap-6">
              <a className="text-[#9393c8] text-base font-normal" href="/blog">Artigos</a>
              <a className="text-[#9393c8] text-base font-normal" href="#">Sobre</a>
              <a className="text-[#9393c8] text-base font-normal" href="#">Contato</a>
              <a className="text-[#9393c8] text-base font-normal" href="#">Política de Privacidade</a>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {/* Ícones de redes sociais */}
            </div>
            <p className="text-[#9393c8] text-base font-normal">© 2024 Nerd ao Acaso. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}