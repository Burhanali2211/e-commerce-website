'use client'

import { useCart } from '@/contexts/CartContext'
import Image from 'next/image'
import Link from 'next/link'
import { TrashIcon } from '@heroicons/react/24/outline'

export default function CartPage() {
  const { state, removeItem, updateQuantity } = useCart()

  if (state.items.length === 0) {
    return (
      <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">
              Your cart is empty
            </h2>
            <p className="mt-4 text-text-light dark:text-text-dark">
              Start shopping to add items to your cart
            </p>
            <div className="mt-6">
              <Link
                href="/products"
                className="inline-flex items-center rounded-md border border-transparent bg-primary-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-bg-light dark:bg-bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">
          Shopping Cart
        </h1>

        <div className="mt-12">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {state.items.map((item) => (
                <li key={item.id} className="flex py-6">
                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={96}
                      height={96}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>

                  <div className="ml-4 flex flex-1 flex-col">
                    <div>
                      <div className="flex justify-between text-base font-medium text-text-light dark:text-text-dark">
                        <h3>
                          <Link href={`/products/${item.id}`}>{item.name}</Link>
                        </h3>
                        <p className="ml-4">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                    <div className="flex flex-1 items-end justify-between text-sm">
                      <div className="flex items-center">
                        <label htmlFor={`quantity-${item.id}`} className="mr-2 text-text-light dark:text-text-dark">
                          Qty
                        </label>
                        <select
                          id={`quantity-${item.id}`}
                          value={item.quantity}
                          onChange={(e) => updateQuantity(item.id, Number(e.target.value))}
                          className="rounded-md border-gray-300 py-1.5 text-base leading-5 text-text-light dark:text-text-dark bg-bg-light dark:bg-bg-dark focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
                        >
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <option key={num} value={num}>
                              {num}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="flex">
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-red-600 hover:text-red-500"
                        >
                          <TrashIcon className="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 pt-6">
          <div className="flex justify-between text-base font-medium text-text-light dark:text-text-dark">
            <p>Subtotal</p>
            <p>${state.total.toFixed(2)}</p>
          </div>
          <p className="mt-0.5 text-sm text-gray-500">
            Shipping and taxes calculated at checkout.
          </p>
          <div className="mt-6">
            <Link
              href="/checkout"
              className="flex items-center justify-center rounded-md border border-transparent bg-primary-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary-700"
            >
              Checkout
            </Link>
          </div>
          <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
            <p>
              or{' '}
              <Link
                href="/products"
                className="font-medium text-primary-600 hover:text-primary-500"
              >
                Continue Shopping
                <span aria-hidden="true"> &rarr;</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 