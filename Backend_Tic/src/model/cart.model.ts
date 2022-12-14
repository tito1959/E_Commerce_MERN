import { model, Schema } from 'mongoose'
import { Cart } from '../Types/cart.type'

const cartSchema = new Schema<Cart>({
  userId: { type: String, required: true, min: 5 },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true, min: 5 },
      quantity: { type: Number, required: true, min: 1 }
    }
  ]
})

export const cartModel = model('Cart', cartSchema)
