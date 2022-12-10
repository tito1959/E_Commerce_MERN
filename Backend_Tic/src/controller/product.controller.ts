import { Request, Response } from 'express'
import { createProductServ, getAllProductsServ, getProductWithIdServ, updateProductServ } from '../service/product.service'

export const allProducts = (_req: Request, res: Response): void => {
  getAllProductsServ()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      if (err instanceof Error) { res.status(400).json(err.message) }
    })
}

export const oneProduct = (req: Request, res: Response): void => {
  getProductWithIdServ(req.params.id)
    .then((data) => {
      (Object.keys(data).includes('error'))
        ? res.status(400).json(data)
        : res.status(200).json(data)
    })
    .catch((err) => {
      if (err instanceof Error) { res.status(400).json(err.message) }
    })
}

export const createProduct = (req: Request, res: Response): void => {
  createProductServ(req.body)
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      if (err instanceof Error) { res.status(400).json(err) }
    })
}

export const updateProduct = ({ body, params }: Request, res: Response): void => {
  updateProductServ(params.id, body)
    .then((data) => {
      (Object.keys(data).includes('error'))
        ? res.status(400).json(data)
        : res.status(200).json(data)
    })
    .catch((err) => {
      if (err instanceof Error) { res.status(400).json(err.message) }
    })
}
