import { NextFunction, Request, Response } from 'express'
import { checkToken } from '../util/jwtHandle'

export const checkJwt = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authorization = req.headers.authorization
    let token = ''

    if (authorization !== undefined) {
      if (authorization?.toLowerCase().startsWith('bearer')) {
        token = authorization.substring(7)
      }
    }

    const decodedToken = checkToken(token)

    if (decodedToken === undefined || decodedToken === '') {
      res.status(401).json({ error: 'token is missing or invalid' })
    } else {
      console.log({ decodedToken })
      next()
    }
  } catch (err) {
    console.log(err)
    res.status(401).json({ error: 'Session not authorized' })
  }
}
