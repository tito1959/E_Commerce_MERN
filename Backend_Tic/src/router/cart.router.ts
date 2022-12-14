import { Router } from 'express'
import { createCart, deleteCart, getCart, updateCart } from '../Controller/cart.controller'
import { verifyToken } from '../Middleware/auth.middleware'

export const cartRouter = Router()

cartRouter.get('/', verifyToken, getCart)
cartRouter.post('/', verifyToken, createCart)
cartRouter.put('/:id', verifyToken, updateCart)
cartRouter.delete('/:id', verifyToken, deleteCart)
