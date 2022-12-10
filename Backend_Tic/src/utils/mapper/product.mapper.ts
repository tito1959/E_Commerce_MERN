import { Product } from '../../types/product.types'

export const productMapper = (data: Product): Product => {
  const mapped: Product = {
    _id: data._id,
    name: data.name,
    stock: data.stock,
    price: data.price,
    description: data.description,
    category: { _id: data.category._id, name: data.category.name }
  }
  return mapped
}
