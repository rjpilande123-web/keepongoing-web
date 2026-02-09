'use client'

import { Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    name: 'Speedy Bandoulière 35',
    price: '$2,090.00',
    image: 'bg-gray-300'
  },
  {
    id: 2,
    name: 'Neverfull MM',
    price: '$2,170.00',
    image: 'bg-gray-300'
  },
  {
    id: 3,
    name: 'Alma BB',
    price: '$1,940.00',
    image: 'bg-gray-300'
  },
  {
    id: 4,
    name: 'Noé',
    price: '$1,950.00',
    image: 'bg-gray-300'
  }
]

export function ProductsShowcase() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-4">
          <p className="text-xs text-gray-600 tracking-wide mb-2">WOMEN</p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Le Monogram 130th Anniversary</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {products.map((product) => (
            <div key={product.id} className="space-y-3">
              <div className={`${product.image} h-80 relative group cursor-pointer`}>
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition">
                  <Heart size={20} />
                </button>
              </div>
              <p className="text-sm font-light">{product.name}</p>
              <p className="text-sm text-gray-600">{product.price}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="border-2 border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition">
            Shop Now
          </button>
          <button className="border-2 border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition">
            Discover the Speedy
          </button>
        </div>
      </div>
    </section>
  )
}
