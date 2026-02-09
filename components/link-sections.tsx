'use client'

export function LinkSections() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Mon Monogram */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-amber-300 to-amber-600 h-48 mb-4" />
            <h3 className="text-lg font-light mb-3">Mon Monogram</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm hover:underline">Shop Mon Monogram</a>
              <a href="#" className="block text-sm hover:underline">Shop All Personalization</a>
            </div>
          </div>

          {/* The Art of Gifting */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-300 to-amber-600 h-48 mb-4" />
            <h3 className="text-lg font-light mb-3">The Art of Gifting</h3>
            <div className="space-y-2">
              <a href="#" className="block text-sm hover:underline">Gifts for Her</a>
              <a href="#" className="block text-sm hover:underline">Gifts for Him</a>
            </div>
          </div>

          {/* Services */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-orange-200 to-rose-400 h-48 mb-4" />
            <h3 className="text-lg font-light mb-3">Services</h3>
            <a href="#" className="block text-sm hover:underline">Contact Us</a>
          </div>
        </div>
      </div>
    </section>
  )
}
