import React from 'react'
import { ArrowRight } from 'lucide-react'

export function Categories() {
  const categories = [
    { name: "Women's Bags", count: "128 Items" },
    { name: "Men's Accessories", count: "95 Items" },
    { name: "Jewelry", count: "156 Items" },
    { name: "Footwear", count: "203 Items" },
  ]

  return (
    <section className="bg-background py-16 md:py-24 px-4 md:px-8 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-sm tracking-widest text-muted-foreground mb-4">SHOP BY</p>
          <h2 className="text-3xl md:text-4xl font-light text-foreground" style={{ fontFamily: 'Playfair Display' }}>
            Categories
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href="#"
              className="group p-8 bg-secondary hover:bg-muted transition cursor-pointer flex flex-col justify-between h-48 rounded-lg"
            >
              <div>
                <h3 className="text-lg font-light text-foreground mb-2 group-hover:opacity-70 transition">
                  {category.name}
                </h3>
                <p className="text-sm text-muted-foreground">{category.count}</p>
              </div>
              <ArrowRight size={20} className="text-foreground opacity-0 group-hover:opacity-100 transition" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
