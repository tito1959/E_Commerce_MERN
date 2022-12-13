import { Request, RequestHandler, Response } from 'express'
import { loginService, registerService } from '../Services/auth.service'
import { errorResponse } from '../utils/error/erroResponseHanlder'
import { userMapped } from '../utils/mapper/auth.mapper'

export const login = (async ({ body }: Request, res: Response) => {
  try {
    const { username, password } = body
    const data = await loginService(username, password);

    (Object.keys(data).includes('error'))
      ? res.status(401).json(data)
      : res.status(200).json(data)
  } catch (err) {
    errorResponse(err, 'Error login', res)
  }
}) as RequestHandler

export const register = (async ({ body }: Request, res: Response) => {
  try {
    const dataMapped = userMapped(body)
    const response = await registerService(dataMapped)
    res.status(201).send(response)
  } catch (err) {
    errorResponse(err, 'Error register', res)
  }
}) as RequestHandler
