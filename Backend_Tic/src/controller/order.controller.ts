import { Request, RequestHandler, Response } from 'express'
import { allOrderService, createOrderService, deleteOrderService, orderIdService, updateOrderService } from '../Services/order.service'
import { errorResponse } from '../utils/error/erroResponseHanlder'

export const getOneOrder = (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await orderIdService(id)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error get order', res)
  }
}) as RequestHandler

export const allOrders = (async (req: Request, res: Response) => {
  try {
    const data = await allOrderService()
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error get all orders', res)
  }
}) as RequestHandler

export const createOrder = (async ({ body }: Request, res: Response) => {
  try {
    const data = await createOrderService(body)
    res.status(201).json(data)
  } catch (err) {
    errorResponse(err, 'error create order', res)
  }
}) as RequestHandler

export const updateOrder = (async ({ body, params }: Request, res: Response) => {
  try {
    const { id } = params
    const data = await updateOrderService(id, body)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error update Order', res)
  }
}) as RequestHandler

export const deleteOrder = (async ({ params }: Request, res: Response) => {
  try {
    const data = await deleteOrderService(params.id)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error delete order', res)
  }
}) as RequestHandler
