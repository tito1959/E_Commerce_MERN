import { categoryNotProducts } from './category.types'

export interface Product {
  _id: string
  name: string
  stock: number
  price: number
  description: string
  category: categoryNotProducts
}

export type productNoId = Omit<Product, '_id'>
