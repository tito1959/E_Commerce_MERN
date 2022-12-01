import 'dotenv/config'
import { connect } from 'mongoose'

const NODE_ENV = process.env.URL_MONGO as string

export const dbConnect = (): void => {
  connect(NODE_ENV)
    .then((data) => console.info('Database Connected...'))
    .catch((err: Error) => console.log({ error: `${err.message}` }))
}
