import { categoryModel } from '../model/category.model'
import { Category, categoryName } from '../types/category.types'
import { errorHandler } from '../types/models.types'

export const allCategories = async (): Promise<Category[]> => {
  const data = await categoryModel.find({})
  return data
}

export const oneCategoryWithRelation = async (id: string): Promise<Category | errorHandler> => {
  const data = await categoryModel.findById({ _id: id }).populate('products')
  if (data === null) { return { error: 'category not founded' } }
  return data
}

export const createCategory = async (data: categoryName): Promise<Category> => {
  const response = await categoryModel.create({ name: data })
  return response
}

export const updateCategory = async (id: string, name: String): Promise<Category | errorHandler> => {
  const checkCategory = await categoryModel.findOneAndUpdate({ _id: id }, { name })
  if (checkCategory === null) { return { error: 'category not exists' } }
  return checkCategory
}

export const deleteCategory = async (id: string): Promise<Category | errorHandler> => {
  const deleted = await categoryModel.findOneAndDelete({ _id: id })
  if (deleted === null) { return { error: 'category that you want delete not exists' } }
  return deleted
}
