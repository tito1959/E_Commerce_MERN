import { model, Schema } from 'mongoose'
import { MetadataUser } from '../Types/user.type'

const userSchema = new Schema<MetadataUser>({
  username: { type: String, required: true, min: 5, unique: true },
  password: { type: String, required: true, min: 5 },
  firstName: { type: String, required: true, min: 5 },
  lastName: { type: String, required: true, min: 5 },
  balance: { type: Number, default: 0, min: 0 },
  phone: { type: String, required: true, min: 7 },
  profileImg: { type: String, default: 'profile_default.png' },
  email: { type: String, required: true, min: 5, unique: true },
  admin: { type: Boolean, required: true, default: false }
})

export const userModel = model('User', userSchema)
