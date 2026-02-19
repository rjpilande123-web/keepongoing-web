'use client'

export function HeroCampaign() {
  return (
    <section className="w-full h-96 bg-gradient-to-r from-gray-800 to-gray-700 flex items-center justify-center text-center">
      <div className="space-y-6">
        <h2 className="text-white text-4xl md:text-5xl font-light tracking-wide">Keep On Going Golf</h2>
        <p className="text-gray-300 text-lg">Elevate your game with premium golf apparel and accessories</p>
        <div className="flex gap-4 justify-center">
          <a href="/products/men" className="border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition inline-block">
            Shop Men's Collection
          </a>
          <a href="/products/women" className="border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition inline-block">
            Shop Women's Collection
          </a>
        </div>
      </div>
    </section>
  )
}
