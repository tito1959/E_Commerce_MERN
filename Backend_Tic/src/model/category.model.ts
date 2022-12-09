import { model, Schema } from 'mongoose'
import { Category } from '../types/category.types'

const categorySchema = new Schema<Category>({
  name: { type: String, required: true, min: 5, max: 20 },
  products: []
},
{
  versionKey: false,
  timestamps: false
})

export const categoryModel = model('Category', categorySchema)
