import { User } from './user.type'

enum orderEnum { 'delivered', 'canceled', 'pending'}

export interface Order {
  _id: string
  userId: User
  products: [
    {
      productId: string
    },
    {
      quantity: string
    }
  ]
  amount: number
  address: string
  status: statusOrder
}

interface statusOrder extends StringConstructor {
  enum: [orderEnum]
}

export type orderNoId = Omit<Order, '_id'>
