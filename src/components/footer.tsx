import Link from 'next/link'

// Componente de rodapé introdutório
export function IntroFooter() {
  return (
    <footer className="mt-4 flex justify-center gap-x-2 text-[0.8125rem]/6  ">
      {/* Texto informativo */}
      Code by{' '}
      <Link
        href="https://github.com/Barcaca"
        className="transition-color font-medium hover:text-zinc-950 hover:dark:text-sky-500 "
      >
        {/* Link to the developer's homepage */}
        Luan Barcaça
      </Link>
    </footer>
  )
}
