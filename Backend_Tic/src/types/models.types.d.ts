export interface User {
  _id: string
  username: string
  password: string
  firstName: string
  lastName: string
  balance: number
  email: string
  address: string
  phone: string
  picturePath: string
  admin: boolean
  orders: any[]
  createdAt: string
}

export interface orderList {
  items: [string]
  total: number
}

export interface loginAuth {
  token: string
  data: { }
}

export interface errorHandler {
  error: {}
}

export type userNotSesitive = Omit<User, 'password'>
export type usersInfo = Omit<User, '_id', 'password', 'orders'>
export type userRequest = Omit<User, '_id', 'createdAt'>
