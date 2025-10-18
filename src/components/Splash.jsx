import React from 'react'
import { motion } from 'framer-motion'

export default function Splash() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-[#08101d] z-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="flex flex-col items-center"
      >
        <img src="/src/assets/images/logo.png" alt="Coral logo" className="w-48 h-48 object-contain" />
        <motion.h1 className="mt-6 text-2xl font-semibold text-coral-500 dark:text-dprimary" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}>
          Coral
        </motion.h1>
      </motion.div>
    </div>
  )
}