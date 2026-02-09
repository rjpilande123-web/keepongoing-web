import React from 'react'
import { Heart, ShoppingCart, Search, Menu, User } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="max-w-full px-4 md:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Left - Menu & Search */}
          <div className="flex items-center gap-4">
            <button className="p-1 hover:opacity-60 transition">
              <Menu size={20} />
            </button>
            <button className="text-sm hover:opacity-60 transition hidden md:block">
              Search
            </button>
          </div>

          {/* Center - Logo */}
          <h1 className="text-xl md:text-2xl font-bold tracking-widest">LOUIS VUITTON</h1>

          {/* Right - Contact, Icons */}
          <div className="flex items-center gap-4">
            <button className="text-xs md:text-sm hover:opacity-60 transition hidden md:block">
              Contact Us
            </button>
            <button className="p-1 hover:opacity-60 transition">
              <Heart size={18} />
            </button>
            <button className="p-1 hover:opacity-60 transition">
              <User size={18} />
            </button>
            <button className="p-1 hover:opacity-60 transition relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">0</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
