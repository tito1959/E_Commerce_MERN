import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { dbConnect } from './config/mongo'
import { routerProduct } from './routes/product.router'
import { routerCategory } from './routes/category.router'

const app = express()
app.use(cors())
app.use(express.json())
dbConnect()

app.use('/api/products', routerProduct)
app.use('/api/categories', routerCategory)

const PORT = process.env.PORT as string
app.listen(PORT, () => console.info(`Server running on port: ${PORT}`))
