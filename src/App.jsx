import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Splash from './components/Splash'
import Hero from './components/Hero'
import TopChoices from './components/TopChoices'
import Shop from './components/Shop'
import Comments from './components/Comments'
import Signup from './components/Signup'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import products from './data/products'

// main app layout
export default function App() {
  const [showSplash, setShowSplash] = useState(true)
  useEffect(() => {
    // hide splash after 2s
    const id = setTimeout(() => setShowSplash(false), 2000)
    return () => clearTimeout(id)
  }, [])

  return (
    <div className="min-h-screen flex flex-col">
      {showSplash ? (
        <Splash />
      ) : (
        <>
          <Navbar />
          <main className="flex-1">
            <Routes>
              <Route path="/" element={
                <div>
                  <Hero />
                  <div id="top-choices" className="container mx-auto px-4 py-10">
                    <TopChoices products={products.slice(0,5)} />
                  </div>
                  <div id="shop" className="container mx-auto px-4 py-10">
                    <Shop products={products} />
                  </div>
                  <div id="comments" className="container mx-auto px-4 py-10">
                    <Comments />
                  </div>
                  <div id="signup" className="container mx-auto px-4 py-10">
                    <Signup />
                  </div>
                </div>
              } />
              <Route path="/shop" element={<Shop products={products} />} />
              <Route path="/signup" element={<Signup />} />
            </Routes>
          </main>
          <Footer />
          <CartDrawer />
        </>
      )}
    </div>
  )
}