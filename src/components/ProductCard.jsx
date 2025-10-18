import React from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { useCart } from '../contexts/CartContext'
import { formatPrice } from '../utils/format'

// Reusable product card used by TopChoices and Shop
export default function ProductCard({ product }) {
  const { cart, addToCart, removeFromCart, updateQuantity } = useCart()
  const inCart = cart.items[product.id]

  return (
    <div className="bg-white dark:bg-[#112540] rounded-lg shadow-sm hover:shadow-md transform hover:-translate-y-1 transition p-4 flex flex-col">
      <div className="h-40 flex items-center justify-center">
        <img src={product.image} alt={product.name} className="max-h-36 object-contain" />
      </div>
      <div className="mt-3 flex-1">
        <h3 className="font-semibold text-gray-900 dark:text-gray-100">{product.name}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">{product.description}</p>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-semibold text-coral-500 dark:text-dprimary">{formatPrice(product.price)}</div>
        {!inCart ? (
          <button onClick={() => addToCart(product)} className="px-3 py-1 bg-coral-500 text-white rounded hover:bg-coral-600 flex items-center gap-2">
            <FiPlus /> Add
          </button>
        ) : (
          <div className="flex items-center gap-2">
            <button onClick={() => updateQuantity(product.id, inCart.quantity - 1)} className="p-2 rounded bg-gray-100 dark:bg-[#233760]">
              <FiMinus />
            </button>
            <div className="px-3">{inCart.quantity}</div>
            <button onClick={() => updateQuantity(product.id, inCart.quantity + 1)} className="p-2 rounded bg-gray-100 dark:bg-[#233760]">
              <FiPlus />
            </button>
            <button onClick={() => removeFromCart(product.id)} className="ml-2 text-sm text-red-500">Remove</button>
          </div>
        )}
      </div>
    </div>
  )
}