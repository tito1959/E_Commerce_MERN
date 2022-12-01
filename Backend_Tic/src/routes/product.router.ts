import { Router } from 'express'
import { createProduct, deleteProduct, getProducts, updateProduct } from '../controllers/product.controller'

export const routerProduct = Router()

routerProduct.get('/', getProducts)
routerProduct.post('/', createProduct)
routerProduct.put('/:id', updateProduct)
routerProduct.delete('/:id', deleteProduct)
