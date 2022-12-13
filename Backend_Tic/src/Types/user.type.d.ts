import mongoose from 'mongoose'

export interface User {
  _id: string
  username: string
  password: string
  firstName: string
  lastName: string
  balance: number
  phone: string
  profileImg: string
  email: string
  admin: boolean
}

export interface MetadataUser extends User, mongoose.Document {
  createdAt: Date
  updatedAt: Date
  _doc?: any
}

export type userNotPass = Omit<User, 'password'>
export type userNotId = Omit<User, '_id'>
