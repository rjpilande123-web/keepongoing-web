'use client'

import React, { useState } from 'react'
import { Heart, ShoppingCart, Search, Menu, User } from 'lucide-react'
import { Navigation } from './navigation'

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        <div className="max-w-full px-4 md:px-8 py-4">
          <div className="flex items-center justify-between gap-4">
            {/* Left - Menu & Search */}
            <div className="flex items-center gap-4">
              <button
                className="p-1 hover:opacity-60 transition"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <Menu size={20} />
              </button>
              <span className="text-xs font-medium hover:opacity-60 transition cursor-pointer">Menu</span>
              <span className="text-gray-300">|</span>
              <button className="p-1 hover:opacity-60 transition">
                <Search size={16} />
              </button>
              <span className="text-xs font-medium hover:opacity-60 transition cursor-pointer">Search</span>
            </div>

            {/* Center - Logo */}
            <h1 className="text-2xl font-bold tracking-widest whitespace-nowrap">K&G</h1>

            {/* Right - Contact & Icons */}
            <div className="flex items-center gap-6 ml-auto">
              <button className="text-xs font-medium hover:opacity-60 transition hidden md:block">
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

      {/* Sheet Navigation */}
      <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  )
}
