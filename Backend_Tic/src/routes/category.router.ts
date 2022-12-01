import { Router } from 'express'
import * as categoryController from '../controllers/category.controller'

export const routerCategory = Router()

routerCategory.get('/', categoryController.getCategories)
routerCategory.post('/', categoryController.createCategory)
routerCategory.put('/:id', categoryController.editCategory)
routerCategory.delete('/:id', categoryController.deleteCategory)
