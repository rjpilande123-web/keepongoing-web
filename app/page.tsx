import { Header } from '@/components/header'
import { HeroCampaign } from '@/components/hero-campaign'
import { ProductsShowcase } from '@/components/products-showcase'
import { ServicesSection } from '@/components/services-section'
import { ShopCategories } from '@/components/shop-categories'
import { LinkSections } from '@/components/link-sections'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <HeroCampaign />
      <ProductsShowcase />
      <ServicesSection />
      <ShopCategories />
      <LinkSections />
      <Footer />
    </main>
  )
}
