import { Link } from 'react-router-dom'

const categories = [
  { id: 'men', name: 'Men', href: '/products/men' },
  { id: 'women', name: 'Women', href: '/products/women' },
  { id: 'kids', name: 'Kids', href: '/products/kids' },
  { id: 'bags', name: 'Bags', href: '/products/bags' },
  { id: 'accessories', name: 'Accessories', href: '/products/accessories' },
  { id: 'apparel', name: 'Apparel', href: '/products/apparel' },
  { id: 'headwear', name: 'Headwear', href: '/products/headwear' },
  { id: 'footwear', name: 'Footwear', href: '/products/footwear' }
]

export function ShopCategories() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-2">Shop by Category</h2>
          <p className="text-xs text-gray-600">Explore our full collection of K&G golf apparel, accessories, and more.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="cursor-pointer group"
            >
              <div className="h-64 mb-3 bg-gradient-to-br from-gray-200 to-gray-300 group-hover:opacity-80 transition flex items-center justify-center rounded">
                <span className="text-gray-700 font-light text-lg">{category.name}</span>
              </div>
              <p className="text-center text-sm font-light">{category.name}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
