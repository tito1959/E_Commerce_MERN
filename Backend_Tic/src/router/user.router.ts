import { Router } from 'express'
import { allUsers, deleteUser, uniqueUser, updateUser } from '../Controller/user.controller'
import { verifyTokenAdmin } from '../Middleware/auth.middleware'

export const userRouter = Router()

/* get all users only admin */
userRouter.get('/', verifyTokenAdmin, allUsers)

/* get one user, only admin */
/* must create one middleware to handle request */
userRouter.get('/:id', uniqueUser)

/* update user with id, only user owner and admin */
userRouter.put('/:id', updateUser)

/* delete user, only owner and admin */
userRouter.delete('/:id', deleteUser)
