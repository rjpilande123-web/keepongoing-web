'use client'

const services = [
  {
    id: 1,
    title: 'Mon Monogram',
    image: 'bg-gradient-to-br from-orange-300 to-orange-600'
  },
  {
    id: 2,
    title: 'The Art of Gifting',
    image: 'bg-gradient-to-br from-purple-400 to-purple-700'
  },
  {
    id: 3,
    title: 'Services',
    image: 'bg-gradient-to-br from-orange-200 to-pink-400'
  }
]

export function ServicesSection() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-3">Louis Vuitton Services</h2>
          <p className="text-sm text-gray-600">Client Advisor support, signature gift wrapping, and exclusive personalization options.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className={`${service.image} h-72 rounded-lg`} />
          ))}
        </div>
      </div>
    </section>
  )
}
