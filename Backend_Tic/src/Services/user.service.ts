import { userModel } from '../Model/user.model'
import { userNotId, userNotPass } from '../Types/user.type'
import { encryptPass } from '../utils/auth/bcryptHandler'
import { userMappedModel } from '../utils/mapper/auth.mapper'

export const allUserService = async (): Promise<userNotPass[]> => {
  const data = await userModel.find({})
  const dataMapped = data.map(el => userMappedModel(el))
  return dataMapped
}

export const oneUserService = async (id: string): Promise<userNotPass | string> => {
  const data = await userModel.findById(id)
  if (data === null) { return 'data not found' }
  return userMappedModel(data._doc)
}

export const updateUserService = async (id: string, data: userNotId): Promise<userNotPass | string> => {
  /* TODO: si el usuario desea actualizar su contraseña debera confirmarse desde el body y la bd */

  if (data.password !== null) {
    const encrypted = encryptPass(data.password)

    const dataRes = await userModel.findByIdAndUpdate(id, { ...data, password: encrypted }, { new: true })
    if (dataRes === null) { return 'data not found' }
    return userMappedModel(dataRes._doc)
  }

  const dataRes = await userModel.findByIdAndUpdate(id, data, { new: true })
  if (dataRes === null) { return 'data not found' }
  return userMappedModel(dataRes._doc)
}

export const deleteUserService = async (id: string): Promise<userNotPass | string> => {
  const data = await userModel.findByIdAndDelete(id)
  if (data === null) { return 'data not found' }
  return userMappedModel(data._doc)
}
