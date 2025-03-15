'use client'

import Link from 'next/link'
import { ShoppingCartIcon, UserIcon } from '@heroicons/react/24/outline'
import { useCart } from '@/contexts/CartContext'

export default function Navigation() {
  const { state } = useCart()
  const cartItemCount = state.items.reduce((total, item) => total + item.quantity, 0)

  return (
    <nav className="bg-bg-light dark:bg-bg-dark border-b border-gray-200 dark:border-gray-700">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link href="/" className="text-2xl font-bold text-text-light dark:text-text-dark">
                E-Shop
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                href="/"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-text-light dark:text-text-dark hover:border-primary-500"
              >
                Home
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-text-light dark:text-text-dark hover:border-primary-500"
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
              className="group -m-2 flex items-center p-2"
            >
              <ShoppingCartIcon
                className="h-6 w-6 flex-shrink-0 text-text-light dark:text-text-dark group-hover:text-primary-600"
                aria-hidden="true"
              />
              {cartItemCount > 0 && (
                <span className="ml-2 text-sm font-medium text-text-light dark:text-text-dark group-hover:text-primary-600">
                  {cartItemCount}
                </span>
              )}
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