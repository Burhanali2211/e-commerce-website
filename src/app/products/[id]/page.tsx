import { products } from '@/lib/data'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/20/solid'
import { useCart } from '@/contexts/CartContext'

export default function ProductPage({ params }: { params: { id: string } }) {
  const product = products.find((p) => p.id === params.id)
  const { addItem } = useCart()

  if (!product) {
    notFound()
  }

  const handleAddToCart = () => {
    addItem(product)
  }

  return (
    <div className="bg-bg-light dark:bg-bg-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-8">
          {/* Image */}
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg">
            <Image
              src={product.image}
              alt={product.name}
              width={800}
              height={800}
              className="h-full w-full object-cover object-center"
            />
          </div>

          {/* Product info */}
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <h1 className="text-3xl font-bold tracking-tight text-text-light dark:text-text-dark">
              {product.name}
            </h1>

            <div className="mt-3">
              <h2 className="sr-only">Product information</h2>
              <p className="text-3xl tracking-tight text-text-light dark:text-text-dark">
                ${product.price.toFixed(2)}
              </p>
            </div>

            {/* Rating */}
            <div className="mt-3">
              <h3 className="sr-only">Reviews</h3>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon
                      key={rating}
                      className={`h-5 w-5 flex-shrink-0 ${
                        rating < product.rating
                          ? 'text-yellow-400'
                          : 'text-gray-300'
                      }`}
                      aria-hidden="true"
                    />
                  ))}
                </div>
                <p className="ml-3 text-sm text-text-light dark:text-text-dark">
                  {product.rating.toFixed(1)} out of 5 stars
                </p>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="sr-only">Description</h3>
              <p className="text-base text-text-light dark:text-text-dark">
                {product.description}
              </p>
            </div>

            {/* Variants */}
            {product.variants && (
              <div className="mt-8">
                {product.variants.map((variant) => (
                  <div key={variant.name} className="mt-6">
                    <h3 className="text-sm font-medium text-text-light dark:text-text-dark">
                      {variant.name}
                    </h3>
                    <div className="mt-2">
                      <div className="flex items-center space-x-3">
                        {variant.options.map((option) => (
                          <button
                            key={option}
                            className="relative flex items-center justify-center rounded-md border py-2 px-4 text-sm font-medium text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800"
                          >
                            {option}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Add to cart */}
            <div className="mt-10">
              <button
                onClick={handleAddToCart}
                type="button"
                className="flex w-full items-center justify-center rounded-md border border-transparent bg-primary-600 px-8 py-3 text-base font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              >
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 