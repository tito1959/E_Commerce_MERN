import categoryModel from '../models/category.model'
import { category } from '../types/types.model'
import { categoryReqMapped } from '../utils/mapper/category.mapper'

export const getCategoriesService = async (): Promise<category[]> => {
  const data = await categoryModel.find({})
  return data
}

export const createCategoryService = async (data: any): Promise<category | ErrorConstructor> => {
  console.log(data)
  const categoryMapped = categoryReqMapped(data)
  const responseData = await categoryModel.create(categoryMapped)
  return responseData
}

export const editCategoryService = async (id: string, data: any): Promise<any> => {
  const dataResponse = await categoryModel.findByIdAndUpdate(id, data, { new: true })
  return dataResponse
}

export const deleteCategoryService = async (_id: string): Promise<any> => {
  const dataResponse = await categoryModel.findByIdAndDelete({ _id })
  return dataResponse
}
