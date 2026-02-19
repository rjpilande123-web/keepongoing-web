'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  {
    label: 'Products',
    subcategories: [
      { label: 'Men', href: '/products/men' },
      { label: 'Women', href: '/products/women' },
      { label: 'Kids', href: '/products/kids' },
      { label: 'Accessories', href: '/products/accessories' },
      { label: 'Bags', href: '/products/bags' },
    ],
  },
  { label: 'About Us', href: '/about' },
  { label: 'Contact Us', href: '/contact' },
]

export function Navigation() {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  return (
    <nav className="hidden md:flex items-center gap-8 px-4">
      {navItems.map((item) => (
        <div key={item.label} className="relative group">
          {item.href ? (
            <Link
              href={item.href}
              className="text-sm hover:opacity-60 transition py-2"
            >
              {item.label}
            </Link>
          ) : (
            <button className="text-sm hover:opacity-60 transition py-2 flex items-center gap-1">
              {item.label}
              <ChevronDown size={16} />
            </button>
          )}

          {item.subcategories && (
            <div className="absolute left-0 mt-0 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              {item.subcategories.map((sub) => (
                <Link
                  key={sub.label}
                  href={sub.href}
                  className="block px-4 py-2 text-sm hover:bg-gray-100 first:rounded-t-md last:rounded-b-md"
                >
                  {sub.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
