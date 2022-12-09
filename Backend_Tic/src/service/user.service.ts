import { userModel } from '../model/user.model'
import { errorHandler, usersInfo } from '../types/models.types'
import { mappedUsers } from '../utils/mapper/user.mapper'

export const getUsersService = async (): Promise<usersInfo[] | errorHandler> => {
  const data = await userModel.find({})
  if (data === null) { return { error: 'Data not founded' } }

  const mappedResponse = data.map(el => (
    mappedUsers(el)
  ))

  return mappedResponse
}
