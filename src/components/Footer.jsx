import React from 'react'
export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="mt-12 bg-gray-50 dark:bg-[#08101d] border-t dark:border-[#112540]">
      <div className="container mx-auto px-4 py-8 flex flex-col md:flex-row justify-between items-start gap-4">
        <div>
          <img src="/src/assets/images/logo.png" alt="Coral logo" className="w-12 h-12" />
          <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">Coral — handcrafted luxury soaps</div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div>
            <h4 className="font-semibold mb-2">Contact</h4>
            <div className="text-sm text-gray-600 dark:text-gray-300">hello@coral-soap.com</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">+1 (555) 123-4567</div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Social</h4>
            <div className="text-sm text-gray-600 dark:text-gray-300">Instagram: @coralsoap</div>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <div className="text-sm text-gray-600 dark:text-gray-300">© {year} Coral. All rights reserved by @xyz</div>
          </div>
        </div>
      </div>
    </footer>
  )
}