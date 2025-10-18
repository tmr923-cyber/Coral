import React, { createContext, useContext, useEffect, useState } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

// Cart context for global cart state
const CartContext = createContext()

export const useCart = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  // Persist cart in localStorage
  const [stored, setStored] = useLocalStorage('coral_cart', { items: {} })
  const [cart, setCart] = useState(stored || { items: {} })

  useEffect(() => {
    setStored(cart)
  }, [cart])

  // add item (or increment)
  const addToCart = (product, qty = 1) => {
    setCart(prev => {
      const items = { ...prev.items }
      if (items[product.id]) {
        items[product.id].quantity += qty
      } else {
        items[product.id] = { product, quantity: qty }
      }
      return { ...prev, items }
    })
  }

  const removeFromCart = (productId) => {
    setCart(prev => {
      const items = { ...prev.items }
      delete items[productId]
      return { ...prev, items }
    })
  }

  const updateQuantity = (productId, quantity) => {
    setCart(prev => {
      const items = { ...prev.items }
      if (!items[productId]) return prev
      items[productId].quantity = Math.max(1, Number(quantity))
      return { ...prev, items }
    })
  }

  const clearCart = () => setCart({ items: {} })

  const getItemCount = () => Object.values(cart.items).reduce((s, i) => s + i.quantity, 0)

  const getTotal = () => {
    return Object.values(cart.items).reduce((t, i) => t + i.product.price * i.quantity, 0)
  }

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      getItemCount,
      getTotal
    }}>
      {children}
    </CartContext.Provider>
  )
}