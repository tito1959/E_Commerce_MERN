import { userModel } from '../Model/user.model'
import { errorHandler } from '../Types/error.type'
import { userNotId } from '../Types/user.type'
import { encryptPass, verifyPass } from '../utils/auth/bcryptHandler'
import { authJoin } from '../utils/auth/JwtAtuh'

export const loginService = async (user: string, pass: string): Promise<any | errorHandler> => {
  const response = await userModel.findOne({ username: user })
  if (response === null) return { error: 'User not exists' }

  const isMatch = await verifyPass(pass, response.password)
  // const isMatch = (pass === response.password)
  if (!isMatch) { return { error: 'Credentials incorrect' } }

  const token = authJoin(response._id, response.admin) // firma del token

  // retorna el token y el user info sin password
  const { password, ...data } = response._doc
  return { token, data }
}

export const registerService = async (data: userNotId): Promise<Object | errorHandler> => {
  const encrypted = await encryptPass(data.password)
  await userModel.create({ ...data, password: encrypted })
  return { succes: 'User has been registred' }
}
