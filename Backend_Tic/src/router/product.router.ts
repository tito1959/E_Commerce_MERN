import { Router } from 'express'
import { allProducts, createProduct, oneProduct, updateProduct } from '../controller/product.controller'

export const routerProduct = Router()
/**
 * The router must retrive all products list for the market
 * must retrive one product detail founded by id
 * update product
 * delete product
 */

routerProduct.get('/', allProducts)
routerProduct.get('/:id', oneProduct)
routerProduct.post('/', createProduct)
routerProduct.put('/:id', updateProduct)
routerProduct.delete('/:id')
