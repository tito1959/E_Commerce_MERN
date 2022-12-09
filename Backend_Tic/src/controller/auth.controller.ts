import { Request, Response } from 'express'
import { loginService, registerService } from '../service/auth.service'
import { validUser } from '../utils/mapper/auth.mapper'

export const registerUser = (req: Request, res: Response): void => {
  const mappedUser = validUser(req)

  registerService(mappedUser)
    .then((data) => res.status(200).json(data))
    .catch((err) => {
      console.log(err)
      if (err instanceof Error) res.status(400).json({ error: err.message, message: 'Error_register_user' })
    })
}

export const login = (req: Request, res: Response): void => {
  const { username, password } = req.body

  loginService(username, password)
    .then((data) => {
      (Object.keys(data).includes('error'))
        ? res.status(400).json(data).end()
        : res.status(200).json(data).end()
    })
    .catch((err) => {
      console.log(err)
      if (err instanceof Error) res.status(400).json({ err: err.message, message: 'Error_login_user' })
    })
}
