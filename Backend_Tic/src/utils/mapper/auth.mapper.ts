import { User, userNotId, userNotPass } from '../../Types/user.type'

const isString = (property: any): boolean => {
  return (typeof property === 'string')
}
const isNumber = (property: any): boolean => {
  return (typeof property === 'number')
}

const validUserName = (property: any): string => {
  if (!isString(property)) throw new Error('username field is missing')
  return property
}
const validPassword = (property: any): string => {
  if (!isString(property)) throw new Error('password field is missing')
  return property
}
const validFirstName = (property: any): string => {
  if (!isString(property)) throw new Error('password field is missing')
  return property
}
const validLastName = (property: any): string => {
  if (!isString(property)) throw new Error('password field is missing')
  return property
}
const validBalance = (property: any): number => {
  if (!isNumber(property) && property < 0) throw new Error('balance field not is valid')
  return property
}
const validPhone = (property: any): string => {
  if (!isString(property)) throw new Error('phone format not is valid')
  return property
}
const validEmail = (property: any): string => {
  if (!isString(property)) throw new Error('email field not is valid')
  return property
}

export const userMapped = (data: any): userNotId => {
  const dataMapped: userNotId = {
    username: validUserName(data.username),
    password: validPassword(data.password),
    firstName: validFirstName(data.firstName),
    lastName: validLastName(data.lastName),
    balance: validBalance(data.balance),
    phone: validPhone(data.phone),
    profileImg: 'profile_default.png',
    email: validEmail(data.email),
    admin: false
  }

  return dataMapped
}
export const userMappedModel = (data: User): userNotPass => {
  const dataMapped: userNotPass = {
    _id: data._id,
    username: validUserName(data.username),
    firstName: validFirstName(data.firstName),
    lastName: validLastName(data.lastName),
    balance: validBalance(data.balance),
    phone: validPhone(data.phone),
    profileImg: 'profile_default.png',
    email: validEmail(data.email),
    admin: false
  }

  return dataMapped
}
