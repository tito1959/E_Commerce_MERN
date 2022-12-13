import { productModel } from '../Model/product.model'
import { Product, productNoId } from '../Types/product.type'

export const allProductsService = async (): Promise<Product[]> => {
  const data = await productModel.find({})
  return data
}

export const oneProductService = async (id: string): Promise<Product | string> => {
  const data = await productModel.findById(id)
  if (data === null) return 'Product not founded'

  return data
}

export const createProductService = async (data: productNoId): Promise<Product> => {
  const dataResponse = await productModel.create(data)
  return dataResponse
}

export const updateProductService = async (id: string, data: productNoId): Promise<Product | string> => {
  const dataResponse = await productModel.findByIdAndUpdate(id, data, { new: true })
  if (dataResponse === null) return 'Product to updated not founded'

  return dataResponse
}

export const deleteProductService = async (id: string): Promise<Product | string> => {
  const dataResponse = await productModel.findByIdAndDelete(id)
  if (dataResponse === null) return 'Product to delete not founded'

  return dataResponse
}
