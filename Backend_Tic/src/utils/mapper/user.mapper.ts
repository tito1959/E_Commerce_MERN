import { User, usersInfo } from '../../types/models.types'

export const mappedUsers = (element: User): usersInfo => {
  const data = {
    id: element._id,
    username: element.username,
    firstName: element.firstName,
    lastName: element.lastName,
    balance: element.balance,
    email: element.email,
    address: element.address,
    phone: element.phone,
    picturePath: element.picturePath,
    admin: element.admin,
    createdAt: element.createdAt
  }
  return data
}
