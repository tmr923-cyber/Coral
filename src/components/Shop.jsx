import React, { useMemo, useState } from 'react'
import ProductCard from './ProductCard'
import CategoryCarousel from './CategoryCarousel'

// Shop shows categories as tabs + either a grid or carousel
export default function Shop({ products }) {
  const categories = useMemo(() => [...new Set(products.map(p => p.category))], [products])
  const [active, setActive] = useState(categories[0])

  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Shop</h2>
      <div className="flex gap-3 mb-6 overflow-auto pb-2">
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`px-3 py-1 rounded ${active === c ? 'bg-coral-500 text-white' : 'bg-gray-100 dark:bg-[#112540]'}`}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Carousel for mobile, grid for desktop */}
      <div className="block md:hidden">
        <CategoryCarousel products={products.filter(p => p.category === active)} />
      </div>

      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {products.filter(p => p.category === active).map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}