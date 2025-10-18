import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { motion } from 'framer-motion'

const testimonials = [
  { id: 1, name: 'Aisha', avatar: '/src/assets/images/avatar1.png', rating: 5, comment: 'Absolutely love the Rose Soap — my skin feels so soft.' },
  { id: 2, name: 'Omar', avatar: '/src/assets/images/avatar2.png', rating: 5, comment: 'Great scents and long lasting. Will buy again.' },
  { id: 3, name: 'Layla', avatar: '/src/assets/images/avatar3.png', rating: 4, comment: 'Beautiful packaging and gentle on sensitive skin.' },
]

export default function Comments() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-4">What customers say</h2>

      <div className="hidden md:grid md:grid-cols-3 gap-4">
        {testimonials.map(t => (
          <motion.div key={t.id} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="p-4 bg-white dark:bg-[#112540] rounded shadow">
              <div className="flex items-center gap-3">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-yellow-400">{'★'.repeat(t.rating)}</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{t.comment}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="md:hidden">
        <Swiper slidesPerView={1.1} spaceBetween={12}>
          {testimonials.map(t => (
            <SwiperSlide key={t.id}>
              <div className="p-4 bg-white dark:bg-[#112540] rounded shadow">
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                  <div>
                    <div className="font-semibold">{t.name}</div>
                    <div className="text-sm text-yellow-400">{'★'.repeat(t.rating)}</div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{t.comment}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}