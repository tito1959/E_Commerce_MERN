import { cartNotId } from '../../Types/cart.type'

const isString = (data: any): boolean => {
  return (typeof data === 'string')
}
const isNumber = (data: any): boolean => {
  return (typeof data === 'number')
}

const validUserId = (property: any): string => {
  if (!isString(property)) throw new Error('field UserId is missing')
  return property
}
const validProductId = (property: any): string => {
  if (!isString(property)) throw new Error('field productId not is valid')
  return property
}
const validQuantity = (property: any): number => {
  if (!isNumber(property)) throw new Error('field quantity not is valid')
  return property
}

export const mappedCart = (data: any): cartNotId => {
  console.log(data.products)
  const dataMapped: cartNotId = {
    userId: validUserId(data.userId),
    products: data.products.map((el: { productId: any, quantity: any }) => (
      {
        productId: validProductId(el.productId),
        quantity: validQuantity(el.quantity)
      }
    ))
  }
  return dataMapped
}
