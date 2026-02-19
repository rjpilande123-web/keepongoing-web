import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronDown, X } from 'lucide-react'

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

export function Navigation({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null)

  const toggleSubmenu = (label: string) => {
    setExpandedMenu(expandedMenu === label ? null : label)
  }

  return (
    <>
      {/* Desktop Navigation */}
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

      {/* Mobile Sheet Navigation */}
      {isOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={onClose}
          />

          {/* Sheet */}
          <div className="fixed left-0 top-0 h-screen w-64 bg-white shadow-lg z-50 md:hidden flex flex-col">
            {/* Close Button */}
            <div className="flex justify-end p-4 border-b border-gray-200">
              <button
                onClick={onClose}
                className="p-1 hover:opacity-60 transition"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Items */}
            <nav className="flex-1 overflow-y-auto">
              {navItems.map((item) => (
                <div key={item.label}>
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 transition"
                      onClick={onClose}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <>
                      <button
                        onClick={() => toggleSubmenu(item.label)}
                        className="w-full text-left px-4 py-3 text-sm border-b border-gray-100 hover:bg-gray-50 transition flex items-center justify-between"
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={`transition-transform ${
                            expandedMenu === item.label ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Submenu */}
                      {expandedMenu === item.label && item.subcategories && (
                        <div className="bg-gray-50">
                          {item.subcategories.map((sub) => (
                            <Link
                              key={sub.label}
                              href={sub.href}
                              className="block px-8 py-2 text-sm text-gray-700 hover:text-black transition border-b border-gray-100"
                              onClick={onClose}
                            >
                              {sub.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </>
      )}
    </>
  )
}
