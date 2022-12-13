import { Request, RequestHandler, Response } from 'express'
import { allProductsService, createProductService, deleteProductService, oneProductService, updateProductService } from '../Services/product.service'
import { errorResponse } from '../utils/error/erroResponseHanlder'
import { productMapper } from '../utils/mapper/product.mapper'

export const allProducts = (async (_req: Request, res: Response) => {
  try {
    const data = await allProductsService()
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error get all products', res)
  }
}) as RequestHandler

export const oneProduct = (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await oneProductService(id)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error get one product', res)
  }
}) as RequestHandler

export const createProduct = (async (req: Request, res: Response) => {
  try {
    const dataMapped = productMapper(req.body)
    const data = await createProductService(dataMapped)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error create product', res)
  }
}) as RequestHandler

export const updateProduct = (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await updateProductService(id, req.body)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error update product', res)
  }
}) as RequestHandler

export const deleteProduct = (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await deleteProductService(id)

    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error delete product', res)
  }
}) as RequestHandler
