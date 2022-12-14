import { dataJwt } from '../../Types/auth.type'
import jwt from 'jsonwebtoken'

export const tokenDecoder = (authorization: any): dataJwt => {
  if (authorization === undefined) throw new Error('Error token not is present')

  const token = authorization.split(' ')[1]
  const decodedToken = jwt.decode(token) as dataJwt
  if (decodedToken === null) throw new Error('Error token not is present')

  return decodedToken
}
