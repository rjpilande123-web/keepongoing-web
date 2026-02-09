'use client'

export function HeroCampaign() {
  return (
    <section className="w-full h-96 bg-gray-700 flex items-center justify-center text-center">
      <div className="space-y-6">
        <h2 className="text-white text-4xl md:text-5xl font-light tracking-wide">Valentine's Day with Louis Vuitton</h2>
        <div className="flex gap-4 justify-center">
          <button className="border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition">
            Shop Gifts for Her
          </button>
          <button className="border-2 border-white text-white px-6 py-2 hover:bg-white hover:text-black transition">
            Shop Gifts for Him
          </button>
        </div>
      </div>
    </section>
  )
}
