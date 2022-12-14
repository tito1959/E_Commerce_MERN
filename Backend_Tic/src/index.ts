import express from 'express'
import 'dotenv/config'
import './Config/connection'
import cors from 'cors'
import bodyParser from 'body-parser'
import { authRouter } from './Router/auth.router'
import { userRouter } from './Router/user.router'
import { productRouter } from './Router/product.router'
import { cartRouter } from './Router/cart.router'

const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json({ limit: '30mb' }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))

/* === Endpoints === */
app.get('/', (_req, res) => { res.status(200).json('Hello world :D') })

app.use('/auth', authRouter)
app.use('/api/users', userRouter)
app.use('/api/products', productRouter)
app.use('/api/cart', cartRouter)
// app.use('/api/orders')

/* === server === */
const PORT = process.env.PORT as string

app.listen(PORT, () => {
  console.log(`Server running on: http://localhost:${PORT}/`)
})
