import { Navbar } from '@/components/navbar'
import { HeroSlider } from '@/components/components-hero-slider'
import { ProductCard } from '@/components/product-card'

export default function Home() {
  return (
    <div className="bg-white">
      <Navbar />
      <HeroSlider />
      <div className='grid grid-cols-2 gap-4 md:grid-cols-2 lg:grid-cols-3 m-2 px-2 py-4'>
        <ProductCard image="/placeholder.svg" name="Product Name" price={100} slug="product-slug" />
        <ProductCard image="/placeholder.svg" name="Product Name" price={100} slug="product-slug" />
        <ProductCard image="/placeholder.svg" name="Product Name" price={100} slug="product-slug" />
        <ProductCard image="/placeholder.svg" name="Product Name" price={100} slug="product-slug" />
      </div>
    </div>
  )
}