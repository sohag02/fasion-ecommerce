'use client'
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { ProductCard } from "./product-card"
import { PRODUCTS_QUERYResult, PRODUCTS_BY_CATEGORY_QUERYResult } from "@/sanity/types"
import { urlFor } from "@/sanity/lib/client"

interface ProductRowProps {
  header: string
  products: PRODUCTS_QUERYResult | PRODUCTS_BY_CATEGORY_QUERYResult
}

export function ProductRow({ header, products }: ProductRowProps) {
  
  const getImageUrl = (product: PRODUCTS_QUERYResult[number] | PRODUCTS_BY_CATEGORY_QUERYResult[number]) => {
    const firstImage = product.gallery!.images![0];
    return urlFor(firstImage).url();
  }

  return (
    <div className="space-y-4 py-4">
      <h2 className="text-2xl font-bold text-left px-4">{header}</h2>
      <ScrollArea className="w-full whitespace-nowrap rounded-md">
        <div className="flex w-max space-x-4 px-4">
          {products.map((product) => (
            <div key={product._id} className="w-[250px] max-w-[250px] shrink-0">
              <ProductCard
                image={getImageUrl(product)}
                name={product.title!}
                price={product.price!}
                slug={product.slug!.current!}
              />
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  )
}