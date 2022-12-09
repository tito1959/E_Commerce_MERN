import { Request, Response } from 'express'
import {
  allCategories,
  createCategory,
  deleteCategory,
  oneCategoryWithRelation,
  updateCategory
} from '../service/category.service'

export const getAllCategories = (_req: Request, res: Response): void => {
  allCategories()
    .then((data) => {
      if (Object.keys(data).includes('err')) {
        res.status(400).json(data)
      } else {
        res.status(200).json(data)
      }
    })
    .catch((err) => {
      if (err instanceof Error) {
        res.status(400).json({ err: `Error_get_categories: ${err.message}` })
      }
    })
}

export const categoryWithProductsLinked = (_req: Request, res: Response): void => {
  oneCategoryWithRelation(_req.params.id)
    .then((data) => {
      if (Object.keys(data).includes('err')) {
        res.status(400).json(data)
      } else {
        res.status(200).json(data)
      }
    })
    .catch((err) => {
      if (err instanceof Error) {
        res.status(400).json({ err: `Error_get_category_products: ${err.message}` })
      }
    })
}

export const createCat = (req: Request, res: Response): void => {
  createCategory(req.body.name)
    .then((data) => {
      if (Object.keys(data).includes('err')) {
        res.status(400).json(data)
      } else {
        res.status(200).json(data)
      }
    })
    .catch((err) => {
      if (err instanceof Error) {
        res.status(400).json({ err: `Error_create_category: ${err.message}` })
      }
    })
}

export const updateCat = (req: Request, res: Response): void => {
  updateCategory(req.body.id, req.body.name)
    .then((data) => {
      if (Object.keys(data).includes('err')) {
        res.status(400).json(data)
      } else {
        res.status(200).json(data)
      }
    })
    .catch((err) => {
      if (err instanceof Error) {
        res.status(400).json({ err: `Error_update_category: ${err.message}` })
      }
    })
}

export const deleteCat = (req: Request, res: Response): void => {
  deleteCategory(req.body.id)
    .then((data) => {
      if (Object.keys(data).includes('err')) {
        res.status(400).json(data)
      } else {
        res.status(200).json(data)
      }
    })
    .catch((err) => {
      if (err instanceof Error) {
        res.status(400).json({ err: `Error_delete_category: ${err.message}` })
      }
    })
}
