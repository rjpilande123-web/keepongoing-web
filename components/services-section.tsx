'use client'

const services = [
  {
    id: 1,
    title: 'Custom Personalization',
    image: 'bg-gradient-to-br from-blue-300 to-blue-600',
    description: 'Add your personal touch to any piece'
  },
  {
    id: 2,
    title: 'Premium Packaging',
    image: 'bg-gradient-to-br from-green-400 to-emerald-700',
    description: 'Carefully packaged for safe delivery'
  },
  {
    id: 3,
    title: 'Expert Support',
    image: 'bg-gradient-to-br from-orange-200 to-pink-400',
    description: 'Dedicated customer service team'
  }
]

export function ServicesSection() {
  return (
    <section className="w-full py-12 px-4 md:px-8 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-light mb-3">K&G Services</h2>
          <p className="text-sm text-gray-600">Expert support, personalization options, and premium packaging for all orders.</p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <div key={service.id} className="space-y-3">
              <div className={`${service.image} h-72 rounded-lg flex items-end justify-start p-6`}>
                <h3 className="text-white text-lg font-light">{service.title}</h3>
              </div>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
