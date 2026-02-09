import React from 'react'
import { Instagram, Twitter, Facebook } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 md:py-20 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-light tracking-widest mb-6">LUXE</h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Discover timeless elegance and premium craftsmanship in every collection.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-sm font-light tracking-widest mb-4 opacity-90">SHOP</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition">Women's</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Men's</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Accessories</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Sale</a></li>
            </ul>
          </div>

          {/* About */}
          <div>
            <h4 className="text-sm font-light tracking-widest mb-4 opacity-90">ABOUT</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition">Our Story</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Craftsmanship</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Blog</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Contact</a></li>
            </ul>
          </div>

          {/* Customer */}
          <div>
            <h4 className="text-sm font-light tracking-widest mb-4 opacity-90">CUSTOMER CARE</h4>
            <ul className="space-y-3 text-sm opacity-70">
              <li><a href="#" className="hover:opacity-100 transition">Shipping Info</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Returns</a></li>
              <li><a href="#" className="hover:opacity-100 transition">FAQ</a></li>
              <li><a href="#" className="hover:opacity-100 transition">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background border-opacity-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            {/* Copyright */}
            <p className="text-sm opacity-50">
              © 2024 Luxe Boutique. All rights reserved.
            </p>

            {/* Social */}
            <div className="flex gap-6">
              <a href="#" className="opacity-70 hover:opacity-100 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="opacity-70 hover:opacity-100 transition">
                <Facebook size={20} />
              </a>
            </div>

            {/* Newsletter */}
            <div className="flex items-center gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-transparent border-b border-background border-opacity-50 text-sm text-background placeholder-opacity-50 py-2 focus:outline-none focus:border-opacity-100 transition w-48"
              />
              <button className="text-sm tracking-widest opacity-70 hover:opacity-100 transition">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
