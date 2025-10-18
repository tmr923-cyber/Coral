import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative h-[60vh] md:h-[70vh] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/src/assets/images/hero.jpg')" }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: 'linear' }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-white/60 dark:to-[#08101d]/60" />
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="max-w-xl p-6 bg-white/80 dark:bg-[#112540]/60 rounded-md">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Experience luxury in every soap</h2>
          <p className="mt-3 text-gray-700 dark:text-gray-300">Handcrafted soaps infused with nature's finest scents — gentle on skin, kind to the planet.</p>
          <div className="mt-4 flex gap-3">
            <a href="#shop" className="px-4 py-2 rounded bg-coral-500 text-white">Shop Now</a>
            <a href="#top-choices" className="px-4 py-2 rounded border border-gray-200 dark:border-[#233760]">Explore</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}