import { Shield, Feather, Gem, Sparkles } from 'lucide-react'

function Features() {
  const items = [
    { icon: Shield, title: 'Precision Steel', desc: 'Japanese VG-10 core clad in 67 Damascus layers for enduring sharpness.' },
    { icon: Feather, title: 'Effortless Balance', desc: 'Tapered spine and weighted bolster for fatigue-free control.' },
    { icon: Gem, title: 'Hand-Finished', desc: 'Mirror-polished edge and satin blade face, finished by master craftsmen.' },
    { icon: Sparkles, title: 'Lifetime Patina', desc: 'A blade that grows character with every service — built to be heirloom.' },
  ]

  return (
    <section id="craft" className="bg-black text-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-serif mb-12">Craft without Compromise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 p-6 bg-white/5 hover:bg-white/10 transition">
              <item.icon className="h-6 w-6 text-amber-400" />
              <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-white/70 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
