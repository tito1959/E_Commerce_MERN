import { model, Schema } from 'mongoose'
import { product } from '../types/types.model'

const productSchema = new Schema<product>({
  name: { type: String, required: true, max: 20 },
  stock: { type: Number, required: true, max: 200 },
  price: { type: Number, required: true, max: 10000 },
  description: { type: String, default: 'Someone description was here...' },
  category: { type: Schema.Types.ObjectId, ref: 'category', required: true }
}, {
  versionKey: false,
  timestamps: false
})

export default model('product', productSchema)
