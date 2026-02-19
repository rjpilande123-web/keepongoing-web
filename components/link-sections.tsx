'use client'

export function LinkSections() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Men's Collection */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-300 to-blue-600 h-48 mb-4 rounded" />
            <h3 className="text-lg font-light mb-3">Men's Collection</h3>
            <div className="space-y-2">
              <a href="/products/men" className="block text-sm hover:underline">Shop Shirts</a>
              <a href="/products/men" className="block text-sm hover:underline">Shop Pants</a>
            </div>
          </div>

          {/* Women's Collection */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-pink-300 to-rose-600 h-48 mb-4 rounded" />
            <h3 className="text-lg font-light mb-3">Women's Collection</h3>
            <div className="space-y-2">
              <a href="/products/women" className="block text-sm hover:underline">Shop Apparel</a>
              <a href="/products/women" className="block text-sm hover:underline">Shop Accessories</a>
            </div>
          </div>

          {/* Bags & Accessories */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-green-300 to-emerald-600 h-48 mb-4 rounded" />
            <h3 className="text-lg font-light mb-3">Bags & More</h3>
            <div className="space-y-2">
              <a href="/products/bags" className="block text-sm hover:underline">Shop Bags</a>
              <a href="/products/accessories" className="block text-sm hover:underline">Shop Accessories</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
