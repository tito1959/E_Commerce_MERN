import { model, Schema } from 'mongoose'
import { category } from '../types/types.model'

const categorySchema = new Schema<category>({
  name: { type: String, required: true, max: 20 }
},
{
  versionKey: false,
  timestamps: false
})

export default model('category', categorySchema)
