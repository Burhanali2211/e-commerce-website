import Link from 'next/link'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'

export default function Navigation() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">Store</span>
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/products"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900"
              >
                Products
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Categories
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-500 hover:text-gray-900"
              >
                Contact
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <Link
              href="/cart"
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <ShoppingCartIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
            <Link
              href="/account"
              className="p-2 text-gray-400 hover:text-gray-500"
            >
              <UserIcon className="h-6 w-6" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
} 