function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1526312426976-593c2b999978?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=2070&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1510627498534-cf7e9002facc?q=80&w=2069&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1565084888279-b69e2ab97b46?q=80&w=2069&auto=format&fit=crop',
  ]

  return (
    <section id="gallery" className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-3xl md:text-5xl font-serif text-white mb-10">In Service</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-2xl border border-white/10">
              <img src={src} alt="Wildore gallery" className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gallery
