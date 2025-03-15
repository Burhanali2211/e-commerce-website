export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
  category: string
  rating: number
  stock: number
  variants?: {
    name: string
    options: string[]
  }[]
}

export interface Category {
  id: string
  name: string
  description: string
  image: string
} 