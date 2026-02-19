export default function About() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-light mb-8">About K&G</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-light mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              K&G Golf, Keep On Going Golf, is dedicated to providing premium golf apparel and accessories for enthusiasts of all levels. We believe that style and performance go hand in hand on the course.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Our carefully curated collection features high-quality golf wear designed for comfort, durability, and style. Whether you're a seasoned golfer or just starting your journey, we have everything you need to elevate your game.
            </p>
          </div>
          
          <div>
            <h2 className="text-2xl font-light mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              At K&G, our mission is to inspire golfers to keep on going - to push their limits, embrace the sport, and express their individuality through premium golf apparel and accessories.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We're committed to quality, sustainability, and exceptional customer service. Every product in our collection is chosen with care to ensure you get the best value and performance.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 px-8 py-12 rounded">
          <h2 className="text-2xl font-light mb-6">Why Choose K&G?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-light mb-2">Premium Quality</h3>
              <p className="text-gray-600">We select only the finest materials and brands for our collection.</p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-2">Expert Support</h3>
              <p className="text-gray-600">Our dedicated team is here to help you find the perfect gear.</p>
            </div>
            <div>
              <h3 className="text-lg font-light mb-2">Fast Shipping</h3>
              <p className="text-gray-600">Quick and reliable delivery to get you on the course faster.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
