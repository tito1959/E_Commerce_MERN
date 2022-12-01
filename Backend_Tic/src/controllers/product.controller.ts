import { Request, Response } from 'express'
import { createProductService, deleteProductService, editProductService, getProductsService } from '../services/product.service'
import { errorHandleHttp } from '../utils/errorHandler'

export const getProducts = (_req: Request, res: Response): void => {
  getProductsService()
    .then((products) => res.status(200).json(products))
    .catch((err) => errorHandleHttp(res, 'ERROR_GET_PRODUCTS', err))
}

export const createProduct = ({ body }: Request, res: Response): void => {
  createProductService(body)
    .then((data) => res.status(201).json(data))
    .catch((err) => errorHandleHttp(res, 'ERROR_CREATE_PRODUCT', err))
}

export const updateProduct = ({ params, body }: Request, res: Response): void => {
  editProductService(params.id, body)
    .then((data) => res.status(200).json(data))
    .catch((err) => errorHandleHttp(res, 'ERROR_UPDATE_PRODUCT', err))
}

export const deleteProduct = ({ params }: Request, res: Response): void => {
  deleteProductService(params.id)
    .then((data) => res.status(200).json(data))
    .catch((err) => errorHandleHttp(res, 'ERROR_DELETE_PRODUCT', err))
}
