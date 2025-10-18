import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FiShoppingCart, FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi'
import { useCart } from '../contexts/CartContext'
import { useTheme } from '../contexts/ThemeContext'

// top navigation, responsive, sticky
export default function Navbar() {
  const { getItemCount } = useCart()
  const { theme, toggle } = useTheme()
  const [open, setOpen] = useState(false)

  // cache count to avoid multiple calls during render
  const itemCount = getItemCount()

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/#top-choices', label: 'Top Choices' },
    { to: '/shop', label: 'Shop' },
    { to: '/#comments', label: 'Comments' },
    { to: '/#signup', label: 'Sign Up' },
  ]

  // close on Escape and disable body scroll when mobile menu is open
  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav className="sticky top-0 z-40 bg-white/80 dark:bg-[#08101d]/80 backdrop-blur-md border-b border-gray-200 dark:border-[#112540]">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src="/src/assets/images/logo.png" alt="Coral logo" className="w-10 h-10 object-contain" />
            <span className="font-semibold text-lg text-coral-600 dark:text-dprimary">Coral</span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(l => (
            <Link key={l.label} to={l.to} className="text-sm hover:text-coral-500 dark:hover:text-dprimary">
              {l.label}
            </Link>
          ))}

          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#112540]">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>

          <Link to="/signup" className="px-3 py-1 rounded-md bg-coral-500 text-white hover:bg-coral-600">Sign Up</Link>

          <button aria-label="Cart" className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-[#112540]">
            <FiShoppingCart size={20} />
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-coral-500 text-white text-xs rounded-full px-1.5">{itemCount}</span>
            )}
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={toggle} aria-label="Toggle theme" className="p-2 rounded-md">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="p-2 rounded-md">
            <FiMenu />
          </button>
        </div>
      </div>

      {/* Mobile slide-in menu */}
      <div
        className={`md:hidden fixed inset-y-0 right-0 w-72 bg-white dark:bg-[#08101d] transform ${open ? 'translate-x-0' : 'translate-x-full'} transition-transform shadow-lg z-50`}
        role="dialog"
        aria-modal={open ? 'true' : 'false'}
        aria-hidden={!open}
      >
        <div className="p-4 flex justify-between items-center border-b border-gray-200 dark:border-[#112540]">
          <div className="flex items-center gap-2">
            <img src="/src/assets/images/logo.png" alt="logo" className="w-8 h-8" />
            <span className="font-semibold text-coral-500 dark:text-dprimary">Coral</span>
          </div>
          <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2">
            <FiX />
          </button>
        </div>
        <div className="p-4 flex flex-col gap-3">
          {navLinks.map(l => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              className="py-2 px-2 rounded hover:bg-gray-100 dark:hover:bg-[#112540]"
            >
              {l.label}
            </Link>
          ))}
          <Link to="/signup" onClick={() => setOpen(false)} className="mt-2 px-3 py-2 bg-coral-500 text-white rounded">Sign Up</Link>
        </div>
      </div>
    </nav>
  )
}