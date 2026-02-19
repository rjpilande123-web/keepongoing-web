'use client'

import React, { useState } from 'react'
import { Heart, ShoppingCart, Search, Menu, User } from 'lucide-react'
import { Navigation } from './navigation'

export function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false)

  return (
    <>
      <header className="border-b border-gray-200 bg-white sticky top-0 z-40">
        {/* Top header */}
        <div className="max-w-full px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Left - Menu & Search */}
            <div className="flex items-center gap-4">
              <button
                className="p-1 hover:opacity-60 transition md:hidden"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                <Menu size={20} />
              </button>
              <button className="text-sm hover:opacity-60 transition hidden md:block">
                Search
              </button>
            </div>

            {/* Center - Logo */}
            <h1 className="text-2xl md:text-3xl font-bold tracking-widest">K&G</h1>

            {/* Right - Icons */}
            <div className="flex items-center gap-4">
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

        {/* Desktop Navigation */}
        <div className="border-t border-gray-200 hidden md:block">
          <div className="max-w-full px-4 md:px-8 py-0">
            <Navigation isOpen={false} onClose={() => {}} />
          </div>
        </div>
      </header>

      {/* Mobile Sheet Navigation */}
      <Navigation isOpen={isNavOpen} onClose={() => setIsNavOpen(false)} />
    </>
  )
}
