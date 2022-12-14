import { JwtPayload } from 'jsonwebtoken'

export interface dataJwt extends JwtPayload {
  id: string
}
