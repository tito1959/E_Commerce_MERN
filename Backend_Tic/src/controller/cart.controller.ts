import { Request, RequestHandler, Response } from 'express'
import { errorResponse } from '../utils/error/erroResponseHanlder'
import { createCartService, deleteCartService, getCartService, updateCartService } from '../Services/cart.service'
import { tokenDecoder } from '../utils/auth/tokenDecoder'
import { mappedCart } from '../utils/mapper/cart.mapper'

export const getCart = (async (req: Request, res: Response) => {
  try {
    const decodedToken = tokenDecoder(req.headers.authorization)
    const data = await getCartService(decodedToken.id)

    res.status(200).json({ test: data, payload: decodedToken })
  } catch (err) {
    errorResponse(err, 'error get cart', res)
  }
}) as RequestHandler

export const createCart = (async (req: Request, res: Response) => {
  try {
    const dataMapped = mappedCart(req.body)
    const data = await createCartService(dataMapped)

    res.status(201).json(data)
  } catch (err) {
    errorResponse(err, 'error create cart', res)
  }
}) as RequestHandler

export const updateCart = (async (req: Request, res: Response) => {
  try {
    const data = await updateCartService(req.params.id, req.body)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error update cart', res)
  }
}) as RequestHandler

export const deleteCart = (async (req: Request, res: Response) => {
  try {
    const data = await deleteCartService(req.params.id)
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error delete cart', res)
  }
}) as RequestHandler
