import { model, Schema } from 'mongoose'
import { MetadataOrder } from '../Types/order.type'

const orderSchema = new Schema<MetadataOrder>({
  userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  products: [
    {
      productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
      quantity: { type: Number, required: true, default: 1, min: 1 }
    }
  ],
  amount: { type: Number, required: true, min: 0 },
  address: { type: String, required: true, min: 5 },
  status: { type: String, required: true, enum: ['delivered', 'canceled', 'pending'] }
})

export const orderModel = model('Order', orderSchema)
