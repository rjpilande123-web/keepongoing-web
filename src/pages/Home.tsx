import { HeroCampaign } from '@/components/hero-campaign'
import { ProductsShowcase } from '@/components/products-showcase'
import { ServicesSection } from '@/components/services-section'
import { ShopCategories } from '@/components/shop-categories'
import { LinkSections } from '@/components/link-sections'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroCampaign />
      <ProductsShowcase />
      <ServicesSection />
      <ShopCategories />
      <LinkSections />
    </main>
  )
}
