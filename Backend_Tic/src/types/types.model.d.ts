export interface User {
  username: string
  password: string
  admin: boolean
  userData: account
}

export interface account {
  name: string
  surname: string
  email: string
  adress: string
  balance: number
  orderList: [orderList]
}

export interface orderList {
  total: number
  resumeProducts: [{
    quantity: number
    product: product
  }]
}

export interface product {
  name: string
  stock: number
  price: number
  description?: string
  category: category
}

export interface categoryId {
  name: string
}

export type category = Pick<category, 'name'>
