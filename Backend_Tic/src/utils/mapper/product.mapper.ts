import { productNoId } from '../../Types/product.type'

const isString = (property: any): boolean => {
  return (typeof property === 'string')
}
const isNumber = (property: any): boolean => {
  return (typeof property === 'number')
}

const validTitle = (data: any): string => {
  if (!isString(data)) throw new Error('missing field Title')
  return data
}
const validDescription = (data: any): string => {
  if (!isString(data)) throw new Error('missing field description')
  return data
}
const validCategory = (data: any): string => {
  if (!isString(data)) throw new Error('missing field categoryId')
  return data
}
const validStock = (data: any): number => {
  if (!isNumber(data) || data < 0) throw new Error('the field stock not is valid')
  return data
}
const validPrice = (data: any): number => {
  if (!isNumber(data) || data < 0) throw new Error('the field price not is valid')
  return data
}

export const productMapper = (data: any): productNoId => {
  const dataMapped: productNoId = {
    title: validTitle(data.title),
    description: validDescription(data.description),
    img: 'profile_default.png',
    categoryId: validCategory(data.category),
    stock: validStock(data.stock),
    price: validPrice(data.price)
  }

  return dataMapped
}
