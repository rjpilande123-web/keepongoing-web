import React from 'react'

export function Hero() {
  return (
    <section className="bg-background py-16 md:py-32 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm tracking-widest text-muted-foreground mb-4">NEW COLLECTION</p>
              <h2 className="text-4xl md:text-5xl font-light leading-tight text-foreground" style={{ fontFamily: 'Playfair Display' }}>
                Elegance Redefined
              </h2>
            </div>
            
            <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
              Experience timeless luxury with our curated selection of premium products. Each piece tells a story of craftsmanship and sophistication.
            </p>

            <div className="flex gap-4">
              <button className="px-8 py-3 bg-foreground text-background text-sm tracking-widest hover:opacity-80 transition">
                EXPLORE NOW
              </button>
              <button className="px-8 py-3 border border-foreground text-foreground text-sm tracking-widest hover:bg-secondary transition">
                VIEW COLLECTION
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="bg-secondary aspect-square flex items-center justify-center rounded-lg overflow-hidden">
            <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
              <span className="text-muted-foreground text-lg">Featured Image</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
