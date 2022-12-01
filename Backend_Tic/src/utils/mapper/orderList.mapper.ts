import { orderList } from '../../types/types.model'

const validNumber = (number: number): number => {
  if (typeof number === 'number' && number >= 0) { return number }
  throw new Error('The value price is missing or is invalid')
}

const validProduct = (product: any): any => {
  if (typeof product._id === 'string') { return product }
  throw new Error('The ID value of category is missing or invalid')
}

// export const orderReqMapped = (data: any): orderList => {
//   const dataMapped: orderList = {
//     resumeProducts: {
//       name: validProduct(data.product),
//       quantity: validNumber(data.)
//     },
//     total: validNumber(data.total)
//   }
//   return dataMapped
// }
