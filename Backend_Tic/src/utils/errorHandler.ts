import { Response } from 'express'

export const errorHandleHttp = (res: Response, error: string, errorRaw?: any): void => {
  res.status(406).json({ error, message: errorRaw.message })
  console.log(errorRaw)
}
