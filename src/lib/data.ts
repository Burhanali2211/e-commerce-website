import { Product, Category } from '@/types/product'

export const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    description: 'A comfortable and versatile white t-shirt made from 100% cotton.',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'clothing',
    rating: 4.5,
    stock: 100,
    variants: [
      {
        name: 'Size',
        options: ['S', 'M', 'L', 'XL']
      },
      {
        name: 'Color',
        options: ['White', 'Black', 'Gray']
      }
    ]
  },
  {
    id: '2',
    name: 'Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation.',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'electronics',
    rating: 4.8,
    stock: 50
  },
  {
    id: '3',
    name: 'Leather Wallet',
    description: 'Genuine leather wallet with multiple card slots.',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1627123424574-724758594e93?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    category: 'accessories',
    rating: 4.3,
    stock: 75
  }
]

export const categories: Category[] = [
  {
    id: '1',
    name: 'Clothing',
    description: 'Find the latest fashion trends.',
    image: 'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '2',
    name: 'Electronics',
    description: 'Discover cutting-edge technology.',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: '3',
    name: 'Accessories',
    description: 'Complete your look with our accessories.',
    image: 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
] 