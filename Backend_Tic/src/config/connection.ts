import mongoose from 'mongoose'

const URL_MONGO = process.env.URL_MONGO as string

// connection, connect devuelve una promesa.
mongoose.set('strictQuery', true)
mongoose.set('strictPopulate', true)
mongoose.connect(URL_MONGO)
  .then(() => console.log('Database Connected'))
  .catch(err => console.error(err))
