import { Product } from './product.types'

export interface Category {
  _id: string
  name: string
  products: [Product]
}

export type categoryName = Omit<Category, '_id' | 'products'>
export type categoryNotProducts = Omit<Category, 'products'>
