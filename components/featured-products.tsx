import React from 'react'
import { Heart } from 'lucide-react'

export function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Leather Tote Bag",
      price: "$2,490",
      category: "Bags",
      new: true
    },
    {
      id: 2,
      name: "Silk Scarf",
      price: "$650",
      category: "Accessories",
      new: true
    },
    {
      id: 3,
      name: "Luxury Watch",
      price: "$8,950",
      category: "Jewelry",
      new: false
    },
    {
      id: 4,
      name: "Premium Sneakers",
      price: "$1,450",
      category: "Footwear",
      new: true
    },
  ]

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <div>
            <p className="text-sm tracking-widest text-muted-foreground mb-4">FEATURED</p>
            <h2 className="text-3xl md:text-4xl font-light text-foreground" style={{ fontFamily: 'Playfair Display' }}>
              Curated Selection
            </h2>
          </div>
          <a href="#" className="text-sm tracking-widest text-foreground hover:opacity-60 transition hidden md:block">
            VIEW ALL →
          </a>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative mb-6 bg-secondary aspect-square overflow-hidden rounded-lg">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <span className="text-muted-foreground">Product Image</span>
                </div>
                {product.new && (
                  <div className="absolute top-4 left-4 bg-foreground text-background px-3 py-1 text-xs tracking-widest">
                    NEW
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-background border border-foreground p-2 opacity-0 group-hover:opacity-100 transition">
                  <Heart size={18} />
                </button>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <p className="text-xs tracking-widest text-muted-foreground">{product.category}</p>
                <h3 className="text-base font-light text-foreground group-hover:opacity-70 transition">
                  {product.name}
                </h3>
                <p className="text-sm font-light text-foreground">{product.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <a href="#" className="text-sm tracking-widest text-foreground hover:opacity-60 transition">
            VIEW ALL PRODUCTS →
          </a>
        </div>
      </div>
    </section>
  )
}
