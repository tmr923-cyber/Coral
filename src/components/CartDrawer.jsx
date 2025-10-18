import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'
import { formatPrice } from '../utils/format'
import { FiShoppingCart } from 'react-icons/fi'

export default function CartDrawer() {
  const { cart, updateQuantity, removeFromCart, getItemCount, getTotal, clearCart } = useCart()
  const [open, setOpen] = useState(false)
  const items = Object.values(cart.items)

  return (
    <>
      {/* Cart Button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-coral-500 text-white p-3 rounded-full shadow-lg hover:bg-coral-600"
      >
        <div className="flex items-center gap-2">
          <FiShoppingCart />
          <span className="hidden sm:inline">Cart</span>
          {getItemCount() > 0 && (
            <span className="ml-1 bg-white text-coral-500 px-2 rounded-full text-sm">
              {getItemCount()}
            </span>
          )}
        </div>
      </button>

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white dark:bg-[#08101d] transform ${
          open ? 'translate-x-0' : 'translate-x-full'
        } transition-transform z-50 shadow-2xl`}
      >
        {/* Header */}
        <div className="p-4 border-b dark:border-[#112540] flex justify-between items-center">
          <h3 className="text-lg font-semibold">Your Cart</h3>
          <div className="flex items-center gap-2">
            <button
              onClick={clearCart}
              className="text-sm text-red-500"
            >
              Clear
            </button>
            <button
              onClick={() => setOpen(false)}
              className="px-3 py-1 bg-gray-100 rounded"
            >
              Close
            </button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="p-4 overflow-auto max-h-[70vh]">
          {items.length === 0 ? (
            <div className="text-center text-gray-500">Your cart is empty</div>
          ) : (
            items.map((i) => (
              <div
                key={i.product.id}
                className="flex items-center gap-3 py-3 border-b dark:border-[#112540]"
              >
                <img
                  src={i.product.image}
                  alt={i.product.name}
                  className="w-16 h-16 object-contain"
                />
                <div className="flex-1">
                  <div className="font-medium">{i.product.name}</div>
                  <div className="text-sm text-gray-500">{formatPrice(i.product.price)}</div>
                  <div className="mt-2 flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(i.product.id, i.quantity - 1)}
                      className="px-2 py-1 border rounded"
                    >
                      -
                    </button>
                    <div className="px-2">{i.quantity}</div>
                    <button
                      onClick={() => updateQuantity(i.product.id, i.quantity + 1)}
                      className="px-2 py-1 border rounded"
                    >
                      +
                    </button>
                    <button
                      onClick={() => removeFromCart(i.product.id)}
                      className="ml-4 text-red-500 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t dark:border-[#112540]">
          <div className="flex justify-between mb-3">
            <div className="text-sm">Items</div>
            <div className="font-semibold">{getItemCount()}</div>
          </div>
          <div className="flex justify-between mb-4">
            <div className="text-sm">Total</div>
            <div className="font-semibold">{formatPrice(getTotal())}</div>
          </div>
          <button className="w-full py-2 bg-coral-500 text-white rounded">Checkout</button>
        </div>
      </div>
    </>
  )
}
