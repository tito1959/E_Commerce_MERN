import { Response } from 'express'

export const errorResponse = (err: any, message: string, res: Response): void => {
  if (err instanceof Error) {
    res.status(500).json({
      reason: message,
      trace: err.message
    })
  }
}
