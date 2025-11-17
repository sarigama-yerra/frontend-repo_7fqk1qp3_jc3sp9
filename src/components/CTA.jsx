function CTA() {
  return (
    <section id="buy" className="relative bg-gradient-to-b from-black to-zinc-950 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <h2 className="text-4xl md:text-5xl font-serif text-white">Reserve the Wildore</h2>
            <p className="mt-4 text-white/70 max-w-xl">
              Limited first run. Each knife is numbered and accompanied by a lifetime sharpening guarantee.
            </p>
            <ul className="mt-8 space-y-3 text-white/80">
              <li>• 8 inch chef profile with tapered grind</li>
              <li>• VG-10 Damascus, 60±2 HRC</li>
              <li>• Stabilized walnut handle, brass pins</li>
              <li>• Includes leather saya and certificate</li>
            </ul>
          </div>
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="flex items-center justify-between text-white">
                <p className="text-xl">Wildore Chef's Knife</p>
                <p className="text-2xl font-semibold text-amber-400">$349</p>
              </div>
              <p className="mt-2 text-white/60 text-sm">Ships in 2–3 weeks</p>
              <form className="mt-6 space-y-4" onSubmit={(e)=>{e.preventDefault(); alert('Reservation submitted. We\'ll email you shortly.')}}>
                <input required placeholder="Full name" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input required type="email" placeholder="Email address" className="w-full rounded-lg bg-black/40 border border-white/10 px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <button className="w-full rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 text-black font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition">
                  Reserve Now
                </button>
                <p className="text-xs text-white/50 text-center">No charge today. We’ll confirm availability via email.</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA
