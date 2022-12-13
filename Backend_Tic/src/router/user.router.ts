import { Router } from 'express'
import { allUsers, deleteUser, uniqueUser, updateUser } from '../Controller/user.controller'

export const userRouter = Router()

/* get all users only admin */
userRouter.get('/', allUsers)

/* get one user, only admin */
userRouter.get('/:id', uniqueUser)

/* update user with id, only user owner and admin */
userRouter.put('/:id', updateUser)

/* delete user, only owner and admin */
userRouter.delete('/:id', deleteUser)
