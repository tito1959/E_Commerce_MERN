import { Request, Response } from 'express'
import { createCategoryService, deleteCategoryService, editCategoryService, getCategoriesService } from '../services/category.service'
import { errorHandleHttp } from '../utils/errorHandler'

export const getCategories = (_req: Request, res: Response): void => {
  getCategoriesService()
    .then((data) => res.status(200).json(data))
    .catch((err) => errorHandleHttp(res, 'ERROR_GET_CATEGORIES', err))
}

export const createCategory = ({ body }: Request, res: Response): void => {
  createCategoryService(body)
    .then((data) => res.status(200).json(data))
    .catch((err) => errorHandleHttp(res, 'ERROR_CREATE_CATEGORY', err))
}

export const editCategory = ({ params, body }: Request, res: Response): void => {
  editCategoryService(params.id, body)
    .then((data) => res.status(200).json(data))
    .catch((err) => errorHandleHttp(res, 'ERROR_EDIT_CATEGORY', err))
}

export const deleteCategory = ({ params }: Request, res: Response): void => {
  deleteCategoryService(params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => errorHandleHttp(res, 'ERROR_DELETE_CATEGORY', err))
}
