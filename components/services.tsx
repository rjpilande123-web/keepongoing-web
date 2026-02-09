import React from 'react'
import { Truck, Shield, RotateCcw } from 'lucide-react'

export function Services() {
  const services = [
    {
      icon: Truck,
      title: "Free Shipping",
      description: "Complimentary delivery on orders over $500"
    },
    {
      icon: Shield,
      title: "Authentic Guarantee",
      description: "100% certified authentic products with warranty"
    },
    {
      icon: RotateCcw,
      title: "Easy Returns",
      description: "30-day return policy for complete peace of mind"
    },
  ]

  return (
    <section className="bg-secondary py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div key={index} className="text-center flex flex-col items-center">
                <IconComponent size={40} className="text-foreground mb-6" />
                <h3 className="text-lg font-light text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
