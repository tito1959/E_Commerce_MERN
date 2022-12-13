export interface Category {
  _id: string
  name: string
}

export type categoryNoId = Omit<Category, '_id'>
