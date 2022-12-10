import { model, Schema } from 'mongoose'
import { Product } from '../types/product.types'

const productSchema = new Schema<Product>({
  name: { type: String, required: true, min: 3, max: 20 },
  stock: { type: Number, default: 0, min: 0 },
  price: { type: Number, required: true, min: 0 },
  description: { type: String, required: true, min: 5, max: 256 },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true }
})

export const productModel = model('Product', productSchema)
