import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation, Pagination } from 'swiper'
import ProductCard from './ProductCard'

export default function CategoryCarousel({ products }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      spaceBetween={12}
      slidesPerView={1.2}
      navigation
      pagination={{ clickable: true }}
    >
      {products.map(p => (
        <SwiperSlide key={p.id}>
          <div className="p-2">
            <ProductCard product={p} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}