import { Menu } from 'lucide-react'

function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-yellow-500 to-amber-600 ring-2 ring-white/20" />
          <span className="text-xl font-semibold tracking-widest text-white">WILDORE</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#craft" className="hover:text-white transition">Craft</a>
          <a href="#steel" className="hover:text-white transition">Steel</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
          <a href="#testimonials" className="hover:text-white transition">Stories</a>
          <a href="#buy" className="ml-4 inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-4 py-2 text-black font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition">Reserve</a>
        </nav>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu />
        </button>
      </div>
    </header>
  )
}

export default Navbar
