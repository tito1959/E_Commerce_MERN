import { Request } from 'express'
import { userRequest } from '../../types/models.types'

const isString = (data: string): boolean => {
  return (typeof data === 'string' || data === undefined)
}
const validUsername = (username: string): string => {
  if (!isString(username)) throw new Error('Username value is invalid')
  return username
}
const validPass = (pass: string): string => {
  if (!isString(pass)) throw new Error('Password value is invalid')
  return pass
}
const validFirtsName = (firstName: string): string => {
  if (!isString(firstName)) throw new Error('FirstName is invalid')
  return firstName
}
const validLastName = (lastName: string): string => {
  if (!isString(lastName)) throw new Error('lastname is invalid')
  return lastName
}
const validEmail = (email: string): string => {
  if (!isString(email)) throw new Error('email is invalid')
  return email
}
const validAddress = (address: string): string => {
  if (!isString(address)) throw new Error('address is invalid')
  return address
}
const validPhone = (number: string): string => {
  if (!isString(number)) throw new Error('number phone is invalid')
  return number
}

export const validUser = ({ body }: Request): userRequest => {
  const mapedUser: userRequest = {
    username: validUsername(body.username),
    password: validPass(body.password),
    firstName: validFirtsName(body.firstName),
    lastName: validLastName(body.lastName),
    balance: body.balance,
    email: validEmail(body.email),
    address: validAddress(body.address),
    phone: validPhone(body.phone),
    picturePath: 'default.jpg',
    admin: false,
    orders: body.orders
  }

  return mapedUser
}
