import { Heart } from 'lucide-react'
import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  price: string
  category: string
  subcategory: string
  images: string[]
}

export function ProductsShowcase() {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        // Get first 4 products with images
        const productsWithImages = data
          .filter((p: Product) => p.images && p.images.length > 0)
          .slice(0, 4)
        setProducts(productsWithImages)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading products:', err)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <section className="w-full py-12 px-4 md:px-8 bg-white">Loading...</section>
  }

  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-4">
          <p className="text-xs text-gray-600 tracking-wide mb-2">K&G COLLECTION</p>
          <h2 className="text-3xl md:text-4xl font-light mb-8">Trending Styles</h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {products.map((product) => (
            <div key={product.id} className="space-y-3 group">
              <div className="h-80 bg-gray-200 relative overflow-hidden flex items-center justify-center">
                {product.images && product.images[0] ? (
                  <img
                    src={`/products/${product.images[0]}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-gray-400">No image</div>
                )}
                <button className="absolute top-3 right-3 bg-white rounded-full p-2 hover:bg-gray-100 transition shadow-md">
                  <Heart size={20} />
                </button>
              </div>
              <p className="text-sm font-light">{product.name}</p>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-4 justify-center">
          <button className="border-2 border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition">
            Shop All Products
          </button>
          <button className="border-2 border-black px-8 py-2 text-sm hover:bg-black hover:text-white transition">
            View Collection
          </button>
        </div>
      </div>
    </section>
  )
}
