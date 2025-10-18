import React, { createContext, useContext, useEffect, useState } from 'react'
const ThemeContext = createContext()
export const useTheme = () => useContext(ThemeContext)

export const ThemeProvider = ({ children }) => {
  // default 'light' unless saved as 'dark'
  const [theme, setTheme] = useState(() => localStorage.getItem('coral_theme') || 'light')

  useEffect(() => {
    localStorage.setItem('coral_theme', theme)
    // toggle class on html for Tailwind dark mode
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  const toggle = () => setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  )
}