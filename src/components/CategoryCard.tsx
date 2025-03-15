import Image from 'next/image'
import Link from 'next/link'
import { Category } from '@/types/product'

interface CategoryCardProps {
  category: Category
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link href={`/categories/${category.id}`} className="group">
      <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75">
        <Image
          src={category.image}
          alt={category.name}
          width={500}
          height={500}
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <h3 className="text-2xl font-bold">{category.name}</h3>
          <p className="mt-1 text-sm">{category.description}</p>
        </div>
      </div>
    </Link>
  )
} 