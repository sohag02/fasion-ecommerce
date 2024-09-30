import { HeroSlider } from '@/components/components-hero-slider'
import { PRODUCTS_BY_CATEGORY_QUERY } from '@/sanity/lib/queries'
import { ProductRow } from '@/components/product-row'
import { client } from '@/sanity/lib/client'

export default async function Home() {

  const menCategoryProducts = await client.fetch(PRODUCTS_BY_CATEGORY_QUERY, {
    category: "men"
  })

  return (
    <div className="bg-white">
      <HeroSlider />
      <ProductRow header="Men" products={menCategoryProducts} />
    </div>
  )
}