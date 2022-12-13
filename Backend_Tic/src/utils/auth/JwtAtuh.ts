import 'dotenv/config'
import jwt from 'jsonwebtoken'

export const authJoin = (id: string, admin: boolean): string => {
  const SECRET = process.env.SECRET as string
  return jwt.sign({ id, admin }, SECRET, { expiresIn: '7d' })
}
