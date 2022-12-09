import { model, Schema } from 'mongoose'
import { User } from '../types/models.types'

const userSchema = new Schema<User>({
  username: { type: String, required: true, min: 2, max: 30, unique: true },
  password: { type: String, required: true, min: 2, max: 50 },
  firstName: { type: String, required: true, min: 2, max: 50 },
  lastName: { type: String, required: true, min: 2, max: 50 },
  balance: { type: Number, default: 0, min: 0, max: 10000 },
  email: { type: String, required: true, unique: true, min: 2, max: 50 },
  address: { type: String, required: true, min: 5, max: 50 },
  phone: { type: String, required: true, min: 5, max: 50 },
  picturePath: { type: String, default: 'default.png' },
  admin: { type: Boolean, default: false },
  orders: []
},
{
  versionKey: false,
  timestamps: true
})

export const userModel = model('User', userSchema)
