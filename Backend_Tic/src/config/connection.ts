import mongoose from 'mongoose'

const URL_MONGO = process.env.URL_MONGO as string

// connection, connect devuelve una promesa.
mongoose.connect(URL_MONGO)
  .then(() => console.log('Database Connected'))
  .catch(err => console.error(err))
