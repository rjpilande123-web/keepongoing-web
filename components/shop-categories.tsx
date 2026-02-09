'use client'

const categories = [
  { id: 1, name: "Women's Bags", image: 'bg-gray-900' },
  { id: 2, name: "Women's Small Leather Goods", image: 'bg-gray-800' },
  { id: 3, name: "Women's Accessories", image: 'bg-gray-700' },
  { id: 4, name: 'Beauty', image: 'bg-gray-900' },
  { id: 5, name: "Men's Bags", image: 'bg-gray-800' },
  { id: 6, name: "Men's Small Leather Goods", image: 'bg-gray-700' },
  { id: 7, name: 'Shoes', image: 'bg-gray-900' },
  { id: 8, name: 'Watches', image: 'bg-gray-800' }
]

export function ShopCategories() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-2">Shop by Category</h2>
          <p className="text-xs text-gray-600">Order by 2/10 for complimentary Express Delivery by Valentine's Day.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <div key={category.id} className="cursor-pointer group">
              <div className={`${category.image} h-64 mb-3 group-hover:opacity-80 transition`} />
              <p className="text-center text-sm font-light">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
