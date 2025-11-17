import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0">
        <div className="absolute -inset-[20%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/5 via-black to-black" />
        <div className="pointer-events-none absolute inset-0 bg-[url('https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-20" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-24 pb-12 grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl md:text-7xl font-serif tracking-tight"
          >
            Wildore Chef's Knife
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mt-6 text-lg md:text-xl text-white/80 max-w-xl"
          >
            A single, perfected blade. Hand-forged from premium steel for lifetime performance. Designed for chefs who demand beauty and balance.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a href="#buy" className="inline-flex items-center rounded-full bg-gradient-to-r from-amber-500 to-yellow-400 px-6 py-3 text-black font-semibold shadow-lg shadow-amber-500/20 hover:shadow-amber-400/30 transition">
              Reserve Yours
            </a>
            <a href="#craft" className="inline-flex items-center rounded-full border border-white/20 px-6 py-3 text-white hover:bg-white/10 transition">
              Explore Craft
            </a>
          </motion.div>
          <div className="mt-12 grid grid-cols-3 gap-6 text-white/70">
            <div>
              <p className="text-3xl font-semibold text-white">67</p>
              <p className="text-sm">Layers Damascus</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">60±2</p>
              <p className="text-sm">HRC Hardness</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-white">8"</p>
              <p className="text-sm">Chef Profile</p>
            </div>
          </div>
        </div>
        <div className="lg:col-span-5 relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-6 bg-gradient-to-tr from-amber-500/20 via-transparent to-transparent blur-2xl" />
            <img
              src="https://images.unsplash.com/photo-1526312426976-593c2b999978?q=80&w=2069&auto=format&fit=crop"
              alt="Wildore Knife"
              className="relative z-10 w-full h-[520px] object-cover rounded-2xl border border-white/10 shadow-2xl"
            />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}

export default Hero
