import { categoryModel } from '../model/category.model'
import { productModel } from '../model/product.model'
import { errorHandler } from '../types/models.types'
import { Product } from '../types/product.types'
import { productMapper } from '../utils/mapper/product.mapper'

export const getAllProductsServ = async (): Promise<Product[]> => {
  const data = await productModel.find({}).populate('category')
  const mapped = data.map((el) => productMapper(el))
  return mapped
}

export const getProductWithIdServ = async (id: string): Promise<Product | errorHandler> => {
  const data = await productModel.findById(id).populate('category')
  if (data === null) { return { error: 'Error product not founded' } }
  const mapped = productMapper(data)
  return mapped
}

export const createProductServ = async (data: Product): Promise<Product> => {
  const productSaved = await (await productModel.create({ ...data, category: data.category })).populate('category')
  await categoryModel.updateOne({ _id: data.category }, { $push: { products: productSaved.id } })
  return productSaved
}

export const updateProductServ = async (id: string, data: any): Promise<Product | errorHandler> => {
  // const oldCategory = await productModel.findById(id)
  await categoryModel.findOneAndUpdate({ products: id }, { $pull: { products: id } })

  const productUpdated = await productModel.findByIdAndUpdate(id, data).populate('category')
  if (productUpdated === null) { return { error: 'Error update product' } }

  /* delete category in products, and create new category */
  await categoryModel.findByIdAndUpdate(data.category, { $push: { products: productUpdated._id } })

  return productUpdated
}
