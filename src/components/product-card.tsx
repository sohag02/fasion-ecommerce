import Image from 'next/image'
import Link from 'next/link'
import { Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  image: string
  name: string
  price: number
  slug: string
}

export function ProductCard({ image, name, price, slug }: ProductCardProps) {
  return (
    <Link href={`/${slug}`} className="group block">
      <div className="relative overflow-hidden rounded-md border border-gray-200 bg-white transition-all duration-300 hover:shadow-md">
        <div className="relative aspect-[3/4] w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <Button
            variant="secondary"
            size="icon"
            className="absolute right-2 top-2 z-10 h-8 w-8 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          >
            <Heart className="h-4 w-4" />
            <span className="sr-only">Add to wishlist</span>
          </Button>
        </div>
        <div className="p-3">
          <h3 className="text-sm font-medium text-gray-900 line-clamp-1">{name}</h3>
          <p className="mt-1 text-sm font-bold text-gray-900">${price.toFixed(2)}</p>
        </div>
      </div>
    </Link>
  )
}