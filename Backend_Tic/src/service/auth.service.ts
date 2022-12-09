import { errorHandler, loginAuth, userRequest } from '../types/models.types'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { userModel } from '../model/user.model'

export const registerService = async (data: userRequest): Promise<string | undefined> => {
  const { password } = data

  /* Encrypting password */
  const salt = await bcrypt.genSalt()
  const passwordHashed = await bcrypt.hash(password, salt)

  /* registry new User model */
  await userModel.create({ ...data, password: passwordHashed })
  return 'Register success'
}

export const loginService = async (user: string, pass: string): Promise<loginAuth | errorHandler> => {
  const response = await userModel.findOne({ username: user })
  if (response === null) return { error: 'User not exists' }

  const { username, firstName, lastName, balance, email, address, phone, picturePath, orders, password, _id, admin } = response

  const isMatch = await bcrypt.compare(pass, password)
  if (!isMatch) { return { error: 'Credentials incorrect' } }

  const SECRET = process.env.SECRET as string
  const token = jwt.sign({ id: _id, admin }, SECRET, { expiresIn: '1h' })

  return { token, data: { _id, username, firstName, lastName, balance, email, address, phone, picturePath, admin, orders } }
}
