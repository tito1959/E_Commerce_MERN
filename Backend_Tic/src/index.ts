import bodyParser from 'body-parser'
import cors from 'cors'
import 'dotenv/config'
import express from 'express'
import helmet from 'helmet'
import path from 'path'
import './config/connection'
import { authRouter } from './router/auth.router'
import { categoryRouter } from './router/category.router'
import { routerUser } from './router/user.router'

/* Configs */
const app = express()
app.use(express.json())
app.use(helmet())
app.use(cors())

app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }))
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use('/assets', express.static(path.join(__dirname, 'public/assets')))
console.log(__dirname)

/* endpoints */
app.use('/auth', authRouter)
app.use('/api/users', routerUser)
app.use('/api/category', categoryRouter)

/* server runner */
const PORT = process.env.PORT as string
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))
