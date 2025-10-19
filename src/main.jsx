import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import { CartProvider } from './contexts/CartContext'
import { ThemeProvider } from './contexts/ThemeContext'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <BrowserRouter>
    <ThemeProvider>
      <CartProvider>
        
          <App />
        
      </CartProvider>
    </ThemeProvider>
   </BrowserRouter>
  </React.StrictMode>
);
