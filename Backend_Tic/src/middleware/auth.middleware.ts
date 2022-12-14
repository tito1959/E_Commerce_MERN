import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload } from 'jsonwebtoken'

export const verifyToken = (req: Request, res: Response, next: NextFunction): void => {
  try {
    tokenValidator(req)
    // console.log({ type: typeof verified, payload: verified })
    next()
  } catch (err: unknown) {
    if (err instanceof Error) res.status(400).json({ error: err.message })
  }
}

export const verifyTokenAdmin = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const verified = tokenValidator(req)
    if (Object.entries(verified)[1].includes(false)) { res.status(400).json({ error: 'missing privileges' }) } else {
      next()
    }
  } catch (err: unknown) {
    if (err instanceof Error) res.status(400).json({ error: err.message })
  }
}

const tokenValidator = (req: Request): string | JwtPayload => {
  let token = req.headers.authorization
  const secret = process.env.SECRET as string

  if (token === undefined) throw new Error('Access denied')

  if (token.toLowerCase().startsWith('bearer')) {
    token = token.slice(7)
  }

  const verified = jwt.verify(token, secret)
  return verified
}
