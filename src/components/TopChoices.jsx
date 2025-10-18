import React from 'react'
import ProductCard from './ProductCard'
import { motion } from 'framer-motion'

export default function TopChoices({ products }) {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">Top Choices</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {products.map(p => (
          <motion.div key={p.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <ProductCard product={p} />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
