import { Request, RequestHandler, Response } from 'express'
import { allUserService, deleteUserService, oneUserService, updateUserService } from '../Services/user.service'
import { errorResponse } from '../utils/error/erroResponseHanlder'

export const allUsers = (async (_req: Request, res: Response) => {
  try {
    const data = await allUserService()
    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error get all users', res)
  }
}) as RequestHandler

export const uniqueUser = (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await oneUserService(id)

    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error get unique user', res)
  }
}) as RequestHandler

export const updateUser = (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await updateUserService(id, req.body)

    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error update user', res)
  }
}) as RequestHandler

export const deleteUser = (async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const data = await deleteUserService(id)

    res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'error delte user', res)
  }
}) as RequestHandler
