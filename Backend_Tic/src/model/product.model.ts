import { model, Schema } from 'mongoose'
import { Product } from '../Types/product.type'

const producSchema = new Schema<Product>({
  title: { type: String, required: true, min: 5, unique: true },
  description: { type: String, required: true, min: 5 },
  img: { type: String, default: 'product_default.jpg' },
  categoryId: { type: String, min: 5 },
  stock: { type: Number, default: 0, min: 0 },
  price: { type: Number, required: true, min: 0 }
})

export const productModel = model('Product', producSchema)
