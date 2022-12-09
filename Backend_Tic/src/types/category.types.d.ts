export interface Category {
  _id: string
  name: string
  products: []
}

export type categoryName = Omit<Category, '_id' | 'products'>
