import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Gallery from './components/Gallery'
import CTA from './components/CTA'

function App() {
  return (
    <div className="bg-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Gallery />
        <CTA />
      </main>
      <footer className="border-t border-white/10 bg-black text-white/60">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="tracking-widest text-xs">WILDORE</p>
          <p className="text-xs">© {new Date().getFullYear()} Wildore — All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
