import { Router } from 'express'
import { allProducts, createProduct, deleteProduct, oneProduct, updateProduct } from '../Controller/product.controller'

export const productRouter = Router()

productRouter.get('/', allProducts)
productRouter.get('/:id', oneProduct)

productRouter.post('/', createProduct)
productRouter.put('/:id', updateProduct)
productRouter.delete('/:id', deleteProduct)
