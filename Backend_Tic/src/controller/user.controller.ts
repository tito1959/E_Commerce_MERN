import { Request, Response } from 'express'
import { getUsersService } from '../service/user.service'

export const getUsers = (_req: Request, res: Response): void => {
  getUsersService()
    .then((data) => {
      res.status(200).json(data)
    })
    .catch((err) => {
      if (err instanceof Error) { res.status(400).json({ error: `Error_get_users: ${err.message}` }) }
    })
}
