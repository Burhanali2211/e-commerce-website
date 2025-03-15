import Image from 'next/image'
import Link from 'next/link'
import { StarIcon } from '@heroicons/react/20/solid'
import { Product } from '@/types/product'

interface ProductCardProps {
  product: Product
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`} className="group">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
        <Image
          src={product.image}
          alt={product.name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
      <div className="flex items-center">
        <div className="flex items-center">
          {[0, 1, 2, 3, 4].map((rating) => (
            <StarIcon
              key={rating}
              className={`h-4 w-4 flex-shrink-0 ${
                rating < product.rating
                  ? 'text-yellow-400'
                  : 'text-gray-200'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        <p className="ml-2 text-sm text-gray-500">
          {product.rating.toFixed(1)}
        </p>
      </div>
      <p className="mt-1 text-lg font-medium text-gray-900">
        ${product.price.toFixed(2)}
      </p>
    </Link>
  )
} 