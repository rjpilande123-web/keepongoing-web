import React from 'react'
import { Heart, ShoppingCart, Search, Menu } from 'lucide-react'

export function Header() {
  return (
    <header className="border-b border-border">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1">
            <h1 className="text-2xl md:text-3xl font-light tracking-widest text-foreground">
              LUXE
            </h1>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12 flex-1 justify-center text-sm tracking-wide">
            <a href="#" className="text-foreground hover:opacity-60 transition">
              SHOP
            </a>
            <a href="#" className="text-foreground hover:opacity-60 transition">
              COLLECTIONS
            </a>
            <a href="#" className="text-foreground hover:opacity-60 transition">
              ABOUT
            </a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-6 flex-1 justify-end">
            <button className="text-foreground hover:opacity-60 transition">
              <Search size={20} />
            </button>
            <button className="text-foreground hover:opacity-60 transition">
              <Heart size={20} />
            </button>
            <button className="text-foreground hover:opacity-60 transition">
              <ShoppingCart size={20} />
            </button>
            <button className="md:hidden text-foreground hover:opacity-60 transition">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
