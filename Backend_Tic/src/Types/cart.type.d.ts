export interface Cart {
  _id: string
  userId: string
  products: [
    {
      productId: string
      quantity: number
    }
  ]
}

export type cartNotId = Omit<Cart, '_id'>
