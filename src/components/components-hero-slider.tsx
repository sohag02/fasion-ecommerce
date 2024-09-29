'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeftIcon, ChevronRightIcon } from 'lucide-react'
import { Button } from '@/components/ui/button'

const banners = [
  {
    id: 1,
    title: 'Summer Collection',
    description: 'Discover the hottest trends for this summer',
    image: '/placeholder.svg?height=600&width=1600',
  },
  {
    id: 2,
    title: 'New Arrivals',
    description: 'Check out our latest fashion pieces',
    image: '/placeholder.svg?height=600&width=1600',
  },
  {
    id: 3,
    title: 'Sale Up to 50% Off',
    description: 'Don\'t miss out on our biggest sale of the year',
    image: '/placeholder.svg?height=600&width=1600',
  },
]

export function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % banners.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + banners.length) % banners.length)
  }

  return (
    <div className="relative h-[600px] overflow-hidden">
      <AnimatePresence initial={false} custom={currentSlide}>
        {banners.map((banner, index) => (
          <motion.div
            key={banner.id}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <div className="text-center text-white">
                <h2 className="text-4xl font-bold mb-4">{banner.title}</h2>
                <p className="text-xl mb-8">{banner.description}</p>
                <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                  Shop Now
                </Button>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={prevSlide}
      >
        <ChevronLeftIcon size={24} />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white"
        onClick={nextSlide}
      >
        <ChevronRightIcon size={24} />
      </Button>
    </div>
  )
}