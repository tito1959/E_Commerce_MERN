import { product } from '../../types/types.model'

const validName = (name: string): string => {
  if (typeof name === 'string' && name.trim() !== '') { return name }
  throw new Error('The value Name not is defined or missing')
}

const validStock = (stock: number): number => {
  if (typeof stock === 'number' && stock >= 0) { return stock }
  throw new Error('The value stock is missing or is invalid')
}

const validPrice = (price: number): number => {
  if (typeof price === 'number' && price >= 0) { return price }
  throw new Error('The value price is missing or is invalid')
}

const validCategory = (category: any): any => {
  if (typeof category._id === 'string') { return category }
  throw new Error('The ID value of category is missing or invalid')
}

export const productReqMapped = (data: any): product => {
  const dataMapped: product = {
    name: validName(data.name),
    description: data.description,
    price: validPrice(Number(data.price)),
    stock: validStock(Number(data.stock)),
    category: validCategory(data.category)
  }
  return dataMapped
}
