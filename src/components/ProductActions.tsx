'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface ProductActionsProps {
  colors: string[]
  sizes: string[]
}

export default function ProductActions({ colors, sizes }: ProductActionsProps) {
  const [selectedColor, setSelectedColor] = useState(colors[0])
  const [selectedSize, setSelectedSize] = useState(sizes[0])

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Color</h2>
        <RadioGroup value={selectedColor} onValueChange={setSelectedColor}>
          <div className="flex space-x-2">
            {colors.map((color) => (
              <div key={color}>
                <RadioGroupItem
                  value={color}
                  id={`color-${color}`}
                  className="sr-only"
                />
                <Label
                  htmlFor={`color-${color}`}
                  className={`w-8 h-8 rounded-full cursor-pointer ${
                    selectedColor === color ? 'ring-2 ring-blue-500' : ''
                  }`}
                  style={{ backgroundColor: color }}
                />
              </div>
            ))}
          </div>
        </RadioGroup>
      </div>
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">Size</h2>
        <Select value={selectedSize} onValueChange={setSelectedSize}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a size" />
          </SelectTrigger>
          <SelectContent>
            {sizes.map((size) => (
              <SelectItem key={size} value={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex space-x-4">
        <Button className="flex-1">Add to Cart</Button>
        <Button className="flex-1" variant="secondary">Buy Now</Button>
      </div>
    </div>
  )
}