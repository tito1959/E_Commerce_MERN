import { Router } from 'express'
import { allProducts, createProduct, deleteProduct, oneProduct, updateProduct } from '../Controller/product.controller'
import { verifyTokenAdmin } from '../Middleware/auth.middleware'

export const productRouter = Router()

productRouter.get('/', allProducts)
productRouter.get('/:id', oneProduct)

productRouter.post('/', verifyTokenAdmin, createProduct)
productRouter.put('/:id', verifyTokenAdmin, updateProduct)
productRouter.delete('/:id', verifyTokenAdmin, deleteProduct)
