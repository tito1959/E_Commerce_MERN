// enum orderEnum { 'delivered', 'canceled', 'pending'}

import { Product } from './product.type'
import { userNoSensitive } from './user.type'

export interface Order {
  _id: string
  userId: userNoSensitive
  products: [
    {
      productId: Product
      quantity: number
    }
  ]
  amount: number
  address: string
  status: string
}

export interface MetadataOrder extends Order, mongoose.Document {
  createdAt: Date
  updatedAt: Date
  _doc?: any
}

export type orderNoId = Omit<Order, '_id'>
export type orderNoPassword = Omit<Order, 'userId.password'>
