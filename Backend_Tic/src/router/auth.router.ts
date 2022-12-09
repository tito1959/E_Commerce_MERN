import { Router } from 'express'
import { login, registerUser } from '../controller/auth.controller'

export const authRouter = Router()

authRouter.post('/register', registerUser)
authRouter.post('/login', login)
