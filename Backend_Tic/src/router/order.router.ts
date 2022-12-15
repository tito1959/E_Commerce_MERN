import { Router } from 'express'
import { allOrders, createOrder, deleteOrder, getOneOrder, updateOrder } from '../Controller/order.controller'
import { verifyToken, verifyTokenAdmin } from '../Middleware/auth.middleware'

export const orderRouter = Router()
/* the user can be none or more orders, this contain the status
and only can create the order.
admin can update the status order, get all orders, update, delete
*/
orderRouter.get('/', verifyTokenAdmin, allOrders)
orderRouter.get('/:id', verifyToken, getOneOrder)

orderRouter.post('/', verifyToken, createOrder)
orderRouter.put('/:id', verifyTokenAdmin, updateOrder)
orderRouter.delete('/:id', verifyTokenAdmin, deleteOrder)
