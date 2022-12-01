import productModel from '../models/product.model'
import { product } from '../types/types.model'
import { productReqMapped } from '../utils/mapper/product.mapper'

export const getProductsService = async (): Promise<product[]> => {
  const data = await productModel.find({}).populate('category')
  return data
}

export const createProductService = async (data: any): Promise<product | ErrorConstructor> => {
  const productMapped = productReqMapped(data)
  const responseData = await productModel.create(productMapped)
  return responseData
}

export const editProductService = async (id: string, data: any): Promise<any> => {
  const dataResponse = await productModel.findByIdAndUpdate(id, data, { new: true })
  return dataResponse
}

export const deleteProductService = async (id: string): Promise<any> => {
  const dataResponse = await productModel.remove({ _id: id })
  return dataResponse
}
