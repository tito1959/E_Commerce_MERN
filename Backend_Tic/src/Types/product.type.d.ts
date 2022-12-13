
export interface Product {
  _id: string
  title: string
  description: string
  img: string
  categoryId: string
  stock: number
  price: number
}

export type productNoId = Omit<Product, '_id'>
