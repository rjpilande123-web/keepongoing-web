import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface Product {
  id: string
  name: string
  price: string
  category: string
  subcategory: string
  images: string[]
}

export default function Products() {
  const { category } = useParams<{ category: string }>()
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/data/products.json')
      .then((res) => res.json())
      .then((data) => {
        const filtered = category
          ? data.filter((p: Product) => p.category.toLowerCase() === category?.toLowerCase())
          : data
        setProducts(filtered)
        setLoading(false)
      })
      .catch((err) => {
        console.error('Error loading products:', err)
        setLoading(false)
      })
  }, [category])

  if (loading) {
    return (
      <main className="min-h-screen bg-white px-4 py-12">
        <div className="max-w-7xl mx-auto">Loading products...</div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white px-4 py-12">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-light mb-2 capitalize">{category} Collection</h1>
        <p className="text-gray-600 mb-12">Browse our full selection of {category} products</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div key={product.id} className="space-y-3 group">
              <div className="h-80 bg-gray-200 relative overflow-hidden flex items-center justify-center rounded">
                {product.images && product.images[0] ? (
                  <img
                    src={`/products/${product.images[0]}`}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-gray-400">No image</div>
                )}
              </div>
              <p className="text-sm font-light">{product.name}</p>
              <p className="text-sm text-gray-600">${product.price}</p>
            </div>
          ))}
        </div>

        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No products found in this category.</p>
          </div>
        )}
      </div>
    </main>
  )
}
